import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: "<p>Test World!</p>",
  });

  return (
    <div className="bg-stone-700">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
