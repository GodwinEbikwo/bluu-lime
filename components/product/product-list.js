import ProductCard from "./product-card";
import { FeatureProductList, StyledSectionBox } from "../box";
import styled from "styled-components";

const ProductListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProductList = ({ products }) => {
  return (
    <StyledSectionBox>
      <ProductListHeader>
        <h3
          style={{
            fontWeight: "100",
            marginBottom: "var(--spacing-md)",
            fontFamily: "var(--font-6)",
          }}
        >
          Explore New Arrivals
        </h3>
      </ProductListHeader>

      <FeatureProductList>
        {products.map((product) => (
          <li>
            <ProductCard key={product.node.id} product={product} />
          </li>
        ))}
      </FeatureProductList>
    </StyledSectionBox>
  );
};

export default ProductList;
