import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ro';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': "Hi, I'm John Doe",
    'hero.subtitle': 'Full Stack Developer',
    'hero.description': 'I build exceptional digital experiences',
    'about.title': 'About Me',
    'about.description': "I'm a software developer with passion for creating beautiful and functional web applications.",
    'about.funFact': 'Did you know I code for fun?',
    'projects.title': 'My Projects',
    'contact.title': 'Get in Touch',
    'contact.description': "Have a project in mind? Let's talk about it.",
    'contact.button': 'Send Message',
  },
  ro: {
    'nav.about': 'Despre',
    'nav.projects': 'Proiecte',
    'nav.contact': 'Contact',
    'hero.title': 'Salut, sunt John Doe',
    'hero.subtitle': 'Dezvoltator Full Stack',
    'hero.description': 'Construiesc experiențe digitale excepționale',
    'about.title': 'Despre Mine',
    'about.description': 'Sunt un dezvoltator software cu pasiune pentru crearea de aplicații web frumoase și funcționale.',
    'about.funFact': 'Știai că programez pentru distracție?',
    'projects.title': 'Proiectele Mele',
    'contact.title': 'Contactează-mă',
    'contact.description': 'Ai un proiect în minte? Hai să vorbim despre el.',
    'contact.button': 'Trimite Mesaj',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};