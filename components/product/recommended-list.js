import styled from "styled-components";
import ProductCard from "./product-card";

const RecommendedList = ({ products, current }) => {
  return (
    <RecommendedContainer className="bg-white">
      <aside className="recommend-products">
        <h4>Recommended Products</h4>
        <article className="recommend-products_grid">
          {products.map((product) =>
            product.node.id === current ? null : (
              <ProductCard key={product.node.id} product={product} />
            )
          )}
        </article>
      </aside>
    </RecommendedContainer>
  );
};

export default RecommendedList;

const RecommendedContainer = styled.section`
  margin: var(--spacer) auto;
  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 50px var(--golden-ratio);
  }

  h4 {
    font-weight: 100;
    font-family: var(--font-6);
    margin-bottom: var(--spacing-md);
  }

  .recommend-products {
    max-width: 65rem;
    margin: 0 auto;
    padding-top: var(--spacer);
    padding-bottom: var(--spacer);
  }

  .recommend-products_grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 1em;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;
