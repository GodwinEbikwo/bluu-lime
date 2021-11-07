import { useState, useContext } from "react";
import ProductOptions from "./product-options";
import { CartContext } from "@/context/shop-context";
import { formatMoney } from "@/helpers/index";
import { StyledButton } from "../box";
import styled from "styled-components";

export default function ProductForm({ product }) {
  const { addToCart } = useContext(CartContext);
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};
    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });
    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <ProductFormContainer>
      <h3 className="p-title">{product.title}</h3>
      <span className="p-price">
        {formatMoney(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}

      <div className="p-desc">
        <p>{product.description}</p>
      </div>
      <StyledButton
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className="filled"
      >
        Add To Bag
      </StyledButton>
    </ProductFormContainer>
  );
}

const ProductFormContainer = styled.article`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  background: #222222;
  margin-top: var(--spacer);

  @media (min-width: 768px) {
    margin-top: 0;
    width: 33.333333%;
    --reverse: 0;
    margin-right: calc(1rem * var(--reverse));
    margin-left: calc(1rem * calc(1 - var(--reverse)));
  }

  .p-title {
    font-weight: 100;
    font-family: var(--font-6);
    line-height: 1;
    margin-bottom: var(--spacing-sm);
  }
  
  .p-price {
    margin-bottom: var(--spacing-sm);
  }

  .p-desc {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: var(--spacing-md);
    padding: 0.5rem 0;
  }
`;
