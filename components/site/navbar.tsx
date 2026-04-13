"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";

const sectionIds = ["about", "experience", "projects", "education", "skills", "contact"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="container">
        <div className="glass-card flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="#hero" className="text-sm font-semibold tracking-[0.24em] text-muted-foreground">
            LVR
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <Menu className="size-4" />
          </Button>
        </div>

        <div
          className={cn(
            "glass-card mt-3 overflow-hidden rounded-[1.5rem] transition-all duration-300 md:hidden",
            open ? "max-h-96 p-4" : "max-h-0 border-0 p-0"
          )}
        >
          <div className="flex flex-col gap-3">
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-2xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {t(`nav.${id}`)}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
