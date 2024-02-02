import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";


export default function Home() {

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}