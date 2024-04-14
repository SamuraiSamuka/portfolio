"use client";

import HomeSection from "./components/HomeSection";
import AboutMeSection from "./components/AboutMeSection";
import HabilitiesSection from "./components/HabilitiesSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactsSection from "./components/ContactsSection";

export default function Home() {
  return (
    <main className=" snap-y snap-proximity">
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <HabilitiesSection />
      <ContactsSection />
      <footer className="mb-4 mt-2 flex w-full justify-between text-xs">
        <p>© Samuel Carvalho 2024</p>
        <p>samuel.carvalho.dev@gmail.com</p>
      </footer>
    </main>
  );
}
