import "./Pill.css";

export const Pill = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="pill">{children}</span>
    );
};
