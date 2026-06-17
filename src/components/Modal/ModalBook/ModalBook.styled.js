import { NavLink } from 'react-router-dom';
import s from 'styled-components';
import { breakpoints } from '../../../breakpoints ';

export const ModalBookContainer = s.div`
display: flex;
flex-direction: column;
align-items: center;
// margin: 40 58px 40 58px;
@media (min-width: ${breakpoints.tablet}) {
    margin: 0 100px 0 100px;
}
`

export const ModalBookImg = s.img`
width: 140px;
height: 213px;
border-radius: 8px;
@media (min-width: ${breakpoints.tablet}) {
    width: 153px;
    height: 233px;
}
`

export const ModalBookName = s.p`
width: 140px;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
margin-top: 16px;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
text-align: center;
@media (min-width: ${breakpoints.tablet}) {
    width: 153px;
    font-size: 20px;
}
`

export const ModalBookAuthor = s.p`
margin-top: 2px;
font-weight: 500;
font-size: 12px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color)
@media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
}
`

export const ModalBookPage = s.p`
margin-top: 4px;
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color)`

export const ModalBookBtn = s.button`
margin-top: 20px;
border: 1px solid var(--border-color);
border-radius: 30px;
padding: 12px 24px;
background-color: var(--container-background-color);
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: 0.02em;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
@media (min-width: ${breakpoints.tablet}) {
    margin-top: 32px;
    padding: 14px 28px;
    font-size: 16px;
    line-height: 113%;
}    
`

export const ModalBookNavLink = s(NavLink)`
margin-top: 32px;
border: 1px solid var(--border-color);
border-radius: 30px;
padding: 14px 28px;
background-color: var(--container-background-color);
text-decoration: none;
font-family: var(--font-family);
font-weight: 700;
font-size: 16px;
line-height: 113%;
letter-spacing: 0.02em;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}`