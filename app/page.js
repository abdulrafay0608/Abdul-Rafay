import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

// "use client"
export default function Home() {

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
    </div>
  );
}