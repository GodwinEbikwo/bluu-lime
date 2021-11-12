import styled from "styled-components";

export const ProductContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .img-container {
    display: inline-block;
    overflow: hidden;
    /* transition: all var(--duration) var(--easeInOutCubic);
    transform: scale(1); */

    &:hover .img-txt {
      opacity: 1;
    }

    &:hover .img-icon {
      opacity: 1;
      transform: scale(1.4);

      &:hover {
        transform: scale(2);
      }
    }

    /* &:hover {
      transform: scale(0.95);
    } */
  }

  .img-container img {
    display: block;
    opacity: 1;
    transition: all var(--duration) var(--easeInOutCubic);
    transition-delay: 0.1295s;
  }

  .img-container:hover img {
    transform: translateZ(0) scale(1.2);
    transform-origin: 50% 50%;
    /* opacity: 0.25; */
  }

  .img-c-center {
    display: grid;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    .img-icon {
      grid-row: 1;
      grid-column: 1;
      border-radius: 50%;
      margin: auto;
      background-color: var(--accent);
      width: 3rem;
      height: 3rem;
      transition: all var(--duration) var(--easeInOutCubic);
      opacity: 0;
      z-index: 0;
    }

    .img-txt {
      grid-row: 1;
      grid-column: 1;
      opacity: 0;
      transition: all var(--duration) var(--easeInOutCubic);
      z-index: 1;
      text-align: center;
      color: black;
    }
  }
`;

export const ProductLink = styled.a`
  position: relative;
  max-width: 100%;
`;

export const ProductInfoContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.span`
  letter-spacing: var(-ls-sm);
`;

export const ProductPrice = styled.span`
  letter-spacing: var(-ls-sm);
`;

export const ProductListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .product-header-title {
    font-weight: 100;
    font-family: var(--font-6);
    margin-bottom: var(--spacing-md);
  }
`;

export const GridContainer = styled.section`
  --cs: 13.7;
  --dw: 1920;
  --ps: 55;
  --ph: 55;
  --bi: 70;
  --sc: calc((var(--dw) / 100) * var(--cs));

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const GridItemThree = styled.ul`
  &.grid {
    --min: 30ch;
    --gap: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    width: 100%;

    > * {
      flex: 1 1 var(--min);
    }

    @media (min-width: 499px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
    }

    @media (min-width: 640px) {
      grid-template-columns: repeat(3, 1fr);

      & > li {
        cursor: pointer;
        transition: opacity 0.8s var(--easeOutCubic);
        @media (max-width: 767px) {
          margin-bottom: var(--spacing-md);
        }
      }

      &:hover > li {
        transition: opacity 0.8s var(--easeOutCubic);
        opacity: 0.25;
      }

      &:hover > li:hover {
        opacity: 1;
      }
    }
  }
`;
