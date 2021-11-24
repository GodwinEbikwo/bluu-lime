import React from "react";

export const EmptyCart = () => (
  <svg width="120" height="120" viewBox="0 0 14 14">
    <path
      style={{ fill: "var(--text-black)" }}
      d="M5.087 8.34a.655.655 0 111.31 0 .655.655 0 01-1.31 0zm3.329.656a.655.655 0 100-1.31.655.655 0 000 1.31z"
    />
    <path
      fill="none"
      stroke="var(--text-black)"
      strokeWidth=".1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M5.584 11.066s1.337-1.729 3.066 0M13.159 5.143h-1.861L12.952 2.2a.27.27 0 00-.097-.362l-.65-.387a.259.259 0 00-.356.092l-2.096 3.6h1.717-8.965 1.52l-2.03-3.495a.276.276 0 00-.364-.106l-.688.36a.251.251 0 00-.103.349l1.665 2.892H.841a.262.262 0 00-.262.262v1.022c0 .145.118.262.262.262h12.128H1.286l1.657 5.646a.371.371 0 00.335.252h7.601a.368.368 0 00.334-.252l1.605-5.645h.341a.262.262 0 00.262-.262V5.405a.262.262 0 00-.262-.262zM9.752 5.143h1.546"
    />
  </svg>
);

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="var(--black)"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="var(--text-black)"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="var(--text-black)"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export function EmptyIcon() {
  return (
    <div className="flex flex-column">
      <div className="flex align-center justify-center">
        <EmptyCart />
      </div>
      <span
        className="text-center text-uppercase"
        style={{ fontSize: "13.5px" }}
      >
        your bag is empty
      </span>
    </div>
  );
}
