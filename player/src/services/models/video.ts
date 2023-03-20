import { computed, observable, reaction } from "mobx";
import { InvalidVideo } from "services/errors";
import mime from "mime";
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
import { safeFileName } from "services/opfs";

import { buildVideoElements } from "services/videos";
import fileHandles from "services/file_handles";

import Session from "services/models/session";
import VideoFrame from "services/models/video_frame";

@model("VodonPlayer/Video")
export default class Video extends Model({
  id: idProp,

  // (usually) the name of the player in the video. Defaults to the filename.
  name: tProp(types.string).withSetter(),

  createdAt: tProp(types.number, Date.now()),

  // The URL of where this video exists
  url: tProp(types.maybeNull(types.string)).withSetter(),

  // How far through the copy process we are
  copyToStorageProgress: tProp(
    types.maybeNull(types.number),
    null
  ).withSetter(),

  // Have the video element been created for this video? The creation of these
  // elements is performed when we've attached the video to the root store.
  // TODO: Could deprecate this and watch the attributes directly
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
  videoData: tProp(types.frozen(types.unchecked<any>())).withSetter(),

  // Is the setup video currently being hovered over and showing its controls?
  // we track this here because we want to show the controls as active after
  // being added.
  // NOTE: We don't set this hover by default anymore, maybe this can be
  // removed and the state management returned to the local component?
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

  // The current frame used to sync the video
  videoSyncFrame: tProp(types.maybeNull(types.model(VideoFrame))).withSetter(),

  // Has the local file gone missing? Used to show special UI to replace the
  // video file.
  fileMissing: tProp(types.boolean, false).withSetter(),
}) {
  // Implements the "Storable" contract
  // TODO: How will this work wrt online files and OPFS?
  // fileSource: FileSystemFileHandle | null = null;
  // fileHandlesTable = "videoFileHandles";

  // Video elements used to display video in the UI
  setupVideoEl: HTMLVideoElement | null = null;
  reviewVideoEl: HTMLVideoElement | null = null;

  // What state is the local file system access handle in?
  @observable
  localFileHandlePermission: PermissionState | null = null;

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
    // TODO: Enable this once we've figured out cloud storage
    /*
    (async () => {
      if (this.url !== null) {
        this.setupVideoEl = await buildSetupElement(this, this.url);
        this.reviewVideoEl = await buildReviewElement(this, this.url);
        this.setVideoElementsCreated(true);
      }
    })();
    */

    // Start observing the OPFS video storage file handle...
    // TODO: Enable this once OPFS figured out
    /*
    const videoFileHandleOPFSObservable = liveQuery(() =>
      fileHandles.table(this.fileHandlesTable).get({ id: this.id })
    );
    */

    // When we encounter elements in the OPFS storage, we're ready to build the
    // video HTML elements. These will either be present on boot, or present
    // after we're stored a record (see the video/assets file).
    // TODO: Enable this once OPFS figured out
    /*
    const videoFileHandleOPFSObservableDisposer =
      videoFileHandleOPFSObservable.subscribe({
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
    */

    // Start observing the local video storage file handle...
    const videoFileHandleLocalObservable = liveQuery(() =>
      fileHandles.table("videoFileHandlesLocal").get({ id: this.id })
    );

    // On the file handle becoming available in the store, check the
    // permissions on it.
    const videoFileHandleLocalObservableDisposer =
      videoFileHandleLocalObservable.subscribe({
        next: async (result) => {
          if (result === undefined) {
            return;
          }

          const fileHandle = await result.fileHandle;

          const readPermission = await fileHandle.queryPermission({
            mode: "read",
          });

          this.setLocalFileHandlePermission(readPermission);
        },
        error: (error) => console.error(error),
      });

    // Track the state of the permissions for the video and when readable,
    // activate the "build" of the videos.
    const reactionDisposer = reaction(
      () => this.localFileHandlePermission,
      async (permission: PermissionState | null) => {
        if (permission !== "granted") {
          return;
        }

        buildVideoElements(this);
      },
      {
        fireImmediately: true,
      }
    );

    return () => {
      // videoFileHandleOPFSObservableDisposer.unsubscribe();
      videoFileHandleLocalObservableDisposer.unsubscribe();
      reactionDisposer();
    };
  }

  @modelAction
  delete() {
    return this.session.removeVideo(this);
  }

  @modelAction
  setLocalFileHandlePermission(permission: PermissionState) {
    return (this.localFileHandlePermission = permission);
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

  /**
   * All bookmark pages belonging to this video.
   */
  @computed
  get bookmarkPages() {
    return this.session.bookmarkPages.filter((bookmarkPage) => {
      return bookmarkPage.video.id === this.id;
    });
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

    return mime.getExtension(this.type);
  }

  /**
   * The path of this file when stored in the OPFS or online in cloud storage
   * somewhere
   */
  @computed
  get filePath() {
    if (this.mimeExtension === null) {
      throw new InvalidVideo(
        "Cannot determine video file path without a mime type"
      );
    }

    return `videos/${safeFileName(this.id)}/video.${this.mimeExtension}`;
  }

  /**
   * Is this video in a session time where it has "started". Started does not
   * mean playing, just that it's now in a valid session time for it to be
   * visible on the screen.
   */
  @computed
  get beforePlayableRange() {
    if (this.session === null || this.session.currentTime === null) {
      return null;
    }

    return this.session.currentTime < this.beginsAt;
  }

  /**
   * Similar to the started time, but the opposite, is the video past the time
   * in the session where it can be displayed.
   */
  @computed
  get afterPlayableRange() {
    if (this.session === null || this.session.currentTime === null) {
      return null;
    }

    return this.session.currentTime > this.finishesAt;
  }
}
