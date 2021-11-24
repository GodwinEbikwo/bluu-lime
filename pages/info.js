import { useRef } from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation";
import { fade } from "@/helpers/transitions";
import { StyledBox } from "@/components/box";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { options } from "@/lib/scroll";
import CookieBar from "@/components/cookie-bar";
import Information from "@/components/information/information";
import Gradient from "@/components/gradient";

const policyData =
  "We use cookies to personalize and deliver content. By using our site, you agree to our terms";

export default function InformationPage() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <NextSeo title="Information" />
      <CookieBar message={policyData} />
      <Gradient />
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
                    <Information />
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
