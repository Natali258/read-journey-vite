import s from 'styled-components'

export const SelectFilterContainer = s.div`
position: relative;
padding: 14px;
border: 1px solid var(--border-color);
border-radius: 12px;
width: 153px;
height: 46px;

font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
// text-align: center;
color: var(--main-text-color);
`

export const SelectFilterArrow = s.span`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

export const SelectFilterList = s.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
`;

export const SelectFilterListItem = s.li`
  padding: 10px 15px;
  &:hover {
    background-color: #f0f7ff;
    color: #007bff;
  }
  &:first-child { border-radius: 8px 8px 0 0; }
  &:last-child { border-radius: 0 0 8px 8px; }
`;
