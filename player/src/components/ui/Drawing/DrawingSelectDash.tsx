import * as React from "react";
import { TldrawApp, DashStyle } from "@tldraw/tldraw";
import {
  TbScribble,
  TbLineDashed,
  TbLineDotted,
  TbSquaresFilled,
} from "react-icons/tb";

import PopoutControl from "components/ui/Drawing/PopoutControl";
import Tooltip from "components/ui/Tooltip";

type PropsType = {
  app: TldrawApp;
};

const dashes = {
  [DashStyle.Draw]: [<TbScribble />, "Line"],
  [DashStyle.Solid]: [<TbSquaresFilled />, "Filled"],
  [DashStyle.Dashed]: [<TbLineDashed />, "Dashed"],
  [DashStyle.Dotted]: [<TbLineDotted />, "Dotted"],
};

const DrawingSelectDash = ({ app }: PropsType) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const currentStyle = app.useStore((s) => s.appState.currentStyle);

  const handleDashPick = React.useCallback(
    (dash: DashStyle) => {
      app.style({ dash });
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

  const dashesData = Object.entries(dashes) as Array<
    [DashStyle, [JSX.Element, string]]
  >;

  const renderedDashes = dashesData.map(([key, [icon, label]]) => {
    return (
      <Tooltip content={label}>
        <button
          key={key}
          className="w-6 h-6"
          onClick={() => handleDashPick(key)}
        >
          {icon}
        </button>
      </Tooltip>
    );
  });

  const renderedPopup = (
    <div className="bg-stone-800 h-12 flex items-center gap-2 px-3">
      {renderedDashes}
    </div>
  );

  return (
    <PopoutControl
      open={isOpen}
      onRequestClose={() => handleRequestClose()}
      popup={renderedPopup}
    >
      <Tooltip content="Line style">
        <div className="w-8 h-8" onClick={() => handleClickSwatch()}>
          {dashes[currentStyle.dash][0]}
        </div>
      </Tooltip>
    </PopoutControl>
  );
};

export default DrawingSelectDash;
