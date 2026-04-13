"use client";

import * as React from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

export type Locale = "en" | "es";
type Messages = typeof en;

const STORAGE_KEY = "portfolio-language";

const catalogs: Record<Locale, Messages> = {
  en,
  es
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string) => string;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

function getValueByPath(messages: Messages, path: string): string {
  const resolved = path
    .split(".")
    .reduce<unknown>((accumulator, key) => (accumulator as Record<string, unknown>)?.[key], messages);

  return typeof resolved === "string" ? resolved : path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "es") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  const setLocale = React.useCallback((value: Locale) => {
    setLocaleState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.lang = value;
  }, []);

  const toggleLocale = React.useCallback(() => {
    setLocale(locale === "en" ? "es" : "en");
  }, [locale, setLocale]);

  const t = React.useCallback(
    (path: string) => getValueByPath(catalogs[locale], path),
    [locale]
  );

  const value = React.useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t
    }),
    [locale, setLocale, t, toggleLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
