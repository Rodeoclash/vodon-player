/**
 * Used to track and store handles to video files selected by the user. This is
 * only required for video files that exist outside of the OPFS.
 *
 * For video files that have been copied to the OPFS, we just rely on the
 * internal id of the video object to find them.
 */

import { get as getValue, set as setValue } from "idb-keyval";
import Video from "./models/video";

const base = "local_video_file_handles";

export const setFileHandle = async (
  video: Video,
  handle: FileSystemFileHandle
) => {
  return await setValue(`${base}/${video.id}`, handle);
};

export const getFileHandle = async (video: Video) => {
  return await getValue(`${base}/${video.id}`);
};
