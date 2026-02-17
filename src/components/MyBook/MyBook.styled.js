import s from 'styled-components';

export const MyBookContainer = s.div`
display: flex;
flex-direction: column;
gap: 44px;
padding: 40px;
border-radius: 30px;
background-color: var(--container-background-color);
min-width: 847px;
`
export const MyBookTitle = s.h2`
font-family: var(--font-family);
font-weight: 700;
font-size: 28px;
line-height: 114%;
letter-spacing: 0.02em;
color: var(--main-text-color);`

export const MyBookBox = s.div`
text-align: center;
`

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

// Button

export const IconButton = s.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.08);
  }
`;

export const Inner = s.div`
  width: 40px;
  height: 40px;
  background: #ff0000;
  border-radius: 50%;
  transition: transform 200ms ease;

  ${IconButton}:focus & {
    width: 18px;
    height: 18px;
    background: #ff0000;
    border-radius: 4px;
    transform: scale(1.15) rotate(90deg);
  }
`;
