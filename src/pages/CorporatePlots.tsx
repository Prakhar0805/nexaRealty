import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    price: "₹2,50,00,000",
    title: "IT Park Plot - Knowledge Park",
    beds: 0,
    baths: 0,
    size: "10,000 sq ft",
    location: "Knowledge Park V, Greater Noida",
    isPlot: true,
  },
  {
    image: property2,
    price: "₹3,80,00,000",
    title: "Corporate Office Land - Tech Zone",
    beds: 0,
    baths: 0,
    size: "15,000 sq ft",
    location: "Tech Zone IV, Greater Noida",
    isPlot: true,
  },
  {
    image: property3,
    price: "₹5,20,00,000",
    title: "Premium Corporate Plot - SEZ",
    beds: 0,
    baths: 0,
    size: "20,000 sq ft",
    location: "Noida SEZ",
    isPlot: true,
  },
  {
    image: property1,
    price: "₹1,80,00,000",
    title: "Corporate Land Near Expressway",
    beds: 0,
    baths: 0,
    size: "8,000 sq ft",
    location: "Yamuna Expressway",
    isPlot: true,
  },
  {
    image: property2,
    price: "₹4,50,00,000",
    title: "Business Park Plot",
    beds: 0,
    baths: 0,
    size: "18,000 sq ft",
    location: "Sector 132, Noida",
    isPlot: true,
  },
  {
    image: property3,
    price: "₹2,20,00,000",
    title: "Industrial Corporate Land",
    beds: 0,
    baths: 0,
    size: "12,000 sq ft",
    location: "Ecotech III, Greater Noida",
    isPlot: true,
  },
];

const CorporatePlots = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
              Corporate Plots
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Large-scale plots for corporate offices, IT parks, and business centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CorporatePlots;
