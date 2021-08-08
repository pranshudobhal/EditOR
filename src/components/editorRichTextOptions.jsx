import { AddImages } from './addImages';
import { AddLinks } from './addLinks';
import { AddTextStyles } from './addTextStyles';

export const EditorRichTextOptions = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-buttons">
      <AddTextStyles editor={editor} />
      <AddLinks editor={editor} />
      <AddImages editor={editor} />
    </div>
  );
};
