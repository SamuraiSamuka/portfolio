import { FaArrowRight, FaPlus } from "react-icons/fa";
import styles from "./styles.module.scss";

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
}

export default function ProjectItem({
  theme,
  title,
  stack,
  description,
  links,
}: ProjectItemProps) {
  const projectTitle = title?.toUpperCase();
  const techStack = `STACK:  ${stack?.toUpperCase()}`;
  const projectDescription = description.slice(0, 225).concat("...");

  return (
    <div className={styles.project}>
      <img
        src="samukaGeek.png"
        alt=""
        className="max-h-[71%] w-full rounded-t-3xl object-cover"
      />
      <div
        className={`${styles["project-info"]} bg-gradient-to-b from-cinza-750 to-cinza-900`}
      >
        <div>
          <h2 className=" title text-2xl font-medium">{projectTitle || "Título"}</h2>
          <p className="description mb-3 mt-2 text-sm text-cinza-300">
            {projectDescription}
          </p>
          <h3 className="stack my-2 text-sm">{techStack || "Stack"}</h3>
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
