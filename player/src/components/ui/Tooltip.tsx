import * as React from "react";
import { usePopper } from "react-popper";

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

const Tooltip = ({ children, content }: Props) => {
  const [hover, setHover] = React.useState<boolean | null>(null);

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = React.useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 10] } },
    ],
  });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleMouseLeave()}
      >
        {children}
      </div>

      {hover === true && (
        <div
          className="z-20"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className="p-2 bg-stone-800 w-60 text-sm text-center border border-stone-700">
            {content}
          </div>
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};

export default Tooltip;
