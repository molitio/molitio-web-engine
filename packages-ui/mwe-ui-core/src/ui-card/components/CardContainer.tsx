import { ReactNode } from 'react';

type CardContainerProps = {
    children: ReactNode;
    columns?: number;
    gap?: string;
    title?: string;
};

const columnClasses: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
};

export default function CardContainer({ children, columns = 3, gap = 'gap-4', title }: CardContainerProps) {
    const colClass = columnClasses[columns] || 'md:grid-cols-3';
    
    return (
        <section>
            {title && <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>}
            <div className={`grid grid-cols-1 ${colClass} ${gap}`}>{children}</div>
        </section>
    );
}
