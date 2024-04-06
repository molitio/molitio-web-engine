import { SiteError } from '../SiteError';

export interface SiteErrorCollection {
    errors: Map<string, SiteError>;
}
