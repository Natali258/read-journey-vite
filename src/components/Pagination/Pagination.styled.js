import s from 'styled-components';

export const PaginationContainerBtn = s.div`
position: absolute;
top: 6%;
right: 40px;
display: flex;
gap: 8px

`
export const PaginationBtn = s.button`
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