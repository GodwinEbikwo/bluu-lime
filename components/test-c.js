import styled from "styled-components";
import { m } from "framer-motion";
import { SplitText } from "./split-text";
import FancySpan from "./fancy-span";
import Div100vh from "react-div-100vh";

export const revealInOut = {
  initial: { y: "110%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.25,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    y: "110%",
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};

const barAnim = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.35,
    },
  },
};

export default function TestC() {
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
          <div className="hero-inner">
            <div className="hero-center">
              <h1 className="hero-center_title">
                <FancySpan>
                  <m.span className="block" variants={revealInOut}>
                    Handmade knitted bags for every occasion
                  </m.span>
                </FancySpan>
              </h1>

              <m.div className="hero-button" variants={barAnim}>
                <button>Shop our collection</button>
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
// data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1.5"

const HeroContainer = styled(m.article)`
  .hero-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero-center {
    position: absolute;
    top: 35%;
    margin-bottom: var(--spacing-md);
  }

  .hero-center_title {
    text-align: center;
    margin-bottom: var(--spacing-md);
    line-height: 1;
    max-width: 20ch;
  }

  .hero-button {
    width: 100%;
    margin-bottom: var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      padding: 1rem 2rem;
      width: auto;
      height: 40px;
      background-color: var(--black);
      color: var(--white);
      text-align: center;
      cursor: pointer;
    }
  }

  .no-pb {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
  }

  .hero-bottom_title {
    font-weight: 800;
    font-size: 22.5vw;
    line-height: 0.8em;
    letter-spacing: -0.065em;
    margin-top: 3vw;
    padding-bottom: 0;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    font-family: var(--font-3);
    text-transform: uppercase;
    transition: color 350ms var(--easing);
    cursor: pointer;
  }
`;
