import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Settings, 
  Monitor, 
  Network, 
  BarChart3,
  Terminal,
  Cloud
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Infrastructure",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Jenkins", "Bitbucket", "Nexus", "Terraform", "Chef", "Git", "GitHub"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "SQL", "Shell Scripting", "Bash"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Operating Systems",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Linux", "PuTTY", "WinSCP"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Monitoring & Analytics",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Site 24x7", "AppDynamics", "Power BI"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Database Systems",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "DBeaver", "MongoDB"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Networking",
      icon: <Network className="w-6 h-6" />,
      skills: ["TCP/IP", "SSH", "VPN concepts"],
      color: "bg-cyan-500/10 text-cyan-600"
    }
  ];

  const achievements = [
    "Secured fourth place in the HP National level Hackathon",
    "Won third prize in PSG National level Hackathon", 
    "Received a special prize in Inter College Yudhistra competition"
  ];

  const softSkills = ["Leadership", "Critical thinker", "Team Working", "Problem solving"];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skillset spanning DevOps, development, and system administration
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-accent/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Achievements */}
          <Card className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-600">
                  <Cloud className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Soft Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;