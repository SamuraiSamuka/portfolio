import { ReactElement } from "react";
import NextSection from "../NextSection";

interface SectionProps {
  id: string;
  title?: string;
  children?: ReactElement | ReactElement[];
  first?: boolean;
}

export default function Section({ title, id, children, first = false }: SectionProps) {
  return first ? (
    <section className={`h-[80vh] snap-center scroll-mt-[10vh] px-6`} id={id}>
      {children}
    </section>
  ) : (
    <section className=" h-[90vh] snap-center px-6" id={id}>
      <NextSection href={`#${id}`} title={title || ""} />
      <div className=" max-h-[90vh]">{children}</div>
    </section>
  );
}
