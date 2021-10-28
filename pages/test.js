import { useRef, useEffect } from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Navigation from "@/components/navigation";
import { fade } from "@/helpers/transitions";
import { StyledBox } from "@/components/box";
import { LazyMotion, domAnimation, useAnimation, m } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { options } from "@/lib/scroll";
import CookieBar from "@/components/cookie-bar";
import Cta from "@/components/cta";
import Div100vh from "react-div-100vh";
import FeatureProducts from "@/components/feature-product";
import useInView from "react-cool-inview";
import styled from "styled-components";
import Image from "next/image";
import { SplitText } from "@/components/split-text";
import Five from "../public/5.jpg";
import Hero from "@/components/hero";
import { getHeroContent } from "@/lib/api";
import { HeroImage } from "../helpers";
import Infoone from "@/components/info-one";

const policyData =
  "We use cookies to personalize and deliver content. By using our site, you agree to our terms";

export default function TestPage({ heroContent }) {
  //   const { heroTitle, heroButtonTitle, heroImage } = heroContent;

  const containerRef = useRef(null);
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
    <Layout>
      <NextSeo title="Test" />
      <CookieBar message={policyData} />
      <Navigation />
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}
      >
        <main
          role="main"
          data-scroll-container
          ref={containerRef}
          id="scroll-container"
        >
          <section data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <m.div variants={fade}>
                  <StyledBox>
                    <div className="relative">
                      <Div100vh>
                        <HGrid>
                          <div className="left">
                            <div className="left-top hide-for-desktop">
                              <span>
                                <SplitText
                                  initial={{ y: "110%", opacity: 0 }}
                                  animate="enter"
                                  exit={{
                                    y: "110%",
                                  }}
                                  variants={{
                                    enter: () => ({
                                      y: "0%",
                                      opacity: 1,
                                      transition: {
                                        duration: 1,
                                        ease: [0.215, 0.61, 0.355, 1],
                                      },
                                    }),
                                  }}
                                >
                                  Bluu Lime
                                </SplitText>
                              </span>
                            </div>
                            <div className="h-left-inner">
                              <h1>
                                <SplitText
                                  initial={{ y: "110%", opacity: 0 }}
                                  animate="enter"
                                  exit={{
                                    y: "110%",
                                  }}
                                  variants={{
                                    enter: (i) => ({
                                      y: "0%",
                                      opacity: 1,
                                      transition: {
                                        duration: 1.25,
                                        ease: [0.215, 0.61, 0.355, 1],
                                        delay: i * 0.0285,
                                      },
                                    }),
                                  }}
                                >
                                  Handmade knitted bags for every occasion
                                </SplitText>
                              </h1>
                            </div>

                            <div className="h-left-side">
                              <button>Shop our collection</button>
                            </div>
                          </div>

                          <div className="right">
                            <Image
                              placeholder="blur"
                              src={Five}
                              alt="adeleke"
                              width={3280}
                              height={3735}
                              layout="intrinsic"
                              className="img"
                            />
                          </div>
                        </HGrid>
                      </Div100vh>
                    </div>

                    <FeatureProducts />
                    <Cta />
                    <Infoone />
                  </StyledBox>
                </m.div>
              </m.div>
            </LazyMotion>
          </section>
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const heroContent = (await getHeroContent()) || [];
//   return {
//     props: { heroContent },
//   };
// }

const HGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  height: 100vh;
  border-bottom: 1px solid var(--border-color);
  @media (min-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 var(--golden-ratio);

    @media (max-width: 700px) {
      margin-top: 4rem;
      padding-top: 2.5rem;
      padding: 0 1rem;
    }

    .left-top {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: var(--spacing-md);
      span {
        font-family: var(--font-5);
      }
    }

    .h-left-inner {
      width: 100%;
      margin-bottom: var(--spacing-md);
      h1 {
        font-size: 4rem;
        letter-spacing: var(--ls-sm);
        line-height: 1.05;
        @media (max-width: 700px) {
          font-size: 2rem;
          text-align: center;
        }
      }
    }

    .h-left-side {
      width: 100%;
      margin-bottom: var(--spacing-md);

      @media (max-width: 700px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        padding: 1rem 2rem;
        width: auto;
        height: 48px;
        background-color: var(--black);
        color: var(--white);
      }
    }
  }

  .right {
    overflow: hidden;
    /* z-index: -1; */
  }
`;
