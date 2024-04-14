/* eslint-disable @next/next/no-img-element */

import Section from "../Section";

export default function HomeSection() {
  return (
    <Section id="inicio" type="first">
      <div
        className={`relative flex w-full flex-col items-center justify-evenly pt-4 
                    md:h-[26.7rem] md:items-start md:justify-start lg:h-[32rem]`}
      >
        <div
          className={`relative flex h-fit w-full items-center justify-center gap-2 text-2xl 
                      md:z-[2] md:h-full md:flex-col md:items-start md:gap-12 md:text-[4.5rem] 
                      lg:text-9xl`}
        >
          <h1 className="">Full</h1>
          <h1 className=" md:ml-28">Stack</h1>
          <h1 className=" md:ml-72 md:pr-16">Developer</h1>
        </div>
        <img
          src="foto.jpg"
          alt=""
          className="max-w-[70vw] rounded-2xl sm:w-96 md:absolute md:right-0 md:top-0 md:w-80 lg:w-96"
        />
      </div>
    </Section>
  );
}
