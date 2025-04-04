"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type EditorProps = {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
};

export function Editor({ value, onChange, className }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
