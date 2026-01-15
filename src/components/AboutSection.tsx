import agentPortrait from "@/assets/agent-portrait.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Properties Sold" },
  { value: "98%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Haven
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mt-3 mb-6">
              Your Trusted Partner in Finding Home
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 15 years of experience in luxury real estate, Haven has helped hundreds of families find their perfect home. We believe that finding the right property is about more than square footage—it's about finding where your life unfolds.
              </p>
              <p>
                Our personalized approach means we take the time to understand your unique needs, lifestyle, and aspirations. From first viewing to final closing, we're with you every step of the way.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl sm:text-3xl font-semibold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={agentPortrait}
                alt="Sarah Mitchell - Lead Real Estate Agent"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
