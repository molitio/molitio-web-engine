export type LogoProps = {
    src: string,
    alt: string,
    width?: number,
    height?: number
};

export default function Logo({ src, alt, width, height }: LogoProps) {
    return <img src={src} alt={alt} className={`h-${height ? height.toString() : 10} w-${width ? width.toString() : 'auto'}`} />;
}