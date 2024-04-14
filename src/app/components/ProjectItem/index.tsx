import { FaArrowRight } from "react-icons/fa";
import styles from "./styles.module.scss";
import { SiGithub, SiHtml5, SiJavascript } from "react-icons/si";
import TechItem from "../TechItem";
import Button from "../Button";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface ProjectItemProps {
  theme: "light" | "dark";
  title: string;
  stack: string;
  description: string;
  links?: {
    project: string;
    github: string;
  };
  imageUrl: string;
}

export default function ProjectItem({
  theme,
  title,
  stack,
  description,
  links,
  imageUrl,
}: ProjectItemProps) {
  const [domLoaded, setDomLoaded] = useState(false);
  const projectTitle = title?.toUpperCase();
  const techStack = stack?.toUpperCase();
  const techList = stack.split(",");
  let [projectDescription, setProjectDescription] = useState(
    description.slice(0, 225).concat("..."),
  );

  useEffect(() => {
    setDomLoaded(true);
    if (window.innerWidth > 765) setProjectDescription(description.slice(0, 225).concat("..."));
    else setProjectDescription(description.slice(0, 115).concat("..."));
  }, []);

  return (
    <div
      className={`${styles.project} mx-2 h-fit max-h-[64vh] min-h-96 max-w-[80vw] overflow-hidden rounded-xl sm:w-[24.5rem] sm:max-w-[50vw]`}
    >
      <img src={imageUrl} alt="" className="h-[60%] w-full rounded-t-3xl object-cover" />
      <div
        className={`${styles["project-info"]} flex h-fit w-full flex-col gap-3 bg-gradient-to-b from-cinza-750 to-cinza-900 backdrop-blur`}
      >
        <h2 className=" title pt-1 text-2xl font-medium leading-none">
          {projectTitle || "Título"}
        </h2>
        <p className="description text-sm text-cinza-300">{projectDescription}</p>
        <li className="hidden flex-wrap items-center gap-1 sm:flex">
          {techList.map((tech) => (
            <TechItem name={tech} key={tech} />
          ))}
        </li>
        <div className="links flex flex-col justify-between gap-2 sm:flex-row">
          <Button link={links?.github}>
            <SiGithub />
            Github
          </Button>
          <Button link={links?.project}>
            Acesse
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
