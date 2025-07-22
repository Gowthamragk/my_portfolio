import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  category: string;
  githubUrl: string;
  demoUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Gen3VocalSync",
      description: "Automated Multilingual Video Dubbing system that converts audio to text, translates it into multiple languages, and synchronizes it with video content.",
      features: [
        "Advanced Audio & Video Processing using SpeechRecognition, NLTK, and moviepy",
        "Multi-language translation with Google Translate API",
        "AI-Powered Speech Synthesis for natural-sounding voiceovers",
        "Seamless transcription and dubbing workflow"
      ],
      technologies: ["Python", "NLTK", "Google Translate API", "pydub", "moviepy", "Speech Recognition", "AI/ML"],
      category: "AI/ML Project",
      githubUrl: "https://github.com/Gowthamragk/Multilanguage_audio_translator",
      demoUrl: "https://colab.research.google.com/drive/1WYYdqINqfwYWO0pG5sZdTp6WbSvOTYBx"
    },
    {
      title: "GamifiLearn",
      description: "Innovative gamified educational mobile app designed to revolutionize learning through interactive experiences and game mechanics.",
      features: [
        "Cross-platform mobile app built with Flutter",
        "Interactive learning experiences powered by Unity",
        "Gamification elements to enhance engagement",
        "Immersive and effective learning environment"
      ],
      technologies: ["Flutter", "Unity", "Mobile Development", "Game Development", "UI/UX"],
      category: "Mobile App Development",
      githubUrl: "https://github.com/Gowthamragk/Gamified_educational_platform"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, mobile development, and cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border group animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="opacity-70 hover:opacity-100"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    {project.demoUrl && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="opacity-70 hover:opacity-100"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-accent/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;