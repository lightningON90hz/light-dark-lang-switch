import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Project 1",
      description: "Coming Soon",
      image: "/placeholder.svg",
      link: "https://project1-url.com"
    },
    {
      title: "Project 2",
      description: "Coming Soon",
      image: "/placeholder.svg",
      link: "https://project2-url.com"
    },
    {
      title: "Project 3",
      description: "Coming Soon",
      image: "/placeholder.svg",
      link: "https://project3-url.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden animate-slide-up cursor-pointer group hover:border-primary transition-colors" 
              style={{
                animationDelay: `${index * 100}ms`
              }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;