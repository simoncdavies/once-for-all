import { Supplier } from "../../types/supplier";
import "./SuppliersList.css";
import { formatDate } from "@/utils";
import { ComplianceIcon } from "../ComplianceIcon";
import { Pill } from "../Pill";
import { useNavigate } from "react-router-dom";

export const SuppliersList = ({ suppliers }: { suppliers: Supplier[] }) => {
    const navigate = useNavigate();
    return (
        <section className="supplier-list">
            {suppliers.map((supplier) => (
                <div key={supplier.id} className="supplier" onClick={() => navigate(`/suppliers/${supplier.id}`)}>
                    <h2 className="supplier-name">{supplier.name} {ComplianceIcon[supplier.complianceStatus]}</h2>
                    <p className="supplier-country">{supplier.country}</p>
                    <p className="supplier-categories">{supplier.categories.map((category) => <Pill key={category}>{category}</Pill>)}</p>
                    <p className="supplier-created-at">{formatDate(supplier.createdAt)}</p>
                </div>
            ))}
        </section>
    );
};
