import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    price: "$2,450,000",
    address: "Modern Villa with Garden",
    location: "Pacific Heights, San Francisco",
    beds: 5,
    baths: 4,
    sqft: "4,200 sqft",
  },
  {
    image: property2,
    price: "$1,890,000",
    address: "Contemporary Loft Space",
    location: "SoMa District, San Francisco",
    beds: 3,
    baths: 2,
    sqft: "2,800 sqft",
  },
  {
    image: property3,
    price: "$3,750,000",
    address: "Penthouse with City Views",
    location: "Nob Hill, San Francisco",
    beds: 4,
    baths: 3,
    sqft: "3,600 sqft",
  },
];

const FeaturedListings = () => {
  return (
    <section id="listings" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our handpicked selection of exceptional homes, each offering unique character and premium amenities.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <button className="text-primary font-medium hover:underline underline-offset-4 transition-all">
            View All Listings →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
