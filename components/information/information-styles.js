import styled from "styled-components";

export const Container = styled.section`
  margin: var(--spacer) auto;
  max-width: 60rem;
  position: relative;
  padding: 50px calc(var(--golden-ratio) - var(--px-2));
  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 50px var(--golden-ratio);
  }

  &.max-xl {
    max-width: 120rem;
    padding: 50px 0;
  }

  strong {
    letter-spacing: var(--ls);
  }

  h3 {
    font-weight: 100;
    font-family: var(--font-6);
    border-bottom: 1px solid var(--border-color);
    margin: var(--spacing-md) 0;
  }

  p {
    margin: 1.5rem 0;
  }
`;

export const ContainerInner = styled.div`
  margin-bottom: var(--spacer);
`;