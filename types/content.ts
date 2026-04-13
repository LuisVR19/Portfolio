import type { Locale } from "@/providers/language-provider";

export type LocalizedText = Record<Locale, string>;

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "linkedin" | "github";
}

export interface ProjectItem {
  title: string;
  description: LocalizedText;
  technologies: string[];
  year: string;
  link?: string;
  linkLabel?: string;
}

export interface ExperienceItem {
  company: string;
  role: LocalizedText;
  period: string;
  description: LocalizedText;
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: LocalizedText;
  period: string;
  description: LocalizedText;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: "backend" | "frontend" | "database" | "devops" | "tools";
  items: SkillItem[];
}
