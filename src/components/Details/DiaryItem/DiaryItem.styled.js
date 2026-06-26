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
    font-weight: 700;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.02em;
    color: var(--main-text-color);
    margin-bottom: 16px;
@media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
    line-height: 113%;
    margin-bottom: 29px;
  }    
`
export const DiaryPercent = s.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: var(--main-text-color);
    margin-bottom: 4px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 20px;
        line-height: 100%;
        margin-bottom: 8px;
    }
`
export const DiaryMinutes = s.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 12px;
        line-height: 117%;
    }
`
export const DiaryContainerPage = s.div`
    display: inline-block;
    wirdth: 43px;
    margin-right: 8px;
    margin-left: auto;
    @media (min-width: ${breakpoints.tablet}) {
        wirdth: 59px;
    }
`
export const DiaryPages = s.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    margin-bottom: 16px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 14px;
        line-height: 129%;
        margin-bottom: 30px;
    }
`
export const DiaryPerPages = s.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    margin-top: 7px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 12px;
        line-height: 117%;
    }
`
export const DiaryBtn = s.button`
    text-align: center;
`