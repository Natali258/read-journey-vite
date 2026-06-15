import s from 'styled-components'
import { breakpoints } from '../../breakpoints '

export const DashboardContainer = s.div`
display: flex;
padding: 20px;
flex-direction: column;
gap: 20px;
border-radius: 30px;
background-color: var(--container-background-color);
@media (min-width: ${breakpoints.tablet}) {
    padding: 40px 20px 20px 20px;
}
`
