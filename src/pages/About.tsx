import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agentImage from "@/assets/agent-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Building trust through exceptional real estate services since 2010
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={agentImage}
                alt="Our team"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in the real estate market, we have helped thousands of families find their perfect homes and businesses secure prime commercial spaces. Our commitment to excellence and personalized service sets us apart.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We understand that buying or investing in property is one of the most significant decisions you'll make. That's why our team of dedicated professionals works tirelessly to ensure you have all the information and support you need throughout your journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From residential flats to commercial plots, from Yamuna Expressway investments to corporate spaces, we offer a comprehensive portfolio that caters to diverse needs and budgets.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "15+", label: "Years Experience" },
              { number: "2,500+", label: "Properties Sold" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Expert Agents" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl sm:text-4xl font-semibold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary/30 section-padding">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-up">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional real estate services that exceed expectations, helping our clients achieve their property goals through integrity, expertise, and personalized attention to every detail.
                </p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted name in real estate, known for our unwavering commitment to client success, innovative solutions, and contribution to building better communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
