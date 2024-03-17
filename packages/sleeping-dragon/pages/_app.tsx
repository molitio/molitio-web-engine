import { GlobalStyle, Layout } from "@molitio/common-ui";
import type { AppProps } from "next/app";

function MolitioWeb({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MolitioWeb;
