import { model, modelAction, Model, types, tProp, idProp } from "mobx-keystone";
import { Video } from "./video";

@model("VodonPlayer/Session")
export class Session extends Model({
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
}
