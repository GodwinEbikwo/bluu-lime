import Link from "next/link";
import ProductImage from "./product-image";
import styled from "styled-components";
import { toBase64, shimmer } from "@/helpers/index";
import {
  ProductContainer,
  ProductLink,
  ProductSize,
  ProductInfoContainer,
  ProductPrice,
  ProductTitle,
} from "./product-styles";
import Image from "next/image";

export default function ProductForm() {
  return (
    <ProductContainer>
      <Link href="/product/[name]/[id]" as={`/product`} passHref>
        <ProductLink>
          <div className="img-container">
            <Image
              src="/savBag.jpg"
              width={230}
              height={230}
              alt="im"
              quality="85"
              loading="eager"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(230, 230)
              )}`}
            />
            <div className="img-c-center">
              <div className="img-icon" />
              <p className="img-txt">View</p>
            </div>
          </div>
          <ProductInfoContainer>
            <ProductSize>2.0z</ProductSize>
            <ProductPrice>350</ProductPrice>
          </ProductInfoContainer>
          <ProductTitle>Blui Knitted bag</ProductTitle>
        </ProductLink>
      </Link>
    </ProductContainer>
  );
}

const Article = styled.div`
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  width: 100%;
  margin-bottom: 1.25rem;
  overflow: hidden;

  & > a {
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    padding: 1.5625rem;
  }
`;
