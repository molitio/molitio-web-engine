import { AppContext } from '../../context/app-context/types/AppContext.ts';
import { DefaultApplicationContextRoot } from '../../context/DefaultApplicationContextRoot.ts';

export type AppSchemaRoutesConfig = {
    /**
     * The folder name under `src/ui-app` that will host the generated routes.
     * This is the `<app-schema-type>` referenced in the feature request.
     */
    appSchemaType: string;
    /**
     * The AppContext used as the source of truth for the route tree.
     * In the future this object can be fetched from Sanity based on `appSchemaType`.
     */
    appContext: AppContext;
};

export const appSchemaRoutesConfig: AppSchemaRoutesConfig[] = [
    {
        appSchemaType: 'mwe-client-app',
        appContext: DefaultApplicationContextRoot,
    },
];
