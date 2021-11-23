import { useState, useContext } from "react";
import ProductOptions from "./product-options";
import { CartContext } from "@/context/shop-context";
import { formatMoney } from "@/helpers/index";
import { StyledButton } from "../box";
import styled from "styled-components";
import cn from "classnames";
import LoadingDots from "../loading-dots";
import Accordion from "../accordion";
import Rating from "../ratings";

const faqData = [
  {
    title: "Does Sav have a smelly bum... YES ;)",
  },
];

const data = [
  {
    title: "Before washing, turn your garments inside out",
  },
  {
    title:
      "Use the wool cycle on your washing machine or wash on low spin speed (high spin speed will destroy the fibre and cause it to shrink)",
  },
  {
    title:
      "Use neutral or mild detergents, preferably a special wool detergent. The enzymes in normal detergents will damage the lanolin in the wool, removing the natural protective qualities of the wool",
  },
];

export default function ProductForm({ product }) {
  const { addToCart, isLoading, onCheckout, isLoadingCheckout } = useContext(
    CartContext
  );

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
      varaintAvailableForSale: variant.node.availableForSale,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);
  const availableForSale = selectedVariant.varaintAvailableForSale;

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
      <div
        className="flex flex-row space-between align-center"
        style={{ paddingBottom: "var(--spacing-md)" }}
      >
        <Rating value={5} />
        <span>6 reviews</span>
      </div>

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

      {product.description && (
        <div className="p-desc">
          <p>{product.description}</p>
        </div>
      )}

      <StyledButton
        style={{
          marginBottom: "var(--spacing-md)",
          background: "var(--white)",
        }}
        aria-busy={isLoadingCheckout}
        aria-label="Buy now"
        onClick={() => {
          onCheckout(selectedVariant);
        }}
        className={cn("add-to-bag", { loading: isLoadingCheckout })}
        disabled={!selectedVariant && availableForSale === false}
      >
        {availableForSale === false ? "Not Available" : "Buy now"}
        {isLoadingCheckout && (
          <div
            className="flex"
            style={{ marginTop: "3.85px", paddingLeft: "0.5rem" }}
          >
            <LoadingDots />
          </div>
        )}
      </StyledButton>

      <StyledButton
        style={{ marginBottom: "var(--spacing-md)" }}
        aria-busy={isLoading}
        aria-label="Add to Bag"
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className={cn("add-to-bag", { loading: isLoading })}
        disabled={availableForSale === false}
      >
        {availableForSale === false ? "Not Available" : "Add To Bag"}
        {isLoading && (
          <div
            className="flex"
            style={{ marginTop: "3.85px", paddingLeft: "0.5rem" }}
          >
            <LoadingDots />
          </div>
        )}
      </StyledButton>

      {data && (
        <Accordion
          title="Care guide"
          content={data.map((faq, index) => (
            <ProductFaqs key={index}>{faq.title}</ProductFaqs>
          ))}
        />
      )}

      {faqData && (
        <Accordion
          title="Details"
          content={faqData.map((faq, index) => (
            <ProductFaqs key={index}>{faq.title}</ProductFaqs>
          ))}
        />
      )}
    </ProductFormContainer>
  );
}

export const ProductFaqs = styled.span`
  display: block;
  margin-bottom: var(--spacing-md);
`;

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

  button {
    height: 52px;
    max-height: 64px;
    text-transform: uppercase;
    letter-spacing: 0.015em;
    font-weight: 500;
    font-size: 0.875rem;
  }

  .p-title {
    font-weight: 100;
    font-family: var(--font-6);
    line-height: 1;
    margin-bottom: var(--spacing-sm);
    flex-wrap: wrap;
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
