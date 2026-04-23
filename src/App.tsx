// use fetch to get suppliers from api, .env file has API_URL
import { useEffect, useState } from "react";
import { Supplier } from "./types/supplier";

export function App() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  useEffect(() => {
    fetch(`${process.env.API_URL}/suppliers`)
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, []);
  return (
    <main>
      <h1>Supplier Directory</h1>
      <p>Start here. See README.md for the brief.</p>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id}>{supplier.name}</li>
        ))}
      </ul>
    </main>
  );
}
