import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StlRegisterContainer = styled.div`
position: relative;
flex:1;
/* width: 600px; */
/* height: 736px; */
padding: 40px 64px 40px 64px;
border: 1px solid var(--container-background-color);
border-radius: 30px;
box-sizing: border-box
`

export const StlTitleRegister = styled.h1`
display: block;
margin: 0 auto;
margin-top: 107px;

font-family: Gilroy;
font-weight: 700;
font-style: Bold;
font-size: 64px;
line-height: 60px;
letter-spacing: 2%;

span {
    display:block;
}
`

export const StlFormRegister = styled.form`
display:flex;
flex-direction: column;
width: 100%;
margin-top: 40px;
`

export const StlFieldsRegister = styled.div`
display:flex;
flex-direction: column;
gap: 14px;
width: 100%;
`

export const StlInputRegister = styled.input`
padding: 16px 14px 16px 14px;
border-radius: 12px;
border: 1px solid var(--container-background-color)
`

export const StlBtnRegister = styled.button`
margin-top: 82px;
width: 225px;
padding: 16px 54px 16px 54px;
border-radius: 30px;
border:1px solid var(--container-background-color);

font-family: Gilroy;
font-weight: 700;
font-style: Bold;
font-size: 20px;
line-height: 20px;
letter-spacing: 2%;
`

export const StlNavLinkLogin = styled(NavLink)`
position: absolute;
bottom: 57px;
left: 310px;

font-family: Gilroy;
font-weight: 500;
font-style: Medium;
font-size: 14px;
line-height: 18px;
letter-spacing: -2%;
color: var(--grey-text-color)
`