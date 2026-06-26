import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlAuthLayoutContainer = styled.main`
position: relative;
width: 100%;
max-width: 375px;
min-height: 100%;
margin: 0 auto;
padding: 20px;
background-color: var(--body-background-color);
    @media (min-width: ${breakpoints.tablet}) {
        max-width: 768px;
        padding: 32px;
    };
    @media (min-width: ${breakpoints.desktop}) {
        max-width: 1440px;
    };
`
