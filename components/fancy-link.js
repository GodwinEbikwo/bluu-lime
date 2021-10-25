import Link from "next/link";

export default function FancyLink({ destination, a11yText, label, className }) {
  return (
    <Link href={destination ? destination : "/"}>
      <a
        aria-label={a11yText ? a11yText : ""}
        className={className ? className : null}
      >
        {label ? label : "you need a label!"}
      </a>
    </Link>
  );
}
