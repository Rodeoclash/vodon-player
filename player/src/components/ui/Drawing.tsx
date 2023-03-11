import * as React from "react";
import { Tldraw, TldrawApp, TDDocument, TDExport } from "@tldraw/tldraw";

type Props = {
  drawingId: string;
  drawing: TDDocument | null;
  onMount?: (app: TldrawApp) => void;
  onPersist?: (document: TDDocument) => void;
  onExport?: (app: TldrawApp, info: TDExport) => Promise<void>;
  scale: number;
};

const Drawing = ({
  onMount,
  scale,
  onPersist,
  drawing,
  drawingId,
  onExport,
}: Props) => {
  const tlDrawRef = React.useRef<TldrawApp | null>(null);

  const handleMount = (app: TldrawApp) => {
    tlDrawRef.current = app;
    tlDrawRef.current.setCamera([0, 0], scale, "layout_mounted");

    if (drawing !== null) {
      app.loadDocument(structuredClone(drawing));
    }

    if (onMount !== undefined) {
      onMount(app);
    }
  };

  /**
   * Calls the persist handler of the parent component. We have a bit of magic
   * in this function to ensure we keep the same tool highlighted when we
   * persist but also ensure that we deselect before we save so we don't
   * persist objects in a selected state.
   *
   * For some reason, calling the `selectNone` doesn't actually seem to turn
   * off the selected shapes???
   *
   * I don't understand but it works how I want it to.
   * @param app
   * @returns
   */
  const handlePersist = (app: TldrawApp) => {
    if (tlDrawRef.current === null) {
      return;
    }

    const tool = app.useStore.getState().appState.activeTool;
    app.selectNone();

    if (onPersist !== undefined) {
      onPersist(app.document);
    }

    // BUG BUG: We need to select two tools here to correctly highlight the one
    // we want to use!?
    app.selectTool("select");
    app.selectTool(tool);
    app.toggleToolLock();
  };

  React.useEffect(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    tlDrawRef.current.setCamera([0, 0], scale, "layout_resized");
  }, [scale]);

  // Loading the drawing when the active bookmark page changes
  React.useEffect(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    const app = tlDrawRef.current;
    const tool = app.useStore.getState().appState.activeTool;

    if (!drawing) {
      app.deleteAll();
    } else {
      app.loadDocument(structuredClone(drawing));
    }

    app.setCamera([0, 0], scale, "layout_resized");
    app.selectTool(tool);
    app.toggleToolLock();
  }, [drawingId]);

  return (
    <Tldraw
      onExport={onExport}
      onMount={(app) => handleMount(app)}
      onPersist={(app) => handlePersist(app)}
      showUI={false}
    />
  );
};

export default Drawing;
