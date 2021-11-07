import ProductCard from "./product-card";
import { FeatureProductList, StyledSectionBox } from "../box";
import styled from "styled-components";
import { Bluu } from "../icons";

const ProductListHeader = styled.aside`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 1024px) {
    & > * {
      &:nth-child(1) {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        width: 33.3333333%;
      }

      &:nth-child(2) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 33.3333333%;
      }

      &:nth-child(3) {
        width: 33.3333333%;
        padding-left: 15%;
      }
    }
  }
`;

const ProductList = ({ products }) => {
  return (
    <StyledSectionBox>
      <ProductListHeader>
        <h4
          style={{
            fontWeight: "100",
            marginBottom: "var(--spacing-md)",
            fontFamily: "var(--font-6)",
          }}
        >
          Explore New Arrivals
        </h4>
        <h5
          style={{
            fontWeight: "100",
            marginBottom: "var(--spacing-md)",
            fontFamily: "var(--font-6)",
          }}
        >
          Shop
        </h5>
        <Bluu />
      </ProductListHeader>

      <FeatureProductList>
        {products.map((product) => (
          <ProductCard key={product.node.id} product={product} />
        ))}
      </FeatureProductList>
    </StyledSectionBox>
  );
};

export default ProductList;
