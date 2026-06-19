import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlMainImgContainer = styled.div`
max-width: 375px;
margin: 0 auto;
padding: 20px 40px 0 40px;
background-color: var(--container-background-color);
border-radius: 30px;
display: flex;
height: 331px; 
overflow: hidden;
@media (min-width: ${breakpoints.tablet}) {
    display: none;
};
@media (min-width: ${breakpoints.desktop}) {
    max-width: 1440px;
    padding: 88px 98px 0 98px;
    background-color: var(--container-background-color);
    border-radius: 30px;
    flex:1;
    height: 100%;
    display: flex;
};
`
export const StlMainImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
@media (min-width: ${breakpoints.desktop}) {
    width: auto;
    object-fit: none;
};
`