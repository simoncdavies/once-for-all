import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SupplierForm } from "./components/SupplierForm";
import { SupplierSearch } from "./components/SupplierSearch";
import { SuppliersList } from "./components/SuppliersList";
import { useSuppliers } from "./context/suppliers";
import { SupplierDetail } from "./components/SupplierDetail";

export function App() {
  const { suppliers, loading, error } = useSuppliers();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!loading) setHasLoaded(true);
  }, [loading]);

  return (
    <main>
      <h1>Supplier Directory</h1>

      <Routes>
        <Route path="/" element={<>{loading && <p>Loading...</p>}
          {error && <p role="alert">Couldn't load suppliers: {error}. Is the mock API running? (<code>npm run mock-api</code>)</p>}
          {hasLoaded && (
            <>
              <SupplierSearch />
              {loading ? <p>Searching...</p> : <SuppliersList
                suppliers={suppliers} />}
              <SupplierForm />
            </>
          )}</>} />
        <Route path="/suppliers/:id" element={<SupplierDetail />} />
      </Routes>
    </main>
  );
}
