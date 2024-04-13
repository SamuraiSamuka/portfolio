/* eslint-disable @next/next/no-img-element */

import Section from "../Section";

export default function HomeSection() {
  return (
    <Section id="inicio" first>
      <div className=" mt-[8svh] flex h-[80svh] justify-center sm:items-center">
        <div className="relative flex w-full flex-col items-center justify-evenly pt-4 sm:items-start sm:justify-start md:h-[24rem] lg:h-[32rem]">
          <div className=" relative flex h-fit w-full items-center justify-center gap-2 text-2xl sm:h-full sm:flex-col sm:items-start sm:gap-4">
            <h1 className="sm:z-[2] md:text-[5.7rem] lg:text-9xl">Full</h1>
            <h1 className="sm:z-[2] sm:ml-40 md:text-[5.7rem] lg:text-9xl">Stack</h1>
            <h1 className="sm:z-[2] sm:ml-72 sm:pr-16 md:text-[5.7rem] lg:text-9xl">Developer</h1>
          </div>
          <img
            src="foto.jpg"
            alt=""
            className="rounded-2xl sm:absolute  sm:right-0 sm:top-0 md:w-72 lg:w-96"
          />
        </div>
      </div>
    </Section>
  );
}
