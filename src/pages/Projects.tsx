import { Link, useLocation } from "react-router-dom";
import { Building2, Store, Briefcase, Home, MapPin, Building, Plane, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const categories = [
  {
    title: "Commercial Plots",
    description: "Prime commercial land for your business ventures. Strategic locations with excellent connectivity.",
    icon: Building2,
    href: "/projects/commercial-plots",
    count: "25+ Properties",
  },
  {
    title: "Commercial Shops",
    description: "Ready-to-use retail spaces in bustling commercial areas. Perfect for shops and showrooms.",
    icon: Store,
    href: "/projects/commercial-shops",
    count: "40+ Properties",
  },
  {
    title: "Corporate Plots",
    description: "Large-scale plots ideal for corporate offices and IT parks. Premium locations for businesses.",
    icon: Briefcase,
    href: "/projects/corporate-plots",
    count: "15+ Properties",
  },
  {
    title: "Residential Flats",
    description: "Modern apartments and flats in well-planned communities. Your dream home awaits.",
    icon: Home,
    href: "/projects/residential-flats",
    count: "60+ Properties",
  },
  {
    title: "Plots in Noida",
    description: "Residential and commercial plots across prime sectors of Noida with excellent connectivity.",
    icon: MapPin,
    href: "/projects/plots-in-noida",
    count: "18+ Plots",
  },
  {
    title: "Plots in Vrindavan",
    description: "Spiritual and investment-friendly plots near temples and upcoming townships in Vrindavan.",
    icon: MapPin,
    href: "/projects/plots-in-vrindavan",
    count: "12+ Plots",
  },
  {
    title: "Jewar Airport Land",
    description: "Strategic land parcels around Noida International Airport ideal for future development.",
    icon: Plane,
    href: "/projects/jewar-airport-land",
    count: "10+ Land Parcels",
  },
  {
    title: "Industrial Plots",
    description: "Industrial use plots suited for factories, warehouses and light manufacturing units.",
    icon: Building,
    href: "/projects/industrial-plots",
    count: "20+ Plots",
  },
  {
    title: "Institutional Plots",
    description: "Approved institutional land for schools, colleges and training centres in key corridors.",
    icon: Building2,
    href: "/projects/institutional-plots",
    count: "8+ Plots",
  },
  {
    title: "Logistics Park Land",
    description: "Large land banks planned for logistics parks, warehouses and distribution hubs.",
    icon: Briefcase,
    href: "/projects/logistics-park-land",
    count: "6+ Parks",
  },
  {
    title: "Medical Devices Park",
    description: "Specialised land parcels in upcoming medical devices and healthcare parks.",
    icon: Building,
    href: "/projects/medical-devices-park",
    count: "5+ Clusters",
  },
  {
    title: "Residential Plots",
    description: "Freehold residential plots in gated communities and well-planned sectors.",
    icon: Home,
    href: "/projects/residential-plots",
    count: "30+ Plots",
  },
  {
    title: "Land for Hotel",
    description: "Hospitality-zoned land ideal for hotels, resorts and serviced apartments.",
    icon: Building,
    href: "/projects/land-for-hotel",
    count: "7+ Sites",
  },
  {
    title: "Raya Heritage City",
    description: "Plotted developments and mixed-use land banks in the Raya Heritage City belt.",
    icon: MapPin,
    href: "/projects/raya-heritage-city",
    count: "9+ Projects",
  },
  {
    title: "Master Plan",
    description: "Curated master plan land options aligned with upcoming infrastructure and zoning.",
    icon: Briefcase,
    href: "/projects/master-plan",
    count: "4+ Options",
  },
];

// Define types for our filters
type ProjectType = 'all' | 'commercial' | 'residential' | 'industrial' | 'institutional' | 'land';
type LocationType = 'all' | 'noida' | 'vrindavan' | 'jewar' | 'raya';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('all');
  const [location, setLocation] = useState<LocationType>('all');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const locationHook = useLocation();

  // Extract filter from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    const type = params.get('type') as ProjectType;
    const loc = params.get('location') as LocationType;
    const search = params.get('search');

    if (type && ['all', 'commercial', 'residential', 'industrial', 'institutional', 'land'].includes(type)) {
      setProjectType(type);
    }
    if (loc && ['all', 'noida', 'vrindavan', 'jewar', 'raya'].includes(loc)) {
      setLocation(loc);
    }
    if (search) {
      setSearchTerm(search);
    }
  }, [locationHook.search]);

  // Apply filters
  useEffect(() => {
    let result = [...categories];

    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (category) =>
          category.title.toLowerCase().includes(term) ||
          category.description.toLowerCase().includes(term)
      );
    }

    // Apply project type filter
    if (projectType !== 'all') {
      const typeMap: Record<string, string[]> = {
        commercial: ['Commercial Plots', 'Commercial Shops', 'Corporate Plots', 'Land for Hotel'],
        residential: ['Residential Flats', 'Residential Plots'],
        industrial: ['Industrial Plots', 'Logistics Park Land'],
        institutional: ['Institutional Plots', 'Medical Devices Park'],
        land: ['Plots in Noida', 'Plots in Vrindavan', 'Jewar Airport Land', 'Master Plan', 'Raya Heritage City']
      };
      
      result = result.filter(category => typeMap[projectType].includes(category.title));
    }

    // Apply location filter
    if (location !== 'all') {
      const locationMap: Record<string, string[]> = {
        noida: ['Plots in Noida'],
        vrindavan: ['Plots in Vrindavan'],
        jewar: ['Jewar Airport Land'],
        raya: ['Raya Heritage City']
      };
      
      result = result.filter(category => locationMap[location]?.includes(category.title) || false);
    }

    setFilteredCategories(result);
  }, [searchTerm, projectType, location]);

  const clearFilters = () => {
    setSearchTerm('');
    setProjectType('all');
    setLocation('all');
    // Update URL without page reload
    window.history.pushState({}, '', '/projects');
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

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-container section-padding">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 animate-fade-up">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Explore our diverse portfolio of premium properties across various categories
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
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

            {/* Filter Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={projectType === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setProjectType('all');
                  updateUrlParams('type', 'all');
                }}
              >
                All Types
              </Button>
              <Button
                variant={projectType === 'commercial' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setProjectType('commercial');
                  updateUrlParams('type', 'commercial');
                }}
              >
                Commercial
              </Button>
              <Button
                variant={projectType === 'residential' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setProjectType('residential');
                  updateUrlParams('type', 'residential');
                }}
              >
                Residential
              </Button>
              <Button
                variant={projectType === 'industrial' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setProjectType('industrial');
                  updateUrlParams('type', 'industrial');
                }}
              >
                Industrial
              </Button>
              <Button
                variant={projectType === 'land' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setProjectType('land');
                  updateUrlParams('type', 'land');
                }}
              >
                Land
              </Button>
            </div>

            {/* Location Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={location === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setLocation('all');
                  updateUrlParams('location', 'all');
                }}
              >
                All Locations
              </Button>
              <Button
                variant={location === 'noida' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setLocation('noida');
                  updateUrlParams('location', 'noida');
                }}
              >
                Noida
              </Button>
              <Button
                variant={location === 'vrindavan' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setLocation('vrindavan');
                  updateUrlParams('location', 'vrindavan');
                }}
              >
                Vrindavan
              </Button>
              <Button
                variant={location === 'jewar' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setLocation('jewar');
                  updateUrlParams('location', 'jewar');
                }}
              >
                Jewar
              </Button>
              <Button
                variant={location === 'raya' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setLocation('raya');
                  updateUrlParams('location', 'raya');
                }}
              >
                Raya
              </Button>
              
              {(searchTerm || projectType !== 'all' || location !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredCategories.length} {filteredCategories.length === 1 ? 'project' : 'projects'}
              {searchTerm ? ` matching "${searchTerm}"` : ''}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
{filteredCategories.length === 0 ? (
              <div key="no-results" className="col-span-2 py-12 text-center">
                <h3 className="text-xl font-medium text-muted-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={clearFilters}
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              filteredCategories.map((category, index) => (
              <Link
                key={category.title}
                to={category.href}
                className="group p-8 bg-card border border-border rounded-lg hover-lift animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h2>
                      <span className="text-sm text-primary font-medium">{category.count}</span>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </Link>
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
