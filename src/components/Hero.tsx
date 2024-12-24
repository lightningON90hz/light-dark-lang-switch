import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {t('hero.title')}
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          {t('hero.subtitle')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
};

export default Hero;