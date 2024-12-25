import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode was previously enabled
    const isDarkStored = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkStored);
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">JD</div>
        
        <div className="flex items-center gap-8">
          <a href="#about" className="hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t('nav.contact')}
          </a>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'en' ? 'ro' : 'en')}
          >
            <Globe className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;