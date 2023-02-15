import { TldrawApp, TDToolType, TDShapeType } from "@tldraw/tldraw";
import Tooltip from "components/ui/Tooltip";
import { CursorArrowRaysIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useHotkeys } from "react-hotkeys-hook";
import classNames from "classnames";

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
    selectTool("select");
  };

  const handlePickDraw = () => {
    selectTool(TDShapeType.Draw);
  };

  useHotkeys(
    "t",
    () => {
      handlePickSelect();
    },
    [app]
  );

  useHotkeys(
    "p",
    () => {
      handlePickDraw();
    },
    [app]
  );

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

  return (
    <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default DrawingControls;
