import s from 'styled-components'
import { breakpoints } from '../../../breakpoints '

export const ProgressContainer = s.div`
display: block;`

export const ProgressTitle = s.p`
display: block;
margin-top: 20px;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
}
`

export const ProgressText = s.p`
margin-top: 14px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color)`

export const ProgressImgCircle = s.div`
display:flex;
align-items: center;
justify-content: center;
margin: 0 auto;
margin-top: 20px;
margin-bottom: 20px;
width: 80px;
height: 80px;
border-radius: 50%;
background-color: var(--select-background-color)
@media (min-width: ${breakpoints.tablet}) {
    margin-top: 60px;
    margin-bottom: 183px;
    width: 100px;
    height: 100px;
}
`

export const ProgressImg = s.img`
width: 32px;
height: 32px;
@media (min-width: ${breakpoints.tablet}) {
    width: 50px;
    height: 50px;
}
`