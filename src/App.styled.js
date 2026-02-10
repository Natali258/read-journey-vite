import s from 'styled-components';
import { breakpoints } from './breakpoints ';

export const AppContainer = s.div`
/* base — від 320px (гумова) */
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  /* від 375px — адаптивна */
  @media (min-width: ${breakpoints.mobile375}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  /* tablet */
  @media (min-width: ${breakpoints.tablet}) {
    padding: 32px;
    background-color: var(--body-background-color)
  }

  /* desktop */
  @media (min-width: ${breakpoints.desktop}) {
    margin-left: auto;
    margin-right: auto;
  }`

  console.log(breakpoints.desktop);
  