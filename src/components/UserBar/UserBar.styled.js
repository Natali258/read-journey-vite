import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlUserContainer = styled.div`
display:inline-flex;
margin-left: auto;
/* margin-left: 219px; */
gap: 8px;
`

export const StlUserPhoto = styled.span`
display:block;
width: 40px;
height: 40px;
border-radius: 50%;
border: 1px solid var(--focus-word-color);
color: var(--main-text-color);
text-align: center;
line-height: 40px;
`
export const StlUserName = styled.span`
display:none;
@media (min-width: ${breakpoints.tablet}) {
    display:block;
    color: var(--main-text-color);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 250%;
    letter-spacing: -0.02em;
    text-align: center;
}

`