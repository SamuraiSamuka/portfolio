"use client";

import { FiAlignCenter } from "react-icons/fi";
import "./styles.css";
import { useEffect, useState } from "react";
import SectionLink from "../SectionLink";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  function toggleActiveMenu() {
    const nav = document.getElementById("menu");
    const header = document.getElementById("cabecalho");
    const closeIcon = document.getElementById("close-menu_icon");
    const menuIcon = document.getElementById("menu_icon");

    if (window.innerWidth < 640) {
      nav?.classList.toggle("active-menu_menu");
      header?.classList.toggle("active-menu_cabecalho");
      menuIcon?.classList.toggle("hidden");
      closeIcon?.classList.toggle("hidden");
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
          className={`cabecalho fixed z-[5] mx-auto ml-[-1rem] box-border grid w-full grid-cols-3 items-center justify-between bg-cinza-900 px-4 py-4 
                      sm:ml-[-2rem] sm:flex sm:px-8 md:max-w-screen-md lg:max-w-screen-lg`}
          id="cabecalho"
        >
          <div className=" text-lg leading-tight">
            <h2>Samuel</h2>
            <h2>Carvalho</h2>
          </div>
          <nav
            id="menu"
            className={`menu col-start-2 row-start-2 mt-28 h-fit items-center gap-6 self-start 
                        sm:mt-0 sm:flex sm:flex-row sm:gap-1 sm:self-center md:gap-2`}
          >
            <SectionLink
              link="#inicio"
              active={activeSection == "inicio"}
              onClick={() => {
                handleSectionChange("inicio");
              }}
            >
              Início
            </SectionLink>
            <SectionLink
              link="#sobremim"
              active={activeSection == "sobremim"}
              onClick={() => handleSectionChange("sobremim")}
            >
              Sobre mim
            </SectionLink>
            <SectionLink
              link="#projetos"
              active={activeSection === "projetos"}
              onClick={() => handleSectionChange("projetos")}
            >
              Projetos
            </SectionLink>
            <SectionLink
              link="#habilidades"
              active={activeSection === "habilidades"}
              onClick={() => handleSectionChange("habilidades")}
            >
              Habilidades
            </SectionLink>
            <SectionLink
              link="#contatos"
              active={activeSection === "contatos"}
              onClick={() => handleSectionChange("contatos")}
            >
              Contato
            </SectionLink>
          </nav>
          <FiAlignCenter
            className="col-start-3 justify-self-end text-2xl hover:cursor-pointer sm:hidden"
            onClick={(e) => {
              toggleActiveMenu();
            }}
            id="menu_icon"
          />
          <IoMdClose
            className="col-start-3 hidden justify-self-end text-2xl hover:cursor-pointer sm:hidden"
            onClick={(e) => {
              toggleActiveMenu();
            }}
            id="close-menu_icon"
          />
        </header>
      )}
    </>
  );
}
