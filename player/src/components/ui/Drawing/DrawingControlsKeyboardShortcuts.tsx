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

  const handlePickText = () => {
    consola.info("Using tool: text");
    selectTool(TDShapeType.Text);
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

  const handleTrashDrawing = () => {
    if (window.confirm("This will remove your drawing") === false) {
      return;
    }

    consola.info(`Trashing drawing`);

    app.deleteAll();
  };

  useHotkeys(
    "t",
    () => {
      handlePickText();
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

  useHotkeys(
    "x",
    () => {
      handleTrashDrawing();
    },
    [app]
  );

  return null;
};

export default DrawingControlsKeyboardShortcuts;
