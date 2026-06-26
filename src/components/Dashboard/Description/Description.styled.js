import { NavLink } from 'react-router-dom';
import s from 'styled-components';
import { breakpoints } from '../../../breakpoints ';
import Icon from '../../Icon/Icon';

export const DescriptionContainer = s.div`
padding: 20px;
background-color: var(--select-background-color);
border-radius: 12px;
`

export const DescriptionTitle = s.p`
display: block;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
} 
`

export const DescriptionList = s.ul`
display: flex;
flex-direction: column;
gap: 20px;
margin: 20px 0 20px 0;
@media (min-width: ${breakpoints.tablet}) {
    margin: 40px 0 26px 0;
    padding-right: 20px;
} 
`

export const DescriptionItem = s.li`
display: flex;
gap: 12px;
flex-direction: row;`

export const DescriptionItemNumber = s.div`
flex-shrink: 0;
display: block;
width: 44px;
height: 44px;
border-radius: 50%;
background-color: var(--main-text-color);

font-weight: 700;
font-size: 18px;
line-height: 200%;
letter-spacing: -0.02em;
text-align: center;
@media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
} 
`

export const DescriptionItemText = s.p`
display: inline-block;
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
@media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
}
`
export const DescriptionItemSpan = s.span`
color: var(--main-text-color);`

export const DescriptionLinkContainer = s.div`
display: flex;
`
export const DescriptionNavLink = s(NavLink)`
font-weight: 500;
font-size: 14px;
line-height: 200%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color);
&:hover {
    color: var(--main-text-color);}`

export const DescriptionLogoSpan = s.span`
display: inline-block;
margin-left: auto;
`
export const DescriptionIcon = s(Icon)`
  width: 20px;
  height: 20px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`



