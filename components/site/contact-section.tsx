"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactLinks } from "@/lib/content";
import { useLanguage } from "@/providers/language-provider";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github
};

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const emailContact = contactLinks.find((item) => item.icon === "mail");

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailContact) {
      return;
    }

    const to = emailContact.href.replace("mailto:", "");
    const subject = form.subject.trim() || (locale === "es" ? "Nuevo mensaje desde portafolio" : "New message from portfolio");
    const body = [
      `${locale === "es" ? "Nombre" : "Name"}: ${form.name.trim()}`,
      `${locale === "es" ? "Correo" : "Email"}: ${form.email.trim()}`,
      "",
      `${locale === "es" ? "Mensaje" : "Message"}:`,
      form.message.trim()
    ].join("\n");

    const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <AnimatedSection id="contact" className="py-6 md:py-10">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t("contact.eyebrow")}
              title={t("contact.title")}
              description={t("contact.description")}
            />

            <div className="mt-8 grid gap-4">
              {contactLinks.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-[1.5rem] border border-border/60 bg-background/45 p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="section-shell">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">{t("contact.form.title")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("contact.form.description")}</p>
              </div>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    placeholder={t("contact.form.name")}
                    required
                  />
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder={t("contact.form.email")}
                    required
                  />
                </div>
                <Input
                  value={form.subject}
                  onChange={(event) => handleChange("subject", event.target.value)}
                  placeholder={t("contact.form.subject")}
                  required
                />
                <Textarea
                  value={form.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder={t("contact.form.message")}
                  required
                />
                <div className="flex justify-end">
                  <Button type="submit">
                    <Send className="size-4" />
                    {t("contact.form.send")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
