import { useEffect, useState, useLayoutEffect } from "react";
import { Image } from "react-datocms";

export function HeroImage({ title, responsiveImage }) {
  const image = (
    <div data-scroll data-scroll-speed="-1.5">
      <Image
        data={{
          ...responsiveImage,
          alt: `${title ? title : "bluu-lime"}`,
        }}
        className="a-img"
      />
    </div>
  );
  return (
    <div className="mx-auto overflow-hidden" data-scroll>
      {image}
    </div>
  );
}

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#eaeaea" offset="20%" />
      <stop stop-color="#c9c9c9" offset="50%" />
      <stop stop-color="#eaeaea" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#eaeaea" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite"  />
</svg>`;

export function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  };

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat("en-GB", options);
  return formatter.format(amount / 1);
}

{
  /* <FancySpan>
<m.span variants={HeroRevealIn} className="inline-block">
  Sunken
</m.span>
<m.span
  variants={revealInOutReserve}
  className="inline-block m-left">
  Interior
</m.span>
</FancySpan>

export const revealInOutReserve = {
  initial: { y: '-110%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1.1,
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
  exit: {
    y: '-110%',
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
};

const HeroRevealIn = {
  initial: { y: '110%', opacity: 0, },
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.77, 0, 0.175, 1],
      staggerChildren: 0.03,
    },
  },
  exit: {
    y: '110%',
    transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
  },
}; */
}
