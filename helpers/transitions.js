export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
};


// --linear: cubic-bezier(0.25,0.25,0.75,0.75);
// --easeInQuad: cubic-bezier(0.26,0,0.6,0.2);
// --easeOutQuad: cubic-bezier(0.4,0.8,0.74,1);
// --easeInOutQuad: cubic-bezier(0.48,0.04,0.52,0.96);
// --easeInCubic: cubic-bezier(0.4,0,0.68,0.06);
// --easeOutCubic: cubic-bezier(0.34,1.02,0.68,1);
// --easeInOutCubic: cubic-bezier(0.66,0,0.34,1);
// --easeInExpo: cubic-bezier(0.66,0,0.86,0);
// --easeOutExpo: cubic-bezier(0.16,1.08,0.38,0.98);
// --easeInOutExpo: cubic-bezier(0.9,0,0.1,1);
// --easeInQuart: cubic-bezier(0.52,0,0.74,0);
// --easeOutQuart: cubic-bezier(0.26,1.04,0.54,1);
// --easeInOutQuart: cubic-bezier(0.77,0,0.175,1);
// --easeInBack: cubic-bezier(0.6,-0.28,0.735,0.045);
// --easeOutBack: cubic-bezier(0.175,0.885,0.32,1.275);
// --easeInOutBack: cubic-bezier(0.175,0.885,0.32,1.275);