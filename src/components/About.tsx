import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {t('about.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
          {t('about.description')}
        </p>
      </div>
    </section>
  );
};

export default About;