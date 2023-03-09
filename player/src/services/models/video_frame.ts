/**
 * Represents an individual frame of a video. Mostly used to comply with the
 * interface for saving files in the OPFS / remotely.
 */

import { safeFileName } from "services/opfs";
import fileHandles from "services/file_handles";
import { liveQuery } from "dexie";

import { idProp, model, Model, tProp, types } from "mobx-keystone";

import { computed } from "mobx";

import type { Storable } from "./types";

@model("VodonPlayer/VideoFrame")
export default class VideoFrame
  extends Model({
    id: idProp,
    createdAt: tProp(types.number, Date.now()),
  })
  implements Storable
{
  url: string | null = null;

  onAttachedToRootStore() {
    // Start observing the video storage file handle...
    const frameFileHandleObservable = liveQuery(() =>
      fileHandles.table("videoFrameFileHandles").get({ id: this.id })
    );

    // When we encounter elements in this storage, we're ready to build the
    // video HTML elements. These will either be present on boot, or present
    // after we're stored a record (see the video/assets file).
    const frameFileHandleObservableDisposer =
      frameFileHandleObservable.subscribe({
        next: async (result) => {
          if (result === undefined) {
            return;
          }

          const file = await result.fileHandle.getFile();
          const url = URL.createObjectURL(file);
          this.url = url;
        },
        error: (error) => console.error(error),
      });

    return () => {
      frameFileHandleObservableDisposer.unsubscribe();
    };
  }
  /**
   * Path for storage of the frame
   */
  @computed
  get filePath() {
    return `videoFrames/${safeFileName(this.id)}/frame.png`;
  }
}
