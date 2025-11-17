import React from 'react';

export default function PageSection({ children }: React.PropsWithChildren) {
    return (
        <section className="inline mb-gutter-bottom">
            <div className="w-10/12 xl:w-8/12 mx-auto">{children} </div>
        </section>
    );
}
