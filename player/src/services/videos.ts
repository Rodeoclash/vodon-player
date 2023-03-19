import { frozen } from "mobx-keystone";
import {
  store as storeVideo,
  remove as removeVideo,
} from "services/videos/assets";
import { remove as removeVideoFrame } from "services/video_frames/assets";
import fileHandles from "services/file_handles";

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

  // Allows the video to conform to the storable interface so it can be save
  // into the OPFS if required.
  video.localFileHandlePermission = await fileHandle.queryPermission();

  // Join the video to the session it was being created under
  session.addVideo(video);

  // store a reference to the local file handle as well

  // Trigger the asset to be stored and provide feedback via the UI as it is
  // processed
  // await storeVideo(video, fileHandle);

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
