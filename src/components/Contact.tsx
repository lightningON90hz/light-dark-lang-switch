import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const platforms = [
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:your.email@example.com",
    },
    {
      name: "Discord",
      icon: <MessageSquare className="w-6 h-6" />,
      link: "https://discord.gg/your-server",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://instagram.com/your-profile",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Let's connect! Find me on any of these platforms
        </p>
        
        <div className="flex justify-center gap-6">
          {platforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              size="lg"
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(platform.link, '_blank')}
            >
              {platform.icon}
              {platform.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;