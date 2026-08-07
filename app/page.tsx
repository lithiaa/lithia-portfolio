import { Awards } from "@/components/awards";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { Credentials } from "@/components/credentials";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowIWork } from "@/components/how-i-work";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { ValueProps } from "@/components/value-props";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <TechStack />
        <Projects />
        <HowIWork />
        <Credentials />
        <Certificates />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
