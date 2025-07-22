import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "gowthamofficial1227@gmail.com",
      href: "mailto:gowthamofficial1227@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(+91) 9003332655",
      href: "tel:+919003332655"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Thanjavur, Tamil Nadu, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Gowthamragk",
      description: "Check out my code repositories"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gowtham-ragk/",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a tech conversation. 
            I'm always excited to connect with fellow developers and industry professionals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in text-center">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{contact.label}</h3>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm border animate-fade-in group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {social.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">{social.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Send className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Whether you're looking for a Site Reliability Engineer, AI Developer, or someone passionate 
                  about DevOps and system optimization, I'd love to hear about your project.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <a href="mailto:gowthamofficial1227@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send me an email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;