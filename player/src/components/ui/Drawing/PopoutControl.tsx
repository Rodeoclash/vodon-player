import * as React from "react";
import { usePopper } from "react-popper";
import { useOnClickOutside } from "usehooks-ts";

type PropsType = {
  open: boolean;
  children: React.ReactNode;
  popup: React.ReactNode;
  onRequestClose: () => void;
};

const PopoutControl = ({
  children,
  open,
  popup,
  onRequestClose,
}: PropsType) => {
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

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

  useOnClickOutside(outsideClickRef, (event) => {
    onRequestClose();
  });

  return (
    <div ref={outsideClickRef}>
      <div ref={setReferenceElement}>{children}</div>
      {open === true && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {popup}
        </div>
      )}
    </div>
  );
};

export default PopoutControl;
