import { model, tProp, Model, types, idProp, findParent } from "mobx-keystone";
import { buildSetupElement } from "services/videos";
import { liveQuery } from "dexie";
import database from "services/database";

import Session from "./session";

@model("VodonPlayer/Video")
export default class Video extends Model({
  id: idProp,
  name: tProp(types.string),
  type: tProp(types.string),

  // Are we in progress with a copy to local storage?
  copyToStorageInProgress: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),

  // How far through the copy process we are
  copyToStorageProgress: tProp(
    types.maybeNull(types.number),
    null
  ).withSetter(),

  // Have the video element been created for this video?
  videoElementsCreated: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),

  // The duration of the video
  duration: tProp(types.maybeNull(types.number), null).withSetter(),

  // The offset of this video to bring it into alignment with the others in the
  // session
  offset: tProp(types.maybeNull(types.number), null).withSetter(),

  // Original width of the video
  width: tProp(types.maybeNull(types.number), null).withSetter(),

  // Original height of the video
  height: tProp(types.maybeNull(types.number), null).withSetter(),

  // Framerate of the video
  frameRate: tProp(types.maybeNull(types.number), null).withSetter(),

  // Is the setup video currently playing?
  setupVideoPlaying: tProp(types.maybeNull(types.boolean), null).withSetter(),

  // The current time of the setup video (used to show video progress bars
  // timers etc)
  setupVideoCurrentTime: tProp(
    types.maybeNull(types.number),
    null
  ).withSetter(),
}) {
  setupVideoEl: HTMLVideoElement | null = null;

  onAttachedToRootStore() {
    // We reset this back to false as the elements will have to be created
    // again from scratch
    this.setVideoElementsCreated(false);

    // Videos always start in a non playing state
    this.setSetupVideoPlaying(false);

    // Start observing the storage file handle, when it's present we'll create
    // the required video elements
    const storageVideoFileHandleObservable = liveQuery(() =>
      database.table("storageVideoFileHandles").get({ id: this.id })
    );

    storageVideoFileHandleObservable.subscribe({
      next: async (result) => {
        if (result === undefined) {
          return;
        }

        this.setupVideoEl = await buildSetupElement(this, result.fileHandle);
        // todo, build playerVideo element as well
        this.setVideoElementsCreated(true);
      },
      error: (error) => console.error(error),
    });
  }

  /**
   * Needs to have the slightly weird syntax here because the parent of the
   * video is the "array" object in the session, not the session itself.
   * @returns Session
   */
  getSession() {
    return findParent<Session>(this, (p) => p instanceof Session)!;
  }
}
