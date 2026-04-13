"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { contactLinks } from "@/lib/content";
import { useLanguage } from "@/providers/language-provider";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github
};

export function Hero() {
  const { t, locale } = useLanguage();
  const cvHref =
    locale === "es"
      ? "/cv/es/luis-valverde-rios-cv-es.pdf"
      : "/cv/en/luis-valverde-rios-cv-en.pdf";
  const cvDownloadName =
    locale === "es" ? "luis-valverde-rios-cv-es.pdf" : "luis-valverde-rios-cv-en.pdf";

  return (
    <section id="hero" className="relative overflow-hidden pb-6 pt-10 md:pb-10 md:pt-16">
      <div className="container">
        <div className="glass-card relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-10 md:py-16">
          <div className="absolute inset-0 bg-hero-grid opacity-90" />
          <div className="absolute -left-20 top-16 size-52 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 size-64 rounded-full bg-orange-400/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <Badge className="rounded-full px-4 py-1.5">{t("hero.badge")}</Badge>
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
                  Luis Valverde Rios
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                  {t("hero.title")}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {t("hero.description")}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={cvHref} download={cvDownloadName}>
                    <Download className="size-4" />
                    {t("hero.cta.cv")}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#projects">
                    {t("hero.cta.projects")}
                    <ArrowDownRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href="#contact">{t("hero.cta.contact")}</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="section-shell relative flex flex-col gap-6"
            >
              <div className="space-y-4">
                <div className="inline-flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400/20 via-primary/20 to-orange-400/20 text-2xl font-semibold text-primary">
                  LV
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{t("hero.role")}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{t("hero.summary")}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {contactLinks.map((item) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <a
                      key={item.label}
                      className="rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-sm transition-transform hover:-translate-y-0.5 hover:bg-background/70"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <Icon className="mb-2 size-4 text-primary" />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
