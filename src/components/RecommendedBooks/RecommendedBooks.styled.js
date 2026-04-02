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

export const RecommendedList = s.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 24px;
margin-top: 28px;`

