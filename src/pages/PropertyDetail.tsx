import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Square, Bed, Bath, ArrowLeft, Phone, Mail, Check } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// Centralized property data - in a real app, this would come from an API
import { allProperties } from "@/data/properties";

const PropertyDetail = () => {
  const { category, propertyId } = useParams();

  const categoryKey = category as keyof typeof allProperties;
  const properties = allProperties[categoryKey] || [];
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 section-container section-padding text-center">
          <h1 className="text-3xl font-semibold text-foreground mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist.</p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryNames: Record<string, string> = {
    "commercial-plots": "Commercial Plots",
    "commercial-shops": "Commercial Shops",
    "corporate-plots": "Corporate Plots",
    "residential-flats": "Residential Flats",
    "plots-in-noida": "Plots in Noida",
    "plots-in-vrindavan": "Plots in Vrindavan",
    "jewar-airport-land": "Jewar Airport Land",
    "industrial-plots": "Industrial Plots",
    "institutional-plots": "Institutional Plots",
    "logistics-park-land": "Logistics Park Land",
    "medical-devices-park": "Medical Devices Park",
    "residential-plots": "Residential Plots",
    "land-for-hotel": "Land for Hotel",
    "raya-heritage-city": "Raya Heritage City",
    "master-plan": "Master Plan",
  };

  const isPlot = 'isPlot' in property && property.isPlot;
  const isShop = 'isShop' in property && property.isShop;
  const showBedsBaths = !isPlot && !isShop && property.beds && property.beds > 0;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="section-container pt-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <span>/</span>
            <Link to={`/projects/${category}`} className="hover:text-foreground transition-colors">
              {categoryNames[categoryKey] || category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{property.title}</span>
          </nav>
        </div>

        {/* Property Header */}
        <section className="section-container py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-lg font-semibold">
                  {property.price}
                </span>
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.location}</span>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 p-6 bg-muted rounded-xl mb-6">
                {showBedsBaths && (
                  <>
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                        <p className="text-lg font-semibold text-foreground">{property.beds}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Bathrooms</p>
                        <p className="text-lg font-semibold text-foreground">{property.baths}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Area</p>
                    <p className="text-lg font-semibold text-foreground">{property.size}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="flex-1" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Visit
                </Button>
                <Button variant="outline" size="xl" className="flex-1">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Info
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-container pb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Features & Amenities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.features?.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <div className="p-2 bg-primary/10 rounded-full">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <section className="section-container pb-16">
          <Link to={`/projects/${category}`}>
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {categoryNames[categoryKey] || "Listings"}
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
