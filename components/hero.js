import styled from "styled-components";
import { m } from "framer-motion";
import FancySpan from "./fancy-span";
import Div100vh from "react-div-100vh";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StyledButton } from "./box";
import One from "../public/image.jpg";
import Two from "../public/5.jpg";
import { revealInOut, barAnim } from "@/helpers/transitions";

const work = ["hot girl", "fun girl", "sad girl", "bad b*tch"];

export default function HeroN() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const tick = () => setIndex((i) => i + 1);
    const id = setInterval(tick, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <m.section
      initial="initial"
      animate="enter"
      exit="exit"
      className="relative"
    >
      <Div100vh>
        <HeroContainer
          variants={{
            enter: { transition: { staggerChildren: 0.1, delay: 0.35 } },
          }}
        >
          <div className="hero-background">
            <div
              className="hide-for-mobile h-m-container hero-image_container-1"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
              data-scroll-position="top"
            >
              <Image
                placeholder="blur"
                src={One}
                alt="bluu-lime"
                width={160}
                height={240}
                className="a-img img"
              />
            </div>

            <div
              className="hide-for-mobile h-m-container hero-image_container-2"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
              data-scroll-position="top"
            >
              <Image
                placeholder="blur"
                src={Two}
                alt="bluu-lime"
                width={328}
                height={238}
                className="a-img img"
              />
            </div>
          </div>

          {/* .....fore-ground..... */}
          <div className="hero-inner">
            <div className="hero-center">
              <h1 className="hero-center_title not-selectable">
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    Handmade knitted bags for every{" "}
                    <em className="inline-block">
                      {work[index % work.length]}
                    </em>{" "}
                    occasion
                  </m.span>
                </FancySpan>
              </h1>

              <m.div className="hero-button" variants={barAnim}>
                <StyledButton className="filled">
                  Shop our collection
                </StyledButton>
              </m.div>
            </div>

            <aside
              className="no-pb"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="1"
            >
              <h2 className="hero-bottom_title">
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    BluuLime
                  </m.span>
                </FancySpan>
              </h2>
            </aside>
          </div>
        </HeroContainer>
      </Div100vh>
    </m.section>
  );
}

const HeroContainer = styled(m.article)`
  .hero-background {
    z-index: 2;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .h-m-container {
      overflow: hidden;
      position: absolute;
    }

    .hero-image_container-1 {
      left: 15%;
      top: 12%;
      background: yellow;
    }

    .hero-image_container-2 {
      left: 68%;
      top: 17%;
      background: pink;

      @media (max-width: 767px) {
        top: 55%;
        left: 58%;
      }
    }
  }

  .hero-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero-center {
    position: absolute;
    top: 35%;
    margin-bottom: var(--spacing-lg);
  }

  .hero-center_title {
    text-align: center;
    margin-bottom: var(--spacing-lg);
    line-height: 1.2;
    max-width: 20ch;
  }

  .hero-button {
    width: 100%;
    margin-bottom: var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .no-pb {
    position: absolute;
    bottom: 2.35rem;
    left: 0;
    right: 0;
  }

  .hero-bottom_title {
    font-weight: normal;
    font-size: 22.4vw;
    line-height: 0.8em;
    letter-spacing: -0.065em;
    padding-bottom: 0;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    font-family: var(--font-3);
    text-transform: uppercase;
    color: white;
    font-weight: 800;
  }
`;
