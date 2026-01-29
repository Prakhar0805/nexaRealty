import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { allProperties, Property } from "@/data/properties";

interface PropertyFiltersProps {
  properties: Property[];
  onFilteredPropertiesChange: (filtered: Property[]) => void;
  category: string;
}

const PropertyFilters = ({ properties, onFilteredPropertiesChange, category }: PropertyFiltersProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [sizeRange, setSizeRange] = useState('all');
  const [location, setLocation] = useState('all');
  const locationHook = useLocation();

  // Extract unique locations from properties
  const uniqueLocations = Array.from(new Set(properties.map(p => p.location)));

  // Extract filter from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    const search = params.get('search');
    const price = params.get('price');
    const beds = params.get('beds');
    const size = params.get('size');
    const loc = params.get('location');

    if (search) setSearchTerm(search);
    if (price) setPriceRange(price);
    if (beds) setBedrooms(beds);
    if (size) setSizeRange(size);
    if (loc) setLocation(loc);
  }, [locationHook.search]);

  // Apply filters
  useEffect(() => {
    let result = [...properties];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(term) ||
          property.location.toLowerCase().includes(term) ||
          property.size.toLowerCase().includes(term)
      );
    }

    // Apply price filter
    if (priceRange !== 'all') {
      result = result.filter((property) => {
        const price = parseInt(property.price.replace(/[₹,]/g, ''));
        switch (priceRange) {
          case 'under50':
            return price < 5000000;
          case '50to100':
            return price >= 5000000 && price < 10000000;
          case '100to150':
            return price >= 10000000 && price < 15000000;
          case '150plus':
            return price >= 15000000;
          default:
            return true;
        }
      });
    }

    // Apply bedrooms filter (only for non-plots)
    if (bedrooms !== 'all' && !properties.some(p => p.isPlot)) {
      result = result.filter((property) => {
        if (bedrooms === '1') return property.beds === 1;
        if (bedrooms === '2') return property.beds === 2;
        if (bedrooms === '3') return property.beds === 3;
        if (bedrooms === '4') return property.beds === 4;
        if (bedrooms === '5plus') return property.beds && property.beds >= 5;
        return true;
      });
    }

    // Apply size filter
    if (sizeRange !== 'all') {
      result = result.filter((property) => {
        // Helper to convert size to sq ft
        const normalizeSize = (sizeStr: string): number => {
          const value = parseFloat(sizeStr.replace(/[^0-9.]/g, ''));
          const unit = sizeStr.toLowerCase();

          if (unit.includes('sq yd') || unit.includes('sq.yd') || unit.includes('sqyd')) {
            return value * 9;
          }
          if (unit.includes('sq m') || unit.includes('sq.m') || unit.includes('sqm')) {
            return value * 10.764;
          }
          if (unit.includes('acre')) {
            return value * 43560;
          }
          if (unit.includes('hectare')) {
            return value * 107639;
          }
          // Default to sq ft
          return value;
        };

        const sizeInSqFt = normalizeSize(property.size);

        switch (sizeRange) {
          case 'under1000':
            return sizeInSqFt < 1000;
          case '1000to2000':
            return sizeInSqFt >= 1000 && sizeInSqFt < 2000;
          case '2000to3000':
            return sizeInSqFt >= 2000 && sizeInSqFt < 3000;
          case '3000plus':
            return sizeInSqFt >= 3000;
          default:
            return true;
        }
      });
    }

    // Apply location filter
    if (location !== 'all') {
      result = result.filter(property => property.location === location);
    }

    onFilteredPropertiesChange(result);
  }, [searchTerm, priceRange, bedrooms, sizeRange, location, properties]);

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange('all');
    setBedrooms('all');
    setSizeRange('all');
    setLocation('all');
    window.history.pushState({}, '', `/projects/${category}`);
  };

  const updateUrlParams = (key: string, value: string) => {
    const params = new URLSearchParams(locationHook.search);
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  };

  const isBuiltUp = category === 'commercial-shops' || category === 'residential-flats';
  const isPlotCategory = !isBuiltUp;
  const showBedrooms = category === 'residential-flats';

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar and Filter Toggle */}
      <div className="flex gap-4 max-w-3xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search properties..."
            className="pl-10 pr-10 h-12 text-base"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              updateUrlParams('search', e.target.value);
            }}
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                updateUrlParams('search', '');
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button
          variant={isFiltersOpen ? "default" : "outline"}
          size="lg"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="h-12 px-6"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Collapsible Filter Controls */}
      {isFiltersOpen && (
        <div className="bg-muted/30 p-6 rounded-xl animate-fade-down border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Price Range Filter */}
            <Select
              value={priceRange}
              onValueChange={(value) => {
                setPriceRange(value);
                updateUrlParams('price', value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under50">Under ₹50 Lakhs</SelectItem>
                <SelectItem value="50to100">₹50L - ₹1 Cr</SelectItem>
                <SelectItem value="100to150">₹1Cr - ₹1.5 Cr</SelectItem>
                <SelectItem value="150plus">Above ₹1.5 Cr</SelectItem>
              </SelectContent>
            </Select>

            {/* Bedrooms Filter (only for residential flats) */}
            {showBedrooms && (
              <Select
                value={bedrooms}
                onValueChange={(value) => {
                  setBedrooms(value);
                  updateUrlParams('beds', value);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bedrooms</SelectItem>
                  <SelectItem value="1">1 BHK</SelectItem>
                  <SelectItem value="2">2 BHK</SelectItem>
                  <SelectItem value="3">3 BHK</SelectItem>
                  <SelectItem value="4">4 BHK</SelectItem>
                  <SelectItem value="5plus">5+ BHK</SelectItem>
                </SelectContent>
              </Select>
            )}

            {/* Size Range Filter */}
            <Select
              value={sizeRange}
              onValueChange={(value) => {
                setSizeRange(value);
                updateUrlParams('size', value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Size Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="under1000">Under 1000 sq ft</SelectItem>
                <SelectItem value="1000to2000">1000-2000 sq ft</SelectItem>
                <SelectItem value="2000to3000">2000-3000 sq ft</SelectItem>
                <SelectItem value="3000plus">Above 3000 sq ft</SelectItem>
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select
              value={location}
              onValueChange={(value) => {
                setLocation(value);
                updateUrlParams('location', value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {uniqueLocations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filter Actions */}
          <div className="flex justify-between items-center pt-2 border-t border-border/50">
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
              disabled={!searchTerm && priceRange === 'all' && bedrooms === 'all' && sizeRange === 'all' && location === 'all'}
            >
              Clear all filters
            </Button>
            <Button onClick={() => setIsFiltersOpen(false)}>
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyFilters;
