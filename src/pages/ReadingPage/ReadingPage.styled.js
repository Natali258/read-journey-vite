import s from 'styled-components';
import { breakpoints } from '../../breakpoints ';

export const ReadingPageContainer = s.div`
display: flex;
flex-direction: column;
gap: 10px;
padding-top: 10px;
@media (min-width: ${breakpoints.tablet}) {
    gap: 16px;
    padding-top: 16px;
}
@media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    
}
`