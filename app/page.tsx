import Image from "next/image";
import { Header } from "@/components/Header";
import { Spacing } from "@/components/Spacing";
import Hero from "@/components/Hero";
import { Status } from "@/components/Status";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main>
   
      <Header />
      <Spacing size="md"/>
      <Hero />
      <Spacing size="md" />
      <Status />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Contact />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
