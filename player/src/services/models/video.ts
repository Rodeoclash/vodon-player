import { computed } from "mobx";
import mime from "mime-types";
import {
  findParent,
  idProp,
  model,
  Model,
  modelAction,
  tProp,
  types,
} from "mobx-keystone";
import { buildElement as buildSetupElement } from "services/videos/setup_videos";
import { buildElement as buildReviewElement } from "services/videos/review_videos";
import { liveQuery } from "dexie";
import database from "services/database";

import Session from "./session";
import Bookmark from "./bookmark";

@model("VodonPlayer/Video")
export default class Video extends Model({
  id: idProp,

  // The notes on the video
  bookmarks: tProp(
    types.array(types.model<Bookmark>(() => Bookmark)),
    () => []
  ),

  // (usually) the name of the player in the video. Defaults to the filename.
  name: tProp(types.string).withSetter(),

  createdAt: tProp(types.number, Date.now()),

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

  // Have the video element been created for this video? The creation of these
  // elements is performed when we've attached the video to the root store
  // TOOD: We may be able to remove this
  videoElementsCreated: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),

  // Mime type of the original video file
  type: tProp(types.maybeNull(types.string), null).withSetter(),

  // The time offset of this video to bring it into alignment with the others
  // in the session.
  offset: tProp(types.number, 0).withSetter(),

  // The current time of the review video
  currentTime: tProp(types.number, 0).withSetter(),

  // Data about the video returned from mediainfo.js, this is reached into
  // to collect data about the video file itself (framerate, height etc)
  videoData: tProp(types.frozen(types.unchecked<any>())),

  // Is the setup video currently playing?
  setupVideoPlaying: tProp(types.maybeNull(types.boolean), null).withSetter(),

  // Is the setup video currently seeking?
  setupVideoSeeking: tProp(types.maybeNull(types.boolean), null).withSetter(),

  // Is the review video currently playing?
  reviewVideoPlaying: tProp(types.maybeNull(types.boolean), null).withSetter(),

  // Is the review video currently seeking?
  reviewVideoSeeking: tProp(types.maybeNull(types.boolean), null).withSetter(),

  // Volume of the video
  volume: tProp(types.number, 0.5).withSetter(),
}) {
  setupVideoEl: HTMLVideoElement | null = null;
  reviewVideoEl: HTMLVideoElement | null = null;

  getRefId() {
    return this.id;
  }

  onAttachedToRootStore() {
    // We reset this back to false as the elements will have to be created
    // again from scratch
    this.setVideoElementsCreated(false);

    // Videos always start in a non playing state
    this.setSetupVideoPlaying(false);
    this.setReviewVideoPlaying(false);

    // Videos always start in a non seeking state
    this.setSetupVideoSeeking(false);
    this.setReviewVideoSeeking(false);

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
        this.reviewVideoEl = await buildReviewElement(this, result.fileHandle);

        // Mark that all setup videos have now been created, this controls
        // further UI being created
        this.setVideoElementsCreated(true);
      },
      error: (error) => console.error(error),
    });
  }

  @modelAction
  addBookmark(bookmark: Bookmark) {
    return this.bookmarks.push(bookmark);
  }

  /**
   * Removes a bookmark from this video by filtering it out.
   * @param bookmark The bookmark to remove
   * @returns
   */
  @modelAction
  removeBookmark(bookmark: Bookmark) {
    this.bookmarks = this.bookmarks.filter((innerBookmark) => {
      return innerBookmark.id !== bookmark.id;
    });
  }

  /**
   * Get this position of this video in the session, according to the other videos
   */
  @computed
  get index() {
    return this.session.videos.findIndex((video) => {
      return video.id === this.id;
    });
  }

  @computed
  get sortedBookmarks() {
    return [...this.bookmarks].sort((a, b) => {
      return a.videoTimestamp - b.videoTimestamp;
    });
  }

  @computed
  get calculatedOffset() {
    const session = this.session;

    if (this.offset === null || session.shortestVideoOffset === Infinity) {
      return null;
    }

    return this.offset - session.shortestVideoOffset;
  }

  @computed
  get frameLength() {
    if (this.frameRate === null) {
      return null;
    }

    return 1 / this.frameRate;
  }

  /**
   * Needs to have the slightly weird syntax here because the parent of the
   * video is the "array" object in the session, not the session itself.
   * @returns Session
   */
  @computed
  get session() {
    return findParent<Session>(this, (p) => p instanceof Session)!;
  }

  @computed
  get frameRate() {
    return this.videoData.data.FrameRate;
  }

  @computed
  get height() {
    return parseInt(this.videoData.data.Height, 10);
  }

  @computed
  get width() {
    return parseInt(this.videoData.data.Width, 10);
  }

  @computed
  get duration() {
    return parseFloat(this.videoData.data.Duration);
  }

  /**
   * File extension for this video based off the mime type it has.
   */
  @computed
  get mimeExtension() {
    if (this.type === null) {
      return null;
    }

    return mime.extension(this.type);
  }

  /**
   * The path of this file when stored in the OPFS or online in cloud storage
   * somewhere
   */
  @computed
  get storageDirectory() {
    return `${this.session.id}/${this.id}`;
  }

  /**
   * The path of this file when stored in the OPFS or online in cloud storage
   * somewhere
   */
  @computed
  get videoFileName() {
    if (this.mimeExtension === null) {
      return null;
    }

    return `video.${this.mimeExtension}`;
  }
}
