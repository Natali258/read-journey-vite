import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlAuthLayoutContainer = styled.main`
max-width: 375px;
min-height: 100%;
margin: 0 auto;
    @media (min-width: ${breakpoints.tablet}) {
        max-width: 768px;
    };
    @media (min-width: ${breakpoints.desktop}) {
        max-width: 1440px;
    };
`
