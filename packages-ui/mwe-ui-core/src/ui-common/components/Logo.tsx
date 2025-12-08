export type LogoProps = {
    src: string;
    alt: string;
    widthClass?: string;
    heightClass?: string;
};

export default function Logo({ 
    src, 
    alt, 
    widthClass = 'w-auto',
    heightClass = 'h-10'
}: LogoProps) {
    return <img src={src} alt={alt} className={`${heightClass} ${widthClass}`} />;
}