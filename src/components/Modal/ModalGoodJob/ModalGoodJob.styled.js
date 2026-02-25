import s from 'styled-components';

export const ModalGoodJobCountainer = s.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;`

export const ModalGoodJobImg = s.img`
margin-bottom: 32px;`

export const ModalGoodJobTitle = s.p`
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color);`

export const ModalGoodJobText = s.p`
margin-top: 14px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: var(--grey-text-color);
`

export const ModalGoodJobSpan = s.span`
color: var(--main-text-color);`