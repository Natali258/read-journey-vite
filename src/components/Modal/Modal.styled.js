import s from 'styled-components';
import { breakpoints } from '../../breakpoints ';

export const Overlay = s.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
  
`;

export const ModalBox = s.div`
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  border: 1px solid var(--modal-background-color);
  background: var(--container-background-color);
  border-radius: 12px;
  // padding: 40px 98px;
  padding: 40px;
  width: calc(100% - 32px);   /* 🔥 важливо */
  max-width: 335px;
  
@media (min-width: ${breakpoints.tablet}) {
    padding: 50px;
    max-width: 500px;
}
`;
export const CloseButton = s.button`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 22px;
  height: 22px;

  background: transparent;
  border: none;
  cursor: pointer;

  font-size: 22px;
  line-height: 1;
  color: var(--main-text-color);
`;

