"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const focusKeys = ["scalability", "performance", "cleanArchitecture", "automation"] as const;
const expertiseKeys = ["dotnet", "sqlServer", "angular", "react", "microservices", "azureDevOps", "scrum"] as const;

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="about">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              description={t("about.description")}
            />
          </div>

          <div className="grid gap-6">
            <div className="section-shell">
              <h3 className="text-lg font-semibold">{t("about.expertiseTitle")}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {expertiseKeys.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {t(`about.expertise.${key}`)}
                  </div>
                ))}
              </div>
            </div>

            <div className="section-shell">
              <h3 className="text-lg font-semibold">{t("about.focusTitle")}</h3>
              <div className="mt-5 grid gap-3">
                {focusKeys.map((key) => (
                  <div key={key} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary" />
                    {t(`about.focus.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
