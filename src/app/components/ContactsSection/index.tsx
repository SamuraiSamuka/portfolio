import SectionLink from "../SectionLink";
import Section from "../Section";
import { FaArrowUp } from "react-icons/fa";
import ContactLink from "../ContactLink";

export default function ContactsSection() {
  return (
    <Section id="contatos" title="Contatos" type="last" className=" max-h-[50svh]">
      <div className="mb-6 mt-12 flex h-fit w-full max-w-screen-md flex-col items-center gap-12 sm:mb-8 sm:mt-20 sm:gap-20">
        <div className="flex w-full items-center justify-between gap-3 sm:gap-0">
          <ContactLink link="">E-mail</ContactLink>
          <ContactLink link="">LinkedIn</ContactLink>
          <ContactLink link="">GitHub</ContactLink>
          <ContactLink link="">WhatsApp</ContactLink>
        </div>
        <SectionLink link="#inicio" active className="w-fit py-3">
          <FaArrowUp />
        </SectionLink>
      </div>
    </Section>
  );
}
