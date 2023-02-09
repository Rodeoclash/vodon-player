import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { JSONContent } from "@tiptap/react";

type Props = {
  content: JSONContent;
  onUpdate: (content: JSONContent) => void;
};

const RichTextEditor = ({ content, onUpdate }: Props) => {
  const editor = useEditor({
    autofocus: "end",
    editable: true,
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getJSON());
    },
  });

  return (
    <div className="bg-stone-900 p-4">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
