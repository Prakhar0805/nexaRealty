import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import { useProperties } from "@/hooks/useProperties";

const PlotsInNoida = () => {
  const { properties, loading } = useProperties("plots-in-noida");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
              Plots in Noida
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Freehold residential and investment plots across prime sectors of Noida.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading properties...</div>
          ) : (
            <>
              <PropertyFilters
                properties={properties}
                onFilteredPropertiesChange={setFilteredProperties}
                category="plots-in-noida"
              />

              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.length === 0 ? (
                  <div className="col-span-full py-12 text-center">
                    <h3 className="text-xl font-medium text-muted-foreground mb-2">No properties found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters</p>
                  </div>
                ) : (
                  filteredProperties.map((property, index) => (
                    <div
                      key={property.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <PropertyCard {...property} />
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlotsInNoida;
