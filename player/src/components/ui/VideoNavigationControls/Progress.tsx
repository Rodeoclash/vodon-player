import * as React from "react";
import ReactSlider from "react-slider";

type Props = {
  currentTime: number;
  duration: number;
  onGotoTime: (newTime: number) => void;
};

const Progress = ({ currentTime, duration, onGotoTime }: Props) => {
  const onSliderChange = React.useCallback((value: number) => {
    onGotoTime(value);
  }, []);

  return (
    <ReactSlider
      className="h-12 flex items-center horizontal-slider"
      thumbClassName="bg-green-500 outline-4 px-2 w-4 h-4 rounded-full"
      trackClassName="h-2 bg-red-600"
      renderThumb={(props, state) => <div {...props} />}
      onChange={(value, thumbIndex) => onSliderChange(value)}
      onSliderClick={(value) => onSliderChange(value)}
      min={0}
      max={duration}
      step={0.1}
      value={currentTime}
    />
  );
};

export default Progress;
