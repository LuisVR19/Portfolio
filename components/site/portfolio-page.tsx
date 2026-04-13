"use client";

import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { ProjectsSection } from "./projects-section";
import { ScrollToTop } from "./scroll-to-top";
import { SkillsSection } from "./skills-section";

export function PortfolioPage() {
  return (
    <main className="relative pb-6">
      <Navbar />
      <Hero />
      <div className="space-y-6 md:space-y-10">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
