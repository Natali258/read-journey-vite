import s from 'styled-components';

export const ModalBookIsReadContainer = s.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;` 
    
export const ModalBookIsReadImg = s.img`
margin-bottom: 32px;`

export const ModalBookIsReadTitle = s.p`
margin-bottom: 14px;
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color);`

export const ModalBookIsReadText = s.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: var(--grey-text-color);`

export const ModalBookIsReadSpan = s.span`
color: var(--main-text-color);`