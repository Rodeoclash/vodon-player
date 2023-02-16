import * as React from "react";
import { TldrawApp, DashStyle } from "@tldraw/tldraw";
import {
  Square2StackIcon,
  GiftIcon,
  VideoCameraIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";

import PopoutControl from "components/ui/Drawing/PopoutControl";
import Tooltip from "components/ui/Tooltip";

type PropsType = {
  app: TldrawApp;
};

const dashes = {
  [DashStyle.Draw]: [<Square2StackIcon />, "Line"],
  [DashStyle.Solid]: [<GiftIcon />, "Filled"],
  [DashStyle.Dashed]: [<VideoCameraIcon />, "Dashed"],
  [DashStyle.Dotted]: [<DocumentIcon />, "Dotted"],
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
      <Tooltip content="Tool colour">
        <div className="w-8 h-8" onClick={() => handleClickSwatch()}>
          {dashes[currentStyle.dash][0]}
        </div>
      </Tooltip>
    </PopoutControl>
  );
};

export default DrawingSelectDash;
