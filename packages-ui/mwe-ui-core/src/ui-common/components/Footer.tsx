export type FooterProps = {
    licenceText?: string;
};

export default function Footer({ licenceText }: FooterProps) {
    return (
        <footer className="footer bg-gray-200 py-4 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto px-4">
                <p className="text-center">{licenceText}</p>
            </div>
        </footer>
    );
}
