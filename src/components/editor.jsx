import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { EditorRichTextOptions } from './editorRichTextOptions';

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Link, Underline, Placeholder],
    autofocus: 'end',
  });

  return (
    <div className="editor">
      <EditorRichTextOptions editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
