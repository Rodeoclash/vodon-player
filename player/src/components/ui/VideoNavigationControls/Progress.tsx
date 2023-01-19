import * as React from "react";
import throttle from "lodash.throttle";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Props = {
  currentTime: number;
  duration: number;
  onGotoTime: (newTime: number) => void;
};

const Progress = ({ currentTime, duration, onGotoTime }: Props) => {
  const onSliderChange = React.useCallback((value: number) => {
    onGotoTime(value);
  }, []);

  return <p>Slider</p>;
};

export default Progress;
