import SectionLink from "../SectionLink";
import Section from "../Section";
import { FaArrowUp } from "react-icons/fa";
import ContactLink from "../ContactLink";

export default function ContactsSection() {
  return (
    <Section id="contatos" title="Contatos" type="last" className=" max-h-[50svh]">
      <div className="mb-6 mt-12 flex h-fit w-full max-w-screen-md flex-col items-center gap-12 sm:mb-8 sm:mt-20 sm:gap-20">
        <div className="flex w-full items-center justify-between gap-3 sm:gap-0">
          <ContactLink link="mailto:samuel.carvalho.dev@gmail.com">E-mail</ContactLink>
          <ContactLink link="https://www.linkedin.com/in/samuel-silva-de-carvalho/">
            LinkedIn
          </ContactLink>
          <ContactLink link="https://github.com/SamuraiSamuka">GitHub</ContactLink>
          <ContactLink link="whatsapp://send?phone=5575998575166">WhatsApp</ContactLink>
        </div>
        <SectionLink link="#inicio" active className="w-fit py-3">
          <FaArrowUp />
        </SectionLink>
      </div>
    </Section>
  );
}
