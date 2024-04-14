"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode | string;
  link: string;
  active: boolean;
}

export default function SectionLink({ children, link, active, className, ...props }: ButtonProps) {
  let buttonStyle = ` hover:bg-neutral-700 rounded-full border duration-700 px-3 py-1 transition ${className}`;
  active ? (buttonStyle += "  border-white") : (buttonStyle += " border-transparent");

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
