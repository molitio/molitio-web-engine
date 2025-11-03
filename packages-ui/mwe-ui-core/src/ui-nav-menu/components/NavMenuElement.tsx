export type NavElementProps = {
    key: React.Key;
};

export default function NavElement({ key }: NavElementProps) {
    return (
        <div className="btn">
            <li key={key}></li>
        </div>
    );
}
