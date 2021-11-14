import { memo } from "react";
import cn from "classnames";

function rangeMap(n, fn) {
  const arr = [];
  while (n > arr.length) {
    arr.push(fn(arr.length));
  }
  return arr;
}

const Star = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z" />
    </svg>
  );
};

const Rating = ({ value }) => (
  <div className="flex flex-row">
    {rangeMap(value, (i) => (
      <span
        style={{
          marginLeft: "0.1rem",
        }}
        key={`star_${i}`}
        className={cn("inline-block", {
          "text-accent-5": i >= Math.floor(value),
        })}
      >
        <Star />
      </span>
    ))}
  </div>
);

export default memo(Rating);
