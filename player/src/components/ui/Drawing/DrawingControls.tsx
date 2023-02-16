import consola from "consola";
import { TldrawApp, TDToolType, TDShapeType } from "@tldraw/tldraw";
import classNames from "classnames";

import {
  TbClick,
  TbPencil,
  TbArrowUpRight,
  TbScribble,
  TbRectangleVertical,
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
    consola.info("Using tool: draw");
    selectTool(TDShapeType.Draw);
  };

  const handlePickArrow = () => {
    consola.info("Using tool: arrow");
    selectTool(TDShapeType.Arrow);
  };

  const handlePickLine = () => {
    consola.info("Using tool: line");
    selectTool(TDShapeType.Line);
  };

  const handlePickRectangle = () => {
    consola.info("Using tool: rectangle");
    selectTool(TDShapeType.Rectangle);
  };

  const handlePickEllipse = () => {
    consola.info("Using tool: ellipse");
    selectTool(TDShapeType.Ellipse);
  };

  const baseClasses = {
    "block bg-stone-700 p-2": true,
  };

  const selectClasses = classNames({
    ...baseClasses,
    ["bg-stone-500"]: activeTool === "select",
  });

  const pencilClasses = classNames({
    ...baseClasses,
    ["bg-stone-500"]: activeTool === TDShapeType.Draw,
  });

  const arrowClasses = classNames({
    ...baseClasses,
    ["bg-stone-500"]: activeTool === TDShapeType.Arrow,
  });

  const lineClasses = classNames({
    ...baseClasses,
    ["bg-stone-500"]: activeTool === TDShapeType.Line,
  });

  const rectangleClasses = classNames({
    ...baseClasses,
    ["bg-stone-500"]: activeTool === TDShapeType.Rectangle,
  });

  const ellipseClasses = classNames({
    ...baseClasses,
    ["bg-stone-500"]: activeTool === TDShapeType.Ellipse,
  });

  const colourSwatchSelectClasses = classNames({
    ...baseClasses,
  });

  const dashSelectClasses = classNames({
    ...baseClasses,
  });

  const sizeSelectClasses = classNames({
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
          <TbArrowUpRight />
        </button>
      </Tooltip>
      <Tooltip content="Line tool (l)">
        <button className={lineClasses} onClick={() => handlePickLine()}>
          <TbScribble />
        </button>
      </Tooltip>
      <Tooltip content="Box tool (b)">
        <button
          className={rectangleClasses}
          onClick={() => handlePickRectangle()}
        >
          <TbRectangleVertical />
        </button>
      </Tooltip>
      <Tooltip content="Circle tool (b)">
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
