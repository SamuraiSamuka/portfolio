"use client";

import dynamic from "next/dynamic";
import { FiAlignCenter } from "react-icons/fi";
import "./styles.css";

const DynamicButton = dynamic(() => import("@/app/components/Button"), {
  ssr: false,
});

export default function Header() {
  const toggleActiveMenu = () => {
    const nav = document.getElementById("menu");
    const header = document.getElementById("cabecalho");
    if (window.innerWidth < 640) {
      nav?.classList.toggle("active-menu_menu");
      header?.classList.toggle("active-menu_cabecalho");
    }
  };

  return (
    <header
      className={`cabecalho fixed z-[5] mx-auto ml-[-1rem] box-border grid w-full grid-cols-3 items-center justify-between bg-cinza-900 px-4 py-4 sm:ml-[-2rem] sm:flex sm:px-8 md:max-w-screen-md lg:max-w-screen-lg`}
      id="cabecalho"
    >
      <div className=" text-lg leading-tight">
        <h2>Samuel</h2>
        <h2>Carvalho</h2>
      </div>
      <nav
        id="menu"
        className={`menu col-start-2 row-start-2 mt-28 h-fit items-center gap-6 self-start sm:mt-0 sm:flex sm:flex-row sm:gap-2 sm:self-center`}
      >
        <DynamicButton link="#inicio" active onClick={() => toggleActiveMenu()}>
          Início
        </DynamicButton>
        <DynamicButton link="#sobremim" active={false} onClick={() => toggleActiveMenu()}>
          Sobre mim
        </DynamicButton>
        <DynamicButton link="#projetos" active={false} onClick={() => toggleActiveMenu()}>
          Projetos
        </DynamicButton>
        <DynamicButton
          link="#habilidades"
          active={false}
          onClick={() => toggleActiveMenu()}
        >
          Habilidades
        </DynamicButton>
        <DynamicButton link="#contato" active={false} onClick={() => toggleActiveMenu()}>
          Contato
        </DynamicButton>
      </nav>
      <FiAlignCenter
        className="col-start-3 justify-self-end text-2xl hover:cursor-pointer sm:hidden"
        onClick={(e) => {
          toggleActiveMenu();
        }}
      />
    </header>
  );
}
