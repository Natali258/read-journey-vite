import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlMainLayoutContainer = styled.main`
max-width: 375px;
margin: 0 auto;
padding: 20px;
    @media (min-width: ${breakpoints.tablet}) {
        max-width: 768px;
        padding: 40px 64px 214px 64px;
    };
    @media (min-width: ${breakpoints.desktop}) {
        max-width: 1440px;
        padding: 40px 64px 40px 64px;
    };
`