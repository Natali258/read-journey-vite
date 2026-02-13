import s from 'styled-components'

export const SelectFilterContainer = s.div`
position: relative;
display: inline-flex;
left:61%;
padding: 14px;
border: 1px solid var(--border-color);
border-radius: 12px;
width: 153px;

font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
// text-align: center;
color: var(--main-text-color);
`

export const SelectFilterArrow = s.span`
    margin-left: auto;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

export const SelectFilterList = s.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: 85%;
  padding: 14px;
  margin: 0;
  background: var(--select-background-color);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
  color: var(--grey-text-color)
`;

export const SelectFilterListItem = s.li`
    margin-bottom: 7px;
    &:last-child { margin-bottom: 0; }

  &:hover {
    color: var(--main-text-color);
  }
`;
