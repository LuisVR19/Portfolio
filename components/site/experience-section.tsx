"use client";

import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experience, localizeText } from "@/lib/content";
import { useLanguage } from "@/providers/language-provider";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const { t, locale } = useLanguage();

  return (
    <AnimatedSection id="experience" className="pt-6 md:pt-10">
      <div className="container">
        <div className="section-shell space-y-10">
          <SectionHeading
            eyebrow={t("experience.eyebrow")}
            title={t("experience.title")}
            description={t("experience.description")}
          />

          <div className="relative ml-2 border-l border-border/70 pl-8">
            {experience.map((item, index) => (
              <div key={`${item.company}-${item.period}`} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[2.6rem] top-2 flex size-9 items-center justify-center rounded-full border border-border/70 bg-background/80">
                  <BriefcaseBusiness className="size-4 text-primary" />
                </div>
                <div className="rounded-[1.5rem] border border-border/60 bg-background/45 p-6 backdrop-blur">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{item.company}</h3>
                      <p className="mt-1 text-sm text-primary">{localizeText(item.role, locale)}</p>
                    </div>
                    <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5">
                      {item.period}
                    </Badge>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {localizeText(item.description, locale)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={`${tech}-${index}`} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
