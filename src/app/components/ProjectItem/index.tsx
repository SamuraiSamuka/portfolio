import { FaArrowRight, FaPlus } from "react-icons/fa";
import styles from "./styles.module.scss";
import { SiHtml5, SiJavascript } from "react-icons/si";
import TechItem from "../TechItem";

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
      className={`${styles.project} h-fit max-h-[64vh] min-h-96 w-[24.5rem] overflow-hidden rounded-3xl`}
    >
      <img src={imageUrl} alt="" className="h-[60%] w-full rounded-t-3xl object-cover" />
      <div
        className={`${styles["project-info"]} h-fit bg-gradient-to-b from-cinza-750 to-cinza-900 backdrop-blur`}
      >
        <div>
          <h2 className=" title text-2xl font-medium">{projectTitle || "Título"}</h2>
          <p className="description mb-3 mt-2 text-sm text-cinza-300">
            {projectDescription}
          </p>
          <li className="mb-2 flex flex-wrap items-center gap-1">
            {techList.map((tech) => (
              <TechItem name={tech} key={tech} />
            ))}
          </li>
        </div>
        <div className="links flex justify-between">
          <a href={links?.github} target="_blank" className="flex items-center gap-2">
            Github
            <FaArrowRight />
          </a>
          <a href={links?.project} target="_blank" className="flex items-center gap-2">
            Show more
            <FaPlus />
          </a>
        </div>
      </div>
    </div>
  );
}
