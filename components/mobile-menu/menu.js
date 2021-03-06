import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "context/shop-context";
import cn from "classnames";
import FancySpan from "../fancy-span";
import { m } from "framer-motion";
import { variantsAni, menuInOut } from "@/helpers/transitions";
import { MobileMenuNav, MobileMenuUL, MobileMenuFooter } from "./menu-style";
import Div100vh from "react-div-100vh";

function List({ href, onClick, children, a11y }) {
  return (
    <li>
      <Link href={href ? href : "/"}>
        <a aria-label={a11y} onClick={onClick}>
          <FancySpan>{children}</FancySpan>
        </a>
      </Link>
    </li>
  );
}

export default function MobileMenu({}) {
  const { setMenuOpen, menuOpen } = useContext(CartContext);
  return (
    <Div100vh className={cn("mobile-menu", { open: menuOpen })}>
      <m.div
        className="mm-inner"
        initial={false}
        animate={menuOpen ? "enter" : "exit"}
        exit="exit"
        variants={variantsAni}
      >
        <MobileMenuNav>
          <MobileMenuUL>
            <List
              a11y="go to shop page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut}>Shop</m.div>
            </List>

            <List
              a11y="go to home page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut}>Home</m.div>
            </List>

            <List
              a11y="go to about page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut}>About</m.div>
            </List>

            <List
              a11y="go to journal page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut}>Journal</m.div>
            </List>
            <List
              a11y="go to information page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut}>Information</m.div>
            </List>
          </MobileMenuUL>
        </MobileMenuNav>

        <MobileMenuFooter>
          <h5>
            <FancySpan>
              <m.div variants={menuInOut} className="text-uppercase">
                site credits
              </m.div>
            </FancySpan>
          </h5>
        </MobileMenuFooter>
      </m.div>
    </Div100vh>
  );
}
