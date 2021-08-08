import { GrBold, GrItalic, GrUnderline } from 'react-icons/gr';

export const AddTextStyles = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'btn btn-active' : 'btn'}>
        <GrBold />
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'btn btn-active' : 'btn'}>
        <GrItalic />
      </button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'btn btn-active' : 'btn'}>
        <GrUnderline />
      </button>
    </>
  );
};
