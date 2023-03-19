import * as React from "react";
import { getRatioDimensions } from "services/layout";
import { observer } from "mobx-react-lite";

type Dimensions = {
  width: number;
  height: number;
  scale: number;
};

type Props = {
  originalWidth: number;
  originalHeight: number;
  children(dimensions: Dimensions): React.ReactNode;
  onMount?: (dimensions: Dimensions) => void;
};

const VideoSizer = observer(
  ({ originalWidth, originalHeight, children, onMount }: Props) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [dimensions, setDimensions] = React.useState<Dimensions | null>(null);

    React.useLayoutEffect(() => {
      const handleResize = () => {
        if (ref.current === null) {
          return;
        }

        const [width, height, scale] = getRatioDimensions(
          originalWidth,
          originalHeight,
          ref.current
        );

        const dimensions = {
          width,
          height,
          scale,
        };

        setDimensions(dimensions);

        if (onMount !== undefined) {
          onMount(dimensions);
        }
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <div ref={ref} className="w-full h-full flex items-center justify-center">
        {dimensions && children(dimensions)}
      </div>
    );
  }
);

export default VideoSizer;
