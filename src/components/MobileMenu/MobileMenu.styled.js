import s from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const Backdrop = s.div`
  // position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: 300ms;
`;

export const Menu = s.div`
  // position: fixed;
  position: absolute;
  top: 0; 
  right: 0;  
  width: 53%;
  height: 100%;
  background: #1c1c1c;
  padding: 34px 40px;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 300ms ease;
  z-index: 1000;
`
export const NavMenuCountainer = s.div`
display: flex;
flex-direction: column;
gap: 300px;
height: 100%;
justify-content: center;
align-items: center; 
`
export const CloseBtn = s.button`
display: block;
// width: 28px;
// height: 28px;
margin-left: auto;
color: var(--main-text-color);
`
export const StlBtnLogOut = s.button`
    display:block;
    padding: 12px 28px;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 2%;
    color: var(--main-text-color);

    &:hover {
        background-color: var(--main-text-color);
        color: var(--body-background-color);
}
@media (min-width: ${breakpoints.tablet}) {
   display: none;
}
`