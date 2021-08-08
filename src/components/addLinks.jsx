import { useState } from 'react';
import { BiLink, BiUnlink } from 'react-icons/bi';
import { Modal } from './modal';

export const AddLinks = ({ editor }) => {
  const [modal, showModal] = useState(false);

  if (!editor) {
    return null;
  }

  const setLink = (URL) => {
    URL && editor.chain().focus().extendMarkRange('link').setLink({ href: URL }).run();
  };

  return (
    <>
      <button onClick={() => showModal(true)} className={editor.isActive('link') ? 'btn btn-active' : 'btn'}>
        <BiLink />
      </button>
      {editor.isActive('link') && (
        <button onClick={() => editor.chain().focus().unsetLink().run()} className={editor.isActive('link') ? 'btn btn-active' : 'btn'}>
          <BiUnlink />
        </button>
      )}
      {modal && <Modal setLink={setLink} showModal={showModal} heading={'Add hyperlink'} />}
    </>
  );
};
