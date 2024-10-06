import React from 'react';

const PageSection: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <section className="inline mb-gutter-bottom">
            <div className="w-10/12 xl:w-6/12 mx-auto">{children} </div>
        </section>
    );
};

export default PageSection;
