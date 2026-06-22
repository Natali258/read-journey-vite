import s from 'styled-components';
import { breakpoints } from '../../breakpoints ';

export const LibraryPageContainer = s.div`
display: flex;
flex-direction: column;
gap: 10px;
@media (min-width: ${breakpoints.tablet}) {
   
}
    @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding-top: 16px;
}
`