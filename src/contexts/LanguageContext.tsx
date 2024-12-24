import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

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
    'about.description': 'I\'m a software developer with passion for creating beautiful and functional web applications.',
    'projects.title': 'My Projects',
    'contact.title': 'Get in Touch',
    'contact.description': 'Have a project in mind? Let\'s talk about it.',
    'contact.button': 'Send Message',
  },
  es: {
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.title': 'Hola, soy John Doe',
    'hero.subtitle': 'Desarrollador Full Stack',
    'hero.description': 'Construyo experiencias digitales excepcionales',
    'about.title': 'Sobre Mí',
    'about.description': 'Soy un desarrollador de software con pasión por crear aplicaciones web hermosas y funcionales.',
    'projects.title': 'Mis Proyectos',
    'contact.title': 'Contacto',
    'contact.description': '¿Tienes un proyecto en mente? Hablemos sobre él.',
    'contact.button': 'Enviar Mensaje',
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