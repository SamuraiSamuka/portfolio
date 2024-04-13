import { ReactElement } from "react";
import NextSection from "../NextSection";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title?: string;
  children?: ReactElement | ReactElement[];
  first?: boolean;
}

export default function Section({ first = false, ...props }: SectionProps) {
  return first ? (
    <section
      {...props}
      className={`h-[90svh] snap-center scroll-mt-[10vh] overflow-hidden px-2 sm:px-6 ${props.className} `}
    >
      {props.children}
    </section>
  ) : (
    <section className="h-[90svh] snap-center overflow-hidden px-2 sm:px-6" {...props}>
      <NextSection href={`#${props.id}`} title={props.title || ""} />
      <div className=" h-[90vh] max-h-[90vh]">{props.children}</div>
    </section>
  );
}
