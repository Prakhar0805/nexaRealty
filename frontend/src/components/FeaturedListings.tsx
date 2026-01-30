import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { useProperties } from "@/hooks/useProperties";

const FeaturedListings = () => {
  const { properties, loading } = useProperties("residential-flats");

  // Take first 3 for featured
  const featuredProperties = properties.slice(0, 3);

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
          {loading ? (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              Loading properties...
            </div>
          ) : featuredProperties.length === 0 ? (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No featured properties available.
            </div>
          ) : (
            featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} {...property} />
            ))
          )}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link to="/residential-flats" className="text-primary text-lg font-medium hover:underline underline-offset-4 transition-all">
            View All Listings →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
