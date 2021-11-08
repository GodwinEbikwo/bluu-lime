import { useEffect } from "react";
import { StyledSectionBox } from "./box";
import styled from "styled-components";
import Image from "next/image";
import useInView from "react-cool-inview";
import { m, useAnimation } from "framer-motion";

export default function Infoone() {
  const { observe, inView } = useInView();

  return (
    <StyledSectionBox className="no-px add-bg">
      <Aside className="" ref={observe}>
        <aside>
          <div className="heading-title">
            <h4>Ulta mini hot girl bag.</h4>
          </div>

          <Clippy
            data-scroll
            ref={observe}
            style={{
              transform: inView ? "scale(1, 1)" : "scale(1.25, 1.25)",
            }}
            // style={{
            //   clipPath: inView ? "inset(0%)" : "inset(0 0 100% 0)",
            // }}
          >
            <Image
              width={500}
              height={572}
              src="/4.jpg"
              alt="img"
              className="a-img"
            />
          </Clippy>
        </aside>

        <aside data-scroll>
          <h4>Bag full of roses</h4>
          <Clippy
            data-scroll
            ref={observe}
            style={{
              transform: inView ? "scale(1, 1)" : "scale(1.25, 1.25)",
            }}
          >
            <Image
              width={500}
              height={572}
              src="/3.jpg"
              alt="img"
              className="a-img"
            />
          </Clippy>
        </aside>

        <aside data-scroll>
          <h4>Refresh the jigsaw.</h4>
          <Clippy
            data-scroll
            ref={observe}
            style={{
              transform: inView ? "scale(1, 1)" : "scale(1.25, 1.25)",
            }}
          >
            <Image
              width={500}
              height={572}
              src="/2.jpg"
              alt="img"
              className="a-img"
            />
          </Clippy>
        </aside>

        <aside data-scroll>
          <h1>Shop the collection</h1>
        </aside>
      </Aside>
    </StyledSectionBox>
  );
}

const Clippy = styled.div`
  /* transition: clip-path 2.75s var(--easing) 1.2s; */
  transition: transform 1.2s var(--easing) 0.25s;
  will-change: transform;
  transform-origin: 50% 50%;
`;

const Aside = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;

  h4 {
    font-family: var(--font-6);
    margin-bottom: var(--spacing-md);
    font-weight: 100;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1em;
    padding: 50px calc(var(--golden-ratio) - var(--px-2));
  }

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-right: 0;

    &:nth-child(1) {
      border-bottom: 0;
      padding: 3rem;
    }

    &:nth-child(2n) {
      border-bottom: 0;
      padding: 3rem;
    }

    &:nth-child(3) {
      padding: 3rem;
    }
    &:nth-child(4) {
      border-bottom: 1px solid var(--border-color);
    }
  }
`;
