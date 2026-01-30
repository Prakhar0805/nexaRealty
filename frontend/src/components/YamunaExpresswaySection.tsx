import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Building, ArrowRight, Plane, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import mapPlaceholder from "@/assets/yamuna-map-placeholder.jpg";

const highlights = [
  {
    icon: Plane,
    title: "Jewar Airport",
    subtitle: "5 km proximity",
  },
  {
    icon: Car,
    title: "Expressway",
    subtitle: "Direct access",
  },
  {
    icon: Building,
    title: "Film City",
    subtitle: "Upcoming project",
  },
];

const YamunaExpresswaySection = () => {
  return (
    <section className="bg-muted py-12 lg:py-20 text-sm md:text-base">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-base font-medium text-primary">Featured Investment</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Yamuna Expressway
            <span className="text-primary"> Premium Plots</span>
          </h2>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Invest in the future of Delhi-NCR. Prime plots with proximity to Jewar International Airport, Film City, and F1 Circuit.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Map Section */}
          <div className="lg:col-span-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
              <img
                src={mapPlaceholder}
                alt="Yamuna Expressway Map - Showing Jewar Airport, Greater Noida, and Delhi NCR connectivity"
                className="w-full h-auto object-cover"
              />
              {/* Map Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Prime Location</p>
                    <p className="text-sm text-muted-foreground">Yamuna Expressway, Greater Noida</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground hidden sm:block">*Replace with your actual map</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-4 bg-background rounded-xl shadow-sm border border-border"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-base">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Invest Here?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground text-base">Rapidly appreciating land values with 15-20% yearly growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground text-base">Upcoming Film City, F1 Track & Metro connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground text-base">5 km from upcoming Noida International Airport</span>
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-base text-muted-foreground">Starting from</p>
                  <p className="text-3xl font-semibold text-foreground">₹15,000<span className="text-lg font-normal">/sq yd</span></p>
                </div>
                <div className="text-right">
                  <p className="text-base text-muted-foreground">Plot sizes</p>
                  <p className="text-xl font-medium text-foreground">100 - 500 sq yd</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/projects/commercial-plots" className="flex-1">
                <Button className="w-full" size="lg">
                  Explore Plots
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YamunaExpresswaySection;
