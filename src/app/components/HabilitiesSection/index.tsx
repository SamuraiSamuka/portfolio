/* eslint-disable @next/next/no-img-element */
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiCss3,
  SiStyledcomponents,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import Section from "../Section";
import Hability from "../Hability";
import Button from "../Button";

export default function HabilitiesSection() {
  return (
    <Section id="habilidades" title="Minhas Skills">
      <div className="grid-cols-2 gap-24 sm:grid">
        <img
          src="foto.jpg"
          alt=""
          className="hidden max-h-[30vh] rounded-2xl sm:block sm:max-h-[60%] lg:max-h-[52vh]"
        />
        <div className="">
          <h3 className=" text-xl">Hard skills</h3>
          <div className=" mb-1 grid grid-cols-2 justify-start gap-y-6 py-6">
            <Hability icon={SiJavascript} title="Javascript" />
            <Hability icon={SiCss3} title="CSS" />
            <Hability icon={SiTypescript} title="Typescript" />
            <Hability icon={SiTailwindcss} title="Tailwind CSS" />
            <Hability icon={SiNextdotjs} title="Next" />
            <Hability icon={SiSass} title="Sass/Scss" />
            <Hability icon={SiReact} title="React" />
            <Hability icon={SiStyledcomponents} title="Styled-Components" />
            <Hability icon={SiMongodb} title="MongoDB" />
            <Hability icon={SiExpress} title="Express" />
          </div>
          <div className="mb-8">
            <h5 className=" mb-2 font-semibold">Além de algumas outras skills:</h5>
            <p className=" font-light text-cinza-300">
              REACT-ROUTER-DOM, GIT, STRIPE, CMS, clean-code, design-patterns
            </p>
          </div>
          <Button active link="">
            Baixe meu CV
          </Button>
        </div>
      </div>
    </Section>
  );
}
