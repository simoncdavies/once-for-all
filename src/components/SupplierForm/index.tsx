import { useSuppliers } from "../../context/suppliers";
import { COUNTRIES, COMPLIANCE_STATUSES, Country, ComplianceStatus } from "../../types/supplier";
import "./SupplierForm.css";

export const SupplierForm = () => {
    const { addSupplier } = useSuppliers();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const supplier = {
            name: formData.get("name") as string,
            registrationNumber: formData.get("registrationNumber") as string,
            country: formData.get("country") as Country,
            categories: (formData.get("categories") as string).split(",").map(c => c.trim()).filter(Boolean),
            complianceStatus: formData.get("complianceStatus") as ComplianceStatus,
            createdAt: new Date().toISOString(),
            id: Math.random().toString(36).substring(2, 11),
        };

        addSupplier(supplier);
    };

    return (
        <form className="supplier-form" onSubmit={handleSubmit}>
            <div className="supplier-form__row">
                <label htmlFor="name" className=" supplier-form__label">Name</label>
                <input type="text" id="name" name="name" className="supplier-form__input" />
            </div>
            <div className="supplier-form__row">
                <label htmlFor="registrationNumber" className="supplier-form__label">Registration Number</label>
                <input type="text" id="registrationNumber" name="registrationNumber" className="supplier-form__input" />
            </div>
            <div className="supplier-form__row">
                <label htmlFor="country" className="supplier-form__label">Country</label>
                <select id="country" name="country" className="supplier-form__select">
                    {COUNTRIES.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>
            <div className="supplier-form__row">
                <label htmlFor="categories" className="supplier-form__label">Categories</label>
                <input type="text" id="categories" name="categories" className="supplier-form__input" />
            </div>
            <div className="supplier-form__row">
                <label htmlFor="complianceStatus" className="supplier-form__label">Compliance Status</label>
                <select id="complianceStatus" name="complianceStatus" className="supplier-form__select">
                    {COMPLIANCE_STATUSES.map((status) => (
                        <option key={status} value={status}>
                            {status === "NotVerified" ? "Not Verified" : status}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="supplier-form__submit">Add Supplier</button>
        </form>
    );
};