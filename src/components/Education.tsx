import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "Rathinam Technical Campus",
      location: "Coimbatore",
      period: "Jan 2021 - Apr 2025",
      grade: "8.5 CGPA",
      specialization: "Honors with specialization in Cybersecurity and Data privacy"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St Thomas Higher Secondary School", 
      location: "Thanjavur",
      period: "Jun 2019 - Apr 2021",
      grade: "88.6%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St Thomas Higher Secondary School",
      location: "Thanjavur", 
      period: "Jun 2018 - Apr 2019",
      grade: "86.0%"
    }
  ];

  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      provider: "Coursera",
      period: "Jun 2024 - Jan 2025",
      status: "Completed"
    },
    {
      title: "IBM Cybersecurity Analyst",
      provider: "Coursera", 
      period: "Jun 2024 - Jan 2025",
      status: "Completed"
    },
    {
      title: "Python and SQL for Data Analysis",
      provider: "Scalar",
      period: "Dec 2024 - Jan 2025",
      status: "Completed"
    },
    {
      title: "Data Analysis",
      provider: "LinkedIn Learning",
      period: "May 2024 - Jun 2024",
      status: "Completed"
    },
    {
      title: "Python for Data Science",
      provider: "Great Learning",
      period: "Mar 2023 - May 2023", 
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in AI/Data Science with continuous professional development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <h4 className="text-lg font-semibold text-primary mb-1">{edu.institution}</h4>
                        <p className="text-muted-foreground">{edu.location}</p>
                        {edu.specialization && (
                          <p className="text-sm text-muted-foreground mt-2 italic">{edu.specialization}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2 bg-accent/50">
                          {edu.period}
                        </Badge>
                        <div className="text-2xl font-bold text-primary">{edu.grade}</div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <Badge 
                          variant={cert.status === "Completed" ? "default" : "secondary"} 
                          className="mb-2 text-xs"
                        >
                          {cert.status}
                        </Badge>
                        <CardTitle className="text-sm group-hover:text-primary transition-colors leading-tight">
                          {cert.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium">{cert.provider}</p>
                      <p>{cert.period}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;