import * as React from "react";
import throttle from "lodash.throttle";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Props = {
  videoEl: HTMLVideoElement;
  volume: number;
};

const HANDLE_SIZE = 16;
const DRAG_TIMEOUT = 100;

const Volume = ({ videoEl, volume }: Props) => {
  const handleRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [continerWidth, setContainerWidth] = React.useState<null | number>(
    null
  );
  const [dragInProgress, setDragInProgress] = React.useState<boolean>(false);

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
   */
  const handleDrag = React.useCallback(
    (event: DraggableEvent, data: DraggableData) => {
      if (continerWidth === null) {
        return;
      }

      const perc = data.x / (continerWidth - HANDLE_SIZE);
      videoEl.volume = perc;
    },
    [continerWidth]
  );

  /**
   * Clicking the slider will set the volume directly. We need to ensure that
   * a click event is being fired from releasing a drag so we check to make
   * sure that a drag isn't in progress before we activate.
   *
   * Clicking sets the volume of the video equal to how far along the slider
   * that we clicked.
   */
  const handleClickSlider = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (continerWidth === null || dragInProgress === true) {
        return;
      }

      const target = event.target as HTMLDivElement;
      const bounds = target.getBoundingClientRect();
      const localX = event.clientX - bounds.left;
      const perc = localX / continerWidth;
      videoEl.volume = perc;
    },
    [continerWidth, dragInProgress]
  );

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
        className="bg-white w-full relative flex-grow"
        ref={containerRef}
        onClick={(event) => handleClickSlider(event)}
      >
        {continerWidth !== null && (
          <Draggable
            axis="x"
            bounds="parent"
            handle=".handle"
            scale={1}
            onStart={() => handleStart()}
            onDrag={(event, data) => handleDrag(event, data)}
            onStop={() => handleStop()}
            nodeRef={handleRef}
            position={{ x: (continerWidth - HANDLE_SIZE) * volume, y: 0 }}
          >
            <div
              ref={handleRef}
              className="handle bg-green-500 rounded-full"
              style={{ width: `${HANDLE_SIZE}px`, height: `${HANDLE_SIZE}px` }}
            />
          </Draggable>
        )}
      </div>
    </div>
  );
};

export default Volume;
