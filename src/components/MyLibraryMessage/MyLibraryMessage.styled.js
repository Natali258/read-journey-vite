import s from 'styled-components';

export const MyLibraryMessageContainer = s.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export const MyLibraryMessageCircle = s.div`
display:flex;
align-items: center;
justify-content: center;
width: 130px;
height: 130px;
border-radius: 50%;
background-color: var(--select-background-color);
margin: 0 auto;
`
export const MyLibraryMessageImg = s.img`
width: 70px;
height: 70px;
`
export const MyLibraryMessageText = s.p`
margin-top: 20px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color);
`
export const MyLibraryMessageTextSpan = s.span`
color: var(--grey-text-color);
`