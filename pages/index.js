import { useRef } from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import { fade } from "@/helpers/transitions";
import { StyledBox } from "@/components/box";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { options } from "@/lib/scroll";
import CookieBar from "@/components/cookie-bar";
import Cta from "@/components/cta";
import FeatureProducts from "@/components/feature-product";
import { getHeroContent } from "@/lib/api";

const policyData =
  "We use cookies to personalize and deliver content. By using our site, you agree to our terms";

export default function HomePage({ heroContent }) {
  const containerRef = useRef(null);
  const { heroTitle, heroButtonTitle, heroImage } = heroContent;
  return (
    <Layout>
      <NextSeo title="Home" />
      <CookieBar message={policyData} />
      <Navigation />
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}
      >
        <main role="main" data-scroll-container ref={containerRef} id="scroll-container">
          <section data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <m.div variants={fade}>
                  <StyledBox>
                    <Hero
                      heroTitle={heroTitle}
                      heroButtonTitle={heroButtonTitle}
                      title={heroTitle.title}
                      responsiveImage={heroImage.responsiveImage}
                    />
                    <div
                      className="py-2 relative"
                      style={{ margin: "4rem 0", padding: "90px 0" }}
                    >
                      <FeatureProducts />
                    </div>
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
