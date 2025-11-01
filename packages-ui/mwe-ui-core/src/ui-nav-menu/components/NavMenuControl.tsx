export type NavMenuControlProps = {
    onClick: () => void;
};

export default function NavMenuControl({ onClick }: NavMenuControlProps) {
    return (
        <button onClick={onClick} className="btn btn-ghost rounded-btn primary md:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        </button>
    );
}
