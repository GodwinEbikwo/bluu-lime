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

export const StyledSectionBox = styled.section`
  padding: 70px calc(var(--golden-ratio) - var(--px-2));
  @media (min-width: 767px) {
    padding: 100px var(--golden-ratio);
  }
`;

export const FeatureProductList = styled.ul`
  --min: 30ch;
  --gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);

  > * {
    flex: 1 1 var(--min);
  }

  @media (min-width: 499px) {
    display: grid;
    grid-column-gap: var(--spacer);
    grid-row-gap: var(--spacer);
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > li {
    transition: opacity 250ms linear;
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
