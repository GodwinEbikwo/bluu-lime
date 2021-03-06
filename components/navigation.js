import styled from "styled-components";
import { useContext } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import FancyLink from "./fancy-link";
import { useHasMounted } from "@/helpers/index";
import { CartContext } from "context/shop-context";
import MiniCart from "./cart/cart";
import Link from "next/link";
import MobileMenu from "./mobile-menu/menu";
import { MenuToggle } from "./mobile-menu/menu-toggle";

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
    destination: "/journal",
    a11yText: "go to the Journal page",
  },
  {
    label: "Information",
    destination: "/policy",
    a11yText: "go to the Information page",
  },
];

const HeaderBox = styled(m.header)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0.5rem 0;
  @media (max-width: 767px) {
    padding: 0.65rem 0;
  }
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
    font-family: var(--font-2);
    text-transform: capitalize;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    visibility: hidden;
    display: none;
  }

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

  button {
    font-family: var(--font);
  }
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
        fill="var(--black)"
      />
    </svg>
  );
}

export default function Navigation() {
  const { cart, cartOpen, setCartOpen, menuOpen, setMenuOpen } = useContext(
    CartContext
  );

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
      >
        <NavBox className="flex space-between justify-center align-center">
          <LogoContainer className="flex align-center justify-center cursor-pointer">
            <m.div
              initial={false}
              animate={menuOpen ? "enter" : "exit"}
              exit="exit"
            >
              <MenuToggle toggle={() => setMenuOpen(!menuOpen)} />
              <MobileMenu />
            </m.div>

            <Link href="/" passHref>
              <a className="hide-for-mobile">
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

          <aside className="hide-for-desktop flex align-center justify-center text-center">
            <Link href="/" passHref>
              <a>
                <div
                  style={{
                    fontFamily: "var(--font-3)",
                    letterSpacing: "-0.04em",
                    fontSize: "25px",
                  }}
                >
                  BluuLime
                </div>
              </a>
            </Link>
          </aside>

          <>
            <button
              className="cursor-pointer"
              style={{
                color: "inherit",
              }}
              onClick={() => setCartOpen(!cartOpen)}
            >
              <div className="flex space-between">
                <svg
                  style={{ marginRight: "0.15rem" }}
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="inline-flex">({cartQuantity})</span>
              </div>
            </button>
            <MiniCart cart={cart} />
          </>
        </NavBox>
      </HeaderBox>
    </LazyMotion>
  );
}
