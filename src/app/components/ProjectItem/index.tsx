import { FaArrowRight } from "react-icons/fa";
import styles from "./styles.module.scss";
import { SiGithub, SiHtml5, SiJavascript } from "react-icons/si";
import TechItem from "../TechItem";
import RedirectLink from "../RedirectLink";

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
  const projectTitle = title?.toUpperCase();
  const techStack = stack?.toUpperCase();
  const techList = stack.split(",");
  const projectDescription = description.slice(0, 225).concat("...");

  return (
    <div
      className={`${styles.project} mx-2 h-fit max-h-[64vh] min-h-96 max-w-[80vw] overflow-hidden rounded-3xl sm:w-[24.5rem]`}
    >
      <img src={imageUrl} alt="" className="h-[60%] w-full rounded-t-3xl object-cover" />
      <div
        className={`${styles["project-info"]} flex h-fit w-full flex-col gap-3 bg-gradient-to-b from-cinza-750 to-cinza-900 backdrop-blur`}
      >
        <h2 className=" title text-2xl font-medium">{projectTitle || "Título"}</h2>
        <p className="description text-sm text-cinza-300">{projectDescription}</p>
        <li className="hidden flex-wrap items-center gap-1 sm:flex">
          {techList.map((tech) => (
            <TechItem name={tech} key={tech} />
          ))}
        </li>
        <div className="links flex flex-col justify-between gap-2 sm:flex-row">
          <RedirectLink link={links?.github}>
            <SiGithub />
            Github
          </RedirectLink>
          <RedirectLink link={links?.project}>
            Acesse
            <FaArrowRight />
          </RedirectLink>
        </div>
      </div>
    </div>
  );
}
