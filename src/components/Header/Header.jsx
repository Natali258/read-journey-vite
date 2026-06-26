import React, { useState } from "react";

import { NavMenu } from "../NavMenu/NavMenu";
import Logo from "../Logo/Logo";
import { UserBar } from "../UserBar/UserBar";
import {
  BurgerBtn,
  StlBtnLogOut,
  StlHeaderContainer,
  StlHeaderNavContainer,
} from "./Header.styled";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/authSlice/operations";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = ({ onMenuClick }) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <StlHeaderContainer>
      <Logo />
      <StlHeaderNavContainer>
        <NavMenu />
      </StlHeaderNavContainer>
      <UserBar />
      <StlBtnLogOut onClick={logOut}>Log out</StlBtnLogOut>
      <BurgerBtn onClick={onMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerBtn>
      <MobileMenu logOut={logOut}/>
    </StlHeaderContainer>
  );
};
