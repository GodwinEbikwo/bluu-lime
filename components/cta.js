import styled from "styled-components";
import FancyLink from "./fancy-link";
import useInView from "react-cool-inview";
import { m } from "framer-motion";

export default function Cta() {
  const { observe, inView } = useInView({
    rootMargin: "150px 0px",
  });

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? "none" : "translateY(110%) rotateX(-80deg)",
  };

  return (
    <CtaBox>
      <div className="cta-inner" data-scroll>
        <h1 data-scroll className="c-header_title">
          <span ref={observe} style={style} className="inline-block c-header_title_line">
            Locomotive scroll
          </span>
        </h1>

        <m.div
          className="cta-btn_container"
          ref={observe}
          style={{
            opacity: inView ? 1 : 0,
          }}
        >
          <FancyLink
            a11yText="navigates to the perfumes page"
            className="link link--metis"
            destination="/care"
            label="Learn more about our bags"
          />
        </m.div>
      </div>
    </CtaBox>
  );
}

const CtaBox = styled.div`
  position: relative;
  margin-top: var(--golden-ratio);
  margin-bottom: var(--golden-ratio);
  padding: 60px 0;

  /* just added */
  .c-header_title {
    perspective: 600px;
  }

  .c-header_title_line {
    display: block;
    transform-origin: center top;
    transform-style: preserve-3d;
    transition: opacity 0s var(--easing), transform 0s var(--easing);
    line-height: normal;
    transition-duration: 1s;
  }

  /* just added */

  .cta-inner {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    flex-direction: column;
    max-width: 85vw;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 40vw;
    }

    &.bg-red {
      background-color: red;
    }
  }

  .cta-btn_container {
    transition: opacity 400ms linear 0.85s;
  }

  a {
    text-transform: capitalize;
  }
`;
