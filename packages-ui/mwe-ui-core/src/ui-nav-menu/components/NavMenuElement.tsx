export type NavElementProps = {
    label: string;
};

export default function NavElement({ label }: NavElementProps) {
    return (
        <div className="btn">
            <li>{label}</li>
        </div>
    );
}
