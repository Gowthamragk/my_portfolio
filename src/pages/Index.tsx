import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Gowtham R. Built with passion for technology and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
