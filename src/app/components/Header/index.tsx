"use client";

import { FiAlignCenter } from "react-icons/fi";
import "./styles.css";
import { useEffect, useState } from "react";
import Button from "../Button";

export default function Header() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  function toggleActiveMenu() {
    const nav = document.getElementById("menu");
    const header = document.getElementById("cabecalho");

    if (window.innerWidth < 640) {
      nav?.classList.toggle("active-menu_menu");
      header?.classList.toggle("active-menu_cabecalho");
    }
  }

  const updateActiveSection = (section: string) => {
    setActiveSection(section);
    window.location.hash = `#${section}`;
  };

  const handleSectionChange = (section?: string) => {
    toggleActiveMenu();
    section ? updateActiveSection(section) : "";
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
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
            <Button
              link="#inicio"
              active={activeSection == "inicio"}
              onClick={() => {
                handleSectionChange("inicio");
              }}
            >
              Início
            </Button>
            <Button
              link="#sobremim"
              active={activeSection == "sobremim"}
              onClick={() => handleSectionChange("sobremim")}
            >
              Sobre mim
            </Button>
            <Button
              link="#projetos"
              active={activeSection === "projetos"}
              onClick={() => handleSectionChange("projetos")}
            >
              Projetos
            </Button>
            <Button
              link="#habilidades"
              active={activeSection === "habilidades"}
              onClick={() => handleSectionChange("habilidades")}
            >
              Habilidades
            </Button>
            <Button
              link="#contato"
              active={activeSection === "contato"}
              onClick={() => handleSectionChange("contato")}
            >
              Contato
            </Button>
          </nav>
          <FiAlignCenter
            className="col-start-3 justify-self-end text-2xl hover:cursor-pointer sm:hidden"
            onClick={(e) => {
              handleSectionChange();
            }}
          />
        </header>
      )}
    </>
  );
}
