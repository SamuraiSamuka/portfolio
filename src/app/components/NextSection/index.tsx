import { IoIosArrowDown } from "react-icons/io";

interface NextSectionProps {
  href: string;
  title: string;
}

export default function NextSection({ href, title }: NextSectionProps) {
  return (
    <a href={href} className="flex h-[10svh] w-full flex-col items-center justify-center gap-4">
      <h3 className=" text-2xl">{title}</h3>
      <IoIosArrowDown className=" animate-bounce text-3xl transition" />
    </a>
  );
}
