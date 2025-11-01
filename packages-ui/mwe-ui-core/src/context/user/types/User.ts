export type User = {
    id: number;
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
    accessToken: string;
};

export type UserRegister = Omit<User, 'id' | 'accessToken'>;

export type UserLogin = Omit<User, 'confirmPassword' | 'fullname' | 'id' | 'accessToken'>;

export type AuthenticatedUser = Omit<User, 'confirmPassword' | 'password'>;

export type UserState = {
    loggedIn: boolean;
};

export type UserReducerState = {
    authenticatedUser?: AuthenticatedUser;
    user: UserState;
};
