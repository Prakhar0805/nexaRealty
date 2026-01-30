import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  category: string;
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

const PropertyCard = ({ id, category, image, price, title, location, beds = 0, baths = 0, size, isPlot, isShop }: PropertyCardProps) => {
  const showBedsBaths = !isPlot && !isShop && beds > 0;

  return (
    <article className="group bg-card rounded-xl overflow-hidden hover-lift border border-border">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-semibold">
            {price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-3 pb-3 border-b border-border">
          {showBedsBaths && (
            <>
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs text-foreground">{beds} Beds</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs text-foreground">{baths} Baths</span>
              </div>
            </>
          )}
          <div className="flex items-center gap-1">
            <Square className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-foreground">{size}</span>
          </div>
        </div>

        {/* Action */}
        <div className="pt-3">
          <Link to={`/projects/${category}/${id}`}>
            <Button variant="outline" size="sm" className="w-full text-xs h-9">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
