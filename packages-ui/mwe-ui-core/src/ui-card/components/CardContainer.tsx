import React, { ReactNode } from 'react';

type CardContainerProps = {
    children: ReactNode;
    columns?: number;
    gap?: string;
    title?: string;
};

export default function CardContainer({ children, columns, gap, title }: CardContainerProps) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
            <div className={`grid grid-cols-1 md:grid-cols-${columns ?? 3} ${gap ?? 'gap-4'}`}>{children}</div>
        </section>
    );
}
