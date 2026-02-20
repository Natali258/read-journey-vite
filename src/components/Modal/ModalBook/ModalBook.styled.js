import s from 'styled-components';

export const ModalBookContainer = s.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 100px 0 100px;`

export const ModalBookImg = s.img`
// width: 100%;
border-radius: 8px;`

export const ModalBookName = s.p`
margin-top: 16px;
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);`

export const ModalBookAuthor = s.p`
margin-top: 2px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color)`

export const ModalBookPage = s.p`
margin-top: 4px;
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color)`

export const ModalBookBtn = s.button`
margin-top: 32px;
border: 1px solid var(--border-color);
border-radius: 30px;
padding: 14px 28px;
background-color: var(--container-background-color);
// width: 162px;
// height: 46px;
// 
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

;
