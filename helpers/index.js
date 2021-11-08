import { useEffect, useState } from "react";
import { Image } from "react-datocms";

export function HeroImage({ title, responsiveImage }) {
  const image = (
    <div data-scroll data-scroll-speed="-1.5">
      <Image
        data={{
          ...responsiveImage,
          alt: `${title ? title : ""}`,
        }}
        className="not-selectable a-img"
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
      <stop stop-color="#3c3c3c" offset="20%" />
      <stop stop-color="#5c5c5c" offset="50%" />
      <stop stop-color="#3c3c3c" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#3c3c3c" />
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
