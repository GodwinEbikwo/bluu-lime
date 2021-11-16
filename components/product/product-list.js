import { StyledSectionBox } from "../box";
import {
  ProductListHeader,
  GridContainer,
  GridItemThree,
} from "./product-styles";
import ProductCard from "./product-card";

const ProductList = ({ products }) => {
  return (
    <StyledSectionBox className="no-my">
      <ProductListHeader>
        <h3 className="product-header-title">Explore New Arrivals</h3>
      </ProductListHeader>

      <GridContainer>
        <GridItemThree className="grid">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </GridItemThree>
      </GridContainer>
    </StyledSectionBox>
  );
};

export default ProductList;
