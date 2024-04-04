"use client";

import ProjectItem from "../ProjectItem";
import Section from "../Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSection() {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "40px",
    autoplaySpeed: 3000,
  };

  return (
    <Section title="Projetos" id="projetos">
      <h2 className=" mb-24 mt-6 text-center text-3xl">Meus Projetos</h2>
      <Slider {...settings}>
        <ProjectItem
          theme="light"
          title="Samuka Geek"
          stack="html, css, react.js, typescript, github, tailwindCSS, react-router-dom"
          description="Proejeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
          links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
        />
        <ProjectItem
          theme="light"
          title="Samuka Geek"
          stack="html, css, react.js, typescript, github, tailwindCSS, react-router-dom"
          description="Proejeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
          links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
        />
        <ProjectItem
          theme="light"
          title="Samuka Geek"
          stack="html, css, react.js, typescript, github, tailwindCSS, react-router-dom"
          description="Proejeto de um e-commerce especializado em produtos geek, como action-figures, video-games, camisetas, etc. Site com sistema de login, carrinho e campo de busca"
          links={{ project: "https://samuka-geek.vercel.app/", github: "" }}
        />
      </Slider>
    </Section>
  );
}
