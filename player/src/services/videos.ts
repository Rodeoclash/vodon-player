import { MissingLocalFileHandle } from "services/errors";
import { copyToStorage, removeFromStorage } from "services/video_storage";
import database from "services/database";
import { readMediaData } from "./videos/mediainfo";
import { InvalidVideo } from "services/errors";

import Session from "services/models/session";
import Video from "services/models/video";

/**
 * Creates a video under a session, also responsible for storing the local file handle to the video.
 * @param session
 * @param localFileHandle
 * @returns
 */
export const createVideoInSession = async (
  session: Session,
  fileHandle: FileSystemFileHandle
): Promise<Video> => {
  const file = await fileHandle.getFile();

  const video = new Video({
    name: file.name,
    type: file.type,
  });

  // Join the video to the session it was being created under
  session.addVideo(video);

  // Store a reference to this videos local file handle in the persistence database
  await database.table("localVideoFileHandles").put({
    id: video.id,
    fileHandle,
  });

  // Trigger storing the file
  await storeFile(video);

  // Parse video information and store it
  const result = await readMediaData(file);
  const videoTrack = result.media.track.find(
    (track) => track["@type"] === "Video"
  ) as any;

  if (videoTrack === undefined) {
    throw new InvalidVideo(
      "Could not find a video track in the supplied video"
    );
  }

  video.setHeight(parseInt(videoTrack.Height));
  video.setWidth(parseInt(videoTrack.Width));
  video.setFrameRate(parseFloat(videoTrack.FrameRate));
  video.setDuration(parseFloat(videoTrack.Duration));

  return video;
};

export const removeVideo = async (video: Video) => {
  // Remove from OPFS
  removeFromStorage(video);

  // Remove local file handle (if it exists)
  await database.table("localVideoFileHandles").delete(video.id);

  // Remove storage file handle (if it exists)
  await database.table("storageVideoFileHandles").delete(video.id);

  // Remove from session
  video.getSession().removeVideo(video);
};

export const requestLocalFileHandlePermission = async (
  video: Video
): Promise<Video> => {
  const fileHandleRecord = await database.table("localVideoFileHandles").get({
    id: video.id,
  });

  if (fileHandleRecord === undefined) {
    throw new MissingLocalFileHandle(
      "Attempted to request permissions on videos file handle but it was not present"
    );
  }

  const fileHandle = fileHandleRecord.fileHandle;

  await fileHandle.requestPermission({
    mode: "read",
  });

  await database.table("localVideoFileHandles").put({
    id: video.id,
    fileHandle,
  });

  return video;
};

export const storeFile = async (video: Video): Promise<Video> => {
  const fileHandleRecord = await database.table("localVideoFileHandles").get({
    id: video.id,
  });

  if (fileHandleRecord === undefined) {
    throw new MissingLocalFileHandle(
      "Attempted to use local file handle but it was not present"
    );
  }

  const fileHandle = fileHandleRecord.fileHandle;

  if ((await fileHandle.queryPermission({ mode: "read" })) !== "granted") {
    throw new MissingLocalFileHandle(
      "Attempting to copy file but it does not have permission granted"
    );
  }

  copyToStorage(fileHandleRecord.fileHandle, video);

  return video;
};

export const buildSetupElement = async (
  video: Video,
  fileHandle: FileSystemFileHandle
): Promise<HTMLVideoElement> => {
  const el = document.createElement("video");
  const file = await fileHandle.getFile();
  const url = URL.createObjectURL(file);

  el.volume = video.volume;

  el.addEventListener("play", async () => {
    video.setSetupVideoPlaying(true);
  });

  el.addEventListener("pause", async () => {
    video.setSetupVideoPlaying(false);
  });

  el.addEventListener("volumechange", async (event: Event) => {
    const target = event.target as HTMLVideoElement | null;
    if (target === null) {
      return;
    }

    video.setVolume(target.volume);
  });

  // Fired every time the frame in the video changes, used to automatically
  // sync the current time of the video into the store. This is used for things
  // like the video time counter and progress bar.
  const handleVideoFrame = (
    now: number,
    metadata: VideoFrameCallbackMetadata
  ) => {
    video.setOffset(metadata.mediaTime);
    el.requestVideoFrameCallback(handleVideoFrame);
  };

  el.requestVideoFrameCallback(handleVideoFrame);

  el.src = url;

  return el;
};
