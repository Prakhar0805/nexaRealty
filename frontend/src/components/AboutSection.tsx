import { Award, Users, TrendingUp, Shield } from "lucide-react";
import agentPortrait from "@/assets/agent-portrait.jpg";

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Properties Sold", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Users },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in honest communication and complete transparency in every transaction.",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Your needs and aspirations are at the heart of everything we do.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-base mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full" />
            About Nexa Realty
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your Trusted Partner in
            <span className="text-primary"> Finding Home</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            With over 15 years of experience in luxury real estate, we've helped hundreds of families find their perfect home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section - Placeholder */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted h-[500px] w-full flex items-center justify-center border border-border">
                <p className="text-muted-foreground">Image Placeholder</p>

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">Top 1%</p>
                      <p className="text-sm text-muted-foreground">Real Estate Agency in NCR</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-6 text-muted-foreground mb-10">
              <p className="text-lg leading-relaxed">
                We believe that finding the right property is about more than square footage—it's about finding where your life unfolds. Our personalized approach means we take the time to understand your unique needs, lifestyle, and aspirations.
              </p>
              <p className="text-base leading-relaxed">
                From first viewing to final closing, we're with you every step of the way, ensuring a smooth and memorable journey to your new home.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-10">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-base text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-5 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
