import { useRef } from "react";
import { NextSeo } from "next-seo";
import Layout from "./layout";
import Navigation from "./navigation";
import { fade } from "@/helpers/transitions";
import { StyledBox } from "./box";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { options } from "@/lib/scroll";
import CookieBar from "./cookie-bar";


const policyData =
  "Give your business time to grow. Get Shopify monthly or select a one-year, two-year, or three-year plan for savings of up to 25%.";

export default function Page({ title = "home", children }) {
  const containerRef = useRef(null);
  return (
    <Layout>
      {title && <NextSeo title={title} />}
      <Navigation />
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}
      >
        <main data-scroll-container ref={containerRef} id="scroll-container">
          <section data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <m.div variants={fade}>
                  <CookieBar message={policyData} />
                  <StyledBox className="has-px">{children}</StyledBox>
                </m.div>
              </m.div>
            </LazyMotion>
          </section>
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
