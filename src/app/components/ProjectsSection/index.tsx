"use client";

import ProjectItem from "../ProjectItem";
import Section from "../Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

export default function ProjectsSection() {
  const [domLoaded, setDomLoaded] = useState(false);
  let sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  var settings = {
    className: "h-[46vh] w-full block",
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 2,
    slidesToShow: 2,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3500,
    variableWidth: true,
    centerPadding: "40px",
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };
  return (
    <>
      {domLoaded && (
        <Section
          title="Projetos"
          id="projetos"
          className="h-[90svh] snap-center overflow-hidden sm:px-6"
        >
          <h2 className="mt-[5svh] h-[8svh] text-left text-2xl sm:mt-[10vh]">Meus Projetos</h2>
          <div className="grid-cols-[4%_92%_4%] sm:grid">
            <button
              onClick={previous}
              className="hidden items-center justify-center rounded-l-xl hover:bg-neutral-800 sm:flex"
            >
              <MdOutlineKeyboardDoubleArrowLeft className=" text-4xl" />
            </button>
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef.current = slider;
              }}
            >
              <ProjectItem
                theme="light"
                title="Samuka Geek"
                stack="reactJs, typescript, tailwindCSS, react-router-dom"
                description="Projeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
                links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
                imageUrl="samuka_geek.png"
              />
              <ProjectItem
                theme="light"
                title="Agenda Saúde"
                stack="reactJs, nextJs, typescript, tailwindCSS"
                description="Projeto voluntário de desenvolvimento de software voltado à área da saúde. Possui foco em auxiliar pacientes, clínicas e médicos nas marcações e gerenciamento de consultas."
                links={{
                  project: "https://agenda-saude.vercel.app/",
                  github: "https://github.com/Care-4-you/AgendaSaude.web",
                }}
                imageUrl="agenda_saude.png"
              />
            </Slider>
            <button
              onClick={next}
              className="hidden items-center justify-center rounded-r-xl hover:bg-neutral-800 sm:flex"
            >
              <MdOutlineKeyboardDoubleArrowRight className=" text-4xl" />
            </button>
          </div>
        </Section>
      )}
    </>
  );
}
