import styled from "styled-components";
import { m, LazyMotion, domAnimation, useCycle } from "framer-motion";
import FancyLink from "./fancy-link";
import { useHasMounted } from "@/helpers/index";
import { MenuToggle } from "./menu/menu-toggle";

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
  --py-2: 1rem;
  position: fixed;
  top: var(--spacer-half);
  left: var(--golden-ratio);
  right: var(--golden-ratio);
  padding-top: var(--py-2);
  padding-bottom: var(--py-2);
  z-index: 90;
`;

const NavBox = styled(m.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-logo {
    span {
      color: black;
      font-size: 3vw;
    }
  }
`;

const MenuBox = styled.ul`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: var(--black);
  border-radius: 999px;

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
      text-transform: capitalize;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
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

export default function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  return (
    <LazyMotion features={domAnimation}>
      <HeaderBox
        initial="initial"
        animate="enter"
        exit="initial"
        className="px-2"
        variants={navAnim}
      >
        <NavBox initial={false} animate={isOpen ? "enter" : "exit"} exit="exit">
          <div className="nav-logo">
            <span aria-label="emoji">✦</span>
          </div>
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
          <MenuBox>{/* <MenuToggle toggle={() => toggleOpen()} /> */}</MenuBox>
        </NavBox>
      </HeaderBox>
    </LazyMotion>
  );
}
