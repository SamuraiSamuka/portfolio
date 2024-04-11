"use client";

import ProjectItem from "../ProjectItem";
import Section from "../Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

export default function ProjectsSection() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  var settings = {
    className: "",
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
          <Slider {...settings}>
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
        </Section>
      )}
    </>
  );
}
