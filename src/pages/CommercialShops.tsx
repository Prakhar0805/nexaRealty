import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    price: "₹35,00,000",
    title: "Ground Floor Shop - Mall Road",
    beds: 0,
    baths: 1,
    size: "450 sq ft",
    location: "Sector 18, Noida",
    isShop: true,
  },
  {
    image: property2,
    price: "₹48,00,000",
    title: "Corner Shop - High Street",
    beds: 0,
    baths: 1,
    size: "600 sq ft",
    location: "Alpha Commercial Belt",
    isShop: true,
  },
  {
    image: property3,
    price: "₹28,00,000",
    title: "Retail Shop - Shopping Complex",
    beds: 0,
    baths: 1,
    size: "350 sq ft",
    location: "Gaur City Mall",
    isShop: true,
  },
  {
    image: property1,
    price: "₹55,00,000",
    title: "Premium Showroom Space",
    beds: 0,
    baths: 2,
    size: "800 sq ft",
    location: "Sector 62, Noida",
    isShop: true,
  },
  {
    image: property2,
    price: "₹42,00,000",
    title: "Shop Near Metro Station",
    beds: 0,
    baths: 1,
    size: "500 sq ft",
    location: "Botanical Garden Metro",
    isShop: true,
  },
  {
    image: property3,
    price: "₹38,00,000",
    title: "Double Height Shop",
    beds: 0,
    baths: 1,
    size: "550 sq ft",
    location: "Pari Chowk, Greater Noida",
    isShop: true,
  },
];

const CommercialShops = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
              Commercial Shops
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Ready-to-use retail spaces in prime commercial locations
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

export default CommercialShops;
