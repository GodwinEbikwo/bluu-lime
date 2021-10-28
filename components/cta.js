import styled from "styled-components";
import FancyLink from "./fancy-link";
import useInView from "react-cool-inview";
import { m, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { SplitText } from "./split-text";

export default function Cta() {
  const { observe, inView } = useInView({
    rootMargin: "150px 0px",
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <CtaBox>
        <div className="cta-inner">
          <m.h1 ref={observe} className="cta-title">
            <SplitText
              initial={{ y: "110%", opacity: 0 }}
              animate={controls}
              exit={{
                y: "110%",
              }}
              variants={{
                enter: (i) => ({
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: [0.77, 0, 0.175, 1],
                    delay: i * 0.02,
                  },
                }),
              }}
            >
              Get that bag summer or Spend that bag winter. Either way we got
              you
            </SplitText>
          </m.h1>

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
    </>
  );
}

const CtaBox = styled.div`
  position: relative;
  margin-top: var(--golden-ratio);
  margin-bottom: var(--golden-ratio);
  padding: 60px 0;

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

  .cta-title {
    line-height: 1.1;
    margin-bottom: var(--spacing-md);
  }

  .cta-btn_container {
    transition: opacity 400ms linear 0.85s;
  }

  a {
    text-transform: capitalize;
  }
`;
