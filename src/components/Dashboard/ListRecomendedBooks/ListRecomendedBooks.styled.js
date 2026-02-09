import { NavLink } from 'react-router-dom'
import s from 'styled-components'

export const ListRecomendedBooksContainer = s.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
background-color: var(--select-background-color);
border-radius: 12px;
`
export const ListRecomendedBooksTitle = s.p`
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
`
export const ListRecomendedBooksUl = s.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
`
export const ListRecomendedBooksLi = s.li`
// width: 71px;
// height: 141px;
`
export const ListRecomendedBooksImg = s.img`
width: 100%;
// height: 107px;
`
export const ListRecomendedBooksName = s.p`
font-family: var(--font-family);
font-weight: 700;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--main-text-color);
`
export const ListRecomendedBooksWriter = s.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
`
export const ListRecomendedBooksLinkContainer = s.div`
display: flex;
`

export const ListRecomendedBooksNavLink = s(NavLink)`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 200%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color);

&:hover {
    color: var(--main-text-color);}`

export const ListRecomendedBooksLogoSpan = s.span`
display: inline-block;
margin-left: auto;
`