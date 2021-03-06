import Image from "next/image";
import ProductForm from "./product-form";
import RecommendedList from "./recommended-list";
import styled from "styled-components";
import { shimmer, toBase64 } from "@/helpers/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function ProductContent({ product }) {
  const images = [];
  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.originalSrc}
          alt={image.node.altText || "bluu-lime bag"}
          width={504}
          height={672}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(504, 672)
          )}`}
          className="a-img"
          quality="85"
        />
      </SwiperSlide>
    );
  });
  SwiperCore.use([Navigation, Pagination]);

  return (
    <ProductContentBox>
      <ProductContentContainer className="flex flex-column align-center justify-center">
        <div className="product-container-inner">
          <div className="w-full h-full relative" data-scroll>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              navigation
              pagination={{ clickable: true }}
              className="h-full"
              loop="true"
            >
              {images}
            </Swiper>
          </div>
        </div>

        <ProductForm product={product} />
      </ProductContentContainer>

      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </ProductContentBox>
  );
}

const ProductContentBox = styled.section`
  margin: var(--spacing-md) auto;
  padding: 50px calc(var(--golden-ratio) - var(--px-2));

  @media (min-width: 991px) {
    padding: 50px var(--golden-ratio);
  }
`;

const ProductContentContainer = styled.div`
  margin-top: var(--spacer);
  max-width: 100rem;
  margin: 0 auto;
  width: 100%;

  & > * {
    &:nth-child(2) {
      margin-top: var(--spacer);
      border-radius: 5px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }
  }

  @media (min-width: 768px) {
    margin: 3rem auto;
    flex-direction: row;
    align-items: flex-start;
  }

  .product-container-inner {
    width: 100%;
    @media (min-width: 480px) {
      width: 50%;
      max-width: 30rem;
    }
  }
`;
