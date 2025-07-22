import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Gowtham R
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-in">
            Site Reliability Engineer & AI Developer
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Thanjavur, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(+91) 9003332655</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate and results-driven programmer with expertise in DevOps, AI, and system optimization. 
            Thriving in collaborative environments while developing efficient solutions using cutting-edge technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="gradient" size="lg" asChild>
              <a href="mailto:gowthamofficial1227@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="https://github.com/Gowthamragk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="https://www.linkedin.com/in/gowtham-ragk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;