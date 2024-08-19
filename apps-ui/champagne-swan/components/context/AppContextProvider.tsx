import React from "react";
import AppContext from "./AppContext";
import { signIn, signOut } from "../utils";

const AppContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const [extendNavBar, setExtendNavBar] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        interactive: {
          navBarExpanded: extendNavBar,
          setNavBarExpanded: setExtendNavBar,
        },
        authContext: {
          authEnabled: false,
          signIn: signIn,
          signOut: signOut,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
