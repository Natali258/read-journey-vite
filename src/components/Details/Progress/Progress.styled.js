import s from 'styled-components'

export const ProgressContainer = s.div`
display: block;`

export const ProgressTitle = s.p`
display: block;
margin-top: 20px;
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color)`

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
margin-top: 60px;
margin-bottom: 183px;
width: 100px;
height: 100px;
border-radius: 50%;
background-color: var(--select-background-color)`

export const ProgressImg = s.img`

`