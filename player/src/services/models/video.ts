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
import { liveQuery } from "dexie";

import { buildElement as buildSetupElement } from "services/videos/setup_videos";
import { buildElement as buildReviewElement } from "services/videos/review_videos";
import database from "services/database";

import Session from "./session";
import Bookmark from "./bookmark";

@model("VodonPlayer/Video")
export default class Video extends Model({
  id: idProp,

  // (usually) the name of the player in the video. Defaults to the filename.
  name: tProp(types.string).withSetter(),

  createdAt: tProp(types.number, Date.now()),

  // The URL of where this video exists
  url: tProp(types.maybeNull(types.string)),

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

  // Is the setup video currently being hovered over and showing its controls?
  // we track this here because we want to show the controls as active after
  // being added
  setupVideoHovered: tProp(types.boolean, false).withSetter(),

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

  // Seen bookmark ids (currently deprecated)
  seenBookmarkIds: tProp(types.array(types.string), []).withSetter(),
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

    // If URLs exist on the videos, build from them. Later we'll check for
    // local file handles and build from them if they exist
    (async () => {
      if (this.url !== null) {
        this.setupVideoEl = await buildSetupElement(this, this.url);
        this.reviewVideoEl = await buildReviewElement(this, this.url);
        this.setVideoElementsCreated(true);
      }
    })();

    // Start observing the storage file handle, when it's present we'll create
    // the required video elements.
    const storageVideoFileHandleObservable = liveQuery(() =>
      database.table("storageVideoFileHandles").get({ id: this.id })
    );

    const subscriptionDisposer = storageVideoFileHandleObservable.subscribe({
      next: async (result) => {
        if (result === undefined) {
          return;
        }

        const file = await result.fileHandle.getFile();
        const url = URL.createObjectURL(file);

        this.setupVideoEl = await buildSetupElement(this, url);
        this.reviewVideoEl = await buildReviewElement(this, url);

        // Mark that all setup videos have now been created, this controls
        // further UI being created
        this.setVideoElementsCreated(true);
      },
      error: (error) => console.error(error),
    });

    return () => {
      subscriptionDisposer.unsubscribe();
    };
  }

  @modelAction
  delete() {
    return this.session.removeVideo(this);
  }

  @modelAction
  addSeenBookmarkId(id: string) {
    this.seenBookmarkIds.push(id);
  }

  @modelAction
  resetSeenBookmarkIdsUntil(time: number) {
    /*
    this.bookmarks = this.bookmarks.filter((innerBookmark) => {
      return innerBookmark.id !== bookmark.id;
    });
    */
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

  /**
   * This is the normalised session offset. If we have three videos in the
   * session with the following offsets:
   *
   * 1. 10 seconds
   * 2. 5 seconds
   * 3. 15 seconds
   *
   * The calculatedOffset is:
   *
   * 1. 5 seconds
   * 2. 0 seconds
   * 3. 10 seconds
   *
   * TODO: Rename this to "normalisedOffset" instead.
   */
  @computed
  get normalisedOffset() {
    return this.offset - this.session.shortestNormalisedOffset;
  }

  /**
   * This is the current videos time in the "global" session time. Useful for
   * calculations like bookmark times.
   */
  @computed
  get currentTimeInSession() {
    return this.currentTime + this.beginsAt;
  }

  /**
   * The time in the "global" session time that this video starts at.
   */
  @computed
  get beginsAt() {
    return this.session.largestNormalisedOffset - this.normalisedOffset;
  }

  get finishesAt() {
    return this.beginsAt + this.duration;
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

  @computed
  get normalisedDuration() {
    if (this.normalisedOffset === null) {
      return null;
    }

    return this.duration + this.normalisedOffset;
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
   * The path of where this file is stored (OPFS + cloud)
   */
  @computed
  get storageDirectory() {
    return `${this.session.id}`;
  }

  /**
   * The filename of this video
   */
  @computed
  get storageFilename() {
    return `${this.id}`;
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

  seenBookmark(id: string) {
    return this.seenBookmarkIds.includes(id);
  }
}
