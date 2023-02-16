import * as React from "react";
import { TldrawApp, SizeStyle } from "@tldraw/tldraw";

import PopoutControl from "components/ui/Drawing/PopoutControl";
import Tooltip from "components/ui/Tooltip";

type PropsType = {
  app: TldrawApp;
};

const sizes = {
  [SizeStyle.Small]: "S",
  [SizeStyle.Medium]: "M",
  [SizeStyle.Large]: "L",
};

const DrawingSelectSize = ({ app }: PropsType) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const currentStyle = app.useStore((s) => s.appState.currentStyle);

  const handleDashPick = React.useCallback(
    (size: SizeStyle) => {
      app.style({ size });
      setIsOpen(false);
    },
    [app]
  );

  const handleClickSwatch = () => {
    setIsOpen(!isOpen);
  };

  const handleRequestClose = () => {
    setIsOpen(false);
  };

  const sizesData = Object.entries(sizes) as Array<[SizeStyle, string]>;

  const renderedSizes = sizesData.map(([key, value]) => {
    return (
      <Tooltip content={key}>
        <button
          key={key}
          className="w-6 h-6"
          onClick={() => handleDashPick(key)}
        >
          {value}
        </button>
      </Tooltip>
    );
  });

  const renderedPopup = (
    <div className="bg-stone-800 h-12 flex items-center gap-2 px-3">
      {renderedSizes}
    </div>
  );

  return (
    <PopoutControl
      open={isOpen}
      onRequestClose={() => handleRequestClose()}
      popup={renderedPopup}
    >
      <Tooltip content="Line size">
        <div
          className="w-8 h-8 flex items-center justify-center"
          onClick={() => handleClickSwatch()}
        >
          {sizes[currentStyle.size].slice(0, 1).toUpperCase()}
        </div>
      </Tooltip>
    </PopoutControl>
  );
};

export default DrawingSelectSize;
