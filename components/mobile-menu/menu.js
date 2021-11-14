import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "context/shop-context";
import cn from "classnames";
import FancySpan from "../fancy-span";
import { m } from "framer-motion";
import { variantsAni, menuInOut } from "@/helpers/transitions";
import {
  MobileMenuHeader,
  MobileMenuMain,
  MobileMenuUL,
  MobileMenuFooter,
} from "./menu-style";
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
    <m.aside animate="enter" initial="initial" exit="exit">
      <>
        <div className={cn("mobile-menu", { open: menuOpen })}>
          <m.div
            className="mm-inner"
            initial={false}
            animate={menuOpen ? "enter" : "exit"}
            exit="exit"
            variants={variantsAni}
          >
            <MobileMenuHeader>
              <button role="button" onClick={() => setMenuOpen(!menuOpen)}>
                <span>close</span>
              </button>
            </MobileMenuHeader>

            <MobileMenuMain>
              <MobileMenuUL>
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
                  a11y="go to shop page"
                  href="/"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <m.div variants={menuInOut}>Shop</m.div>
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
            </MobileMenuMain>

            <MobileMenuFooter>
              <FancySpan>
                <m.div variants={menuInOut}>footer</m.div>
              </FancySpan>
            </MobileMenuFooter>
          </m.div>
        </div>
      </>
    </m.aside>
  );
}
