import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { JSONContent } from "@tiptap/react";

type Props = {
  onUpdate: (content: JSONContent) => void;
};

const Editor = ({ onUpdate }: Props) => {
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: "<p>Test World!</p>",
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

export default Editor;
