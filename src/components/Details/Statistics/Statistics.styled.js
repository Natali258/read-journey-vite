import s from 'styled-components'
import { breakpoints } from '../../../breakpoints '
import Icon from '../../Icon/Icon'

export const StatisticsContainer= s.div`
display: flex;
gap: 20px;
flex-direction: column;
margin-top: 20px;
flex: 1;
@media (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
}
`
export const StatisticsContainerHeader= s.div`
display: flex;
`
export const StatisticsTitle = s.p`
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
export const StatisticsContainerIcon = s.ul`
display: inline-flex;
gap: 8px;
margin-left: auto;
`
export const StatisticsIcon = s(Icon)`
  width: 16px;
  height:16px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 20px;
    height:20px;
  }
`
export const StatisticsText = s.p`
display: none;
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
@media (min-width: ${breakpoints.desktop}) {
      display: block;
  }
`
export const StatisticsProgressContainer = s.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
border-radius: 12px;
background-color: var(--select-background-color);
padding: 31px 0 20px 0;
`
export const StatisticsCircleContainer = s.div`
position: relative;
`
export const StatisticsTextContainer = s.div`
display: flex;
flex-direction: row;
gap: 15px;
`
export const StatisticsGreen = s.div`
border-radius: 4px;
width: 14px;
height: 14px;
background-color: var(--green-color);
`
export const StatisticsProgress = s.span`
font-weight: 500;
font-size: 20px;
line-height: 0%;
letter-spacing: -0.02em;
color: var(--main-text-color);
`
export const StatisticsProgressPage = s.p`
font-weight: 500;
font-size: 12px;
line-height: 117%;
letter-spacing: -0.02em;
text-align: center;
color: var(--grey-text-color);
margin-top: 8px;
`
export const StatisticsTotalProgress = s.span`
position: absolute;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`