import s from 'styled-components'

export const AddReadingContainer = s.div`
display: block;`

export const AddReadingTitle = s.p`
margin-bottom: 8px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color);`

export const AddReadingForm = s.form`
display: flex;
flex-direction: column;
gap: 20px;
`

export const AddReadingInput = s.input`
box-sizing: border-box;
padding: 16px 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: none;
color: var(--main-text-color);

&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}
 /* 🔥 прибрати стрілочки */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`

export const AddReadingBtn = s.button`
padding: 12px 28px;
align-self: flex-start;
background-color: var(--container-background-color);
border-radius: 30px;
border: 1px solid var(--border-color);

font-family: var(--font-family);
font-weight: 700;
font-size: 16px;
line-height: 113%;
letter-spacing: 0.02em;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
`