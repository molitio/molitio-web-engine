import React from 'react';
import { PageColumn, PageColumnContainer } from '../styles';

type MultiColumnLayoutProps = {
    layoutColumns: JSX.Element[];
};

const MultiColumnLayout: React.FC<React.ReactHTMLElement<HTMLUListElement> & MultiColumnLayoutProps> = (props) => {
    const { key, layoutColumns } = props;

    const columnCollectionKey = key;

    return (
        <PageColumnContainer key={columnCollectionKey}>
            {layoutColumns.map((layoutColumn, index) => (
                <PageColumn key={index}>{layoutColumn}</PageColumn>
            ))}
        </PageColumnContainer>
    );
};

export default MultiColumnLayout;
