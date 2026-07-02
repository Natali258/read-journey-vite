import s from 'styled-components'
import { breakpoints } from '../../breakpoints '

export const MyLibraryBooksContainer = s.div`
// position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 40px 20px;
border-radius: 30px;
background-color: var(--container-background-color);
@media (min-width: ${breakpoints.tablet}) {
  padding: 40px; 
  min-height: 518px; 
  justify-content: normal;
}
@media (min-width: ${breakpoints.desktop}) {
  min-height: 651px;
  min-width: 847px;

}
`
export const MyLibraryHeaderRow = s.div`
display: flex;
flex-direction: row;
justify-content: space-between; 
`
export const MyLibraryBooksTitle = s.p`
display: inline-block;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    font-size: 28px;
    line-height: 114%;   
}
`

export const MyLibraryBooksList = s.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 21px;
margin-top: 22px;
@media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 28px;
}
@media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}`