import React, { useEffect } from "react";
import useFocusTrap from "@charlietango/use-focus-trap";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 50%;
  right: 0;
  bottom: 0;
  width: 600px;
  height: 400px;
  z-index: 999;
  transform: translate(-50%, -50%);
  background: red;
  border-radius: 3px;
`;

const WrapperRoot = styled.div``;

// const Backdrop = ({ children, handleClose }) => {
//   return (
//     <m.div
//       onClick={handleClose}
//       className="backdrop"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {children}
//     </m.div>
//   );
// };

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

  return (
    <WrapperRoot>
      <Wrapper
        ref={ref}
        style={{ pointerEvents: !isOpen ? "none" : undefined }}
        role="dialog"
        className={className ? className : null}
      >
        {children}
        <button onClick={onRequestClose} aria-label="Close modal">
          <span className="inline-block" style={{ color: "white" }}>
            close
          </span>
        </button>
      </Wrapper>
    </WrapperRoot>
  );
}

export default BaseModal;
