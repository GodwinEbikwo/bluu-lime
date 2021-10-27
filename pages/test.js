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

const policyData =
  "We use cookies to personalize and deliver content. By using our site, you agree to our terms";

export default function TestPage({ heroContent }) {
  const { heroTitle, heroButtonTitle, heroImage } = heroContent;
  
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
                    <div
                      className="relative"
                      style={{ background: "var(--accent)" }}
                    >
                      <Div100vh>
                        <section className="hide-for-mobile">
                          <Hero
                            heroTitle={heroTitle}
                            heroButtonTitle={heroButtonTitle}
                            title={heroTitle?.title}
                            responsiveImage={heroImage?.responsiveImage}
                          />
                        </section>
                        <HGrid className="hide-for-desktop">
                          <div className="left">
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
                                        duration: 1.5,
                                        ease: [0.83, 0, 0.17, 1],
                                        delay: i * 0.0285,
                                      },
                                    }),
                                  }}
                                >
                                  Handmade crocket bags for every hot girl
                                  occasion
                                </SplitText>
                              </h1>
                            </div>

                            <div className="h-left-side">
                              <p>
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
                                        duration: 1.4,
                                        ease: [0.83, 0, 0.17, 1],
                                        delay: i * 0.015,
                                      },
                                    }),
                                  }}
                                >
                                  At Adeleke Family Law, we are the only
                                  national law firm dedicated to family matters
                                  with the largest team of specialist family
                                  lawyers in nigeria.
                                </SplitText>
                              </p>
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

export async function getStaticProps({ preview = false }) {
  const heroContent = (await getHeroContent()) || [];
  return {
    props: { heroContent },
  };
}

const HGrid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  height: calc(var(--vh, 1vh) * 100);
  @media (min-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }

  .left {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;

    @media (max-width: 700px) {
      margin-top: 4rem;
      padding-top: 2.5rem;
      margin-bottom: 2.5rem;
    }

    @media (min-width: 1024px) {
      max-width: 680px;
      margin-left: auto;
      margin-right: auto;
    }

    .h-left-inner {
      /* @media (max-width: 700px) {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    } */

      margin-bottom: var(--spacing-md);

      h1 {
        letter-spacing: var(--ls-md);
        line-height: 1.05;
        font-weight: var(--font-md);
      }
    }

    .h-left-side {
      margin-bottom: var(--spacing-md);
      margin: 0 auto;
      max-width: 40rem;
      p {
      }
      /* position: absolute;
    bottom: 1rem;
    right: var(--spacer-lg); */

      /* p {
      max-width: 30ch;
    } */
    }
  }

  .right {
    overflow: hidden;
    /* background: yellow; */
    /* z-index: -1; */
  }
`;
