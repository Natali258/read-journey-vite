import s from 'styled-components'

export const StatisticsContainer= s.div`
display: flex;
gap: 20px;
flex-direction: column;
margin-top: 20px;
`
export const StatisticsContainerHeader= s.div`
display: flex;
`
export const StatisticsTitle = s.p`
display: inline-block;
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
`
export const StatisticsContainerIcon = s.ul`
display: inline-flex;
gap: 8px;
margin-left: auto;
`
export const StatisticsText = s.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
`