import { Container, ContainerInner } from "./information-styles";

export default function Information() {
  return (
    <article>
      <Container className="max-xl">
        <ContainerInner>
          <h3>Access all your need to know information here</h3>
        </ContainerInner>

        <ContainerInner>
          <h3>Frequently Asked Question</h3>
          <h3>Frequently Asked Question</h3>
          <h3>Frequently Asked Question</h3>
        </ContainerInner>
      </Container>
    </article>
  );
}
