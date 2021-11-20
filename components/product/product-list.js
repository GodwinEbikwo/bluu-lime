import { StyledSectionBox } from "../box";
import { ProductListHeader, GridItemThree } from "./product-styles";
import ProductCard from "./product-card";

const ProductList = ({ products }) => {
  return (
    <StyledSectionBox className="no-my">
      <ProductListHeader className="flex align-center justify-center">
        <h3 className="product-header-title">Explore New Arrivals</h3>
      </ProductListHeader>

      <section
        className="flex space-between flex-wrap"
        // data-scroll
        // data-scroll-direction="horizontal"
        // data-scroll-speed="-3"
      >
        <GridItemThree className="grid">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </GridItemThree>
      </section>
    </StyledSectionBox>
  );
};

export default ProductList;
