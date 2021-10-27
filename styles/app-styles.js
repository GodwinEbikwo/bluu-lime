import { createGlobalStyle } from "styled-components";
export const AppStyles = createGlobalStyle`
@font-face {
  font-family:'NeueMontreal-Regular';
  font-style: normal;
  font-weight: 450;
  font-display: swap;
  src: url("/fonts/NeueMontreal-Regular.woff2") format('woff2');
}
@font-face {
  font-family: 'EditorialNew-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/EditorialNew-Regular.woff2") format('woff2');
}
@font-face {
  font-family: 'RadioGrotesk-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/fonts/RadioGrotesk-Bold.woff2") format('woff2');
}
@font-face {
  font-family: 'RadioGrotesk-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/RadioGrotesk-Regular.woff2") format('woff2');
}

:root {
  --py-2: 1rem;
  --px-2: 1.85rem;
  --golden-ratio: 2.75rem;
  --max-width: 100rem;

  /* --bg: hsla(200, 50%, 0%, 100%); */
  /* --bg: hsla(0, 0%, 0%, 0%); */
  --bg: hsla(223, 57%, 42%, 20%);
  --accent: hsla(223, 57%, 42%, 20%);

  --text-white: #fff;
  --text-black: #2b2b2b;
  --off-white: rgba(255, 255, 255, 0.85);

  --black: #000;
  --white: #fff;

  --font: "NeueMontreal-Regular", 'Helvetica Neue', sans-serif;
  --font-2: "EditorialNew-Regular", 'Times New Roman', Times, serif;
  --font-3: "RadioGrotesk-Bold", 'Helvetica Neue', sans-serif;
  --font-4: "RadioGrotesk-Regular", 'Helvetica Neue', Times, serif;
 
  --font-sm: 400;
  --font-md: 500;
  --font-lg: 700;

  --border-color: rgba(200, 200, 200, 0.4);
 
  --ls-sm: -0.02em;
  --ls-md: -0.035em;
  --ls-lg: -0.055em;

  --spacing-sm: 11px;
  --spacing-md: 16px;
  --spacing-lg: 21px;

  --spacer: 2rem;
  --spacer-md: 3rem;
  --spacer-lg: 5rem;
  --easing: cubic-bezier(0.215, 0.61, 0.355, 1);  

  --fluid-type-min: 2rem;
  --fluid-type-max: 2.5rem;
  --fluid-type-target: 2.5vw;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  border: 0 solid #444;
}

html.has-scroll-smooth {
  overflow: hidden;
}

html.has-scroll-dragging {
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
}

.c-scrollbar:hover {
  transform: scaleX(1.45);
}

.c-scrollbar:hover,
.has-scroll-scrolling .c-scrollbar,
.has-scroll-dragging .c-scrollbar {
  opacity: 1;
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(90, 90, 90, 1);;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: grab;
}

.has-scroll-dragging .c-scrollbar_thumb {
  cursor: grabbing;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button {
  font-family: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  outline: none;
  background-color: transparent;
}

html,
  body,
  div,
  button,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  svg,
  img,
  strong,
  ol,
  ul,
  li,
  form,
  aside,
  article,
  footer,
  header,
  input,
  optgroup,
  select,
  textarea,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: middle; 
  }

  html {
    background-color: var(--bg);
    &:not(.has-scroll-init) {
      cursor: wait;
      overflow: hidden;
    }
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    color: var(--text-black);
    font-family: var(--font);
    font-weight: normal;
    font-size: 0.9rem;

    &.no-scroll {
      overflow-y: hidden;
      touch-action: none;
    }  
}

  h1 {
    line-height: 1.05;
    letter-spacing: var(--ls-sm);
    font-family: var(--font-2);
    font-size: clamp(
      var(--fluid-type-min, 1rem),
      calc(1rem + var(--fluid-type-target, 3vw)),
      var(--fluid-type-max, 1.3rem)
    );
  }

  h2,
  h3,
  h4,
  p {
    hyphens: auto;
    word-break: break-word;
  }

  h2 { font-size: 2.441rem;}

  h3 { font-size: 1.953rem;}

  h4 { font-size: 1.563rem;}

  h5 { font-size: 1.25rem;}

  li,
  ul {
    list-style: none;
  }

  a {
    text-decoration: inherit;
    color: inherit;
    background-color: transparent;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .center-absolute{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .line {
    height: 1px;
    transform-origin: left;
    background: var(--white);
  }

  .text-center {
    text-align: center;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .m-auto {
    margin: auto;
  }

  .w-full{
    width: 100%;
  }

  .h-full{
    height: 100%;
  }

  .inset-0 {
    top: 0;
    left: 0;
  }

  .flex {
    display: flex;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .flex-container {
    width: 100%;
    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .inline-flex {
    display: inline-flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .mt-auto {
    margin-top: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .flex-column {
    flex-direction: column
  }

  .sm-spacing {
    --absolute: 0;
    margin-right: calc(0.75rem * var(--absolute));
    margin-left: calc(0.75rem * calc(1 - var(--absolute)));
    display: block;
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .not-selectable {
    user-select: none;
  }

  .px-2 {
    padding-left: calc(var(--golden-ratio) - var(--px-2));
    padding-right: calc(var(--golden-ratio) - var(--px-2));

    @media (min-width: 767px) {
      left: var(--golden-ratio);
      right: var(--golden-ratio);
    }
  }

  .py-2 {
    padding-top: calc(var(--golden-ratio) - var(--px-2));
    padding-bottom: calc(var(--golden-ratio) - var(--px-2));

    @media (min-width: 767px) {
      padding-top: var(--golden-ratio);
      padding-bottom: var(--golden-ratio);
    }
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .hide-for-mobile {
    @media screen and (max-width: 767px) {
      display: none;
      visibility: hidden;
    }
  }
  
  .hide-for-desktop {
    @media screen and (min-width: 768px) {
      display: none;
      visibility: hidden;
    }
  }

  .link {
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }

  .link::before,
  .link::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  .link::before {
    content: '';
  }

  .link--metis {
    text-transform: inherit;
  }

  .link--metis::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  .link--metis:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .b-speed-block {
    position: relative;
  }

  .b-image_wrapper {
    position: relative;
    overflow: hidden;
  }

  .b-image {
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transform: scale(1.3, 1.3);
      transition: opacity 0.2s var(--easing), transform 1.2s var(--easing);
      will-change: transform, opacity;
      transform-origin: 50% 50%;
  }

    &.is-inview {
      .img {
        opacity: 1;
        transform: scale(1);
        transition-delay: 0.65s;
    }
  }
}

.a-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.2, 1.2);
    transform-origin: 50% 50%;
    transition: transform 1.2s var(--easing), opacity 0.5s var(--easing);
    will-change:transform, opacity;
  }

   &.is-inview {
    .a-img {
      opacity: 1;
      transform: scale(1);
      transition-delay: 0.45s;
    }
  }

  .bg-full {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }
`;
