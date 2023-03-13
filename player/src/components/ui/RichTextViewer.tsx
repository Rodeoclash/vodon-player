import * as React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { JSONContent } from "@tiptap/react";

type Props = {
  content: JSONContent;
};

const Editor = ({ content }: Props) => {
  const editor = useEditor({
    autofocus: false,
    editable: false,
    extensions: [StarterKit],
    content,
  });

  React.useEffect(() => {
    if (!editor) {
      return;
    }

    editor.commands.setContent(content);
  }, [content]);

  return <EditorContent editor={editor} />;
};

export default Editor;
