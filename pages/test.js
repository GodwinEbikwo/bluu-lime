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
import useInView from "react-cool-inview";
import styled from "styled-components";
import Image from "next/image";
import { SplitText } from "@/components/split-text";
import Five from "../public/5.jpg";
import Hero from "@/components/hero";
import { getHeroContent } from "@/lib/api";
import { HeroImage } from "../helpers";
import Infoone from "@/components/info-one";
import HeroN from "@/components/hero";
import InfoA from "@/components/info-a";

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
                      <HeroN />
                    </div>

                    <InfoA />

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

export async function getStaticProps({ preview = false }) {
  const heroContent = (await getHeroContent()) || [];
  return {
    props: { heroContent },
  };
}
