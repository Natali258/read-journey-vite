import { NavLink } from 'react-router-dom';
import s from 'styled-components';

export const DescriptionContainer = s.div`
padding: 20px;
background-color: var(--select-background-color);
border-radius: 12px;
`

export const DescriptionTitle = s.p`
display: block;
font-family: Gilroy;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
`

export const DescriptionList = s.ul`
display: flex;
flex-direction: column;
gap: 20px;
padding-right: 20px;
margin: 40px 0 26px 0`

export const DescriptionItem = s.li`
display: flex;
gap: 12px;
flex-direction: row;`

export const DescriptionItemNumber = s.div`
display: inline-block;
width: 44px;
height: 44px;
border-radius: 50%;
background-color: var(--main-text-color);
// color: white;

font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 200%;
letter-spacing: -0.02em;
text-align: center;
color: #1f1f1f;`

export const DescriptionItemText = s.p`
display: inline-block;
font-family: var(--font-family);
font-weight: 500;
font-size: 15px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color);`

export const DescriptionItemSpan = s.span`
color: var(--main-text-color);`

export const DescriptionLinkContainer = s.div`
display: flex;
`

export const DescriptionNavLink = s(NavLink)`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 200%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color)`

export const DescriptionLogoSpan = s.span`
display: inline-block;
margin-left: auto;
`



