import { ReactElement } from "react";
import NextSection from "../NextSection";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title?: string;
  children?: ReactElement | ReactElement[];
  type?: "normal" | "first" | "last";
}

export default function Section({ type = "normal", ...props }: SectionProps) {
  const firstSectionStyle = "h-[90svh] snap-center overflow-hidden px-2 sm:px-6 scroll-mt-[10vh]";
  const normalSectionStyle = "h-[90svh] snap-center overflow-hidden px-2 sm:px-6";
  const lastSectionStyle = "h-fit snap-center overflow-hidden px-2 sm:px-6";

  const firstSubSectionStyle =
    "h-[80svh] max-h-[80svh] mt-[8svh] flex justify-center md:items-center sm:mt-[10svh]";
  const normalSubSectionStyle = "h-[80svh] max-h-[80svh]";
  const lastSubSectionStyle = "h-fit flex justify-center items-center";

  return (
    <section
      {...props}
      className={`${props.className} ${type === "first" ? firstSectionStyle : type === "last" ? lastSectionStyle : normalSectionStyle} `}
    >
      {type === "normal" || type === "last" ? (
        <NextSection href={`#${props.id}`} title={props.title || ""} />
      ) : (
        ""
      )}
      <div
        className={` ${type === "normal" ? normalSubSectionStyle : type === "first" ? firstSubSectionStyle : lastSubSectionStyle}`}
      >
        {props.children}
      </div>
    </section>
  );
}
