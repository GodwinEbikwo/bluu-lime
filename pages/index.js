import { useRef } from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import InfoA from "@/components/info-a";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { fade } from "@/helpers/transitions";
import { StyledBox } from "@/components/box";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { options } from "@/lib/scroll";
import CookieBar from "@/components/cookie-bar";
import Cta from "@/components/cta";
import { getHeroContent } from "@/lib/api";
import { getProductsInCollection } from "@/lib/shopify";
import ProductList from "@/components/product/product-list";

const policyData =
  "We use cookies to personalize and deliver content. By using our site, you agree to our terms";

export default function HomePage({ heroContent, products }) {
  const containerRef = useRef(null);
  const { heroTitle, heroImage } = heroContent;
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
                    <Hero />
                    <InfoA
                      title={heroTitle.title}
                      responsiveImage={heroImage.responsiveImage}
                    />
                    <ProductList products={products} />
                    <Cta />
                  </StyledBox>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </section>
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

export async function getStaticProps() {
  const heroContent = (await getHeroContent()) || [];
  const products = await getProductsInCollection();
  return {
    props: { heroContent, products },
  };
}
