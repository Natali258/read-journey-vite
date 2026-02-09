import s from 'styled-components'

export const RecommendedContainer = s.div`
position: relative;
padding: 40px;
border-radius: 30px;
background-color: var(--container-background-color);
// border: 1px solid black;`

export const RecommendedTitle = s.h1`
font-family: var(--font-family);
font-weight: 700;
font-size: 28px;
line-height: 114%;
letter-spacing: 0.02em;
color: var(--main-text-color)`

export const RecommendedContainerBtn = s.div`
position: absolute;
top: 6%;
right: 40px;
display: flex;
gap: 8px

`
export const RecommendedBtn = s.button`
width: 40px;
height: 40px;
border-radius: 50%;
border: 1px solid var(--focus-word-color);
background-color: var(--container-background-color);
color: var(--focus-word-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--container-background-color);}
`

export const RecommendedList = s.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 24px;
margin-top: 28px;`

export const RecommendedItem = s.li`
width: 137px;
height: 247px;`

export const RecommendedImg = s.img`
width: 100%;
border-radius: 8px;`

export const RecommendedBooksName = s.h2`
font-family: var(--font-family);
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color)`

export const RecommendedBooksWriter = s.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color)`