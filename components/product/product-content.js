import { useState } from "react";
import Image from "next/image";
import ProductForm from "./product-form";
import RecommendedList from "./recommended-list";
import styled from "styled-components";
import { shimmer, toBase64 } from "@/helpers/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { m } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <m.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </m.div>
  );
};

export default function ProductContent({ product }) {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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
          className="a-img img"
          quality="90"
        />
      </SwiperSlide>
    );
  });
  SwiperCore.use([Navigation, Pagination]);

  return (
    <ProductContentBox>
      <ProductContentContainer>
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

        <div>
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="save-button"
            onClick={() => (modalOpen ? close() : open())}
          >
            Launch modal
          </m.button>
        </div>
      </ProductContentContainer>

      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </ProductContentBox>
  );
}

const ProductContentBox = styled.section`
  margin: 8rem auto;
  padding: 50px calc(var(--golden-ratio) - var(--px-2));

  @media (max-width: 768px) {
    margin: 2rem auto;
  }

  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 50px var(--golden-ratio);
  }
`;

const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  max-width: 100rem;
  margin: 0 auto;
  width: 100%;

  & > * {
    &:last-child {
      margin-top: var(--spacer);
      border: 1px solid var(--border-color);
      backdrop-filter: blur(20px) saturate(180%);
      background-color: rgba(60, 60, 60, 0.5);
      @media (min-width: 768px) {
        margin-top: auto;
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
    @media (min-width: 768px) {
      width: 50%;
      max-width: 30rem;
    }
  }
`;
