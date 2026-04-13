"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { localizeText, projects } from "@/lib/content";
import { useLanguage } from "@/providers/language-provider";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  const { t, locale } = useLanguage();

  return (
    <AnimatedSection id="projects" className="pt-6 md:pt-10">
      <div className="container">
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t("projects.eyebrow")}
            title={t("projects.title")}
            description={t("projects.description")}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full overflow-hidden">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="secondary">{project.year}</Badge>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {project.linkLabel ?? t("projects.viewProject")}
                          <ArrowUpRight className="size-4" />
                        </a>
                      ) : null}
                    </div>
                    <div className="space-y-2">
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="leading-7">
                        {localizeText(project.description, locale)}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={`${project.title}-${tech}`} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
