import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useFocusTrap from "@charlietango/use-focus-trap";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
`;

function BaseModal({ children, isOpen, onRequestClose, className }) {
  const ref = useFocusTrap();
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      if (onRequestClose) onRequestClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    return;
  }, [isOpen]);

  const modal = (
    <Wrapper
      ref={ref}
      style={{ pointerEvents: !isOpen ? "none" : undefined }}
      role="dialog"
      className={className ? className : null}
    >
      {children}
    </Wrapper>
  );

  return ReactDOM.createPortal(modal, window.document.body);
}

BaseModal.displayName = "BaseModal";
BaseModal.defaultProps = {};

export default BaseModal;
