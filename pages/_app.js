import { AppStyles } from "@/styles/app-styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "@/helpers/seo-config";
import ShopProvider from "context/shop-context";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AppStyles />
      <DefaultSeo {...SEO} />
      <ShopProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </ShopProvider>
    </>
  );
}
