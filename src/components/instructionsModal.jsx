import { GrBold, GrItalic, GrUnderline, GrImage, GrClose } from 'react-icons/gr';
import { BiLink, BiUnlink } from 'react-icons/bi';

export const InstructionsModal = ({ showModal }) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <h1 className="">Welcome to EditOR</h1>
            <span className="close-btn" onClick={() => showModal(false)}>
              <GrClose />
            </span>
          </div>
          <div className="modal-content">
            <ul className="">
              <li>
                To add/remove <b>bold</b> style, select text and click on{' '}
                <span className="btn btn-active">
                  <GrBold />
                </span>
              </li>
              <li>
                To add/remove <b>italic</b> style, select text and click on{' '}
                <span className="btn btn-active">
                  <GrItalic />
                </span>
              </li>
              <li>
                To add/remove <b>underline</b> style, select text and click on{' '}
                <span className="btn btn-active">
                  <GrUnderline />
                </span>
              </li>
              <li>
                To add <b>hyperlink</b> to existing text, select text and click on{' '}
                <span className="btn btn-active">
                  <BiLink />
                </span>{' '}
                and enter link URL in opened modal.
              </li>
              <li>
                To remove <b>hyperlink</b> from the text, select hyperlinked text and click on{' '}
                <span className="btn btn-active">
                  <BiUnlink />
                </span>
              </li>
              <li>
                To insert an <b>image</b>, click on{' '}
                <span className="btn btn-active">
                  <GrImage />
                </span>
                . To <b>re-order</b> the sequence of images, just drag and drop. To remove an <b>image</b>, click on image and press <b>delete</b> and enter the image URL.
              </li>
              <li>
                To add <b>meme</b>, type {`{{cat_meme}}`} and click on <span className="btn btn-active">Add Meme</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
