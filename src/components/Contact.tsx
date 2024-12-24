import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          {t('contact.description')}
        </p>
        
        <form className="space-y-6">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" className="min-h-[150px]" />
          <Button className="w-full">
            {t('contact.button')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;