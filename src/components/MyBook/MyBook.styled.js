import s from 'styled-components';

export const MyBookContainer = s.div`
position: relative;
display: flex;
flex-direction: column;
gap: 44px;
padding: 40px;
border-radius: 30px;
background-color: var(--container-background-color);
min-width: 847px;
`

export const MyBookBox = s.div`
text-align: center;
`
export const MyBookImg = s.img`
`

export const MyBookTitle = s.h2`
font-family: var(--font-family);
font-weight: 700;
font-size: 28px;
line-height: 114%;
letter-spacing: 0.02em;
color: var(--main-text-color);`

export const MyBookName = s.p`
margin-top: 25px;
margin-bottom: 4px;
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);`

export const MyBookAuthor = s.p`
margin-bottom: 25px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color);`