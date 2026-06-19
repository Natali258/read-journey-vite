import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlLoginContainer = styled.div`
    padding: 20px 20px 40px 20px;
    border-radius: 30px;
    box-sizing: border-box;
    background-color: var(--container-background-color);
    margin: 0 auto;
    flex:1;
    @media (min-width: ${breakpoints.tablet}) {
        padding: 40px 64px 214px 64px;
    };
    @media (min-width: ${breakpoints.desktop}) {
        padding: 40px 64px 40px 64px;
    };
`

export const StlTitleLogin = styled.h1`
display: block;
margin: 0 auto;
margin-top: 40px;

font-weight: 700;
font-size: 32px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
span {
    color: var(--focus-word-color);
}

@media (min-width: ${breakpoints.tablet}) {
    margin-top: 157px;
    font-style: Bold;
    font-size: 64px;
    line-height: 60px;
    letter-spacing: 2%;
    color: var(--main-text-color);

    span {
        display:block;
        color: var(--focus-word-color);
    }
}
@media (min-width: ${breakpoints.desktop}) {
    margin-top: 107px;
}
`

export const StlFormLogin = styled.form`
width: 100%;
margin-top: 20px;
@media (min-width: ${breakpoints.tablet}) {
    margin-top: 40px;
}
`

export const StlFieldsLogin = styled.div`
display:flex;
flex-direction: column;
gap: 8px;
width: 100%;
@media (min-width: ${breakpoints.tablet}) {
    gap: 14px;
}
`

export const StlInputLogin = styled.input`
padding: 14px;
border-radius: 12px;
background-color: var(--select-background-color);
border: 1px solid transparent;
color: var(--main-text-color);

&:hover, &:focus-visible {
    border: 1px solid var(--container-background-color);
}
@media (min-width: ${breakpoints.tablet}) {
    padding: 16px 14px 16px 14px;
}
`
export const StlLinkLogin = styled.div`
margin-top: 72px;
display:flex;
flex-direction: row;
align-items: center;
@media (min-width: ${breakpoints.tablet}) {
    margin-top: 146px;
}
`

export const StlBtnLogin = styled.button`
width: 140px;
padding: 12px 29px;
border-radius: 30px;
border:1px solid var(--border-color);
background-color: var(--container-background-color);

font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: 0.02em;
color: #1f1f1f;
color: var(--main-text-color);

&:hover {
    border: 1px solid transparent;
    background-color: var(--main-text-color);
    color: var(--select-background-color);
}
@media (min-width: ${breakpoints.tablet}) {
    width: 225px;
    padding: 16px 54px 16px 54px;

    font-style: Bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 2%;
}
`

export const StlNavLinkRegister = styled(NavLink)`
display: inline-block;
margin-left: auto;
font-weight: 500;
font-size: 12px;
line-height: 117%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color);
&:hover {
    color: var(--main-text-color);
}
@media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
    line-height: 18px;
}
`