import styled from "styled-components";
import { m, LazyMotion, domAnimation, useCycle } from "framer-motion";
import FancyLink from "./fancy-link";
import { useHasMounted } from "@/helpers/index";
import { MenuToggle } from "./menu/menu-toggle";
import Icon from "./icons";

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
  position: fixed;
  top: var(--spacing-md);
  left: calc(var(--golden-ratio) - var(--px-2));
  right: calc(var(--golden-ratio) - var(--px-2));
  padding-top: var(--py-2);
  padding-bottom: var(--py-2);
  z-index: 90;

  @media (min-width: 767px) {
    left: var(--golden-ratio);
    right: var(--golden-ratio);
  }
`;

const NavBox = styled(m.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 1rem;
    height: 40px;
    border-radius: 999px;
    border: 1px solid var(--border-color);
    backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(40, 40, 40, 0.5);
    cursor: pointer;
  }
`;

const MenuBox = styled.div`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 40px;
  padding: 1rem 3rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(40, 40, 40, 0.5);

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
      color: var(--off-white);
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

const icon = {
  initial: {
    pathLength: 0,
    fill: "rgba(55, 155, 105, 0)",
  },
  enter: {
    pathLength: 1,
    fill: "var(--white)",
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
        variants={navAnim}
      >
        <NavBox initial={false} animate={isOpen ? "enter" : "exit"} exit="exit">
          <div className="nav-logo">
            <h5>BluuLime</h5>
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
        </NavBox>
      </HeaderBox>
    </LazyMotion>
  );
}
