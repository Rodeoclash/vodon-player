import {
  model,
  modelAction,
  Model,
  types,
  tProp,
  idProp,
  onActionMiddleware,
} from "mobx-keystone";
import Video from "./video";

@model("VodonPlayer/Session")
export default class Session extends Model({
  id: idProp,
  name: tProp(types.string),
  videos: tProp(types.array(types.model<Video>(() => Video)), () => []),
}) {
  @modelAction
  setName(name: string) {
    this.name = name;
  }

  @modelAction
  addVideo(video: Video) {
    this.videos.push(video);
  }

  @modelAction
  removeVideo(video: Video) {
    this.videos = this.videos.filter(
      (innerVideo) => innerVideo.id !== video.id
    );
  }

  getVideoById(id: string) {
    return this.videos.find((video) => video.id === id);
  }
}
