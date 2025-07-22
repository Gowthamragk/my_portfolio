import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Site Reliability Engineer Intern",
      company: "Novopay Solutions",
      location: "Bengaluru",
      period: "Nov 2024 - Present",
      description: [
        "Supported the Sustainable Livelihood Initiative (SLI) project for HDFC Bank, managing LOS, LMS, and LCS systems by ensuring uptime, deployment stability, and system performance.",
        "Automated deployments and CI/CD pipelines using Jenkins, and maintained scheduled jobs with Autosys to streamline production workflows.",
        "Used Terraform and Ansible to provision and manage environments, ensuring consistency and adherence to DevOps best practices.",
        "Monitored infrastructure using Site24x7 and executed incident, change, and problem management based on ITIL standards, while scripting in Shell/Python to automate Linux-based operational tasks."
      ],
      skills: ["Jenkins", "Terraform", "Ansible", "Site24x7", "Python", "Shell Scripting", "ITIL"]
    },
    {
      title: "Data Analyst Intern",
      company: "Techno hacks edutech",
      location: "Coimbatore",
      period: "May 2023 - Aug 2023",
      description: [
        "Processed and analyzed large datasets using Python, NumPy, and Pandas, performing data cleaning, transformation, and EDA to extract actionable insights.",
        "Created interactive dashboards and visual reports to communicate trends and business patterns, supporting strategic decision-making.",
        "Contributed to building predictive models and conducting statistical analysis, enhancing operational efficiency and data-driven planning."
      ],
      skills: ["Python", "NumPy", "Pandas", "Data Analysis", "Dashboards", "Statistical Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building robust systems and driving data-driven decisions through innovative solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <h4 className="text-lg font-semibold text-primary">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-accent/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;