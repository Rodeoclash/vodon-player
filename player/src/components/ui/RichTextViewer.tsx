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

  return (
    <div className="bg-stone-900 p-4">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
