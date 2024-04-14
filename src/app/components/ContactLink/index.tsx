import { ReactNode } from "react";

interface ContactLinkProps {
  children?: string | ReactNode;
  link: string;
}

export default function ContactLink({ children, link }: ContactLinkProps) {
  return (
    <a href={link} className={`hover:text-azul-500 text-xl sm:text-3xl`}>
      <h3>{children}</h3>
    </a>
  );
}
