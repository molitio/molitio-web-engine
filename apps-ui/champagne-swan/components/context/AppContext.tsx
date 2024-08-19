import React from "react";
import { AppContextInteractive } from "../common";
import { AuthContext } from "./types";

const AppContext = React.createContext<AppContextInteractive & AuthContext>({
  interactive: { navBarExpanded: false, setNavBarExpanded: undefined },
  authContext: {},
});
export default AppContext;
