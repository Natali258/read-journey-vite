import s from "styled-components";

export const Backdrop = s.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: 300ms;
`;

export const Menu = s.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: #1c1c1c;
  padding: 34px 40px;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 300ms ease;
`;

export const CloseBtn = s.button`
// display: block;
`