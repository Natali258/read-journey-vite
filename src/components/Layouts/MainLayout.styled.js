import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlMainLayoutContainer = styled.main`
position: relative;
max-width: 375px;
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