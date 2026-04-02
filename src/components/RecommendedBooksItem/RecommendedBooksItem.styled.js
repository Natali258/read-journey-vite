import s from 'styled-components';

export const RecommendedItem = s.li`
width: 137px;
height: 247px;

&:hover {
    transform: scale(1.08);
  }`

export const RecommendedBtnImg = s.button`
cursor: pointer;
border: none;

// &:hover {
//     transform: scale(1.08);
//   }`

export const RecommendedImg = s.img`
// width: 100%;
width: 137px;
height: 208px;
border-radius: 8px;`

export const RecommendedBooksName = s.h2`
font-family: var(--font-family);
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color);
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;`

export const RecommendedBooksWriter = s.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color)`