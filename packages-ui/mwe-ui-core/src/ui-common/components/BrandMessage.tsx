export type BrandMessageProps = {
    text: string;
    font?: string;
    textSize?: 'sm' | 'base' | 'lg';
    bold?: boolean;
    textColorClass?: string;
};

const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
};

export default function BrandMessage({ 
    text, 
    font = 'brand', 
    textSize = 'lg', 
    bold = true, 
    textColorClass = 'text-gray-800'
}: BrandMessageProps) {
    return (
        <span className={`font-${font} ${sizeClasses[textSize]} ${bold ? 'font-bold' : ''} ${textColorClass}`}>
            {text}
        </span>
    );
}