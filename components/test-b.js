import { useEffect } from "react";
import Image from "next/image";
import { StyledSectionBox } from "./box";
import Picture from "../public/5.jpg";
import styled from "styled-components";

export default function Testb() {
  return (
    <StyledSectionBox className="no-my relative">
      <FW>
        <div>
          <h5>
            Our wool-and-knitters store in Sydney’s Surry Hills opened its doors
            in 2018.
          </h5>
        </div>

        <div>
          <h5>
            Since 2014 we have been creating and acquiring pieces for the home,
            chosen with the purpose to be both artful and functional. Our aim is
            to slow down and focus on what’s important, championing sustainably
            sourced and slow-made products.
          </h5>
          <button>read our story</button>
        </div>
      </FW>

      {/* "https://res.cloudinary.com/godwinebikwo/image/upload/e_grayscale/v1635114010/IMG_7467_otxhkz.webp" */}

      <DL data-scroll className="mx-auto overflow-hidden">
        <div data-scroll data-scroll-speed="-1.5">
          <Image
            src="https://res.cloudinary.com/godwinebikwo/image/upload/e_grayscale/v1635114010/IMG_7467_otxhkz.jpg"
            alt="bluu-lime"
            width={1920}
            height={1281}
            className="a-img img"
          />
        </div>
      </DL>
    </StyledSectionBox>
  );
}

const DL = styled.aside`
  margin-top: 3rem;

  .img {
    filter: grayscale(100%);
  }

  @media (min-width: 1024px) {
    margin-top: 7rem;
  }
`;

export const FW = styled.aside`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > * {
    &:nth-child(1) {
      margin-bottom: var(--spacing-md);
    }
  }

  @media (min-width: 1024px) {
    & > * {
      &:nth-child(1) {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 30%;
      }

      &:nth-child(2) {
        width: 70%;
        padding-left: 25%;

        h5 {
          margin-bottom: var(--spacing-md);
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 1rem 2rem;
          width: auto;
          height: 40px;
          background-color: transparent;
          border: 1px solid var(--black);
          text-align: center;
          cursor: pointer;
          text-transform: capitalize;
        }
      }
    }
  }
`;
