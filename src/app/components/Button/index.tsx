"use client";

import Link from "next/link";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: string;
  link: string;
  active: boolean;
}

export default function Button({ children, link, active, ...props }: ButtonProps) {
  let buttonStyle = "";
  active
    ? (buttonStyle =
        "hover:bg-neutral-700 rounded-full border border-white duration-700 px-3 py-1 transition")
    : (buttonStyle =
        "hover:bg-neutral-700 rounded-full border-transparent duration-700 px-3 py-1 transition");

  return (
    <Link
      href={link}
      className={buttonStyle}
      onClick={() => console.log(window.location.hash)}
      {...props}
    >
      {children}
    </Link>
  );
}
