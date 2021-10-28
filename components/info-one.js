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
            <h4>Refresh the jigsaw.</h4>
          </div>

          <Clippy
            data-scroll
            ref={observe}
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
          <h4>Refresh the jigsaw.</h4>
          <Clippy
            data-scroll
            ref={observe}
            // style={{
            //   clipPath: inView ? "inset(0%)" : "inset(0 0 100% 0)",
            // }}
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
          <Clippy data-scroll ref={observe}>
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
          <h1>Shop the collection</h1>
        </aside>
      </Aside>
    </StyledSectionBox>
  );
}

const Clippy = styled.div`
  transition: clip-path 2.75s var(--easing) 1.2s;
`;

const Aside = styled.div`
  width: 100%;
  /* @media (min-width: 1024px) { */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;

  h4 {
    font-family: var(--font-6), serif;
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

    &:nth-child(1) {
      background: hsla(223, 87%, 42%, 10%);
      padding: 3rem;
    }

    &:nth-child(2) {
      background: hsla(200, 50%, 0%, 100%);
      padding: 3rem;
    }

    &:nth-child(3) {
      background: hsla(200, 50%, 0%, 100%);
      padding: 3rem;
    }
    &:nth-child(4) {
      background: hsla(223, 87%, 42%, 10%);
    }
  }
  /* } */
`;
