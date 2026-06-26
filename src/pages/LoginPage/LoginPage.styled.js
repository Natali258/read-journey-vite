import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlLoginSectionsContainer = styled.div`
display: flex;
gap: 10px;
flex-direction: column;
@media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
@media (min-width: ${breakpoints.desktop}) {
    display: flex;
    gap: 16px;
    flex-direction: row;
    margin: 32px;
  }
`