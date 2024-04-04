/* eslint-disable @next/next/no-img-element */

import Section from "../Section";

export default function HomeSection() {
  return (
    <Section first={true} id="inicio">
      <div className=" flex h-full items-center justify-center">
        <div className="relative flex w-full flex-col items-start justify-start gap-4 pt-4 md:h-[24rem] lg:h-[32rem]">
          <h1 className=" text-right md:text-[5.7rem] lg:text-9xl">Full</h1>
          <h1 className=" ml-40 text-right md:text-[5.7rem] lg:text-9xl">Stack</h1>

          <img
            src="foto.jpg"
            alt=""
            className="absolute right-0 top-0  rounded-2xl md:w-72 lg:w-96"
          />

          <h1 className=" z-[2] ml-72 pr-16 md:text-[5.7rem] lg:text-9xl">Developer</h1>
        </div>
      </div>
    </Section>
  );
}
