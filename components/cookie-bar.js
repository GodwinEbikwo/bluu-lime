import React, { useEffect, useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Cookies from "js-cookie";
import { useHasMounted } from "@/helpers/index";
import FancyLink from "./fancy-link";
import styled from "styled-components";
import { barAnim } from "@/helpers/transitions";

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
    console.log("accepted cookie");
  };

  const rejectCookies = () => {
    setAcceptedCookies(false);
    Cookies.remove(cookieName);
    console.log("reject cookie");
  };

  return {
    acceptedCookies,
    rejectCookies,
    onAcceptCookies: acceptCookies,
    onNotAcceptCookies: rejectCookies,
  };
}

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
              <CookieBarMessage className="text-center">
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

                <FancyLink
                  label="Learn more"
                  destination="/privacy"
                  a11yText="navigate to our policy page →"
                  className="link link--metis"
                />
              </CookieBarMessage>

              <CookieBarActions>
                {/* <button onClick={() => onAcceptCookies()}>No, thanks</button> */}
                <button className="outline" onClick={() => onAcceptCookies()}>
                  Accept
                </button>
              </CookieBarActions>
            </CookieBarContent>
          </CookieBarBox>
        </>
      )}
    </LazyMotion>
  );
});

export default CookieBar;

const CookieBarBox = styled(m.aside)`
  position: fixed;
  bottom: var(--spacer);
  right: 0;
  z-index: 90;
  width: 100%;
  padding: 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    right: var(--spacer);
    max-width: 25rem;
  }
`;

const CookieBarContent = styled.article`
  display: grid;
  gap: 1rem;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(20px) saturate(180%);
  padding: 1.25rem;
  background-color: rgba(50, 50, 50, 0.5);
  border-radius: 5px;
`;

const CookieBarMessage = styled.div`
  flex: 1 1;
  p {
    margin-bottom: 5px;
  }

  a {
    color: var(--accent);
  }
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
    border-radius: 999px;
    width: auto;
    height: 48.5px;
    position: relative;
    text-align: center;
    transition: all 0.3s linear;
    padding: 1.25rem 3rem;
  }
`;
