/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import FancyLink from "./fancy-link";
import Link from "next/link";
import { FeatureProductList, StyledSectionBox } from "./box";
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

export function FeatureProduct({ src, name, alt, price }) {
  return (
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
  );
}

export default function FeatureProducts() {
  return (
    <StyledSectionBox>
      <div className="flex-container space-between">
        <h1 style={{ marginBottom: "var(--spacing-md)" }}>
          Epxlore New Arrivals
        </h1>
        {/* <FancyLink
          destination="/"
          a11yText="naviagtes to the collection page"
          label="see all products"
          className="link link--metis"
        /> */}
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
    </StyledSectionBox>
  );
}
