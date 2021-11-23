import styled from "styled-components";

export const FooterStyles = styled.footer`
  position: relative;

  .arrow-svg {
    width: 1.528vw;
    height: 2.5vw;
    margin-top: 0.2em;
  }

  .fn6 {
    font-weight: normal;
    font-size: 22.3vw;
    line-height: 0.8em;
    letter-spacing: -0.065em;
    padding-bottom: 2.25rem;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    font-family: var(--font-3);
    text-transform: uppercase;
    color: white;
    font-weight: 800;
  }
`;

export const FooterInner = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 1024px) {
    min-height: calc(100vh - 36.27778rem);
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  gap: 1em;
  padding: var(--spacer) calc(var(--golden-ratio) - var(--px-2));

  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 0 var(--golden-ratio);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  @media (min-width: 1200px) {
    padding: var(--spacer);
    text-align: left;
  }

  h5 {
    margin-bottom: 1rem;
    line-height: 1;
  }
`;

export const MenuFooter = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 2rem;

  li {
    padding: 0.5rem 0;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-top: var(--golden-ratio);
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: var(--golden-ratio);
  }
`;

export const FormFields = styled.div`
  .control-g {
    display: grid;
    grid-row-gap: 0.5rem;
    row-gap: 0.5rem;

    @media (min-width: 768px) {
      display: flex;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .control {
    width: 100%;
    height: 50px;
    border-radius: initial;
    position: relative;
    border-bottom: 1px solid var(--border-color);
  }

  .control-label {
    padding-bottom: 3rem;
  }

  .footer-input {
    width: 100%;
    height: 50px;
    border: 0;
    background: none;
    padding: 0;
    outline: none;
    letter-spacing: var(--ls-md);
    @media (min-width: 768px) {
      padding-right: 80px;
    }
  }
`;
