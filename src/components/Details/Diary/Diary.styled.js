import s from 'styled-components'

export const DiaryHeaderContainer = s.div`
  display: flex;
  margin-top: 20px;
`
export const DiaryTitle = s.p`
display: inline-block;

font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
`
export const DiaryIconContainer = s.div`
  display: inline-flex;
  margin-left:auto;
  gap: 8px;
`
export const DiaryUl = s.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 12px;
  background-color: var(--select-background-color);
  padding: 20px;
  margin-top: 20px;
`