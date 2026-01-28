import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToListings = () => {
    document.querySelector("#listings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern home at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-2xl pt-20 lg:pt-0">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-background leading-tight mb-6 animate-fade-up">
            Find Your Perfect
            <br />
            <span className="text-primary-foreground">Place to Call Home</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-background/80 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover exceptional properties curated for discerning buyers. Let us guide you to your dream home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToListings}
            >
              Explore Properties
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
