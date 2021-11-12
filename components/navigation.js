import styled from "styled-components";
import { useContext } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import FancyLink from "./fancy-link";
import { useHasMounted } from "@/helpers/index";
import useInView from "react-cool-inview";
import { CartContext } from "context/shop-context";
import MiniCart from "./cart/cart";
import Link from "next/link";

const data = [
  {
    label: "Home",
    destination: "/",
    a11yText: "go to the home page",
  },
  {
    label: "About",
    destination: "/about",
    a11yText: "go to the about page",
  },
  {
    label: "Shop",
    destination: "/shop",
    a11yText: "go to the shop page",
  },
  {
    label: "Journal",
    destination: "/ingredients",
    a11yText: "go to the ingredients page",
  },
  {
    label: "Policy",
    destination: "/blog",
    a11yText: "go to the blog page",
  },
];

const HeaderBox = styled(m.header)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  z-index: 100;
`;

const NavBox = styled(m.nav)`
  padding-left: calc(var(--golden-ratio) - var(--px-2));
  padding-right: calc(var(--golden-ratio) - var(--px-2));

  a {
    cursor: pointer;
  }

  @media (min-width: 767px) {
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
  }

  .nav-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: var(--font-2);
    text-transform: capitalize;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover > li {
    transition: opacity 300ms linear;
    opacity: 0.25;
  }

  &:hover > li:hover {
    opacity: 1;
  }

  li {
    &:not(:last-child) {
      padding-right: var(--spacing-md);
    }

    a {
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
`;

function ListItem({ destination, a11yText, label, className }) {
  return (
    <li>
      <FancyLink
        destination={destination ? destination : "/"}
        a11yText={a11yText ? a11yText : undefined}
        label={label ? label : "needs a name"}
        className={className ? className : null}
      />
    </li>
  );
}

const navAnim = {
  initial: {
    y: "-100%",
  },
  enter: {
    y: "0%",
    transition: {
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    y: "-100%",
  },
};

const LogoContainer = styled.aside`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Logo() {
  return (
    <svg
      className="logo"
      width="30"
      height="30"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 0L23.0203 19.9797L43 21.5L23.0203 23.0203L21.5 43L19.9797 23.0203L0 21.5L19.9797 19.9797L21.5 0Z"
        fill="var(--white)"
      />
    </svg>
  );
}

export default function Navigation() {
  const { observe } = useInView();
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <LazyMotion features={domAnimation}>
      <HeaderBox
        initial="initial"
        animate="enter"
        exit="initial"
        variants={navAnim}
        ref={observe}
      >
        <NavBox className="flex space-between justify-center align-center">
          <LogoContainer className="nav-logo">
            <Link href="/" passHref>
              <a>
                <Logo />
              </a>
            </Link>
          </LogoContainer>

          <NavList className="hide-for-mobile">
            {data.map((item, i) => (
              <ListItem
                key={i}
                label={item.label}
                destination={item.destination}
                a11yText={item.a11yText}
                className="link link--metis"
              />
            ))}
          </NavList>

          <div>
            <a
              className="text-uppercase"
              onClick={() => setCartOpen(!cartOpen)}
            >
              Bag ({cartQuantity})
            </a>
            <MiniCart cart={cart} />
          </div>
        </NavBox>
      </HeaderBox>
    </LazyMotion>
  );
}
