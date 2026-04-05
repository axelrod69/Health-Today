import { createContext, useContext, useState, useMemo } from "react";
import en from "./languages/en";
import hi from "./languages/hi";
import bn from "./languages/bn";

const translations = { en, hi, bn };

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  const t = (key, params = {}) => {
    let value = getNestedValue(translations[locale], key) || key;

    Object.keys(params).forEach((param) => {
      value = value.replace(`{${param}}`, params[param]);
    });

    return value;
  };

  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
  }), [locale]);

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