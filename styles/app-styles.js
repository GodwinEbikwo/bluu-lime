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
  font-family:'NeueMontreal-Bold';
  font-style: normal;
  font-weight: 850;
  font-display: swap;
  src: url("/fonts/NeueMontreal-Bold.woff2") format('woff2');
}
@font-face {
  font-family: 'EditorialNew-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/EditorialNew-Regular.woff2") format('woff2');
}

:root {
  --py-2: 1rem;
  --px-2: 1.55rem;
  --golden-ratio: 2.75rem;
  --max-width: 100rem;

  --bg: hsla(200, 50%, 0%, 93%);
  --accent: #d3fd50;
  
  --text-white: #fff;
  --text-black: #2b2b2b;
  --off-white: rgba(255, 255, 255, 0.85);

  --black: #000;
  --white: #fff;

  --font: "NeueMontreal-Regular", 'Helvetica Neue', sans-serif;
  --font-2: "EditorialNew-Regular", 'Times New Roman', Times, serif;
  --font-3: "NeueMontreal-Bold", "Helvetica Neue", sans-serif;
  --font-6: "ivypresto-display", var(--font-2), serif;
 
  --font-sm: 400;
  --font-md: 500;
  --font-lg: 700;

  --border-color: rgba(100, 100, 100, 0.8);
 
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
  --linear: cubic-bezier(0.25,0.25,0.75,0.75);
  --easeInQuad: cubic-bezier(0.26,0,0.6,0.2);
  --easeOutQuad: cubic-bezier(0.4,0.8,0.74,1);
  --easeInOutQuad: cubic-bezier(0.48,0.04,0.52,0.96);
  --easeInCubic: cubic-bezier(0.4,0,0.68,0.06);
  --easeOutCubic: cubic-bezier(0.34,1.02,0.68,1);
  --easeInOutCubic: cubic-bezier(0.66,0,0.34,1);
  --easeInExpo: cubic-bezier(0.66,0,0.86,0);
  --easeOutExpo: cubic-bezier(0.16,1.08,0.38,0.98);
  --easeInOutExpo: cubic-bezier(0.9,0,0.1,1);
  --easeInQuart: cubic-bezier(0.52,0,0.74,0);
  --easeOutQuart: cubic-bezier(0.26,1.04,0.54,1);
  --easeInOutQuart: cubic-bezier(0.77,0,0.175,1);
  --easeInBack: cubic-bezier(0.6,-0.28,0.735,0.045);
  --easeOutBack: cubic-bezier(0.175,0.885,0.32,1.275);
  --easeInOutBack: cubic-bezier(0.175,0.885,0.32,1.275);
  --duration: 0.8s;

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
  fieldset,
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
  color: var(--off-white);
  font-family: var(--font);
  font-weight: normal;
  font-size: 0.95rem;
  &.no-scroll {
    overflow-y: hidden;
    touch-action: none;
  }
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

input {
  -webkit-appearance: none;
  border-radius: 0;
}

input[type="text"] {
  -webkit-appearance: none;
}

.bag-inner::-webkit-scrollbar {
  display: none !important;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 40px solid currentColor;
}

h1 {
    line-height: 1.6;
    letter-spacing: var(--ls-sm);
    font-family: var(--font-6), serif;
    font-weight: 100;
    font-size: clamp(
      var(--fluid-type-min, 1rem),
      calc(1rem + var(--fluid-type-target, 3vw)),
      var(--fluid-type-max, 1.3rem)
    );
  }

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

  /* common utilities that I find helpful */
  .center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  .flex-row{
    flex-direction: row;
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

  /* hide elements for different viewports */
  .hide-for-mobile {
    @media (max-width: 767px) {
      display: none;
      visibility: hidden;
    }
  }
  
  .hide-for-desktop {
    @media (min-width: 768px) {
      display: none;
      visibility: hidden;
    }
  }

  /* hover line animation  */
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

  /* animated image styles using locomotive scroll */
  .a-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: translateZ(0) scale3d(1.25, 1.25, 1);
    transform-origin: 50% 50%;
    transition: transform 1.35s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.5s cubic-bezier(0.38, 0.005, 0.215, 1);
    transition-delay: 0.35s;
  }

   &.is-inview {
    .a-img {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  /* background images styles */
  .bg-full {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  /* swiper styles */
  .swiper-button-prev,
  .swiper-button-next  {
    background-image: none;
  }

  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next::after {
    display: none;
  }

  /* menu styles */
  .cart-menu, 
  .mobile-menu {
    position: fixed;
    background-color: var(--bg);
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 500px;
    z-index: 1;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: var(--px-2);
    clip-path: inset(0 0 0 100%);
    transition: clip-path 1.15s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1.15s cubic-bezier(0.77, 0, 0.18, 1) 0.1s;
    will-change: clip-path;
    visibility: hidden;

    @media (max-width: 767px) {
      min-width: 100%;
    }

    &.open {
      clip-path: inset(0%); 
      transition: clip-path 1s cubic-bezier(.76,0,.24,1); 
      visibility: visible;
    }
  }

  .mobile-menu {
    clip-path: inset(0 0 100% 0);
    transition: clip-path 1s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1s cubic-bezier(0.77, 0, 0.18, 1) 0.1s;
    background: purple;

    &.open {
      clip-path: inset(0%); 
      transition: clip-path 1s cubic-bezier(.76,0,.24,1); 
      visibility: visible;
    }
  }

  .cart-menu-overlay {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(39, 39, 39, 0.8);
    z-index: -1;
    transition: opacity 1s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1.2s cubic-bezier(0.77, 0, 0.18, 1);
    backdrop-filter: blur(20px) saturate(180%);

    &.open {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.1s
    }
  }
`;
