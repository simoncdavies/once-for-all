import { createContext, useContext, useEffect, useState, ReactNode }
    from "react";
import { Supplier } from "../types/supplier";

type SuppliersContextValue = {
    suppliers: Supplier[];
    loading: boolean;
    error: string | null;
    addSupplier: (s: Supplier) => void;
    refresh: (q?: string) => Promise<void>;
};

const SuppliersContext = createContext<SuppliersContextValue | null>(null);

export function SuppliersProvider({ children }: {
    children:
    ReactNode
}) {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function refresh(q?: string) {
        setLoading(true);
        setError(null);
        try {
            const url = q ? `${process.env.API_URL}/suppliers?q=${encodeURIComponent(q)}` : `${process.env.API_URL}/suppliers`;

            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            setSuppliers(await res.json());
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { refresh(); }, []);

    const addSupplier = (s: Supplier) => setSuppliers((prev) =>
        [...prev, s]);

    return (
        <SuppliersContext.Provider value={{
            suppliers, loading, error, addSupplier, refresh
        }}>
            {children}
        </SuppliersContext.Provider>
    );
}

export function useSuppliers() {
    const ctx = useContext(SuppliersContext);
    if (!ctx) throw new Error("useSuppliers must be used within SuppliersProvider");
    return ctx;
}
