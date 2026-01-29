import { useState, useEffect } from "react";
import { Property } from "@/data/properties";
import { toast } from "sonner";

export const useProperties = (category?: string) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const baseUrl = import.meta.env.VITE_API_URL || '';
                const url = category
                    ? `${baseUrl}/api/properties?category=${category}`
                    : `${baseUrl}/api/properties`;

                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to fetch properties');

                const data = await res.json();

                if (!Array.isArray(data)) {
                    throw new Error('Data is not an array');
                }

                // Ensure id mapping if needed (mongo _id to id)
                const mappedData = data.map((p: any) => ({
                    ...p,
                    id: p._id || p.id, // Handle both cases
                }));

                setProperties(mappedData);
            } catch (err) {
                console.error(err);
                setError('Failed to load properties');
                toast.error("Could not load properties from server");
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [category]);

    return { properties, loading, error };
};

export const useProperty = (id?: string) => {
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchProperty = async () => {
            try {
                setLoading(true);
                const baseUrl = import.meta.env.VITE_API_URL || '';
                const res = await fetch(`${baseUrl}/api/properties/${id}`);
                if (!res.ok) throw new Error('Failed to fetch property');

                const data = await res.json();
                const mappedData = { ...data, id: data._id || data.id };
                setProperty(mappedData);
            } catch (err) {
                console.error(err);
                setError('Failed to load property');
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    return { property, loading, error };
};
