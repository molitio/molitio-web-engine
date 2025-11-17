import React from 'react';
import { PageSection } from '../../ui-page';

export default function FormContainer({ children }: React.PropsWithChildren) {
    return <PageSection>{children}</PageSection>;
}
