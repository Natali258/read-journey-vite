import s from 'styled-components';
import Icon from '../Icon/Icon';
import { breakpoints } from '../../breakpoints ';

export const PaginationContainerBtn = s.div`
// position: absolute;
// top: 6%;
// right: 40px;
margin-left: auto;
display: flex;
gap: 8px

`
export const PaginationBtn = s.button`
width: 32px;
height: 32px;
border-radius: 50%;
border: 1px solid var(--focus-word-color);
background-color: var(--container-background-color);
color: var(--focus-word-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--container-background-color);}
@media (min-width: ${breakpoints.tablet}) {
    width: 40px;
    height: 40px;
}
`
export const PaginationBtnIcon = s(Icon)`
  width: 16px;
  height: 16px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`