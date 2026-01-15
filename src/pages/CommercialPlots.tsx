import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    price: "₹45,00,000",
    title: "Prime Commercial Plot - Sector 62",
    beds: 0,
    baths: 0,
    size: "2,400 sq ft",
    location: "Sector 62, Noida",
    isPlot: true,
  },
  {
    image: property2,
    price: "₹78,00,000",
    title: "Corner Commercial Plot - Main Road",
    beds: 0,
    baths: 0,
    size: "3,600 sq ft",
    location: "Greater Noida West",
    isPlot: true,
  },
  {
    image: property3,
    price: "₹1,20,00,000",
    title: "Premium Commercial Land - Highway Facing",
    beds: 0,
    baths: 0,
    size: "5,000 sq ft",
    location: "Yamuna Expressway",
    isPlot: true,
  },
  {
    image: property1,
    price: "₹55,00,000",
    title: "Commercial Plot Near Metro",
    beds: 0,
    baths: 0,
    size: "2,000 sq ft",
    location: "Sector 18, Noida",
    isPlot: true,
  },
  {
    image: property2,
    price: "₹92,00,000",
    title: "Industrial Commercial Plot",
    beds: 0,
    baths: 0,
    size: "4,500 sq ft",
    location: "Ecotech, Greater Noida",
    isPlot: true,
  },
  {
    image: property3,
    price: "₹65,00,000",
    title: "Commercial Plot with Approval",
    beds: 0,
    baths: 0,
    size: "3,000 sq ft",
    location: "Tech Zone, Greater Noida",
    isPlot: true,
  },
];

const CommercialPlots = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
              Commercial Plots
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Prime commercial land for your business ventures in strategic locations
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

export default CommercialPlots;
