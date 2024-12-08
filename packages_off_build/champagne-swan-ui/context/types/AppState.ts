import { AuthenticatedUser } from './Authentication';

export type AuthStoreState = {
    user: {
        loggedIn: boolean;
        authenticatedUser?: AuthenticatedUser;
    };
};
