import { ReactNode } from "react";

interface RedirectLinkProps {
  link?: string;
  children?: ReactNode;
}

export default function RedirectLink({ link, children }: RedirectLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center gap-2 rounded-lg bg-neutral-500 px-2 py-2 hover:bg-[#65baff] hover:text-neutral-800 sm:rounded-xl sm:py-0"
    >
      {children}
    </a>
  );
}
