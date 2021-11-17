import { StyledSectionBox, StyledButton } from "./box";
import styled from "styled-components";
import useInView from "react-cool-inview";
import { m, useAnimation } from "framer-motion";
import { useEffect } from "react";
import FancySpan from "./fancy-span";
import { HeroImage } from "../helpers";

export const revealInOut = {
  initial: { y: "110%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.15,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
  exit: {
    y: "110%",
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};

export default function InfoA({ responsiveImage, title }) {
  const { observe, inView } = useInView();

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
    <StyledSectionBox className="no-my relative" ref={observe}>
      <FW
        variants={{
          enter: { transition: { staggerChildren: 0.1, delay: 0.35 } },
        }}
      >
        <h5>
          <FancySpan>
            <span
              className="block reveal-delay"
              ref={observe}
              style={{
                transform: inView ? "translateY(0%)" : "translateY(105%)",
              }}
            >
              We also make baby clothes and adult cardigans which will be coming
              in stock winter 2021.
            </span>
          </FancySpan>
        </h5>

        <div>
          <h5>
            Since 2017 we have been creating pieces for winter and summer.
            During the pandemic, we decided to share this to the world and
            started bluu-lime. Our aim is to curate functional pieces which are
            useful in your wadrobe and focus on what’s important, championing
            sustainably sourced and slow-made products.
          </h5>
          <StyledButton className="filled">read our story</StyledButton>
        </div>
      </FW>

      <DL>
        <HeroImage title={title} responsiveImage={responsiveImage} />
      </DL>
    </StyledSectionBox>
  );
}

const DL = styled.aside`
  margin-top: 5.5rem;
`;

export const FW = styled(m.aside)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: var(--spacing-md);

  h5 {
    max-width: 40ch;
    margin-bottom: var(--spacing-md);
    @media (max-width: 640px) {
      max-width: none;
    }
  }

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
        padding-left: 30%;
      }
    }
  }
`;
