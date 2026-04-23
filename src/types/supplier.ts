export const COUNTRIES = ["UK", "FR", "ES", "DE", "IE"] as const;
export type Country = typeof COUNTRIES[number];

export const COMPLIANCE_STATUSES = ["Verified", "Pending", "NotVerified"] as const;
export type ComplianceStatus = typeof COMPLIANCE_STATUSES[number];

export type Supplier = {
  id: string;
  name: string;
  registrationNumber: string;
  country: Country;
  categories: string[];
  complianceStatus: ComplianceStatus;
  createdAt: string;
};

export type NewSupplier = Omit<Supplier, "id" | "createdAt">;
