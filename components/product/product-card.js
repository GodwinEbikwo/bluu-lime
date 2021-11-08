import Image from "next/image";
import Link from "next/link";
import {
  ProductLink,
  ProductTitle,
  ProductInfoContainer,
  ProductPrice,
} from "./product-styles";
import { toBase64, shimmer, formatMoney } from "@/helpers/index";

export default function ProductCard({ product }) {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`} passHref>
      <ProductLink>
        <div data-scroll>
          <Image
            quality="85"
            width={504}
            height={672}
            src={originalSrc ? originalSrc : undefined}
            alt={altText ? altText : "bluu-lime-product"}
            className="a-img img"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(504, 672)
            )}`}
          />
        </div>
        <ProductTitle>{title}</ProductTitle>
        <ProductInfoContainer>
          <ProductPrice>{formatMoney(price)}</ProductPrice>
        </ProductInfoContainer>
      </ProductLink>
    </Link>
  );
}
