import * as React from "react";
import { getRatioDimensions } from "services/layout";
import { InvalidDomLayout } from "services/errors";

type Props = {
  aspectRatio: string;
  children: React.ReactNode;
};

const VideoSizer = ({ aspectRatio, children }: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current === null) {
        return;
      }

      const dimensions = getRatioDimensions(aspectRatio, ref.current);

      if (ref.current.childNodes.length > 1) {
        throw new InvalidDomLayout(
          "Expected only a single element to be present under `VideoSizer`"
        );
      }

      const child = ref.current.childNodes[0];

      if (!(child instanceof HTMLElement)) {
        throw new InvalidDomLayout(
          "Expect HTMLElement to be nested under `VideoSizer`"
        );
      }

      child.style.width = dimensions[0].toString();
      child.style.height = dimensions[1].toString();
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={ref} className="w-full h-full videoSizer">
      {children}
    </div>
  );
};

export default VideoSizer;
