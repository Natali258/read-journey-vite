import s from 'styled-components';

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
padding: 16px 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: none;

&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}`

export const AddBookBtn = s.button`
padding: 12px 28px;
align-self: flex-start;
background-color: var(--body-background-color);
border-radius: 30px;
border: 1px solid var(--border-color);
margin-top: 12px;

font-family: Gilroy;
font-weight: 700;
font-style: Bold;
font-size: 16px;
leading-trim: NONE;
line-height: 18px;
letter-spacing: 2%;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
`