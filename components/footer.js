import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBox>
      <div>footer stuuf</div>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  background: var(--accent);
  color: var(--text-black);
  padding: 50px calc(var(--golden-ratio) - var(--px-2));
  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 150px var(--golden-ratio);
  }
`;
