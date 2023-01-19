import * as React from "react";
import throttle from "lodash.throttle";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Props = {
  videoEl: HTMLVideoElement;
  volume: number;
};

const handleSize = 16;

const Volume = ({ videoEl, volume }: Props) => {
  const handleRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [continerWidth, setContainerWidth] = React.useState<null | number>(
    null
  );

  const handleDrag = React.useCallback(
    (event: DraggableEvent, data: DraggableData) => {
      if (continerWidth === null) {
        return;
      }

      const perc = data.x / (continerWidth - handleSize);
      videoEl.volume = perc;
    },
    [continerWidth]
  );

  const throttledHandleDrag = throttle(handleDrag, 100);

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
      <div className="bg-white w-full relative flex-grow" ref={containerRef}>
        {continerWidth !== null && (
          <Draggable
            axis="x"
            bounds="parent"
            handle=".handle"
            scale={1}
            onDrag={(event, data) => throttledHandleDrag(event, data)}
            nodeRef={handleRef}
            defaultPosition={{ x: (continerWidth - handleSize) * volume, y: 0 }}
          >
            <div
              ref={handleRef}
              className="handle bg-green-500 rounded-full"
              style={{ width: `${handleSize}px`, height: `${handleSize}px` }}
            />
          </Draggable>
        )}
      </div>
    </div>
  );
};

export default Volume;
