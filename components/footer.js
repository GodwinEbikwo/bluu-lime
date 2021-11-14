import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBox>
      <FooterInnner className="flex flex-column align-center justify-center">
        <aside className="m-bottom text-center">
          <p>100% VEGAN — 100% ORGANIC — SUSTAINABLE — CRUELTY FREE</p>
        </aside>

        <aside className="flex flex-wrap align-center space-between w-full m-bottom md-flex-column">
          <div className="flex flex-column text-center">
            <div>PHONE</div>
            <h3>(44) 245-690-342</h3>
          </div>

          <div className="flex flex-column text-center">
            <div>EMAIL</div>
            <h3>info@abluulime.com</h3>
          </div>
        </aside>

        <aside className="flex flex-column text-center">
          <div>SOCIAL</div>
          <h3>@bluulime</h3>
        </aside>
      </FooterInnner>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  background: var(--accent);
  color: var(--text-black);
  padding: 150px calc(var(--golden-ratio) - var(--px-2));
  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 150px var(--golden-ratio);
  }

  .m-bottom {
    margin-bottom: var(--spacer);
  }
`;

const FooterInnner = styled.div`
  max-width: 55rem;
  margin: auto;

  .md-flex-column {
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

 h3 {
    font-weight: 100;
    font-family: var(--font-6);
    text-align: center;
  }
`;
