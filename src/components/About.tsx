import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const About = () => {
  const { t } = useLanguage();
  const [showFunFact, setShowFunFact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFunFact(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {t('about.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-8">
          {t('about.description')}
        </p>
        <div className="text-center">
          <p className="text-lg text-primary transition-all duration-1000">
            {showFunFact ? t('about.funFact') : "Did you know I..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;