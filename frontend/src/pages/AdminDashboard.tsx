import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

interface Property {
    id: string;
    title: string;
    category: string;
    price: string;
    location: string;
    size: string;
    description: string;
    image: string;
    beds?: number;
    baths?: number;
    isPlot?: boolean;
    isShop?: boolean;
    features?: string[];
}

const CATEGORIES = [
    'commercial-plots',
    'commercial-shops',
    'corporate-plots',
    'residential-flats',
    'plots-in-noida',
    'plots-in-vrindavan',
    'jewar-airport-land',
    'industrial-plots',
    'institutional-plots',
    'logistics-park-land',
    'medical-devices-park',
    'residential-plots',
    'land-for-hotel',
    'raya-heritage-city'
];

const AdminDashboard = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();

    // Watch category to manually handle Select (since shadcn Select is controlled)
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isPlot, setIsPlot] = useState(false);
    const [isShop, setIsShop] = useState(false);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_URL || '';
            const res = await fetch(`${baseUrl}/api/properties`);
            if (!res.ok) throw new Error('Failed to fetch properties');
            const data = await res.json();
            if (Array.isArray(data)) {
                setProperties(data);
            } else {
                console.error("Received non-array data:", data);
                setProperties([]);
                toast.error("Invalid data format received");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch properties");
            setProperties([]);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: any) => {
        try {
            // Ensure category is included
            if (!selectedCategory) {
                toast.error("Please select a category");
                return;
            }

            // Parse features
            const featuresArray = data.features
                ? data.features.split(',').map((f: string) => f.trim()).filter((f: string) => f.length > 0)
                : [];

            const payload = {
                ...data,
                category: selectedCategory,
                isPlot,
                isShop,
                features: featuresArray,
                beds: data.beds ? parseInt(data.beds) : undefined,
                baths: data.baths ? parseInt(data.baths) : undefined,
            };

            const baseUrl = import.meta.env.VITE_API_URL || '';
            const res = await fetch(`${baseUrl}/api/properties`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to create');
            }

            const newProperty = await res.json();
            setProperties((prev) => [newProperty, ...prev]);
            toast.success("Property added successfully!");

            // Reset form
            reset();
            setSelectedCategory("");
            setIsPlot(false);
            setIsShop(false);
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Error adding property");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this listing?")) return;
        try {
            const baseUrl = import.meta.env.VITE_API_URL || '';
            const res = await fetch(`${baseUrl}/api/properties/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
            setProperties((prev) => prev.filter(p => p.id !== id));
            toast.success("Property deleted");
        } catch (error) {
            toast.error("Error deleting property");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Add New Listing</CardTitle>
                                <CardDescription>Fill in the details to add a new property.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <Label htmlFor="title">Title</Label>
                                        <Input id="title" {...register("title", { required: true })} placeholder="e.g. Luxury 3BHK" />
                                        {errors.title && <span className="text-red-500 text-sm">Required</span>}
                                    </div>

                                    <div>
                                        <Label htmlFor="category">Category</Label>
                                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {CATEGORIES.map(cat => (
                                                    <SelectItem key={cat} value={cat}>{cat.replace(/-/g, ' ').toUpperCase()}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="price">Price</Label>
                                        <Input id="price" {...register("price", { required: true })} placeholder="e.g. ₹1.5 Cr" />
                                    </div>

                                    <div>
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" {...register("location", { required: true })} placeholder="e.g. Sector 18, Noida" />
                                    </div>

                                    <div>
                                        <Label htmlFor="size">Size</Label>
                                        <Input id="size" {...register("size", { required: true })} placeholder="e.g. 1200 sq ft" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="beds">Bedrooms</Label>
                                            <Input type="number" id="beds" {...register("beds")} placeholder="e.g. 3" />
                                        </div>
                                        <div>
                                            <Label htmlFor="baths">Bathrooms</Label>
                                            <Input type="number" id="baths" {...register("baths")} placeholder="e.g. 2" />
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="isPlot" checked={isPlot} onCheckedChange={(c) => setIsPlot(!!c)} />
                                            <Label htmlFor="isPlot">Is Plot?</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="isShop" checked={isShop} onCheckedChange={(c) => setIsShop(!!c)} />
                                            <Label htmlFor="isShop">Is Shop?</Label>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="features">Features (comma separated)</Label>
                                        <Textarea id="features" {...register("features")} placeholder="e.g. Park View, Corner Plot, 24/7 Security" />
                                    </div>

                                    <div>
                                        <Label>Image</Label>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2">
                                                <Input id="image" {...register("image", { required: true })} placeholder="Image URL or Upload" />
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    id="file-upload"
                                                    onChange={async (e) => {
                                                        const file = e.target.files?.[0];
                                                        if (!file) return;

                                                        const formData = new FormData();
                                                        formData.append('image', file);

                                                        try {
                                                            toast.info("Uploading image...");
                                                            const baseUrl = import.meta.env.VITE_API_URL || '';
                                                            const res = await fetch(`${baseUrl}/api/upload`, {
                                                                method: 'POST',
                                                                body: formData,
                                                            });
                                                            if (!res.ok) throw new Error("Upload failed");
                                                            const data = await res.json();
                                                            // Provide full path if backend returns relative
                                                            // Since we proxy /api, but static files are at /uploads
                                                            // We might need to ensure the proxy handles /uploads too or backend returns correct relative path
                                                            // backend returns /uploads/filename. 
                                                            // We can use it directly if we proxy /uploads or if we use relative.
                                                            // Let's assume proxy needs access to /uploads. 
                                                            // Ideally backend should return /api/uploads/filename if we want to route through api, or we just add /uploads to proxy.
                                                            // For now, let's just use the returned path.
                                                            setValue("image", data.imageUrl);
                                                            toast.success("Image uploaded!");
                                                        } catch (error) {
                                                            console.error(error);
                                                            toast.error("Upload failed");
                                                        }
                                                    }}
                                                />
                                                <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                                                    Upload
                                                </Button>
                                            </div>
                                            {watch("image") && (
                                                <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                                                    <img src={watch("image")} alt="Preview" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea id="description" {...register("description", { required: true })} placeholder="Property details..." />
                                    </div>

                                    <Button type="submit" className="w-full">Add Property</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* List Section */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Existing Listings ({properties.length})</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div className="space-y-4 max-h-[800px] overflow-y-auto">
                                        {properties.length === 0 && <p className="text-muted-foreground">No properties found. Add one!</p>}
                                        {properties.map((property) => (
                                            <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
                                                <div className="flex gap-4">
                                                    {property.image && (
                                                        <img src={property.image} alt={property.title} className="w-16 h-16 object-cover rounded" />
                                                    )}
                                                    <div>
                                                        <h3 className="font-semibold">{property.title}</h3>
                                                        <p className="text-sm text-gray-500">{property.price} • {property.location}</p>
                                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">{property.category}</span>
                                                    </div>
                                                </div>
                                                <Button variant="destructive" size="icon" onClick={() => handleDelete(property.id)}>
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
