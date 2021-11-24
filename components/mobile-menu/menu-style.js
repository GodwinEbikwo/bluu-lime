import styled from "styled-components";

export const MobileMenuNav = styled.nav`
  margin-top: calc(var(--spacer) + 60px);
  margin-bottom: var(--spacer);
`;

export const MobileMenuUL = styled.ul`
  margin-bottom: var(--spacer);
  li {
    margin-bottom: var(--spacing-sm);
    
    div {
      font-size: 1.5rem;
      font-family: var(--font-6);
      text-transform: uppercase;
      letter-spacing: var(--ls-sm)
    }
  }
`;

export const MobileMenuFooter = styled.footer`
  position: absolute;
  bottom: var(--spacer);
  font-family: var(--font-6);
  text-decoration: underline;
  letter-spacing: var(--ls-sm)
`;
