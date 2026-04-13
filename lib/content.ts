import contactData from "@/data/contact.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import type {
  ContactItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory
} from "@/types/content";
import type { Locale } from "@/providers/language-provider";

type LocalizedText = Record<Locale, string>;

export const contactLinks = contactData as ContactItem[];
export const projects = projectsData as ProjectItem[];
export const experience = experienceData as ExperienceItem[];
export const education = educationData as EducationItem[];
export const skillGroups = skillsData as SkillCategory[];

export function localizeText(value: LocalizedText, locale: Locale) {
  return value[locale] ?? value.en;
}
