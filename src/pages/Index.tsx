
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Layout, Users, Cog } from "lucide-react";

const Index = () => {
  const skills = [
    {
      title: "Web Geliştirme",
      description: "Modern web uygulamaları geliştirme",
      icon: <Code className="w-6 h-6" />,
      badges: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "UI/UX Tasarım",
      description: "Kullanıcı dostu arayüz tasarımları",
      icon: <Palette className="w-6 h-6" />,
      badges: ["Figma", "Adobe XD", "Sketch"],
    },
    {
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda mükemmel görünüm",
      icon: <Layout className="w-6 h-6" />,
      badges: ["Mobile First", "Bootstrap", "Tailwind"],
    },
    {
      title: "Ekip Çalışması",
      description: "Etkili iletişim ve işbirliği",
      icon: <Users className="w-6 h-6" />,
      badges: ["Scrum", "Agile", "Jira"],
    },
    {
      title: "Geliştirme Araçları",
      description: "Modern geliştirme araçları kullanımı",
      icon: <Cog className="w-6 h-6" />,
      badges: ["Git", "VS Code", "Docker"],
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Neler Yapabilirim?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern web teknolojileri ve tasarım araçlarıyla hayalinizdeki projeleri gerçeğe dönüştürüyorum.
          </p>
        </section>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 glass-card hover-lift"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.badges.map((badge, badgeIndex) => (
                    <Badge 
                      key={badgeIndex}
                      variant="secondary"
                      className="hover:bg-secondary/80"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl font-bold">
            Bir Projeniz mi Var?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için benimle iletişime geçin.
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <span>İletişime Geç</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Index;
