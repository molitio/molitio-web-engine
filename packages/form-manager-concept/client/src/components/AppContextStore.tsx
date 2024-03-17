import React from "react";
import { Provider } from "react-redux";
import { appStore } from "../context/store";

const AppContextStoreProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return <Provider store={appStore}>{children}</Provider>;
};

export default AppContextStoreProvider;
