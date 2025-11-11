import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-950 via-background to-purple-900 animate-gradient" />

      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
