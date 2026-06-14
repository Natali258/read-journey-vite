import React from 'react'
import { NavMenu } from '../NavMenu/NavMenu';
import { Backdrop, CloseBtn, Menu } from './MobileMenu.styled';

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <Backdrop isOpen={isOpen} onClick={onClose}>
      <Menu
        isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={onClose}>✕</CloseBtn>
        <NavMenu/>

        {/* <NavLink to="/" onClick={onClose}>Home</NavLink>
        <NavLink to="/library" onClick={onClose}>My library</NavLink> */}
      </Menu>
    </Backdrop>
  );
};



// import { createPortal } from "react-dom";

// export const MobileMenu = ({ isOpen, onClose }) => {
//   // if (!isOpen) return null;

//   return createPortal(
//     <Backdrop isOpen={isOpen} onClick={onClose}>
//       <Menu onClick={(e) => e.stopPropagation()}>
//         <button onClick={onClose}>✕</button>
//         Menu
//       </Menu>
//     </Backdrop>,
//     document.body
//   );
// };