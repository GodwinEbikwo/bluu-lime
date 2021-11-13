import { useRef } from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Navigation from "@/components/navigation";
import { fade } from "@/helpers/transitions";
import { StyledBox } from "@/components/box";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { options } from "@/lib/scroll";
import CookieBar from "@/components/cookie-bar";
import { recursiveCatalog, getProduct } from "@/lib/shopify";
import ProductContent from "@/components/product/product-content";

const policyData =
  "We use cookies to personalize and deliver content. By using our site, you agree to our terms";

export default function HomePage({ product }) {
  const containerRef = useRef(null);
  const { originalSrc } = product.images.edges[0].node;
  console.log(product);

  return (
    <Layout>
      <NextSeo
        title={product.title}
        description={product.description}
        openGraph={{
          type: "website",
          url: `https://bluu-lime.vercel.app/${product.handle}`,
          title: `${product.title}`,
          description: `${product.description}`,
          images: [
            {
              url: originalSrc,
              width: 504,
              height: 672,
              alt: product.title,
            },
          ],
        }}
      />
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
                    <ProductContent product={product} />
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

export async function getStaticPaths() {
  const products = await recursiveCatalog();
  const paths = products.map((item) => {
    const product = String(item.node.handle);
    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
