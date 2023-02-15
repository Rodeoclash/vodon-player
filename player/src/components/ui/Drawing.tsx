import * as React from "react";
import { useRef, useEffect, useCallback } from "react";
import { Tldraw, TldrawApp, ColorStyle } from "@tldraw/tldraw";

type Props = {
  onMount: (app: TldrawApp) => void;
  scale: number;
};

const Drawing = ({ onMount }: Props) => {
  const tlDrawRef = React.useRef<TldrawApp | null>(null);

  const handleMount = (app: TldrawApp) => {
    //console.log('mounted')
    onMount(app);
  };

  const handlePersist = (app: TldrawApp) => {
    //console.log('persist')
  };

  return (
    <Tldraw
      onMount={(app) => handleMount(app)}
      onPersist={(app) => handlePersist(app)}
      showUI={false}
    />
  );
};

export default Drawing;
