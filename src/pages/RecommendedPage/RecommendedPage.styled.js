import s from 'styled-components';
import { breakpoints } from '../../breakpoints ';

export const RecommendedPageContainer = s.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 10px;
@media (min-width: ${breakpoints.tablet}) {
    gap: 16px;
    margin-top: 16px;
}
@media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    // max-width: auto;
}
`