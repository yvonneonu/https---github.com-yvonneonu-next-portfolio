"use client";

import { Image } from "@nextui-org/react";
import { Star1 } from "iconsax-react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <About />
      <Portfolio />
      <Feedback />
      <Contact />
    </main>
  );
}
