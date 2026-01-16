import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: "rf-1",
    category: "residential-flats",
    image: property1,
    price: "₹95,00,000",
    title: "3 BHK Luxury Apartment",
    location: "Sector 150, Noida",
    beds: 3,
    baths: 2,
    size: "1,650 sq ft",
  },
  {
    id: "rf-2",
    category: "residential-flats",
    image: property2,
    price: "₹1,45,00,000",
    title: "4 BHK Premium Apartment",
    location: "Sector 128, Noida",
    beds: 4,
    baths: 3,
    size: "2,400 sq ft",
  },
  {
    id: "rf-3",
    category: "residential-flats",
    image: property3,
    price: "₹68,00,000",
    title: "2 BHK Modern Flat",
    location: "Sector 137, Noida",
    beds: 2,
    baths: 2,
    size: "1,200 sq ft",
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
          <Link to="/projects" className="text-primary font-medium hover:underline underline-offset-4 transition-all">
            View All Listings →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
