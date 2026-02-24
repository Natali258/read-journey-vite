import s from 'styled-components';

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
  position: relative;
  overflow-y: auto;

  border: 1px solid var(--modal-background-color);
  background: var(--container-background-color);
  border-radius: 12px;
  padding: 50px;
  // width: 500px;
  // height: 483px;
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

