import * as React from "react";
import { getRatioDimensions } from "services/layout";
import { InvalidDomLayout } from "services/errors";

type Dimensions = {
  width: number;
  height: number;
  scale: number;
};

type Props = {
  aspectRatio: string;
  children(dimensions: Dimensions): React.ReactNode;
  onMount: (dimensions: Dimensions) => void;
};

const VideoSizer = ({ aspectRatio, children, onMount }: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = React.useState<Dimensions | null>(null);

  React.useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current === null) {
        return;
      }

      const widthHeight = getRatioDimensions(aspectRatio, ref.current);
      const dimensions = {
        width: widthHeight[0],
        height: widthHeight[1],
        scale: 1,
      };

      setDimensions(dimensions);
      onMount(dimensions);
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
};

export default VideoSizer;
