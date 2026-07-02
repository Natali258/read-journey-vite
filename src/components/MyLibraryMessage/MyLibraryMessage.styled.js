import s from 'styled-components';
import { breakpoints } from '../../breakpoints ';

export const MyLibraryMessageContainer = s.div`
width: 197px;
margin: auto;
margin-top: 63px;
margin-bottom: 60px;
@media (min-width: ${breakpoints.tablet}) {
    width: 274px;
    margin-top: 86px;
    margin-bottom: 120px;
    
}
@media (min-width: ${breakpoints.desctop}) {
    margin-top: 147px;
    margin-bottom: 192px;
}
`

export const MyLibraryMessageCircle = s.div`
display:flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
border-radius: 50%;
background-color: var(--select-background-color);
margin: 0 auto;
@media (min-width: ${breakpoints.tablet}) {
    width: 130px;
    height: 130px;
}
`
export const MyLibraryMessageImg = s.img`
width: 50px;
height: 50px;
@media (min-width: ${breakpoints.tablet}) {
    width: 70px;
    height: 70px;
}
`
export const MyLibraryMessageText = s.p`
margin-top: 10px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    margin-top: 20px;
}
`
export const MyLibraryMessageTextSpan = s.span`
color: var(--grey-text-color);
`