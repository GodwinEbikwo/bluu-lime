import styled from "styled-components";
import ProductCard from "./product-card";

const RecommendedList = ({ products, current }) => {
  return (
    <RecommendedContainer>
      <div className="recommend-products">
        <div className="recommend-title">Recommended Products</div>
        <article className="recommend-products_grid">
          {products.map((product) =>
            product.node.id === current ? null : (
              <ProductCard key={product.node.id} product={product} />
            )
          )}
        </article>
      </div>
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

  .recommend-title {
    font-weight: 100;
    font-family: var(--font-6);
    font-size: 1.563rem;

    @media (min-width: 640px) {
      text-align: center;
      font-size: 2.441rem;
    }
  }

  .recommend-products {
    max-width: 59rem;
    margin: 0 auto;
    padding-top: var(--spacer);
    padding-bottom: var(--spacer);
  }

  .recommend-products_grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1em;

    @media (min-width: 640px) {
      & > li {
        cursor: pointer;
        transition: opacity 0.8s var(--easeOutCubic);
        @media (max-width: 767px) {
          margin-bottom: var(--spacing-md);
        }
      }

      &:hover > li {
        transition: opacity 0.8s var(--easeOutCubic);
        opacity: 0.25;
      }

      &:hover > li:hover {
        opacity: 1;
      }
    }
  }
`;
