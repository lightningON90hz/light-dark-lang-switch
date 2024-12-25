import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const About = () => {
  const { t } = useLanguage();
  const [currentText, setCurrentText] = useState("...");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "code for fun?",
    "love learning new things?",
    "speak multiple programming languages?",
    "enjoy solving complex problems?",
    "build awesome websites?",
    "dream in code sometimes?",
    "contribute to open source?",
    "started coding when I was young?"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting]);

  const handleTyping = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    setCurrentText(prev => {
      if (!isDeleting) {
        if (prev === "...") return "";
        if (prev === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause before deleting
          return prev;
        }
        setTypingSpeed(150);
        return fullText.substring(0, prev.length + 1);
      } else {
        if (prev === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500); // Pause before typing next phrase
          return "...";
        }
        setTypingSpeed(100);
        return fullText.substring(0, prev.length - 1);
      }
    });
  };

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
          <p className="text-lg">
            <span className="text-primary">Did you know I </span>
            <span className="text-primary inline-block min-h-[1.5em] min-w-[1em]">
              {currentText}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;