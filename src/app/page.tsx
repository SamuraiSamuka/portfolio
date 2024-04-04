import HomeSection from "./components/HomeSection";
import AboutMeSection from "./components/AboutMeSection";
import HabilitiesSection from "./components/HabilitiesSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className=" snap-y snap-proximity">
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <HabilitiesSection />
    </main>
  );
}
