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
