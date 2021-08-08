import { useState } from 'react';

export const Modal = ({ setLink, showModal, heading }) => {
  const [URL, setURL] = useState('');

  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">{heading}</div>
          <div className="modal-content">
            <input type="text" onChange={(e) => setURL(e.target.value)} />
            <div className="modal-actions">
              <button
                className="add"
                onClick={() => {
                  setLink(URL);
                  showModal(false);
                }}
              >
                Add
              </button>
              <button
                onClick={() => {
                  setLink('');
                  showModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
