import * as React from "react";
import { TldrawApp, ColorStyle } from "@tldraw/tldraw";

import PopoutControl from "components/ui/Drawing/PopoutControl";
import Tooltip from "components/ui/Tooltip";

type PropsType = {
  app: TldrawApp;
};

const colors = {
  [ColorStyle.White]: "#f0f1f3",
  [ColorStyle.LightGray]: "#c6cbd1",
  [ColorStyle.Gray]: "#788492",
  [ColorStyle.Black]: "#1d1d1d",
  [ColorStyle.Green]: "#36b24d",
  [ColorStyle.Cyan]: "#0e98ad",
  [ColorStyle.Blue]: "#1c7ed6",
  [ColorStyle.Indigo]: "#4263eb",
  [ColorStyle.Violet]: "#7746f1",
  [ColorStyle.Red]: "#ff2133",
  [ColorStyle.Orange]: "#ff9433",
  [ColorStyle.Yellow]: "#ffc936",
};

const DrawingSelectColour = ({ app }: PropsType) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const currentStyle = app.useStore((s) => s.appState.currentStyle);

  const handleColourPick = React.useCallback(
    (color: ColorStyle) => {
      app.style({ color });
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

  const swatchesData = Object.entries(colors) as Array<[ColorStyle, string]>;

  const renderedSwatches = swatchesData.map(([key, value]) => {
    const style = {
      backgroundColor: value,
    };
    return (
      <Tooltip content={key}>
        <button
          key={key}
          style={style}
          className="w-6 h-6"
          onClick={() => handleColourPick(key)}
        />
      </Tooltip>
    );
  });

  const currentSwatchStyle = {
    backgroundColor: colors[currentStyle.color],
  };

  const renderedPopup = (
    <div className="bg-stone-800 h-12 flex items-center gap-2 px-3">
      {renderedSwatches}
    </div>
  );

  return (
    <PopoutControl
      open={isOpen}
      onRequestClose={() => handleRequestClose()}
      popup={renderedPopup}
    >
      <Tooltip content="Tool colour">
        <div
          className="w-8 h-8"
          style={currentSwatchStyle}
          onClick={() => handleClickSwatch()}
        />
      </Tooltip>
    </PopoutControl>
  );
};

export default DrawingSelectColour;
