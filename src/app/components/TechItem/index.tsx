export default function TechItem({ name }: { name: string; key: string }) {
  return (
    <div className="flex h-fit  items-center gap-1 rounded bg-neutral-700 px-2 capitalize leading-snug shadow-inner hover:bg-neutral-600">
      {name}
    </div>
  );
}
