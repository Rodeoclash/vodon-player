import * as React from "react";
import { Tldraw, TldrawApp, TDDocument } from "@tldraw/tldraw";

type Props = {
  onMount: (app: TldrawApp) => void;
  onPersist: (document: TDDocument) => void;
  scale: number;
};

const Drawing = ({ onMount, scale, onPersist }: Props) => {
  const tlDrawRef = React.useRef<TldrawApp | null>(null);

  const handleMount = (app: TldrawApp) => {
    tlDrawRef.current = app;
    tlDrawRef.current.setCamera([0, 0], scale, "layout_mounted");
    onMount(app);
  };

  const handlePersist = (app: TldrawApp) => {
    onPersist(app.document);
  };

  React.useEffect(() => {
    if (tlDrawRef.current === null) {
      return;
    }

    tlDrawRef.current.setCamera([0, 0], scale, "layout_resized");
  }, [scale]);

  return (
    <Tldraw
      onMount={(app) => handleMount(app)}
      onPersist={(app) => handlePersist(app)}
      showUI={false}
    />
  );
};

export default Drawing;
