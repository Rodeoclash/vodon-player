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
  objectMap,
} from "mobx-keystone";

import { RecordNotFound } from "services/errors";

import Video from "./video";
import Bookmark from "./bookmark";

import { videoRef } from "./references";
import { FormikValues } from "formik";
import { VIDEO_FUDGE_FACTOR } from "services/videos";

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
  seenBookmarkIds: prop(() => objectMap<boolean>()),
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

  @modelAction
  deactivateBookmarks() {
    consola.info(`Deactivate all bookmarks`);
    this.bookmarks.forEach((bookmark) => {
      bookmark.setActive(false);
    });
  }

  /**
   * Push a specific bookmark onto the seen list.
   * @param bookmark The bookmark that was seen
   */
  @modelAction
  addToSeenBookmarkIds(bookmark: Bookmark) {
    consola.info(`Adding bookmark to seen bookmarks: ${bookmark.timestamp}`);
    this.seenBookmarkIds.set(bookmark.id, true);
  }

  /**
   * Bookmarks after this time will be removed from the seen bookmark tracking.
   */
  @modelAction
  unseeBookmarksAfter(timestamp: number) {
    consola.info(`Unseeing bookmarks after: ${timestamp}`);

    this.sortedBookmarks.forEach((bookmark) => {
      const bookmarkAhead =
        this.currentTime === null ||
        bookmark === undefined ||
        bookmark.timestamp === null ||
        bookmark.timestamp > timestamp;

      if (bookmarkAhead === true) {
        this.seenBookmarkIds.set(bookmark.id, false);
      }
    });
  }

  /**
   * Bookmarks before this time will be added to the bookmark seen tracking.
   */
  @modelAction
  seeBookmarksBefore(timestamp: number) {
    consola.info(`Seeing bookmarks before: ${timestamp}`);

    this.sortedBookmarks.forEach((bookmark) => {
      const bookmarkBehind =
        this.currentTime === null ||
        bookmark === undefined ||
        bookmark.timestamp === null ||
        bookmark.timestamp < timestamp;

      if (bookmarkBehind === true) {
        this.seenBookmarkIds.set(bookmark.id, true);
      }
    });
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
      return (a.timestamp || 0) - (b.timestamp || 0);
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

  @computed
  get bookmarkPresent() {
    return this.bookmarks.some((bookmark) => {
      if (this.currentTime === null || bookmark.timestamp === null) {
        return;
      }

      return (
        bookmark.timestamp > this.currentTime - VIDEO_FUDGE_FACTOR &&
        bookmark.timestamp < this.currentTime + VIDEO_FUDGE_FACTOR
      );
    });
  }

  getVideoById(id: string) {
    return this.videos.find((video) => video.id === id);
  }

  getBookmarkById(id: string) {
    return this.bookmarks.find((bookmark) => bookmark.id === id);
  }

  /**
   * Have we seen this bookmark id yet?
   * @param bookmark
   */
  hasSeenBookmark(bookmark: Bookmark) {
    return this.seenBookmarkIds.get(bookmark.id) === true;
  }

  /**
   * Is the given video the one that is currently selected in the session?
   */
  isCurrentVideo(video: Video) {
    return this.selectedVideo?.id === video.id;
  }
}
