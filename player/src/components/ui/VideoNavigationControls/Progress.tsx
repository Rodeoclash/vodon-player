/**
 * TODO: Should consider how to share code with the volume component.
 *
 * This component also needs the following:
 *
 * 1. Be able to click and drag anywhere on the slider to set the value. This
 * will likely require removing the draggable component and replacing it with
 * something else.
 */

import * as React from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Props = {
  currentTime: number;
  duration: number;
  onGotoTime: (newTime: number) => void;
  seeking: boolean;
};

const HANDLE_SIZE = 16;
const DRAG_TIMEOUT = 100;

const Progress = ({ currentTime, duration, seeking, onGotoTime }: Props) => {
  const handleRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = React.useState<null | number>(
    null
  );
  const [dragInProgress, setDragInProgress] = React.useState<boolean>(false);

  const progress = currentTime / duration;

  /**
   * Set state that the drag is currently in progress
   */
  const handleStart = () => {
    setDragInProgress(true);
  };

  /**
   * Remove the flag that the drag is in progress after a short timeout of
   * the drag being completed. This prevents the ending "click" event from
   * being registered as a click on the volume track.
   */
  const handleStop = () => {
    setTimeout(() => {
      setDragInProgress(false);
    }, DRAG_TIMEOUT);
  };

  /**
   * Fires as the volume slider is dragged along the track. Automatically sets
   * the volume of the video depending on the position of how far it has
   * been slid.
   *
   * We allow setting the time even when seeking here so that the slider
   * remains smooth (even though we may overwhelm the ability for the video
   * player to keep up)
   */
  const handleDrag = (event: DraggableEvent, data: DraggableData) => {
    if (containerWidth === null) {
      return;
    }

    const perc = data.x / containerWidth;
    onGotoTime(perc * duration);
  };

  /**
   * Clicking the slider will set the volume directly. We need to ensure that
   * a click event is being fired from releasing a drag so we check to make
   * sure that a drag isn't in progress before we activate.
   *
   * Clicking sets the volume of the video equal to how far along the slider
   * that we clicked.
   */
  const handleMouseClickSlider = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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
    onGotoTime(perc * duration);
  };

  const handleClickStart = () => {
    onGotoTime(0);
  };

  const handleClickEnd = () => {
    onGotoTime(duration - 0.01); // for some reason, we can't set exactly the end time
  };

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

    window.addEventListener("resize", handleResize);

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
