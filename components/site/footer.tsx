"use client";

import { useLanguage } from "@/providers/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pb-8 pt-4">
      <div className="container">
        <div className="glass-card flex flex-col items-center justify-between gap-3 rounded-[1.75rem] px-6 py-5 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>{t("footer.copy")}</p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
