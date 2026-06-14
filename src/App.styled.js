import s from 'styled-components';
import { breakpoints } from './breakpoints ';

export const AppContainer = s.div`
/* base — від 320px (гумова) */
 
  width: 100%;
  padding: 20px;
  background-color: var(--body-background-color);

  /* від 375px — адаптивна */
  @media (min-width: ${breakpoints.mobile375}) {
    width: 375px;
    // padding-left: 20px;
    // padding-right: 20px;
    // background-color: var(--body-background-color);
  }

  /* tablet */
  @media (min-width: ${breakpoints.tablet}) {
    width: 768px;
    padding: 32px;
    // background-color: var(--body-background-color)
  }

  /* desktop */
  @media (min-width: ${breakpoints.desktop}) {
    width: 1440px;
    // margin-left: auto;
    // margin-right: auto;
  }`

  console.log(breakpoints.desktop);
  