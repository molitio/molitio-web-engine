import { SanityClient } from '@sanity/client';
import { SupportedLocale } from '../../../ui-app';
import { ComponentRegistry } from './ComponentRegistry';

export type ClientAppRouterContext = {
    client: SanityClient;
    locale: SupportedLocale;
    componentRegistry: ComponentRegistry;
};
