import * as React from "react";
import throttle from "lodash.throttle";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Props = {
  currentTime: number;
  duration: number;
  videoEl: HTMLVideoElement;
};

const Progress = ({ currentTime, duration, videoEl }: Props) => {
  const onSliderChange = React.useCallback((value: number) => {
    videoEl.currentTime = value;
  }, []);

  return <p>Slider</p>;
};

export default Progress;
