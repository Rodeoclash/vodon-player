import { rootRef, detach } from "mobx-keystone";
import Video from "./video";

export const videoRef = rootRef<Video>("VodonPlayer/VideoRef", {
  onResolvedValueChange(ref, newVideo, oldVideo) {
    if (oldVideo && !newVideo) {
      detach(ref);
    }
  },
});
