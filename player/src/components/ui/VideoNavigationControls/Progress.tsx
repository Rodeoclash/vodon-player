import * as React from "react";
import throttle from "lodash.throttle";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Props = {
  currentTime: number;
  duration: number;
  seeking: boolean;
  videoEl: HTMLVideoElement;
};

const HANDLE_SIZE = 16;
const DRAG_TIMEOUT = 100;

const Progress = ({ currentTime, duration, videoEl, seeking }: Props) => {
  const handleRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = React.useState<null | number>(
    null
  );
  const [dragInProgress, setDragInProgress] = React.useState<boolean>(false);
  const [mouseDownSlider, setMouseDownSlider] = React.useState<boolean>(false);

  const progress = currentTime / duration;

  /**
   * Set state that the drag is currently in progress
   */
  const handleStart = React.useCallback(() => {
    setDragInProgress(true);
  }, []);

  /**
   * Remove the flag that the drag is in progress after a short timeout of
   * the drag being completed. This prevents the ending "click" event from
   * being registered as a click on the volume track.
   */
  const handleStop = React.useCallback(() => {
    setTimeout(() => {
      setDragInProgress(false);
    }, DRAG_TIMEOUT);
  }, []);

  /**
   * Fires as the volume slider is dragged along the track. Automatically sets
   * the volume of the video depending on the position of how far it has
   * been slid.
   *
   * We allow setting the time even when seeking here so that the slider
   * remains smooth (even though we may overwhelm the ability for the video
   * player to keep up)
   */
  const handleDrag = React.useCallback(
    (event: DraggableEvent, data: DraggableData) => {
      if (containerWidth === null) {
        return;
      }

      const perc = data.x / containerWidth;
      videoEl.currentTime = perc * duration;
    },
    [containerWidth, seeking]
  );

  /**
   * Clicking the slider will set the volume directly. We need to ensure that
   * a click event is being fired from releasing a drag so we check to make
   * sure that a drag isn't in progress before we activate.
   *
   * Clicking sets the volume of the video equal to how far along the slider
   * that we clicked.
   */
  const handleMouseClickSlider = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (
        containerWidth === null ||
        dragInProgress === true ||
        seeking === true
      ) {
        return;
      }

      const target = event.target as HTMLDivElement;
      const bounds = target.getBoundingClientRect();
      const localX = event.clientX - bounds.left;
      const perc = localX / containerWidth;
      videoEl.currentTime = perc * duration;

      setMouseDownSlider(true);
    },
    [containerWidth, dragInProgress]
  );

  const handleClickStart = React.useCallback(() => {
    videoEl.currentTime = 0;
  }, []);

  const handleClickEnd = React.useCallback(() => {
    videoEl.currentTime = duration - 0.01; // for some reason, we can't set exactly the end time
  }, [duration]);

  /**
   * Measure the width of the volume slider container as the page reloads.
   * This is used to calculate the default position of the slider.
   */
  React.useLayoutEffect(() => {
    const handleResize = () => {
      if (containerRef.current === null) {
        return;
      }

      setContainerWidth(containerRef.current.offsetWidth);
    };

    const throttledHandleResize = throttle(handleResize, 100);

    window.addEventListener("resize", throttledHandleResize);

    // Trigger straight away so that we have the default value
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-stretch w-full">
      <div
        className="bg-white rounded-l-full"
        style={{ width: `${HANDLE_SIZE / 2}px` }}
        onClick={() => handleClickStart()}
      />
      <div
        className="bg-white w-full relative flex-grow"
        ref={containerRef}
        onClick={(event) => handleMouseClickSlider(event)}
      >
        {containerWidth !== null && (
          <Draggable
            axis="x"
            bounds={{ left: 0, right: containerWidth }}
            handle=".handle"
            scale={1}
            onStart={() => handleStart()}
            onDrag={(event, data) => handleDrag(event, data)}
            onStop={() => handleStop()}
            nodeRef={handleRef}
            position={{ x: containerWidth * progress, y: 0 }}
            positionOffset={{ x: -(HANDLE_SIZE / 2), y: 0 }}
          >
            <div
              ref={handleRef}
              className="handle bg-green-500 rounded-full outline outline-white"
              style={{ width: `${HANDLE_SIZE}px`, height: `${HANDLE_SIZE}px` }}
            />
          </Draggable>
        )}
      </div>
      <div
        className="bg-white rounded-r-full"
        style={{ width: `${HANDLE_SIZE / 2}px` }}
        onClick={() => handleClickEnd()}
      />
    </div>
  );
};

export default Progress;
