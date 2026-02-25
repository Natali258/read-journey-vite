import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  Overlay,
  ModalBox,
  CloseButton,
} from './Modal.styled';

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalBox>
    </Overlay>,
    document.body
  );
};
