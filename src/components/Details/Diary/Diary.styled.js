import s from 'styled-components'
import { breakpoints } from '../../../breakpoints '
import Icon from '../../Icon/Icon'

export const DiaryContainer = s.div`
  display: flex;
  margin-top: 20px;
  flex: 1;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}) {
      margin-top: 0;
  }
`
export const DiaryHeaderContainer = s.div`
  display: flex;
`
export const DiaryTitle = s.p`
display: inline-block;

font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`
export const DiaryIconContainer = s.div`
  display: inline-flex;
  margin-left:auto;
  gap: 8px;
`
export const DiaryIcon = s(Icon)`
  width: 16px;
  height:16px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 20px;
    height:20px;
  }
`
// export const DiaryIcon2 = s(Icon)`
//   width: 16px;
//   height:16px;
//   @media (min-width: ${breakpoints.tablet}) {
//     width: 20px;
//     height:20px;
//   }
// `
export const DiaryUl = s.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 12px;
  background-color: var(--select-background-color);
  padding: 20px;
  margin-top: 20px;
`