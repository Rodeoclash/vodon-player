import consola from "consola";
import * as React from "react";
import { Tldraw, TldrawApp, ColorStyle } from "@tldraw/tldraw";

type Props = {
  onMount: (app: TldrawApp) => void;
  scale: number;
};

const Drawing = ({ onMount, scale }: Props) => {
  const tlDrawRef = React.useRef<TldrawApp | null>(null);

  const handleMount = (app: TldrawApp) => {
    tlDrawRef.current = app;
    tlDrawRef.current.setCamera([0, 0], scale, "layout_mounted");
    onMount(app);
  };

  const handlePersist = (app: TldrawApp) => {
    //console.log('persist')
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
