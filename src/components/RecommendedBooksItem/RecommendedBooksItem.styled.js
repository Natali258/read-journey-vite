import s from 'styled-components';
import { breakpoints } from '../../breakpoints ';

export const RecommendedItem = s.li`
width: 100%;
// height: 247px;

@media (min-width: ${breakpoints.tablet}) {
  width: 137px;
  height: 247px;
  &:hover {
    transform: scale(1.08);
  }
}
@media (min-width: ${breakpoints.desktop}) {
  &:hover {
    transform: scale(1.08);
  }
}     
`

export const RecommendedBtnImg = s.button`
width: 100%;
cursor: pointer;
border: none;
`

export const RecommendedImg = s.img`
width: 100%;
// width: 137px;
height: 208px;
border-radius: 8px;`

export const RecommendedBookBox = s.div`
width: 89px;
display: inline-block;`

export const RecommendedBooksName = s.h2`
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color);
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;`

export const RecommendedBooksWriter = s.p`
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color)`

export const RecommendedBooksDltBtn = s.button`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: var(--red-bground-color);
border: 1px solid var(--red-boder-color);
margin-left: 20px;`