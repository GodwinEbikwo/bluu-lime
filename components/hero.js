import styled from "styled-components";
import { SplitText } from "./split-text";
import useInView from "react-cool-inview";
import { HeroImage } from "../helpers";
import Div100vh from "react-div-100vh";

export default function Hero({
  heroTitle,
  heroButtonTitle,
  title,
  responsiveImage,
}) {
  const { observe } = useInView();
  return (
    <HeroBox>
      <>
        <aside data-scroll>
          <div className="bg-full" data-scroll>
            <HeroImage title={title} responsiveImage={responsiveImage} />
          </div>
        </aside>

        <aside className="hero_center" ref={observe}>
          <h1 className="hero_title">
            <SplitText
              initial={{ y: "105%", opacity: 0 }}
              animate="enter"
              exit={{
                y: "-105%",
              }}
              variants={{
                enter: () => ({
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 1.35,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                }),
              }}
            >
              {heroTitle}
            </SplitText>
          </h1>

          <button type="button" title={heroButtonTitle}>
            {heroButtonTitle} →
          </button>
        </aside>
      </>
    </HeroBox>
  );
}

const HeroBox = styled.article`
  height: 100vh;
  position: relative;

  .hero_center {
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 68rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      padding: 1rem 3rem;
      width: auto;
      height: 48px;
      background-color: var(--black);
      color: var(--white);
    }

    .hero_title {
      text-align: center;
      color: var(--white);
      margin-bottom: var(--spacing-md);
    }
  }
`;
