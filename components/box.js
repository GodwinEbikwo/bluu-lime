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

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  justify-content: center;
  border-radius: 999px;
  padding: 1rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 300ms var(--easing);
  border: 1px solid var(--off-white);
  text-transform: capitalize;
  transition: all 300ms var(--easing);

  &.no-height {
    height: 0;
  }

  &.filled {
    color: var(--black);
    background-color: var(--white);
    &:hover {
      color: var(--off-white);
      background-color: transparent;
    }
  }

  &.add-to-bag {
    border-radius: 0 !important;
    background-color: var(--accent);
    border: none;
  }

  &:disabled {
    background: #f94144;
    cursor: not-allowed;
    color: white
  }

  &.loading {
    cursor: wait;
    opacity: 0.4;
  }

  &.outline {
    color: var(--off-white);
    background-color: transparent;
    transition: all 300ms var(--easing);
    &:hover {
      color: var(--black);
      background-color: var(--off-white);
    }
  }
`;

export const StyledSectionBox = styled.section`
  min-height: 100vh;
  margin: 7rem auto;
  padding: 50px calc(var(--golden-ratio) - var(--px-2));
  @media (min-width: 991px) {
    margin: var(--spacing-md) auto;
    padding: 50px var(--golden-ratio);
  }

  &.no-my {
    margin: 4rem auto;
  }

  &.mx-half {
    margin: 4rem auto;
    @media (max-width: 768px) {
      margin: 2rem auto;
    }
  }

  &.no-my-2 {
    margin: 0 auto;
  }

  &.no-px {
    padding: 50px 0 !important;
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

// `;
