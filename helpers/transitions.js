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

export const revealInOut = {
  initial: {
    y: "110%",
    opacity: 0,
    rotateX: "-80deg",
    transformPerspective: "500px",
  },
  enter: {
    y: "0%",
    opacity: 1,
    rotateX: "0deg",
    transition: {
      duration: 1.15,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
  exit: {
    y: "110%",
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};

export const barAnim = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.165, 0.84, 0.44, 1],
      delay: 0.35,
    },
  },
};
