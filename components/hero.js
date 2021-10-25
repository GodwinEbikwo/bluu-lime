import Image from "next/image";
import styled from "styled-components";
import { SplitText } from "./split-text";
import useInView from "react-cool-inview";
import { toBase64, shimmer } from "../helpers";
import Icon from "./icons";

export default function Hero() {
  const { observe } = useInView();
  return (
    <HeroBox>
      <aside data-scroll>
        <div className="bg-full" data-scroll>
          <Image
            alt="5n6"
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1635114010/IMG_7467_otxhkz.jpg"
            className="a-img"
            quality="85"
            layout="fill"
            objectFit="cover"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(1920, 990)
            )}`}
          />
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
            Cute. Mini. Bags.
          </SplitText>
        </h1>

        <button type="button" title="shop all">
          Shop all →
        </button>
      </aside>
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
      border-radius: 999px;
      padding: 1rem 3rem;
      width: auto;
      background-color: var(--black);
      color: var(--off-white);
      margin-top: var(--spacing-sm);
    }

    .hero_title {
      text-align: center;
      font-family: var(--font-2);
      font-size: 3.5rem;
      line-height: 1;
      letter-spacing: var(--ls-md);
      color: var(--white);
      @media (min-width: 768px) {
        line-height: 1.3;
        font-size: 5.25vw;
      }
    }
  }
`;
