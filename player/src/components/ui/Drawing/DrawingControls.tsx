import { TldrawApp, TDToolType } from "@tldraw/tldraw";
import Tooltip from "components/ui/Tooltip";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

type Props = {
  app: TldrawApp;
};

const DrawingControls = ({ app }: Props) => {
  const selectTool = (type: TDToolType) => {
    app.selectTool(type);
    app.toggleToolLock();
  };

  return (
    <div className="flex flex-col gap-4">
      <Tooltip content="Select">
        <button onClick={() => selectTool("select")}>
          <CursorArrowRaysIcon />
        </button>
        {/*
            <IconButton
              icon={<ClickIcon />}
              aria-label="Select"
              css={activeTool === 'select' ? selectedStyle : unSlectedStyle}
              onClick={() => selectTool('select')}
            />
  */}
      </Tooltip>
    </div>
  );
};

export default DrawingControls;
