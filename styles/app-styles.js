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

:root{
  --golden-ratio: 1.5rem;
  --max-width: 2460px;


  --bg: hsla(223, 57%, 42%, 20%);
  --accent: hsla(2, 89%, 58%, 100%);

  --text-white: #111;
  --text-black: #2b2b2b;
  --off-white: rgba(255, 255, 255, 0.85);

  --black: #000;
  --white: #fff;
  --gray: #eee;

  --font: "NeueMontreal-Regular", 'Helvetica Neue', sans-serif;
  --font-2: "EditorialNew-Regular",  'Times New Roman', Times, serif;
 
  --font-sm: 400;
  --font-md: 500;
  --font-lg: 700;

  --border-color: rgba(222, 222, 222, 1);
 
  --ls-sm: -0.02em;
  --ls-md: -0.035em;
  --ls-lg: -0.05em;

  --spacing-sm: 10px;
  --spacing-md: 20px;
  --spacing-lg: 30px;

  --spacer: 2rem;
  --spacer-md: 3rem;
  --spacer-lg: 5rem;
  --easing: cubic-bezier(0.215, 0.61, 0.355, 1);  
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

[data-scroll-direction='horizontal'] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap;
}

[data-scroll-direction='horizontal'] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%;
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

[data-scroll-direction='horizontal'] .c-scrollbar {
  width: 100%;
  height: 10px;
  top: auto;
  bottom: 0;
  transform: scaleY(1);
}
[data-scroll-direction='horizontal'] .c-scrollbar:hover {
  transform: scaleY(1.3);
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: grab;
}

.has-scroll-dragging .c-scrollbar_thumb {
  cursor: grabbing;
}

[data-scroll-direction='horizontal'] .c-scrollbar_thumb {
  right: auto;
  bottom: 0;
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
    font-size: 62.5%;
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
    line-height: 1.6;
    color: var(--text-black);
    font-family: var(--font);
    font-weight: normal;
    font-size: 1.5rem;

    &.no-scroll {
      overflow-y: hidden;
      touch-action: none;
    }  

    &.bg-white{
      background-color: var(--bg);
      transition: background-color 400ms linear;
    }
    
    &.bg-red{
      background-color: hsla(310, 81%, 85%, 100%);
      transition: background-color 400ms linear;
  }
}

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


.box-shadow{
  box-shadow: 0 3px 50px rgb(0 0 0 / 0.1);
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

  .inset-0{
    top: 0;
    left: 0;
  }

  .flex {
    display: flex;
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

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .space-between {
    justify-content: space-between;
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
    padding-left: var(--golden-ratio);
    padding-right: var(--golden-ratio);
    @media screen and (max-width: 767px) {
      --gr-r: 1rem;
      padding-left: var(--g-r);
      padding-right: var(--g-r);
    }
  }

  .py-2 {
    padding-top: var(--golden-ratio);
    padding-bottom: var(--golden-ratio);
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
      object-position: 50% 50%;
      opacity: 0;
      transform: rotate(-5deg) scale(1.3);
      transition: opacity 0.2s var(--easing), transform 1.2s var(--easing);
      will-change: transform, opacity;
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
  }

    &.is-inview {
      .img {
        opacity: 1;
        transform: rotate(0deg) scale(1);
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
    transform: rotate(-8deg) scale(1.3);
    transform-origin: 50% 50%;
    transition: opacity 0.5s var(--easing), transform 1.25s var(--easing);
    will-change: opacity, transform;
  }

   &.is-inview {
    .a-img {
      opacity: 1;
      transform: rotate(0deg) scale(1);
      transition-delay: 0.25s;
    }
  }

.bg-full {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
}
`;
