import { createContext, useCallback, useContext, useState, useMemo } from "react";
import en from "./languages/en";
import hi from "./languages/hi";
import bn from "./languages/bn";

const translations = { en, hi, bn };
const localeStorageKey = "health-today-language";

function loadLocale() {
  try {
    const saved = localStorage.getItem(localeStorageKey);
    if (Object.hasOwn(translations, saved)) return saved;
  } catch {
    // The site still works when browser storage is unavailable.
  }
  return "en";
}

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, updateLocale] = useState(loadLocale);
  const setLocale = useCallback((nextLocale) => {
    if (!Object.hasOwn(translations, nextLocale)) return;
    updateLocale(nextLocale);
    try {
      localStorage.setItem(localeStorageKey, nextLocale);
    } catch {
      // The selection still applies to the current page.
    }
  }, []);

  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  const t = useCallback((key, params = {}) => {
    let value = getNestedValue(translations[locale], key) || key;

    Object.keys(params).forEach((param) => {
      value = value.replace(`{${param}}`, params[param]);
    });

    return value;
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
  }), [locale, setLocale, t]);

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error("useLocalization must be used within LocalizationProvider");
  }

  return context;
};
