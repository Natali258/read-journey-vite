import s from 'styled-components'
import { breakpoints } from '../../breakpoints ';
import Icon from '../Icon/Icon';

export const SelectFilterBox = s.div`
position: relative;
display: flex;
padding: 12px 14px;
border: 1px solid var(--border-color);
border-radius: 12px;
justify-content: space-between; 
gap: 28px;

font-weight: 500;
font-size: 12px;
line-height: 133%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
  padding: 14px;
  font-size: 14px;
  line-height: 129%;
  gap: 53px;  
}
`
export const SelectFilterLabel = s.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const SelectFilterArrow = s.span`
  margin-left: auto;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`
export const SelectFilterList = s.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  padding: 14px;
  margin: 0;
  background: var(--select-background-color);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
  color: var(--grey-text-color)
`
export const SelectFilterListItem = s.li`
    margin-bottom: 7px;
    cursor: pointer;
    &:last-child { margin-bottom: 0; }

  &:hover {
    color: var(--main-text-color);
  }
`
export const SelectFilterIcon = s(Icon)`
  width: 16px;
  height: 16px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`
