import s from 'styled-components';
import { breakpoints } from '../../../breakpoints ';

export const AddBookContainer = s.div`
width: 100%;`

export const AddBookTitle = s.p`
margin-left: 14px;
margin-bottom: 8px;

font-family: Gilroy;
font-weight: 500;
font-style: Medium;
font-size: 14px;
leading-trim: NONE;
line-height: 18px;
letter-spacing: -2%;
color: var(--main-text-color);`

export const AddBookForm = s.form`
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;`

export const AddBookInput = s.input`
// display: block;
// width: 100%;
box-sizing: border-box;
padding: 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: 1px solid transparent;
color: var(--main-text-color);

font-weight: 500;
font-size: 12px;
line-height: 120%;
letter-spacing: -0.02em;

&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}
@media (min-width: ${breakpoints.tablet}) {
    padding: 16px 14px;
    font-size: 14px;
}     
`

export const AddBookBtn = s.button`
padding: 10px 20px;
align-self: flex-start;
background-color: var(--container-background-color);
border-radius: 30px;
border: 1px solid var(--border-color);
margin-top: 12px;

font-weight: 700;
font-size: 14px;
line-height: 118%;
letter-spacing: 0.5%;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
@media (min-width: ${breakpoints.tablet}) {
    padding: 12px 28px;
    font-size: 16px;
}
`