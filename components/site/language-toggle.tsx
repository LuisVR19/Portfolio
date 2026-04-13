"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      className="rounded-full px-3"
      aria-label="Toggle language"
    >
      <Languages className="size-4" />
      {locale === "en" ? "ES" : "EN"}
    </Button>
  );
}
