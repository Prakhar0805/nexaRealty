import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: "rf-1",
    category: "residential-flats",
    image: property1,
    price: "₹95,00,000",
    title: "3 BHK Luxury Flat - Sector 150",
    beds: 3,
    baths: 2,
    size: "1,650 sq ft",
    location: "Sector 150, Noida",
  },
  {
    id: "rf-2",
    category: "residential-flats",
    image: property2,
    price: "₹1,45,00,000",
    title: "4 BHK Premium Apartment",
    beds: 4,
    baths: 3,
    size: "2,400 sq ft",
    location: "Sector 128, Noida",
  },
  {
    id: "rf-3",
    category: "residential-flats",
    image: property3,
    price: "₹68,00,000",
    title: "2 BHK Modern Flat",
    beds: 2,
    baths: 2,
    size: "1,200 sq ft",
    location: "Sector 137, Noida",
  },
  {
    id: "rf-4",
    category: "residential-flats",
    image: property1,
    price: "₹1,85,00,000",
    title: "5 BHK Penthouse",
    beds: 5,
    baths: 4,
    size: "3,800 sq ft",
    location: "Golf Course Extension, Noida",
  },
  {
    id: "rf-5",
    category: "residential-flats",
    image: property2,
    price: "₹55,00,000",
    title: "1 BHK Smart Apartment",
    beds: 1,
    baths: 1,
    size: "650 sq ft",
    location: "Sector 75, Noida",
  },
  {
    id: "rf-6",
    category: "residential-flats",
    image: property3,
    price: "₹78,00,000",
    title: "3 BHK Family Apartment",
    beds: 3,
    baths: 2,
    size: "1,450 sq ft",
    location: "Sector 120, Noida",
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
