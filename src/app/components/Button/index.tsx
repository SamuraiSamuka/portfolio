import { ReactNode } from "react";

interface ButtonProps {
  link?: string;
  children?: ReactNode | string;
  className?: string;
  download?: string;
}

export default function Button({ link, children, download, className }: ButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-500 px-2 py-2 
                  hover:cursor-pointer hover:bg-azul-600 hover:font-semibold hover:text-neutral-800
                  sm:py-1 ${className}`}
      download={download}
    >
      {children}
    </a>
  );
}
