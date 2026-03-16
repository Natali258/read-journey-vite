import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StlLoginContainer = styled.div`
position: relative;
flex:1;
padding: 40px 64px 40px 64px;
border-radius: 30px;
box-sizing: border-box;
background-color: var(--container-background-color);
`

export const StlTitleLogin = styled.h1`
display: block;
margin: 0 auto;
margin-top: 107px;

font-family: Gilroy;
font-weight: 700;
font-style: Bold;
font-size: 64px;
line-height: 60px;
letter-spacing: 2%;
color: var(--main-text-color);

span {
    display:block;
    color: var(--focus-word-color);
}
`

export const StlFormLogin = styled.form`
display:flex;
flex-direction: column;
width: 100%;
margin-top: 40px;
`

export const StlFieldsLogin = styled.div`
display:flex;
flex-direction: column;
gap: 14px;
width: 100%;
`

export const StlInputLogin = styled.input`
padding: 16px 14px 16px 14px;
border-radius: 12px;
background-color: var(--select-background-color);
border: none;
color: var(--main-text-color);

&:hover, &:focus-visible {
    
    border: 1px solid var(--container-background-color);
}
`

export const StlBtnLogin = styled.button`
margin-top: 146px;
width: 225px;
padding: 16px 54px 16px 54px;
border-radius: 30px;
border:1px solid var(--border-color);
background-color: var(--container-background-color);
color: var(--main-text-color);

font-family: Gilroy;
font-weight: 700;
font-style: Bold;
font-size: 20px;
line-height: 20px;
letter-spacing: 2%;

&:hover {
    border: none;
    background-color: var(--main-text-color);
    color: var(--select-background-color);
}
`

export const StlNavLinkRegister = styled(NavLink)`
position: absolute;
bottom: 57px;
left: 310px;

font-family: Gilroy;
font-weight: 500;
font-style: Medium;
font-size: 14px;
line-height: 18px;
letter-spacing: -2%;
color: var(--grey-text-color);

&:hover {
    color: var(--main-text-color);
}
`