"use client";

import { GraduationCap } from "lucide-react";
import { education, localizeText } from "@/lib/content";
import { useLanguage } from "@/providers/language-provider";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  const { t, locale } = useLanguage();

  return (
    <AnimatedSection id="education" className="pt-6 md:pt-10">
      <div className="container">
        <div className="section-shell space-y-10">
          <SectionHeading
            eyebrow={t("education.eyebrow")}
            title={t("education.title")}
            description={t("education.description")}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.period}`}
                className="rounded-[1.75rem] border border-border/60 bg-background/45 p-6 backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <GraduationCap className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.institution}</h3>
                    <p className="text-sm text-primary">{localizeText(item.degree, locale)}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {localizeText(item.description, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
