import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
}

const PropertyCard = ({ image, price, address, location, beds, baths, sqft }: PropertyCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden hover-lift border border-border">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={address}
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
          {address}
        </h3>
        
        <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 pb-4 border-b border-border">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">{sqft}</span>
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
