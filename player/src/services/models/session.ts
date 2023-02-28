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
  bookmarks: tProp(
    types.array(types.model<Bookmark>(() => Bookmark)),
    () => []
  ).withSetter(),
  selectedVideoRef: prop<Ref<Video> | null>(),
  showBookmarksPanel: tProp(types.boolean, true),
  showReviewVideoPanel: tProp(types.boolean, true),
  videos: tProp(types.array(types.model<Video>(() => Video)), () => []),
}) {
  @modelAction
  update(values: FormikValues) {
    consola.info(`Updating session with: ${JSON.stringify(values)}`);
    this.setName(values.name);
  }

  @modelAction
  delete() {
    consola.info(`Removing session: ${this.name}`);
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
    consola.info(`Selecting video: ${video.name}`);

    if (!this.videos.includes(video))
      throw new RecordNotFound(
        "Tried to select video but it did not belong to this session"
      );

    this.selectedVideoRef = videoRef(video);
  }

  /**
   * Adds a bookmark to this session.
   * @param bookmark The bookmark to add
   */
  @modelAction
  addBookmark(bookmark: Bookmark) {
    consola.info(`Adding bookmark: ${bookmark.timestamp}`);

    this.bookmarks.push(bookmark);
  }

  /**
   * Removes a bookmark from this session
   * @param bookmark The bookmark to remove
   */
  @modelAction
  removeBookmark(bookmark: Bookmark) {
    consola.info(`Removing bookmark: ${bookmark.timestamp}`);

    this.setBookmarks(
      this.bookmarks.filter((innerBookmark) => {
        return innerBookmark.id !== bookmark.id;
      })
    );
  }

  @modelAction
  toggleReviewVideoPanel() {
    consola.info(`Toggle video panel to: ${!this.showReviewVideoPanel}`);
    this.showReviewVideoPanel = !this.showReviewVideoPanel;
  }

  @modelAction
  toggleBookmarksPanel() {
    consola.info(`Toggle bookmarks panel to: ${!this.showBookmarksPanel}`);
    this.showBookmarksPanel = !this.showBookmarksPanel;
  }

  @computed
  get root() {
    return getRoot(this);
  }

  /**
   * Returns the value of the shortest video offset in the session.
   */
  @computed
  get shortestNormalisedOffset() {
    return this.videos.reduce((acc, video) => {
      return video.offset < acc ? video.offset : acc;
    }, Infinity);
  }

  @computed
  get largestNormalisedOffset() {
    return this.videos.reduce((acc, video) => {
      return video.normalisedOffset > acc ? video.normalisedOffset : acc;
    }, 0);
  }

  /**
   * Returns the current time for the entire "session".
   */
  @computed
  get currentTime() {
    if (this.hasVideos === false) {
      return null;
    }

    const video = this.videos.find((video) => {
      return video.beginsAt === 0;
    });

    if (video === undefined) {
      return null;
    }

    return video.currentTimeInSession;
  }

  @computed
  get selectedVideo() {
    return this.selectedVideoRef ? this.selectedVideoRef.current : null;
  }

  @computed
  get activeBookmark() {
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
  get sortedBookmarks() {
    return [...this.bookmarks].sort((a, b) => {
      return a.timestamp - b.timestamp;
    });
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
        return video.normalisedDuration;
      }

      if (video.normalisedDuration === null) {
        return acc;
      }

      if (video.normalisedDuration > acc) {
        return video.normalisedDuration;
      }

      return acc;
    }, null);
  }

  getVideoById(id: string) {
    return this.videos.find((video) => video.id === id);
  }
}
