import * as React from "react";
import { usePopper } from "react-popper";
import { useOnClickOutside } from "usehooks-ts";

import { TldrawApp, ColorStyle } from "@tldraw/tldraw";

type PropsType = {
  app: TldrawApp;
};

const colors = {
  [ColorStyle.White]: "#f0f1f3",
  [ColorStyle.LightGray]: "#c6cbd1",
  [ColorStyle.Gray]: "#788492",
  [ColorStyle.Black]: "#1d1d1d",
  [ColorStyle.Green]: "#36b24d",
  [ColorStyle.Cyan]: "#0e98ad",
  [ColorStyle.Blue]: "#1c7ed6",
  [ColorStyle.Indigo]: "#4263eb",
  [ColorStyle.Violet]: "#7746f1",
  [ColorStyle.Red]: "#ff2133",
  [ColorStyle.Orange]: "#ff9433",
  [ColorStyle.Yellow]: "#ffc936",
};

const DrawingColourSelector = ({ app }: PropsType) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

  const currentStyle = app.useStore((s) => s.appState.currentStyle);

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = React.useState<HTMLDivElement | null>(
    null
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right",
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 20] } },
    ],
  });

  const handleColourPick = React.useCallback(
    (color: ColorStyle) => {
      app.style({ color });
      setIsOpen(false);
    },
    [app]
  );

  const handleClickSwatch = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(outsideClickRef, (event) => {
    setIsOpen(false);
  });

  const swatchesData = Object.entries(colors) as Array<[ColorStyle, string]>;

  const renderedSwatches = swatchesData.map(([key, value]) => {
    const style = {
      backgroundColor: value,
    };
    return (
      <button
        key={key}
        style={style}
        className="w-6 h-6"
        onClick={() => handleColourPick(key)}
      />
    );
  });

  const currentSwatchStyle = {
    backgroundColor: colors[currentStyle.color],
  };

  return (
    <div ref={outsideClickRef}>
      <div
        className="w-8 h-8"
        style={currentSwatchStyle}
        onClick={() => handleClickSwatch()}
        ref={setReferenceElement}
      />
      {isOpen === true && (
        <div
          ref={setPopperElement}
          className="bg-stone-800 h-12 flex items-center gap-2 px-3"
          style={styles.popper}
          {...attributes.popper}
        >
          {renderedSwatches}
        </div>
      )}
    </div>
  );
};

export default DrawingColourSelector;
