import * as React from "react";
import { usePopper } from "react-popper";

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  offset?: [number, number];
};

const Tooltip = ({
  children,
  content,
  className = "",
  offset = [0, 10],
}: Props) => {
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
      { name: "offset", options: { offset } },
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
        className={className}
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
          <div className="p-2 bg-stone-800 text-sm border border-stone-700 text-center whitespace-nowrap">
            {content}
          </div>
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};

export default Tooltip;
