/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Image from "next/image";
import FancyLink from "./fancy-link";
import Link from "next/link";
import { FeatureProductList } from "./box";
import {
  ProductInfoContainer,
  ProductTitle,
  ProductLink,
  ProductPrice,
} from "./product/product-styles";
import { formatMoney } from "../helpers";
import BagPic1 from "../public/3.jpg";
import BagPic2 from "../public/2.jpg";
import BagPic3 from "../public/4.jpg";

export const FeaturedTitle = styled.h1`
  font-size: 3vw;
  letter-spacing: var(--ls-sm);
  font-family: var(--font-2);
`;

export function FeatureProduct({ src, name, alt, price, size }) {
  return (
    <>
      <li>
        <Link href="/" passHref>
          <ProductLink>
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll>
                <div className="b-image" data-scroll>
                  <Image
                    placeholder="blur"
                    width={504}
                    height={672}
                    src={src ? src : undefined}
                    alt={alt}
                    className="b-speed-block_image img"
                  />
                </div>
              </div>
            </div>
            <ProductTitle>{name}</ProductTitle>
            <ProductInfoContainer>
              <ProductPrice>{formatMoney(price)}</ProductPrice>
            </ProductInfoContainer>
          </ProductLink>
        </Link>
      </li>
    </>
  );
}

export default function FeatureProducts() {
  return (
    <article className="container px-2">
      <div
        className="flex space-between"
        style={{ padding: "var(--spacing-md) 0" }}
      >
        <FeaturedTitle>Epxlore new arrival</FeaturedTitle>
        <p className="text-uppercase" style={{ paddingTop: "3rem" }}>
          <FancyLink
            destination="/"
            a11yText="naviagtes to the collection page"
            label="see all products"
            className="link link--metis text-uppercase"
          />
        </p>
      </div>

      <FeatureProductList data-scroll>
        <FeatureProduct
          name="Pink Panther Knitt bag"
          price="50"
          alt="bag"
          src={BagPic1}
        />
        <FeatureProduct
          name="Bluu Sky Knitt bag"
          price="30"
          alt="bag"
          src={BagPic2}
        />
        <FeatureProduct
          name="Grey Night Knitt bag"
          price="30"
          alt="bag"
          src={BagPic3}
        />
      </FeatureProductList>
    </article>
  );
}
