import { useState } from 'react';
import { GrImage } from 'react-icons/gr';
import { Modal } from './modal';

export const AddImages = ({ editor }) => {
  const [modal, showModal] = useState(false);

  if (!editor) {
    return null;
  }

  const setImage = (URL) => {
    URL && editor.chain().focus().setImage({ src: URL }).run();
  };

  return (
    <>
      <button onClick={() => showModal(true)} className="btn">
        <GrImage />
      </button>
      {modal && <Modal setLink={setImage} showModal={showModal} heading={'Add image'} />}
    </>
  );
};
