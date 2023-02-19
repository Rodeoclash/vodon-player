import consola from "consola";
import * as React from "react";
import { Tldraw, TldrawApp, TDDocument } from "@tldraw/tldraw";

type Props = {
  drawing: TDDocument | null;
  onMount: (app: TldrawApp) => void;
  onPersist: (document: TDDocument) => void;
  scale: number;
};

const Drawing = ({ onMount, scale, onPersist, drawing }: Props) => {
  const tlDrawRef = React.useRef<TldrawApp | null>(null);

  const handleMount = (app: TldrawApp) => {
    tlDrawRef.current = app;
    tlDrawRef.current.setCamera([0, 0], scale, "layout_mounted");
    onMount(app);
  };

  const handlePersist = (app: TldrawApp) => {
    app.selectNone();
    onPersist(app.document);
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
      consola.info("Clearing TLDraw document");
      app.deleteAll();
    } else {
      consola.info("Loading TLDraw document");
      app.loadDocument(structuredClone(drawing));
    }

    app.setCamera([0, 0], scale, "layout_resized");
    app.selectTool(tool);
    app.toggleToolLock();
  }, [drawing]);

  return (
    <Tldraw
      onMount={(app) => handleMount(app)}
      onPersist={(app) => handlePersist(app)}
      showUI={false}
    />
  );
};

export default Drawing;
