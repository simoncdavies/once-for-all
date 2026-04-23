import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { ComplianceStatus } from "../../types/supplier";
import "./ComplianceIcon.css";

export const ComplianceIcon = {
    Verified: <span className="compliance-icon compliance-icon--verified" title="Verified"><CheckCircle2 className="text-green-600" /></span>,
    Pending: <span className="compliance-icon compliance-icon--pending" title="Pending"><Clock className="text-amber-500" /></span>,
    NotVerified: <span className="compliance-icon compliance-icon--not-verified" title="Not verified"><XCircle className="text-red-600" /></span>,
} satisfies Record<ComplianceStatus[number], React.ReactNode>;
