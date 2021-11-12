import Link from "next/link";
import Image from "next/image";
import { toBase64, shimmer, formatMoney } from "@/helpers/index";
import {
  ProductContainer,
  ProductLink,
  ProductInfoContainer,
  ProductTitle,
  ProductPrice,
} from "./product-styles";

export default function ProductCard({ product }) {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <ProductContainer>
      <Link href={`/products/${handle}`} passHref>
        <ProductLink>
          <div className="img-container">
            <Image
              src={originalSrc ? originalSrc : undefined}
              alt={altText ? altText : "bluu-lime-product"}
              width={504}
              height={672}
              quality="85"
              className="a-img img"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(504, 672)
              )}`}
            />
            <div className="img-c-center">
              <div className="img-icon" />
              <p className="img-txt">view</p>
            </div>
          </div>

          <ProductInfoContainer>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{formatMoney(price)}</ProductPrice>
          </ProductInfoContainer>
        </ProductLink>
      </Link>
    </ProductContainer>
  );
}
