import s from 'styled-components'

export const MyLibraryBooksContainer = s.div`
position: relative;
// display: flex;

padding: 40px;
border-radius: 30px;
background-color: var(--container-background-color);
min-width: 847px;`

export const MyLibraryBooksTitle = s.p`
display: inline-block;
font-family: var(--font-family);
font-weight: 700;
font-size: 28px;
line-height: 114%;
letter-spacing: 0.02em;
color: var(--main-text-color);`

export const MyLibraryBooksList = s.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 24px;
margin-top: 28px;`