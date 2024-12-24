import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const About = () => {
  const { t } = useLanguage();
  const [showFunFact, setShowFunFact] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFunFact(true);
      setIsAnimating(true);
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
          <p className="text-lg text-primary">
            <span>Did you know I</span>
            <span 
              className={`inline-block ml-1 transition-all duration-700 ${
                isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {showFunFact ? t('about.funFact').split('Did you know I ')[1] : "..."}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;