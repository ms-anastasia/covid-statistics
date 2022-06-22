import { useEffect } from "react";
import { createPortal } from "react-dom";


import { ModalOverlay, ModalContent, ModalButton } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const onCloseButtonClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        {children}
        <ModalButton onClick={onCloseButtonClick}>OK</ModalButton>
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
}