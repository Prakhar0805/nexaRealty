import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

import { allProperties } from "@/data/properties";

const properties = [
  allProperties["residential-flats"][0],
  allProperties["residential-flats"][1],
  allProperties["residential-flats"][2],
].filter(Boolean);

const FeaturedListings = () => {
  return (
    <section id="listings" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-xl">
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
          <Link to="/projects" className="text-primary text-lg font-medium hover:underline underline-offset-4 transition-all">
            View All Listings →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
