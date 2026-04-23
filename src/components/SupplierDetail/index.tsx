import { ComplianceIcon } from "../ComplianceIcon";
import { Pill } from "../Pill";
import { formatDate } from "../../utils";
import "./SupplierDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSuppliers } from "../../context/suppliers";

export const SupplierDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { suppliers } = useSuppliers();
    const supplier = suppliers.find((s) => s.id === id);

    if (!supplier) {
        return <div>Supplier not found</div>;
    }

    return (
        <section className="supplier-details">
            <div>
                <h2 className="supplier-name">{supplier.name} {ComplianceIcon[supplier.complianceStatus]}</h2>
                <p className="supplier-country">{supplier.country}</p>
                <p className="supplier-categories">{supplier.categories.map((category) => <Pill key={category}>{category}</Pill>)}</p>
                <p className="supplier-registration-number">{supplier.registrationNumber}</p>
                <p className="supplier-created-at">{formatDate(supplier.createdAt)}</p>
            </div>
            <div>
                <button onClick={() => navigate("/")}>Back</button>
            </div>
        </section>
    );
};