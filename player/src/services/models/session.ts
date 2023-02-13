import { computed } from "mobx";
import consola from "consola";

import {
  model,
  modelAction,
  Model,
  types,
  tProp,
  idProp,
  prop,
  Ref,
} from "mobx-keystone";

import { RecordNotFound } from "services/errors";

import Video from "./video";
import Bookmark from "./bookmark";
import { videoRef, bookmarkRef } from "./references";

@model("VodonPlayer/Session")
export default class Session extends Model({
  id: idProp,
  name: tProp(types.string),
  createdAt: tProp(types.number, Date.now()),
  videos: tProp(types.array(types.model<Video>(() => Video)), () => []),
  selectedVideoRef: prop<Ref<Video> | null>(),
  selectedBookmarkRef: prop<Ref<Bookmark> | null>(),
  showReviewVideoPanel: tProp(types.boolean, true),
  showBookmarksPanel: tProp(types.boolean, true),
}) {
  @modelAction
  setName(name: string) {
    this.name = name;
  }

  @modelAction
  addVideo(video: Video) {
    return this.videos.push(video);
  }

  @modelAction
  removeVideo(video: Video) {
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

    this.selectedBookmarkRef = bookmarkRef(bookmark);
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
  get shortestVideoOffset() {
    return this.videos.reduce((acc, video) => {
      if (video.offset === null) {
        return acc;
      }

      return video.offset < acc ? video.offset : acc;
    }, Infinity);
  }

  @computed
  get selectedVideo() {
    return this.selectedVideoRef ? this.selectedVideoRef.current : null;
  }

  @computed
  get selectedBookmark() {
    return this.selectedBookmarkRef ? this.selectedBookmarkRef.current : null;
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

  getVideoById(id: string) {
    return this.videos.find((video) => video.id === id);
  }
}
