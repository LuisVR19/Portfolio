"use client";

import {
  CloudCog,
  Code2,
  Database,
  LaptopMinimal,
  MonitorSmartphone,
  Wrench
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/content";
import { useLanguage } from "@/providers/language-provider";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const iconMap = {
  server: Code2,
  web: MonitorSmartphone,
  database: Database,
  devops: CloudCog,
  tool: Wrench,
  laptop: LaptopMinimal
};

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="skills" className="pt-6 md:pt-10">
      <div className="container">
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t("skills.eyebrow")}
            title={t("skills.title")}
            description={t("skills.description")}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.category} className="section-shell rounded-[1.75rem] p-6">
                <h3 className="text-lg font-semibold">{t(`skills.categories.${group.category}`)}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Code2;

                    return (
                      <Badge
                        key={`${group.category}-${item.name}`}
                        variant="outline"
                        className="rounded-full px-3 py-2 text-sm"
                      >
                        <Icon className="mr-2 size-4 text-primary" />
                        {item.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
