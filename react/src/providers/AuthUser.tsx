import React, { useState } from "react";

export interface AuthUser {
  uid: string
  client: string
  'access-token': string
}
interface AuthUserContext {
  user?: AuthUser
  signIn: (user: AuthUser, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}

interface Props {
  children: React.ReactNode
}

const AuthUserContext = React.createContext<AuthUserContext>({} as AuthUserContext);

export const useAuthUserContext = (): AuthUserContext => {
  return React.useContext<AuthUserContext>(AuthUserContext);
}

export const AuthUserProvider = (props: Props) => {
  const [user, setUser] = useState<AuthUser>();

  const signIn = (authUser: AuthUser, callback: () => void) => {
    setUser(authUser);
    callback();
  }

  const signOut = (callback: () => void) => {
    setUser(undefined);
    callback();
  }

  const value: AuthUserContext = { user, signIn, signOut };

  return (
    <AuthUserContext.Provider value={value}>
      {props.children}
    </AuthUserContext.Provider>
  );
}
