import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlMainImgContainer = styled.div`
padding: 20px 40px 0 40px;
background-color: var(--container-background-color);
border-radius: 30px;
flex:1;
display: flex;
@media (min-width: ${breakpoints.tablet}) {
    display: none;
};
@media (min-width: ${breakpoints.desktop}) {
    padding: 88px 98px 0 98px;
    background-color: var(--container-background-color);
    border-radius: 30px;
    flex:1;
    display: flex;
};
`
export const StlMainImg = styled.img`
width: 100%;
@media (min-width: ${breakpoints.desktop}) {
    width: auto;
};
`