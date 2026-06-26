import React from 'react'
import { NavMenu } from '../NavMenu/NavMenu';
import { Backdrop, CloseBtn, Menu, NavMenuCountainer, StlBtnLogOut } from './MobileMenu.styled';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../../redux/authSlice/operations';
import { useDispatch } from 'react-redux';

export const MobileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const logOut = () => {
      dispatch(logoutThunk());
    };
 
  return (
    <Backdrop isOpen={isOpen} onClick={onClose}>
      <Menu
        isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={onClose}>✕</CloseBtn>
        <NavMenuCountainer>
          <NavMenu/>
          <StlBtnLogOut onClick={logOut}>Log out</StlBtnLogOut>
        </NavMenuCountainer>
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