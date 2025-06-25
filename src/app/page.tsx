import AboutSection from "@/sections/AboutSection";
import ContactForm from "@/sections/ContactMe";
import Hero from "@/sections/Hero";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm/>
    </main>
  );
}
