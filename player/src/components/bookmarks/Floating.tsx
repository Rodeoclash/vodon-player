import * as React from "react";
import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";

import Draggable from "react-draggable";

import Show from "components/bookmarks/Show";
import Edit from "components/bookmarks/Edit";
import Container from "components/bookmarks/Container";

type Props = {
  bookmark: Bookmark;
};

const Floating = observer(({ bookmark }: Props) => {
  const nodeRef = React.useRef(null);

  const renderedContents = (() => {
    if (bookmark.editingInProgress === true) {
      return (
        <Container key={bookmark.id} bookmark={bookmark}>
          <Edit bookmark={bookmark} />
        </Container>
      );
    } else {
      return (
        <Container key={bookmark.id} bookmark={bookmark}>
          <Show bookmark={bookmark} />
        </Container>
      );
    }
  })();

  const style = {
    backgroundImage:
      "linear-gradient(45deg, #0c4a6e 25%, #075985 25%, #075985 50%, #0c4a6e 50%, #0c4a6e 75%, #075985 75%, #075985 100%)",
    backgroundSize: "56.57px 56.57px",
  };

  return (
    <Draggable handle=".floating-drag-handle" bounds="parent" nodeRef={nodeRef}>
      <div className="w-96 pointer-events-auto bg-zinc-800" ref={nodeRef}>
        <div style={style} className="cursor-move h-6 floating-drag-handle" />
        <div>{renderedContents}</div>
      </div>
    </Draggable>
  );
});

export default Floating;
