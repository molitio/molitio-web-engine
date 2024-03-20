import React from "react";
import Header from "next/head";

const AppHeader: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return <Header>{children}</Header>;
};

export default AppHeader;
