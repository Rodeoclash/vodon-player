import consola from "consola";
import { TldrawApp, TDToolType, TDShapeType } from "vendor/tldraw/index.js";
import { useHotkeys } from "react-hotkeys-hook";

type Props = {
  app: TldrawApp;
};

const DrawingControlsKeyboardShortcuts = ({ app }: Props) => {
  const selectTool = (type: TDToolType) => {
    app.selectTool(type);
    app.toggleToolLock();
  };

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

  useHotkeys(
    "r",
    () => {
      handlePickArrow();
    },
    [app]
  );

  useHotkeys(
    "l",
    () => {
      handlePickLine();
    },
    [app]
  );

  useHotkeys(
    "b",
    () => {
      handlePickRectangle();
    },
    [app]
  );

  useHotkeys(
    "c",
    () => {
      handlePickEllipse();
    },
    [app]
  );

  return null;
};

export default DrawingControlsKeyboardShortcuts;
