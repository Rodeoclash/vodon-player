import consola from "consola";
import { TldrawApp, TDToolType, TDShapeType } from "@tldraw/tldraw";
import classNames from "classnames";

import {
  TbClick,
  TbPencil,
  TbArrowRightCircle,
  TbLine,
  TbRectangle,
  TbCircle,
} from "react-icons/tb";

import Tooltip from "components/ui/Tooltip";
import DrawingSelectColour from "./DrawingSelectColour";
import DrawingSelectDash from "./DrawingSelectDash";
import DrawingSelectSize from "./DrawingSelectSize";

type Props = {
  app: TldrawApp;
};

const DrawingControls = ({ app }: Props) => {
  const selectTool = (type: TDToolType) => {
    app.selectTool(type);
    app.toggleToolLock();
  };

  const activeTool = app.useStore((s) => s.appState.activeTool);

  const handlePickSelect = () => {
    consola.info("Using tool: select");
    selectTool("select");
  };

  const handlePickDraw = () => {
    consola.info(`Using tool: ${TDShapeType.Draw}`);
    selectTool(TDShapeType.Draw);
  };

  const handlePickArrow = () => {
    consola.info(`Using tool: ${TDShapeType.Arrow}`);
    selectTool(TDShapeType.Arrow);
  };

  const handlePickLine = () => {
    consola.info(`Using tool: ${TDShapeType.Line}`);
    selectTool(TDShapeType.Line);
  };

  const handlePickRectangle = () => {
    consola.info(`Using tool: ${TDShapeType.Rectangle}`);
    selectTool(TDShapeType.Rectangle);
  };

  const handlePickEllipse = () => {
    consola.info(`Using tool: ${TDShapeType.Ellipse}`);
    selectTool(TDShapeType.Ellipse);
  };

  const baseClasses = {
    "block p-2": true,
  };

  const selectClasses = classNames({
    ...baseClasses,
    "bg-zinc-500": activeTool === "select",
  });

  const pencilClasses = classNames({
    ...baseClasses,
    "bg-zinc-500": activeTool === TDShapeType.Draw,
  });

  const arrowClasses = classNames({
    ...baseClasses,
    "bg-zinc-500": activeTool === TDShapeType.Arrow,
  });

  const lineClasses = classNames({
    ...baseClasses,
    "bg-zinc-500": activeTool === TDShapeType.Line,
  });

  const rectangleClasses = classNames({
    ...baseClasses,
    "bg-zinc-500": activeTool === TDShapeType.Rectangle,
  });

  const ellipseClasses = classNames({
    ...baseClasses,
    "bg-zinc-500": activeTool === TDShapeType.Ellipse,
  });

  const colourSwatchSelectClasses = classNames({
    "bg-zinc-600": true,
    ...baseClasses,
  });

  const dashSelectClasses = classNames({
    "bg-zinc-600": true,
    ...baseClasses,
  });

  const sizeSelectClasses = classNames({
    "bg-zinc-600": true,
    ...baseClasses,
  });

  return (
    <div className="flex flex-col gap-2">
      <Tooltip content="Select tool (t)">
        <button className={selectClasses} onClick={() => handlePickSelect()}>
          <TbClick />
        </button>
      </Tooltip>
      <Tooltip content="Pencil tool (p)">
        <button className={pencilClasses} onClick={() => handlePickDraw()}>
          <TbPencil />
        </button>
      </Tooltip>
      <Tooltip content="Arrow tool (r)">
        <button className={arrowClasses} onClick={() => handlePickArrow()}>
          <TbArrowRightCircle />
        </button>
      </Tooltip>
      <Tooltip content="Line tool (l)">
        <button className={lineClasses} onClick={() => handlePickLine()}>
          <TbLine />
        </button>
      </Tooltip>
      <Tooltip content="Box tool (b)">
        <button
          className={rectangleClasses}
          onClick={() => handlePickRectangle()}
        >
          <TbRectangle />
        </button>
      </Tooltip>
      <Tooltip content="Circle tool (c)">
        <button className={ellipseClasses} onClick={() => handlePickEllipse()}>
          <TbCircle />
        </button>
      </Tooltip>
      <hr />
      <div className={colourSwatchSelectClasses}>
        <DrawingSelectColour app={app} />
      </div>
      <div className={dashSelectClasses}>
        <DrawingSelectDash app={app} />
      </div>
      <div className={sizeSelectClasses}>
        <DrawingSelectSize app={app} />
      </div>
    </div>
  );
};

export default DrawingControls;
