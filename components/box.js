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
  border-radius: 999px;
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
    color: var(--black);
    background-color: var(--white);
    box-shadow: 5px 5px rgba(211, 253, 80, 0.4),
      10px 10px rgba(211, 253, 80, 0.3), 15px 15px rgba(211, 253, 80, 0.2),
      20px 20px rgba(211, 253, 80, 0.1), 25px 25px rgba(211, 253, 80, 0.05);
    &:hover {
      border: 1px solid var(--text-black);
      color: var(--off-white);
      background-color: transparent;
      box-shadow: 0 5px rgba(211, 253, 80, 0.4), 0 10px rgba(211, 253, 80, 0.3),
        0 15px rgba(211, 253, 80, 0.2), 0 20px rgba(211, 253, 80, 0.1),
        0 25px rgba(211, 253, 80, 0.05), -5px 5px 40px rgba(211, 253, 80, 0.4);
    }
  }

  &.add-to-bag {
    border-radius: 0 !important;
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

  &.no-my {
    margin: 5rem auto;
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
