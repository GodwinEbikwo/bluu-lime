import styled from "styled-components";

export const StyledBox = styled.div`
  min-height: 100%;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);

  &.has-px {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }
`;

// export const FeaturedContainer = styled.aside`
//   display: grid;
//   grid-column-gap: var(--spacer);
//   grid-row-gap: var(--spacer-double);
//   min-height: 70vh;

//   @media (min-width: 1024px) {
//     grid-column-gap: 2vw;
//     grid-template-columns: repeat(12, 1fr);

//     & > a {
//       height: 32.472vw;
//       grid-column: 1/12;

//       &:not(:last-child) {
//         margin-bottom: calc(var(--spacer) + 13rem);
//       }

//       &:nth-child(1n) {
//         grid-column: 1/5;
//       }

//       &:nth-child(3n - 1) {
//         /* margin-top: 20rem; */
//         grid-column: 5/8;
//       }

//       &:nth-child(3n) {
//         grid-column: 8/13;
//       }
//     }
//   }

//   .img {
//     height: 540px;
//   }

// `;

export const FeaturedContainer = styled.aside`
  display: grid;
  grid-column-gap: var(--spacer);
  grid-row-gap: var(--spacer-double);
  opacity: 0;
  transition: opacity 300ms var(--easing), transform 0.75s var(--easing);
  transform: translate3d(0, 0, 0);
  will-change: transform;
  min-height: 70vh;
  margin-top: var(--spacing-lg);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.is-inview {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
    transition-delay: 0.2s;
  }
`;

export const FeatureProductList = styled.ul`
  display: grid;
  grid-column-gap: var(--spacer);
  grid-row-gap: var(--spacer-double);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);

  & > li {
    transition: opacity 200ms linear;
    @media (max-width: 767px) {
      margin-bottom: var(--spacing-md);
    }
  }

  &:hover > li {
    transition: opacity 350ms linear;
    opacity: 0.25;
  }

  &:hover > li:hover {
    opacity: 1;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  letter-spacing: -0.03em;
`;
