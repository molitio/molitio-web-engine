export type AuthContext = {
  authContext: {
    authEnabled?: boolean;
    signIn?: () => Promise<void>;
    signOut?: () => Promise<void>;
  };
};
