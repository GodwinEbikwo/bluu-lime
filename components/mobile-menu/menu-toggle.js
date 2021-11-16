import { m } from "framer-motion";

const Path = (props) => (
  <m.path
    fill="transparent"
    strokeWidth="1.2"
    stroke="#fff"
    strokeLinecap="square"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button
    role="button"
    onClick={toggle}
    className="hide-for-desktop"
    style={{ marginTop: "0.55rem" }}
  >
    <svg width="24" height="24" viewBox="0 0 23 23">
      <Path
        variants={{
          exit: { d: "M 2 2.5 L 30 2.5" },
          enter: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 30 9.423"
        variants={{
          exit: { opacity: 1 },
          enter: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        d="M 2 16.346 L 7.5 16.346"
        variants={{
          exit: { opacity: 0 },
          enter: { opacity: 1, d: "M 3 2.5 L 17 16.346" },
        }}
        transition={{ duration: 0.1 }}
      />
    </svg>
  </button>
);
