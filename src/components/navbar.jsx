import { useState } from 'react';
import logo from '../assets/logo.JPG';
import { InstructionsModal } from './instructionsModal';

export const Navbar = () => {
  const [modal, showModal] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="EditOR" />
      </div>
      <div className="rules">
        <button onClick={() => showModal(true)}>Instructions</button>
      </div>
      {modal && <InstructionsModal showModal={showModal} />}
    </div>
  );
};
