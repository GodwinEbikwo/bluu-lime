import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import FancyLink from "./fancy-link";
import { useHasMounted } from "@/helpers/index";

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
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 90;
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(190, 190, 190, 0.35);
`;

const NavBox = styled(m.nav)`
  padding-left: calc(var(--golden-ratio) - var(--px-2));
  padding-right: calc(var(--golden-ratio) - var(--px-2));

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
    color: var(--black);
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

const LogoContainer = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background: var(--black);
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
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  return (
    <LazyMotion features={domAnimation}>
      <HeaderBox
        initial="initial"
        animate="enter"
        exit="initial"
        variants={navAnim}
      >
        <NavBox className="flex space-between justify-center align-center">
          <LogoContainer className="nav-logo">
            <Logo />
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
        </NavBox>
      </HeaderBox>
    </LazyMotion>
  );
}
