import { useEffect, useRef, useState } from "react";
import { useSuppliers } from "../../context/suppliers";

export const SupplierSearch = () => {
    const { refresh } = useSuppliers();
    const [query, setQuery] = useState("");
    const timerRef = useRef<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (timerRef.current !== null)
            clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => refresh(value),
            300);
    };

    useEffect(() => () => {
        if (timerRef.current !== null)
            clearTimeout(timerRef.current);
    }, []);

    return (
        <section className="supplier-search">
            <input
                type="text"
                placeholder="Search suppliers"
                value={query}
                onChange={handleChange}
            />
        </section>
    );
};
