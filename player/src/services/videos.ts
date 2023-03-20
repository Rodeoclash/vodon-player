import { frozen } from "mobx-keystone";
import { remove as removeVideoFrame } from "services/video_frames/assets";
import fileHandles from "services/file_handles";
import { MissingLocalFileHandle } from "services/errors";
import { buildElement as buildSetupElement } from "services/videos/setup_videos";
import { buildElement as buildReviewElement } from "services/videos/review_videos";

import {
  readMediaDataFromFile,
  readMediaDataFromURL,
} from "./videos/mediainfo";

import { InvalidVideo } from "services/errors";
import { remove as removeBookmarkPage } from "services/bookmark_pages";

import Session from "services/models/session";
import Video from "services/models/video";
import { ResultObject } from "mediainfo.js/dist/types";

// Browser video is inaccurate on seeking, we accomodate an inaccuracy of the
// following amount when dealing with seeking.
export const VIDEO_FUDGE_FACTOR = 0.1;

export const pickerOpts = {
  types: [
    {
      description: "Videos",
      accept: {
        "video/*": [".mp4", ".webm", ".mkv"],
      },
    },
  ],
  excludeAcceptAllOption: true,
};

export const createRemoteVideoInSession = async (
  session: Session,
  url: string
) => {
  const { result, contentType } = await readMediaDataFromURL(url);
  const videoTrack = extractVideoTrack(result);

  const video = new Video({
    name: "url", // GET PARTIAL NAME FROM URL
    setupVideoHovered: true,
    type: contentType,
    url,
    videoData: frozen(videoTrack),
    videoSyncFrame: null,
  });

  session.addVideo(video);

  return video;
};

/**
 * Creates a video under a session, also responsible for storing the local
 * file handle to the video. This version creates from a local file stored on
 * the users computer.
 *
 * @param session
 * @param localFileHandle
 * @returns
 */
export const createLocalVideoInSession = async (
  session: Session,
  fileHandle: FileSystemFileHandle
): Promise<Video> => {
  const file = await fileHandle.getFile();
  const videoTrack = extractVideoTrack(await readMediaDataFromFile(file));

  const video = new Video({
    name: file.name,
    type: file.type,
    url: null,
    videoData: frozen(videoTrack),
    videoSyncFrame: null,
  });

  // Start tracking the file handle in local storage
  await fileHandles.table("videoFileHandlesLocal").put({
    id: video.id,
    fileHandle: fileHandle,
  });

  // Set the permission of the video (this will be `granted`)
  video.setLocalFileHandlePermission(await fileHandle.queryPermission());

  // Join the video to the session it was being created under
  session.addVideo(video);

  return video;
};

/**
 * Helper function for removing videos. Will first remove all the assets that
 * are related to the video then will remove the video itself.
 *
 * @param video The video to remove
 */
export const remove = async (video: Video) => {
  const results = video.bookmarkPages.map((bookmarkPage) => {
    return removeBookmarkPage(bookmarkPage);
  });
  await Promise.all(results);

  if (video.videoSyncFrame !== null) {
    await removeVideoFrame(video.videoSyncFrame);
  }

  // Reenable this one videos are stored in the OPFS again
  // await removeAsset(video);

  video.delete();
};

const extractVideoTrack = (result: ResultObject) => {
  const videoTrack = result.media.track.find(
    (track) => track["@type"] === "Video"
  ) as any;

  if (videoTrack === undefined) {
    throw new InvalidVideo(
      "Could not find a video track in the supplied video"
    );
  }

  return videoTrack;
};

export const screenshot = (
  videoEl: HTMLVideoElement,
  width: number,
  height: number
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Canvas context was null for some reason");
    }

    ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) {
        throw new Error("Could not convert to blob for some reason");
      }

      resolve(blob);
    }, "image/png");
  });
};

/**
 * This function is used to restore the read permissions on a video that has
 * a file handle in the store but is not currently granted permissions to
 * be read from.
 *
 * @param video The video to activate read permissions on.
 */
export const activate = async (video: Video) => {
  const result = await fileHandles
    .table("videoFileHandlesLocal")
    .get({ id: video.id });

  if (result === undefined) {
    throw new MissingLocalFileHandle(
      "Tried to restore permission on local file handle but it was not found"
    );
  }

  if (
    (await result.fileHandle.requestPermission({
      mode: "read",
    })) === "granted"
  ) {
    const readPermission = await result.fileHandle.queryPermission({
      mode: "read",
    });

    video.setLocalFileHandlePermission(readPermission);
  }
};

/**
 * Replaces a videos file handle, this gets called when a user has moved the
 * file and the player cannot find it.
 *
 * @param video The video to that will host the replacement file handle.
 */
export const replace = async (
  video: Video,
  fileHandle: FileSystemFileHandle
) => {
  const file = await fileHandle.getFile();
  const videoTrack = extractVideoTrack(await readMediaDataFromFile(file));

  // Update the video attributes from the newly set video
  video.setName(file.name);
  video.setType(file.type);
  video.setUrl(null);
  video.setVideoData(frozen(videoTrack));
  video.setVideoSyncFrame(null);

  // Start tracking the new file handle in local storage
  await fileHandles.table("videoFileHandlesLocal").put({
    id: video.id,
    fileHandle: fileHandle,
  });

  await buildVideoElements(video);

  // Now that the file has been replaced, set that it is no longer missing
  video.setFileMissing(false);

  // Set the permission of the video (this will be `granted`)
  video.setLocalFileHandlePermission(await fileHandle.queryPermission());

  return video;
};

/**
 * Builds the actual video dom elements onto the video model. Requires file
 * handles to be present in the local file_handle database to work.
 *
 * @param video The video to get the dom elements built onto.
 */
export const buildVideoElements = async (video: Video) => {
  const result = await fileHandles
    .table("videoFileHandlesLocal")
    .get({ id: video.id });

  if (result === undefined) {
    throw new InvalidVideo(
      "Video file handle should have been in local store but it wasn't"
    );
  }

  try {
    const file = await result.fileHandle.getFile();
    const url = URL.createObjectURL(file);

    // Finally, build the elements with this local URL
    video.setupVideoEl = await buildSetupElement(video, url);
    video.reviewVideoEl = await buildReviewElement(video, url);

    // TODO: Should change this to observers on the dom elemenets themselves.
    video.setVideoElementsCreated(true);
    // If the file has been removed, renamed etc
  } catch (e) {
    if (e instanceof DOMException && e.name === "NotFoundError") {
      video.setFileMissing(true);
    }
  }
};
