/* eslint-disable react/prop-types */
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { CloseIcon } from "./icons";

const ContentPlaceholder = ({ content }) => (
  <m.div
    variants={{
      collapsed: { opacity: 0 },
      open: { opacity: 1 },
    }}
    transition={{ duration: 0.4 }}
    className="content-placeholder"
  >
    <div>{content}</div>
  </m.div>
);

const AccordionComponent = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;
  return (
    <AccordionBody>
      <m.header initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
        <div className="header-inner">
          <p>{title}</p>
          <m.div
            initial={false}
            animate={{
              transform: isOpen ? "rotate(90deg)" : "rotate(45deg)",
            }}
          >
            <CloseIcon />
          </m.div>
        </div>
      </m.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            className="overflow-hidden"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <ContentPlaceholder content={content} />
          </m.div>
        )}
      </AnimatePresence>
    </AccordionBody>
  );
};

const Accordion = ({ id, title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionComponent
      i={id}
      expanded={expanded}
      setExpanded={setExpanded}
      title={title}
      content={content}
    />
  );
};

export default Accordion;

const AccordionBody = styled.aside`
  margin-bottom: var(--spacing-md);
  width: 100%;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(60, 60, 60, 0.5);

  @media (min-width: 768px) {
    width: auto;
  }

  header {
    border-radius: 5px;
    cursor: pointer;
    padding: 0.85rem 1rem;
    width: 100%;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header p {
    line-height: 1;
    text-align: left;
    letter-spacing: var(--ls-sm);
  }

  .content-placeholder {
    padding: 0 1rem;
  }
`;