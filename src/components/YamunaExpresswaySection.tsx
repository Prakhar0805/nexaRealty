import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const features = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Direct connectivity to Noida, Greater Noida & upcoming Jewar Airport",
  },
  {
    icon: TrendingUp,
    title: "High ROI Potential",
    description: "Rapidly appreciating land values with excellent investment returns",
  },
  {
    icon: Building,
    title: "Development Hub",
    description: "Upcoming Film City, F1 Track, and major infrastructure projects",
  },
];

const YamunaExpresswaySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Yamuna Expressway Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70" />
      </div>

      <div className="relative z-10 section-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground">Featured Investment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-background mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Yamuna Expressway
              <br />
              <span className="text-primary-foreground">Premium Plots</span>
            </h2>

            <p className="text-lg text-background/80 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Invest in the future of Delhi-NCR. Prime plots along Yamuna Expressway with proximity to the upcoming Jewar International Airport, Film City, and F1 racing circuit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/projects/commercial-plots">
                <Button variant="hero" size="xl">
                  Explore Plots
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Investment Guide
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-background/10 backdrop-blur-sm rounded-lg border border-background/20"
              >
                <div className="p-3 bg-primary/20 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-background mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-background/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Price Highlight */}
            <div className="p-6 bg-primary/30 backdrop-blur-sm rounded-lg border border-primary/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-background/70 text-sm mb-1">Starting from</p>
                  <p className="text-2xl font-semibold text-background">₹15,000/sq yd</p>
                </div>
                <div className="text-right">
                  <p className="text-background/70 text-sm mb-1">Plot sizes</p>
                  <p className="text-lg font-medium text-background">100 - 500 sq yd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YamunaExpresswaySection;
