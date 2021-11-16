import { Container, ContainerInner } from "./information-styles";

export default function Faq() {
  return (
    <article>
      <Container>
        <ContainerInner>
          <h3>Faq & Returns + Exchanges</h3>
          <p>
            You have 30 days from the shipping date of your order to return your
            purchase from bluulime free of charge. The items must have all their
            labels and be in perfect condition.
          </p>
        </ContainerInner>

        <ContainerInner>
          <h3>How can I track my order?</h3>
          <p>
            You should recieve a shipping confirmation email with tracking
            details within 48 hours of your order being placed. Click on the
            link in your email and you would be able to track your items.
          </p>
        </ContainerInner>

        <ContainerInner>
          <h3>Damaged Items</h3>
          <p>
            If the item gets destroyed before it arrives at your door, you would
            be issued a refund or a new order would be shipped immediately.
            However as soon as you recieve the order the onus is on you to
            report if it has been tampered or broken to quickly sort it out.
          </p>
        </ContainerInner>

        <ContainerInner>
          <h3>Returns for an Exchange</h3>
          <p>
            You can exchange a product for another item of the same price and
            size, however you would be charge more with the difference being the
            cost of shipping.
          </p>
        </ContainerInner>

        <ContainerInner>
          <h3>How can I contact a real person</h3>
          <p>
            You did not find an answer to your question? The bluulime team will
            be happy to answer from all days of the week, except on Saturday and
            Sunday, from 10am to 18.30pm By email: info@bluulime.com
          </p>
        </ContainerInner>
      </Container>
    </article>
  );
}
