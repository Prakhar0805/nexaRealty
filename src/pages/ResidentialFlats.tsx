import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    price: "₹85,00,000",
    title: "3 BHK Luxury Apartment",
    beds: 3,
    baths: 2,
    size: "1,450 sq ft",
    location: "Sector 150, Noida",
  },
  {
    image: property2,
    price: "₹65,00,000",
    title: "2 BHK Modern Flat",
    beds: 2,
    baths: 2,
    size: "1,100 sq ft",
    location: "Gaur City, Greater Noida",
  },
  {
    image: property3,
    price: "₹1,25,00,000",
    title: "4 BHK Penthouse",
    beds: 4,
    baths: 3,
    size: "2,200 sq ft",
    location: "Sector 128, Noida",
  },
  {
    image: property1,
    price: "₹48,00,000",
    title: "2 BHK Affordable Flat",
    beds: 2,
    baths: 1,
    size: "950 sq ft",
    location: "Crossing Republik",
  },
  {
    image: property2,
    price: "₹95,00,000",
    title: "3 BHK Premium Apartment",
    beds: 3,
    baths: 3,
    size: "1,650 sq ft",
    location: "Sector 137, Noida",
  },
  {
    image: property3,
    price: "₹72,00,000",
    title: "3 BHK Family Home",
    beds: 3,
    baths: 2,
    size: "1,350 sq ft",
    location: "Sector 76, Noida",
  },
];

const ResidentialFlats = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
              Residential Flats
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Modern apartments and flats in well-planned communities
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

export default ResidentialFlats;
