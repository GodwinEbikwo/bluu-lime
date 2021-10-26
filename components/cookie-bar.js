import React, { useEffect, useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Cookies from "js-cookie";
import { useHasMounted } from "@/helpers/index";
import FancyLink from "./fancy-link";
import styled from "styled-components";

const barAnim = {
  initial: {
    y: "100%",
    transition: {
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  enter: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const CookieBar = React.memo(({ message }) => {
  const hasMounted = useHasMounted();
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

  if (!hasMounted || !message) return null;

  return (
    <LazyMotion features={domAnimation}>
      {!acceptedCookies && (
        <>
          <CookieBarBox
            initial="initial"
            animate="enter"
            exit="initial"
            variants={barAnim}
            role="dialog"
            aria-live="polite"
            className="cookie-bar"
          >
            <CookieBarContent>
              <CookieBarMessage>
                <p>
                  {message.split("\n").map((text, i) => {
                    return (
                      <React.Fragment key={i}>
                        {text}
                        {message.split("\n")[i + 1] && <br />}
                      </React.Fragment>
                    );
                  })}
                </p>
              </CookieBarMessage>

              <CookieBarActions>
                <FancyLink
                  label="Learn more"
                  destination="/policy"
                  a11yText="navigate to our policy page"
                  className="link link--metis"
                />
                <button onClick={() => onAcceptCookies()}>Accept</button>
              </CookieBarActions>
            </CookieBarContent>
          </CookieBarBox>
        </>
      )}
    </LazyMotion>
  );
});

function useAcceptCookies(cookieName = "accept_cookies") {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  useEffect(() => {
    if (!Cookies.get(cookieName)) {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    Cookies.set(cookieName, "accepted", { expires: 365 });
  };

  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies,
  };
}

export default CookieBar;

const CookieBarBox = styled(m.aside)`
  position: fixed;
  bottom: var(--spacing-md);
  right: 0;
  z-index: 90;
  width: 100%;
  max-width: 58rem;
  padding: 1rem;
  @media (min-width: 768px) {
    right: var(--spacing-sm);
  }
`;

const CookieBarContent = styled.article`
  display: grid;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  background-color: #f7f7f7;
  padding: 1.5rem 1.5rem 1rem;
  @media (min-width: 768px) {
    display: flex;
    padding: 1.5rem;
  }
`;

const CookieBarMessage = styled.div`
  flex: 1 1;
  text-align: center;

  @media (min-width: 768px) {
    padding-right: 1rem;
    text-align: left;
  }
`;

const CookieBarActions = styled.div`
  display: grid;
  flex-shrink: 0;
  gap: 0.25rem;

  a {
    text-align: center;
    font-size: 1.35rem;
    @media (min-width: 768px) {
      margin-top: 0.65rem;
      text-align: unset;
    }
  }

  button {
    font-size: 1.35rem;
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
    border-radius: 9999px;
    width: auto;
    line-height: 1rem;
    position: relative;
    text-align: center;
    transition: all 0.3s linear;
    padding: 1.25rem 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
