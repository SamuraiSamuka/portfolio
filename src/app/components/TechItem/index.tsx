export default function TechItem({ name }: { name: string; key: string }) {
  return (
    <div className="flex h-fit  items-center gap-1 rounded bg-stone-600 px-2 leading-snug shadow-inner">
      {name}
    </div>
  );
}
