import consola from "consola";
import { TldrawApp, TDToolType, TDShapeType } from "@tldraw/tldraw";
import Tooltip from "components/ui/Tooltip";
import {
  CursorArrowRaysIcon,
  PencilIcon,
  ArrowUpRightIcon,
  MinusIcon,
  RectangleStackIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";

import DrawingColourSelector from "./DrawingColourSelector";

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

  const colourSwatchClasses = classNames({
    ...baseClasses,
  });

  return (
    <div className="flex flex-col gap-2">
      <Tooltip content="Select tool (t)">
        <button className={selectClasses} onClick={() => handlePickSelect()}>
          <CursorArrowRaysIcon className="w-8 h-8" />
        </button>
      </Tooltip>
      <Tooltip content="Pencil tool (p)">
        <button className={pencilClasses} onClick={() => handlePickDraw()}>
          <PencilIcon className="w-8 h-8" />
        </button>
      </Tooltip>
      <Tooltip content="Arrow tool (r)">
        <button className={arrowClasses} onClick={() => handlePickArrow()}>
          <ArrowUpRightIcon className="w-8 h-8" />
        </button>
      </Tooltip>
      <Tooltip content="Line tool (l)">
        <button className={lineClasses} onClick={() => handlePickLine()}>
          <MinusIcon className="w-8 h-8" />
        </button>
      </Tooltip>
      <Tooltip content="Box tool (b)">
        <button
          className={rectangleClasses}
          onClick={() => handlePickRectangle()}
        >
          <RectangleStackIcon className="w-8 h-8" />
        </button>
      </Tooltip>
      <Tooltip content="Circle tool (b)">
        <button className={ellipseClasses} onClick={() => handlePickEllipse()}>
          <CircleStackIcon className="w-8 h-8" />
        </button>
      </Tooltip>
      <hr />
      <div className={colourSwatchClasses}>
        <DrawingColourSelector app={app} />
      </div>
    </div>
  );
};

export default DrawingControls;
