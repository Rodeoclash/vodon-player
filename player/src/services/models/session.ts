import { computed } from "mobx";
import consola from "consola";
import { stringToFilename } from "services/import_export";

import {
  model,
  modelAction,
  Model,
  types,
  tProp,
  idProp,
  prop,
  Ref,
  getRoot,
} from "mobx-keystone";

import { RecordNotFound } from "services/errors";

import Video from "./video";
import Bookmark from "./bookmark";

import { videoRef } from "./references";
import { FormikValues } from "formik";

type UpdateValues = {
  name: string;
};

@model("VodonPlayer/Session")
export default class Session extends Model({
  id: idProp,
  name: tProp(types.string).withSetter(),
  createdAt: tProp(types.number, Date.now()),
  videos: tProp(types.array(types.model<Video>(() => Video)), () => []),
  selectedVideoRef: prop<Ref<Video> | null>(),
  showReviewVideoPanel: tProp(types.boolean, true),
  showBookmarksPanel: tProp(types.boolean, true),
}) {
  @modelAction
  update(values: FormikValues) {
    consola.info(`Updating session with: ${JSON.stringify(values)}`);
    this.setName(values.name);
  }

  @modelAction
  delete() {
    this.root.removeSession(this);
  }

  @modelAction
  addVideo(video: Video) {
    consola.info(`Adding video to session: ${video.name}`);
    return this.videos.push(video);
  }

  @modelAction
  async removeVideo(video: Video) {
    consola.info(`Removing video from session: ${video.name}`);
    this.videos = this.videos.filter(
      (innerVideo) => innerVideo.id !== video.id
    );
  }

  /**
   * Selects this video in the session. Selecting the video means switching to
   * it in the main window.
   * @param video The video to be selected
   */
  @modelAction
  selectVideo(video: Video) {
    if (!this.videos.includes(video))
      throw new RecordNotFound(
        "Tried to select video but it did not belong to this session"
      );

    consola.info(`Selecting video: ${video.name}`);

    this.selectedVideoRef = videoRef(video);
  }

  /**
   * Selects a bookmark page in this session, will automatically change the
   * selected video as well. Useful for when we want to select a bookmark on
   * the timeline that belongs to a different video.
   *
   * @param bookmarkPage The bookmark page we want to select
   */
  @modelAction
  selectBookmark(bookmark: Bookmark) {
    if (!this.bookmarks.includes(bookmark))
      throw new RecordNotFound(
        "Tried to select bookmark but it did not belong to this session"
      );

    consola.info(`Selecting bookmark: ${bookmark.videoTimestamp}`);

    this.selectedVideoRef = videoRef(bookmark.video);

    if (
      this.selectedVideo !== null &&
      this.selectedVideo.reviewVideoEl !== null
    ) {
      this.selectedVideo.reviewVideoEl.currentTime = bookmark.videoTimestamp;
    }
  }

  @modelAction
  toggleReviewVideoPanel() {
    this.showReviewVideoPanel = !this.showReviewVideoPanel;
  }

  @modelAction
  toggleBookmarksPanel() {
    this.showBookmarksPanel = !this.showBookmarksPanel;
  }

  @computed
  get root() {
    return getRoot(this);
  }

  @computed
  get shortestVideoOffset() {
    return this.videos.reduce((acc, video) => {
      if (video.offset === null) {
        return acc;
      }

      return video.offset < acc ? video.offset : acc;
    }, Infinity);
  }

  @computed
  get largestCalculatedOffset() {
    return this.videos.reduce((acc, video) => {
      if (video.calculatedOffset === null) {
        return acc;
      }

      return video.calculatedOffset > acc ? video.calculatedOffset : acc;
    }, 0);
  }

  @computed
  get currentTime() {
    if (this.hasVideos === false) {
      return null;
    }

    const firstVideo = this.videos[0];

    if (firstVideo.calculatedOffset === null) {
      return null;
    }

    return (
      firstVideo.currentTime +
      this.largestCalculatedOffset -
      firstVideo.calculatedOffset
    );
  }

  @computed
  get selectedVideo() {
    return this.selectedVideoRef ? this.selectedVideoRef.current : null;
  }

  @computed
  get selectedBookmark() {
    return this.bookmarks.find((bookmark) => {
      return bookmark.active === true;
    });
  }

  @computed
  get videoCount() {
    return this.videos.length;
  }

  @computed
  get hasVideos() {
    return this.videoCount > 0;
  }

  @computed
  get bookmarks() {
    return this.videos.flatMap((video) => video.bookmarks);
  }

  @computed
  get bookmarkPages() {
    return this.bookmarks.flatMap((bookmark) => bookmark.bookmarkPages);
  }

  /**
   * The videos in the session as a map based on their indexed. Used for easy
   * lookups when switching by the number hotkeys.
   */
  @computed
  get indexedVideos(): { [index: number]: Video } {
    return this.videos.reduce((acc, video) => {
      return {
        ...acc,
        [video.index.toString()]: video,
      };
    }, {});
  }

  @computed
  get filename() {
    return stringToFilename(this.name);
  }

  /**
   * The full duration of videos in the session is equal to the video with the
   * longest duration + the offset of it.
   */
  @computed
  get duration() {
    return this.videos.reduce((acc: number | null, video) => {
      if (acc === null) {
        return video.calcualtedDuration;
      }

      if (video.calcualtedDuration === null) {
        return acc;
      }

      if (video.calcualtedDuration > acc) {
        return video.calcualtedDuration;
      }

      return acc;
    }, null);
  }

  getVideoById(id: string) {
    return this.videos.find((video) => video.id === id);
  }
}
