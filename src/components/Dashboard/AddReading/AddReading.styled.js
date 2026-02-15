import s from 'styled-components'

export const AddReadingContainer = s.div`
display: block;`

export const AddReadingTitle = s.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color);`

export const AddReadingForm = s.form`
display: flex;
flex-direction: column;
gap: 20px;`

export const AddReadingInput = s.input`
box-sizing: border-box;
padding: 16px 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: none;

&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}`

export const AddReadingBtn = s.button`
padding: 12px 28px;
align-self: flex-start;
background-color: var(--container-background-color);
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