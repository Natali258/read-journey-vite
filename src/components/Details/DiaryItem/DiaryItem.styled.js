import s from 'styled-components'
import Icon from '../../Icon/Icon'
import { breakpoints } from '../../../breakpoints '

export const DiaryContainerLi = s.li`
    display: flex;
`
export const DiaryIconItem = s(Icon)`
  width: 16px;
  height: 16px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`
export const DiaryIconItemBtn = s(Icon)`
  width: 14px;
  height: 14px;
//   @media (min-width: ${breakpoints.tablet}) {
//     width: 20px;
//     height:20px;
//   }
`

export const DiaryIcon = s.div`
    display: inline-block;
    margin-right: 10px;
`
export const DiaryContainerData = s.div`
    display: inline-block;
    // margin-right: 86px;
`
export const DiaryData = s.div`
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 113%;
    letter-spacing: 0.02em;
    color: var(--main-text-color);
    margin-bottom: 29px;
`
export const DiaryPercent = s.div`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--main-text-color);
    margin-bottom: 8px;
`
export const DiaryMinutes = s.div`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
`
export const DiaryContainerPage = s.div`
    display: inline-block;
    wirdth: 59px;
    margin-right: 8px;
    margin-left: auto;
`
export const DiaryPages = s.div`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    margin-bottom: 30px;
`
export const DiaryPerPages = s.div`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    margin-top: 7px;
`
export const DiaryBtn = s.button`
    text-align: center;
`