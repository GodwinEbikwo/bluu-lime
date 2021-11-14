import styled from "styled-components";

export const MobileMenuHeader = styled.header`
  margin-bottom: var(--spacer);

  button {
    color: white;
    text-transform: uppercase;
  }
`;

export const MobileMenuMain = styled.main`
  margin-bottom: var(--spacer);
`;

export const MobileMenuUL = styled.ul`
  margin-bottom: var(--spacer);

  li {
    margin-bottom: var(--spacing-sm);

    div {
      font-size: 1.5rem;
      font-family: var(--font-6);
      font-weight: 100;
    }
  }
`;

export const MobileMenuFooter = styled.footer`
  position: absolute;
  bottom: 8rem;
`;
