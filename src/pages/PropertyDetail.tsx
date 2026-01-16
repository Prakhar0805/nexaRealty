import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Square, Bed, Bath, ArrowLeft, Phone, Mail, Check } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// Centralized property data - in a real app, this would come from an API
const allProperties = {
  "commercial-plots": [
    {
      id: "cp-1",
      image: property1,
      price: "₹45,00,000",
      title: "Prime Commercial Plot - Sector 62",
      beds: 0,
      baths: 0,
      size: "2,500 sq ft",
      location: "Sector 62, Noida",
      isPlot: true,
      description: "This prime commercial plot offers excellent visibility and accessibility in one of Noida's most sought-after commercial districts. Ideal for retail showrooms, restaurants, or professional offices.",
      features: ["Corner Plot", "Main Road Facing", "Ready for Construction", "Clear Title", "All Approvals", "24/7 Security"],
    },
    {
      id: "cp-2",
      image: property2,
      price: "₹78,00,000",
      title: "Commercial Land - Yamuna Expressway",
      beds: 0,
      baths: 0,
      size: "4,000 sq ft",
      location: "Yamuna Expressway, Greater Noida",
      isPlot: true,
      description: "Strategic commercial land located on the rapidly developing Yamuna Expressway corridor. Perfect for showrooms, warehouses, or commercial complexes with high visibility.",
      features: ["Highway Facing", "High ROI Potential", "Near Jewar Airport", "Wide Road Access", "Power Backup Available", "Water Connection"],
    },
    {
      id: "cp-3",
      image: property3,
      price: "₹1,20,00,000",
      title: "Premium Plot - Alpha Commercial Belt",
      beds: 0,
      baths: 0,
      size: "6,000 sq ft",
      location: "Alpha Commercial Belt, Greater Noida",
      isPlot: true,
      description: "Premium commercial plot in the heart of Alpha Commercial Belt with excellent connectivity and surrounding business infrastructure.",
      features: ["Prime Location", "Metro Connectivity", "Commercial Zone", "Gated Community", "Ample Parking", "Green Belt View"],
    },
    {
      id: "cp-4",
      image: property1,
      price: "₹55,00,000",
      title: "Corner Plot - Tech Zone",
      beds: 0,
      baths: 0,
      size: "3,000 sq ft",
      location: "Tech Zone, Noida",
      isPlot: true,
      description: "Corner commercial plot with three-side open access, perfect for high-visibility retail or commercial establishment.",
      features: ["Three Side Open", "Corner Plot", "IT Hub Proximity", "Public Transport", "Commercial License", "Bank Loan Available"],
    },
    {
      id: "cp-5",
      image: property2,
      price: "₹92,00,000",
      title: "Commercial Land Near Metro",
      beds: 0,
      baths: 0,
      size: "5,500 sq ft",
      location: "Sector 137, Noida",
      isPlot: true,
      description: "Excellent commercial land just 200 meters from metro station, ideal for retail complex or office building.",
      features: ["Metro Adjacent", "High Footfall Area", "Commercial Zone", "Ready Possession", "All Utilities", "Wide Road"],
    },
    {
      id: "cp-6",
      image: property3,
      price: "₹65,00,000",
      title: "Industrial Commercial Plot",
      beds: 0,
      baths: 0,
      size: "4,500 sq ft",
      location: "Sector 63, Noida",
      isPlot: true,
      description: "Industrial-commercial plot suitable for warehousing, light manufacturing, or logistics operations.",
      features: ["Industrial Zone", "Heavy Vehicle Access", "Power Infrastructure", "Water Supply", "Fire Safety Compliant", "Loading Bay Space"],
    },
  ],
  "commercial-shops": [
    {
      id: "cs-1",
      image: property1,
      price: "₹85,00,000",
      title: "Ready Shop - Central Market",
      beds: 0,
      baths: 0,
      size: "450 sq ft",
      location: "Central Market, Sector 18, Noida",
      isShop: true,
      description: "Prime retail shop in the bustling Central Market with high footfall and established customer base. Perfect for fashion, electronics, or food retail.",
      features: ["Ground Floor", "Main Market", "High Footfall", "Glass Frontage", "AC Pre-installed", "Fire Safety"],
    },
    {
      id: "cs-2",
      image: property2,
      price: "₹1,20,00,000",
      title: "Showroom Space - DLF Mall Road",
      beds: 0,
      baths: 0,
      size: "800 sq ft",
      location: "DLF Mall Road, Noida",
      isShop: true,
      description: "Premium showroom space on the prestigious DLF Mall Road, ideal for branded retail, automobile showrooms, or luxury goods.",
      features: ["Double Height Ceiling", "Premium Location", "Valet Parking", "Central AC", "Power Backup", "Security 24/7"],
    },
    {
      id: "cs-3",
      image: property3,
      price: "₹55,00,000",
      title: "Corner Shop - Atta Market",
      beds: 0,
      baths: 0,
      size: "350 sq ft",
      location: "Atta Market, Sector 27, Noida",
      isShop: true,
      description: "Well-located corner shop in the popular Atta Market, suitable for cafes, boutiques, or service businesses.",
      features: ["Corner Position", "Two Entrances", "Basement Storage", "Washroom", "Display Windows", "Established Market"],
    },
    {
      id: "cs-4",
      image: property1,
      price: "₹72,00,000",
      title: "Food Court Unit",
      beds: 0,
      baths: 0,
      size: "280 sq ft",
      location: "Gardens Galleria, Noida",
      isShop: true,
      description: "Ready-to-operate food court unit in a premium mall with kitchen setup and seating arrangement.",
      features: ["Kitchen Ready", "Exhaust System", "Common Seating", "Mall Footfall", "Flexible Lease", "Brand Neighbors"],
    },
    {
      id: "cs-5",
      image: property2,
      price: "₹1,45,00,000",
      title: "Anchor Store Space",
      beds: 0,
      baths: 0,
      size: "1,500 sq ft",
      location: "Wave Mall, Sector 32, Noida",
      isShop: true,
      description: "Large anchor store space perfect for department stores, hypermarkets, or multi-brand outlets.",
      features: ["Large Format", "Premium Visibility", "Escalator Access", "Loading Dock", "Staff Parking", "Signage Rights"],
    },
    {
      id: "cs-6",
      image: property3,
      price: "₹48,00,000",
      title: "Kiosk Space - IT Park",
      beds: 0,
      baths: 0,
      size: "120 sq ft",
      location: "Tech Park, Sector 125, Noida",
      isShop: true,
      description: "Compact kiosk space in a busy IT park, ideal for cafes, snacks, or quick-service businesses.",
      features: ["IT Park Location", "Captive Audience", "Low Investment", "Quick ROI", "Plug & Play", "Flexible Terms"],
    },
  ],
  "corporate-plots": [
    {
      id: "crp-1",
      image: property1,
      price: "₹2,50,00,000",
      title: "IT Park Plot - Knowledge Park",
      beds: 0,
      baths: 0,
      size: "10,000 sq ft",
      location: "Knowledge Park V, Greater Noida",
      isPlot: true,
      description: "Large corporate plot in the prestigious Knowledge Park, ideal for IT companies, research centers, or corporate headquarters.",
      features: ["SEZ Adjacent", "IT/ITES Zone", "Metro Proposed", "Green Building Ready", "Fiber Connectivity", "Campus Development"],
    },
    {
      id: "crp-2",
      image: property2,
      price: "₹3,80,00,000",
      title: "Corporate Office Land - Tech Zone",
      beds: 0,
      baths: 0,
      size: "15,000 sq ft",
      location: "Tech Zone IV, Greater Noida",
      isPlot: true,
      description: "Premium corporate land in the heart of Tech Zone with excellent infrastructure and connectivity to major IT hubs.",
      features: ["Tech Zone", "Wide Roads", "Power Substation", "Water Treatment", "Landscaping Ready", "Security Gate"],
    },
    {
      id: "crp-3",
      image: property3,
      price: "₹5,20,00,000",
      title: "Premium Corporate Plot - SEZ",
      beds: 0,
      baths: 0,
      size: "20,000 sq ft",
      location: "Noida SEZ",
      isPlot: true,
      description: "Exclusive corporate plot within Noida SEZ offering tax benefits and world-class infrastructure for multinational corporations.",
      features: ["SEZ Benefits", "Tax Incentives", "Export Zone", "Customs Office", "Business Center", "International Standard"],
    },
    {
      id: "crp-4",
      image: property1,
      price: "₹1,80,00,000",
      title: "Corporate Land Near Expressway",
      beds: 0,
      baths: 0,
      size: "8,000 sq ft",
      location: "Yamuna Expressway",
      isPlot: true,
      description: "Strategically located corporate land near Yamuna Expressway with excellent connectivity to Delhi and upcoming Jewar Airport.",
      features: ["Expressway Access", "Airport Proximity", "Future Metro", "Industrial Zone", "Logistics Hub", "Investment Grade"],
    },
    {
      id: "crp-5",
      image: property2,
      price: "₹4,50,00,000",
      title: "Business Park Plot",
      beds: 0,
      baths: 0,
      size: "18,000 sq ft",
      location: "Sector 132, Noida",
      isPlot: true,
      description: "Premium business park plot in Sector 132, surrounded by Fortune 500 companies and IT majors.",
      features: ["Business Park", "MNC Neighbors", "Campus Style", "Green Certified", "Smart Building Ready", "Convention Center"],
    },
    {
      id: "crp-6",
      image: property3,
      price: "₹2,20,00,000",
      title: "Industrial Corporate Land",
      beds: 0,
      baths: 0,
      size: "12,000 sq ft",
      location: "Ecotech III, Greater Noida",
      isPlot: true,
      description: "Industrial-corporate land suitable for manufacturing units with corporate offices, R&D centers, or logistics operations.",
      features: ["Industrial Zone", "Heavy Duty Roads", "Power Grid", "Effluent Treatment", "Workers Housing", "Transport Hub"],
    },
  ],
  "residential-flats": [
    {
      id: "rf-1",
      image: property1,
      price: "₹95,00,000",
      title: "3 BHK Luxury Flat - Sector 150",
      beds: 3,
      baths: 2,
      size: "1,650 sq ft",
      location: "Sector 150, Noida",
      description: "Spacious 3 BHK apartment in a premium gated community with world-class amenities and beautiful green views.",
      features: ["Modular Kitchen", "Swimming Pool", "Clubhouse", "Children's Play Area", "24/7 Security", "Power Backup"],
    },
    {
      id: "rf-2",
      image: property2,
      price: "₹1,45,00,000",
      title: "4 BHK Premium Apartment",
      beds: 4,
      baths: 3,
      size: "2,400 sq ft",
      location: "Sector 128, Noida",
      description: "Ultra-luxury 4 BHK apartment with panoramic views, designer interiors, and exclusive amenities.",
      features: ["Designer Interiors", "Private Lift", "Home Automation", "Spa & Gym", "Concierge Service", "Helipad Access"],
    },
    {
      id: "rf-3",
      image: property3,
      price: "₹68,00,000",
      title: "2 BHK Modern Flat",
      beds: 2,
      baths: 2,
      size: "1,200 sq ft",
      location: "Sector 137, Noida",
      description: "Contemporary 2 BHK flat perfect for young professionals or small families, with modern amenities.",
      features: ["Metro Nearby", "Gym & Pool", "Covered Parking", "Intercom", "Rainwater Harvesting", "Solar Power"],
    },
    {
      id: "rf-4",
      image: property1,
      price: "₹1,85,00,000",
      title: "5 BHK Penthouse",
      beds: 5,
      baths: 4,
      size: "3,800 sq ft",
      location: "Golf Course Extension, Noida",
      description: "Exclusive penthouse with private terrace, golf course views, and ultra-premium specifications.",
      features: ["Private Terrace", "Golf Views", "Home Theater", "Wine Cellar", "Private Pool", "Butler Service"],
    },
    {
      id: "rf-5",
      image: property2,
      price: "₹55,00,000",
      title: "1 BHK Smart Apartment",
      beds: 1,
      baths: 1,
      size: "650 sq ft",
      location: "Sector 75, Noida",
      description: "Compact smart apartment with home automation, perfect for singles or couples seeking modern urban living.",
      features: ["Smart Home", "Studio Kitchen", "Rooftop Garden", "Co-working Space", "EV Charging", "Pet Friendly"],
    },
    {
      id: "rf-6",
      image: property3,
      price: "₹78,00,000",
      title: "3 BHK Family Apartment",
      beds: 3,
      baths: 2,
      size: "1,450 sq ft",
      location: "Sector 120, Noida",
      description: "Family-friendly 3 BHK in an established neighborhood with schools, hospitals, and markets nearby.",
      features: ["School Nearby", "Hospital Access", "Park Facing", "Temple Complex", "Senior Area", "Shopping Mall"],
    },
  ],
};

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
