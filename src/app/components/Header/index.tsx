export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[10vh] w-full items-center justify-between bg-cinza-900 py-4">
      <div className=" text-lg leading-tight">
        <h2>Samuel</h2>
        <h2>Carvalho</h2>
      </div>
      <nav className="flex h-fit items-center gap-4">
        <a className="rounded-full border px-4" href="#inicio">
          Início
        </a>
        <a href="#sobremim">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
