import React, { useEffect, useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Cookies from "js-cookie";
import { useHasMounted } from "@/helpers/index";
import FancyLink from "./fancy-link";
import styled from "styled-components";
import { barAnim } from "@/helpers/transitions";

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
  bottom: var(--spacer);
  right: 0;
  z-index: 90;
  width: 100%;
  max-width: 25rem;
  padding: 1rem;
  @media (min-width: 768px) {
    right: var(--spacer);
  }
  overflow: hidden;
`;

const CookieBarContent = styled.article`
  display: grid;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(20px) saturate(180%);
  padding: 1.25rem;
  background-color: rgba(90, 90, 90, 0.5);
`;

const CookieBarMessage = styled.div`
  flex: 1 1;
  text-align: center;
`;

const CookieBarActions = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  a {
    text-align: center;
    margin-bottom: var(--spacing-md);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
    border-radius: 9999px;
    width: auto;
    height: 48.5px;
    position: relative;
    text-align: center;
    transition: all 0.3s linear;
    padding: 1.25rem 3rem;
  }
`;
