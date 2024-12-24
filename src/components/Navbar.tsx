import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

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
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          >
            <Globe className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;