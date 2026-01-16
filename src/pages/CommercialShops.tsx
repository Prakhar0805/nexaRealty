import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: "cs-1",
    category: "commercial-shops",
    image: property1,
    price: "₹85,00,000",
    title: "Ready Shop - Central Market",
    beds: 0,
    baths: 0,
    size: "450 sq ft",
    location: "Central Market, Sector 18, Noida",
    isShop: true,
  },
  {
    id: "cs-2",
    category: "commercial-shops",
    image: property2,
    price: "₹1,20,00,000",
    title: "Showroom Space - DLF Mall Road",
    beds: 0,
    baths: 0,
    size: "800 sq ft",
    location: "DLF Mall Road, Noida",
    isShop: true,
  },
  {
    id: "cs-3",
    category: "commercial-shops",
    image: property3,
    price: "₹55,00,000",
    title: "Corner Shop - Atta Market",
    beds: 0,
    baths: 0,
    size: "350 sq ft",
    location: "Atta Market, Sector 27, Noida",
    isShop: true,
  },
  {
    id: "cs-4",
    category: "commercial-shops",
    image: property1,
    price: "₹72,00,000",
    title: "Food Court Unit",
    beds: 0,
    baths: 0,
    size: "280 sq ft",
    location: "Gardens Galleria, Noida",
    isShop: true,
  },
  {
    id: "cs-5",
    category: "commercial-shops",
    image: property2,
    price: "₹1,45,00,000",
    title: "Anchor Store Space",
    beds: 0,
    baths: 0,
    size: "1,500 sq ft",
    location: "Wave Mall, Sector 32, Noida",
    isShop: true,
  },
  {
    id: "cs-6",
    category: "commercial-shops",
    image: property3,
    price: "₹48,00,000",
    title: "Kiosk Space - IT Park",
    beds: 0,
    baths: 0,
    size: "120 sq ft",
    location: "Tech Park, Sector 125, Noida",
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
