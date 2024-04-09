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
    ? (buttonStyle = "hover:bg-neutral-700 rounded-full border px-3 py-1")
    : (buttonStyle = "hover:bg-neutral-700 rounded-full px-3 py-1");

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
