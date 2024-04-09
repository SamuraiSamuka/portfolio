import { ElementType } from "react";

interface HabilityProps {
  icon: ElementType;
  title: string;
}

export default function Hability({ icon: Icon, title }: HabilityProps) {
  return (
    <div className="flex w-fit items-center justify-start gap-2">
      <Icon className=" text-4xl" />
      <h4 className="text-cinza-300">{title}</h4>
    </div>
  );
}
