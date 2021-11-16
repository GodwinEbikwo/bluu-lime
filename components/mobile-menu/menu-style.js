import styled from "styled-components";

export const MobileMenuNav = styled.nav`
  margin-top: calc(var(--spacer) + 20px);
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
