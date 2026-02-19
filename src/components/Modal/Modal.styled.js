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
  // background: #fff;
  // border-radius: 12px;

  // padding: 24px;
  // min-width: 320px;
  // max-width: 90vw;
  // max-height: 90vh;
  overflow-y: auto;

  border: 1px solid var(--modal-background-color);
  background: var(--container-background-color);
  border-radius: 12px;
  padding: 50px;
  // width: 500px;
  // height: 483px;
`;
