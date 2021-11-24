import styled from "styled-components";

export const StyledBox = styled.div`
  min-height: 100%;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);

  &.has-px {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 300ms var(--easing);
  border: 1px solid var(--off-white);
  text-transform: capitalize;
  transition: all 300ms var(--easing);

  &.no-height {
    height: 0;
  }

  &.filled {
    color: var(--white);
    background-color: var(--accent);
  }

  &.add-to-bag {
    background-color: var(--accent);
    border: none;
  }

  &:disabled {
    background: #f94144;
    cursor: not-allowed;
    color: white;
  }

  &.loading {
    cursor: wait;
    opacity: 0.4;
  }

  &.outline {
    color: var(--off-white);
    background-color: transparent;
    transition: all 300ms var(--easing);
    &:hover {
      color: var(--black);
      background-color: var(--off-white);
    }
  }
`;

export const StyledSectionBox = styled.section`
  margin: 7rem auto;
  padding: 0 calc(var(--golden-ratio) - var(--px-2));
  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 0 var(--golden-ratio);
  }

  &.bg-py {
    background: #151517;
    padding-top: 150px;
    padding-bottom: 150px
  }

  &.no-my {
    margin: 7rem auto 3.5rem;
    @media (max-width: 768px) {
      margin: 5rem auto 3.5rem;
    }
  }

  &.mx-half {
    margin: 4rem auto;
    @media (max-width: 768px) {
      margin: 2rem auto;
    }
  }

  &.no-my-2 {
    margin: 0 auto;
  }

  &.no-px {
    padding: 50px 0 !important;
  }
`;
