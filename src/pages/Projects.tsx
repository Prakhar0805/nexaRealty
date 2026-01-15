import { Link } from "react-router-dom";
import { Building2, Store, Briefcase, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    title: "Commercial Plots",
    description: "Prime commercial land for your business ventures. Strategic locations with excellent connectivity.",
    icon: Building2,
    href: "/projects/commercial-plots",
    count: "25+ Properties",
  },
  {
    title: "Commercial Shops",
    description: "Ready-to-use retail spaces in bustling commercial areas. Perfect for shops and showrooms.",
    icon: Store,
    href: "/projects/commercial-shops",
    count: "40+ Properties",
  },
  {
    title: "Corporate Plots",
    description: "Large-scale plots ideal for corporate offices and IT parks. Premium locations for businesses.",
    icon: Briefcase,
    href: "/projects/corporate-plots",
    count: "15+ Properties",
  },
  {
    title: "Residential Flats",
    description: "Modern apartments and flats in well-planned communities. Your dream home awaits.",
    icon: Home,
    href: "/projects/residential-flats",
    count: "60+ Properties",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Explore our diverse portfolio of premium properties across various categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                to={category.href}
                className="group p-8 bg-card border border-border rounded-lg hover-lift animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h2>
                      <span className="text-sm text-primary font-medium">{category.count}</span>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
