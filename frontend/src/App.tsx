import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CommercialPlots from "./pages/CommercialPlots";
import CommercialShops from "./pages/CommercialShops";
import CorporatePlots from "./pages/CorporatePlots";
import ResidentialFlats from "./pages/ResidentialFlats";
import PlotsInNoida from "./pages/PlotsInNoida";
import PlotsInVrindavan from "./pages/PlotsInVrindavan";
import JewarAirportLand from "./pages/JewarAirportLand";
import IndustrialPlots from "./pages/IndustrialPlots";
import InstitutionalPlots from "./pages/InstitutionalPlots";
import LogisticsParkLand from "./pages/LogisticsParkLand";
import MedicalDevicesPark from "./pages/MedicalDevicesPark";
import ResidentialPlots from "./pages/ResidentialPlots";
import LandForHotel from "./pages/LandForHotel";
import RayaHeritageCity from "./pages/RayaHeritageCity";
import MasterPlan from "./pages/MasterPlan";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/commercial-plots" element={<CommercialPlots />} />
          <Route path="/projects/commercial-shops" element={<CommercialShops />} />
          <Route path="/projects/corporate-plots" element={<CorporatePlots />} />
          <Route path="/projects/residential-flats" element={<ResidentialFlats />} />
          <Route path="/projects/plots-in-noida" element={<PlotsInNoida />} />
          <Route path="/projects/plots-in-vrindavan" element={<PlotsInVrindavan />} />
          <Route path="/projects/jewar-airport-land" element={<JewarAirportLand />} />
          <Route path="/projects/industrial-plots" element={<IndustrialPlots />} />
          <Route path="/projects/institutional-plots" element={<InstitutionalPlots />} />
          <Route path="/projects/logistics-park-land" element={<LogisticsParkLand />} />
          <Route path="/projects/medical-devices-park" element={<MedicalDevicesPark />} />
          <Route path="/projects/residential-plots" element={<ResidentialPlots />} />
          <Route path="/projects/land-for-hotel" element={<LandForHotel />} />
          <Route path="/projects/raya-heritage-city" element={<RayaHeritageCity />} />
          <Route path="/projects/master-plan" element={<MasterPlan />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/projects/:category/:propertyId" element={<PropertyDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
