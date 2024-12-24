import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "/placeholder.svg"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      image: "/placeholder.svg"
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      image: "/placeholder.svg"
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
            <Card key={index} className="overflow-hidden animate-slide-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
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