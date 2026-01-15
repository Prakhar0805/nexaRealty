import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds?: number;
  baths?: number;
  size: string;
  isPlot?: boolean;
  isShop?: boolean;
}

const PropertyCard = ({ image, price, title, location, beds = 0, baths = 0, size, isPlot, isShop }: PropertyCardProps) => {
  const showBedsBaths = !isPlot && beds > 0;

  return (
    <article className="group bg-card rounded-xl overflow-hidden hover-lift border border-border">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-semibold">
            {price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {title}
        </h3>
        
        <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 pb-4 border-b border-border">
          {showBedsBaths && (
            <>
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{beds} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{baths} Baths</span>
              </div>
            </>
          )}
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">{size}</span>
          </div>
        </div>

        {/* Action */}
        <div className="pt-4">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
