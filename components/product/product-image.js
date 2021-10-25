import { useState, useEffect } from "react";
import useInView from "react-cool-inview";
import Image from "next/image";

export default function ProductImage({
  src,
  alt,
  width,
  height,
  forceLoad,
  onLoad,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    threshold: 0.2,
  });

  function handleLoad() {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }
  useEffect(() => {
    if (isLoaded && onLoad) onLoad();
  }, [isLoaded]);
  return (
    <>
      <figure>
        <img
          ref={observe}
          src={forceLoad || inView ? src : null}
          alt={alt ? alt : "image of product"}
          width={width ? width : 350}
          height={height ? height : 350}
          onLoad={handleLoad}
          decoding="async"
        />
      </figure>
    </>
  );
}
