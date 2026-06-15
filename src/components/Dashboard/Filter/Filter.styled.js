import s from 'styled-components';
import { breakpoints } from '../../../breakpoints ';

export const FilterContainer = s.div`
width: 100%;`

export const FilterTitle = s.p`
margin-left: 14px;
margin-bottom: 8px;

font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -2%;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
}
`
export const FilterForm = s.form`
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;
`
export const FilterInput = s.input`
box-sizing: border-box;
padding: 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: 1px solid transparent;
color: var(--main-text-color);
font-size: 12px;
&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}
@media (min-width: ${breakpoints.tablet}) {
    padding: 16px 14px;
    font-size: 14px;
} 
`

export const FilterBtn = s.button`
padding: 10px 20px;
align-self: flex-start;
background-color: var(--container-background-color);
border-radius: 30px;
border: 1px solid var(--border-color);
margin-top: 12px;

font-weight: 700;
font-size: 14px;
line-height: 18px;
letter-spacing: 2%;
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