"use client";

import ProjectItem from "../ProjectItem";
import Section from "../Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { SiNextbilliondotai } from "react-icons/si";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

export default function ProjectsSection() {
  const [domLoaded, setDomLoaded] = useState(false);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  var settings = {
    className: "h-[45.7vh]",
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: false,
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
          <h2 className="mt-6 h-[10vh] text-center text-3xl">Meus Projetos</h2>
          <div className="grid-cols-[5%_90%_5%] sm:grid">
            <button
              onClick={previous}
              className="hidden items-center justify-center bg-neutral-800 sm:flex"
            >
              <MdOutlineKeyboardDoubleArrowLeft className=" text-4xl" />
            </button>
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              <ProjectItem
                theme="light"
                title="Samuka Geek"
                stack="html, css, react.js, typescript, github, tailwindCSS, react-router-dom"
                description="Proejeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
                links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
                imageUrl="samukaGeek.png"
              />
              <ProjectItem
                theme="light"
                title="Samuka Geek"
                stack="html, css, react.js, typescript, github, tailwindCSS, react-router-dom"
                description="Proejeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
                links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
                imageUrl="project-example-1.jpeg"
              />
              <ProjectItem
                theme="light"
                title="Samuka Geek"
                stack="html, css, react.js, typescript, github, tailwindCSS, react-router-dom"
                description="Proejeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
                links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
                imageUrl="project-example-2.jpeg"
              />
              <ProjectItem
                theme="light"
                title="Samuka Geek"
                stack="html, css, react.js, typescript, github, tailwindCSS, react-router-dom"
                description="Proejeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
                links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
                imageUrl="project-example-3.jpg"
              />
            </Slider>
            <button
              onClick={next}
              className="hidden items-center justify-center bg-neutral-800 sm:flex"
            >
              <MdOutlineKeyboardDoubleArrowRight className=" text-4xl" />
            </button>
          </div>
        </Section>
      )}
    </>
  );
}
