import { computed } from "mobx";

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

import Video from "./video";
import { videoRef } from "./references";

@model("VodonPlayer/Session")
export default class Session extends Model({
  id: idProp,
  name: tProp(types.string),
  createdAt: tProp(types.number, Date.now()),
  videos: tProp(types.array(types.model<Video>(() => Video)), () => []),
  selectedVideoRef: prop<Ref<Video> | null>(),
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

  @modelAction
  selectVideo(video: Video) {
    if (!this.videos.includes(video)) throw new Error("unknown video");

    this.selectedVideoRef = video ? videoRef(video) : null;
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

  getVideoById(id: string) {
    return this.videos.find((video) => video.id === id);
  }
}
