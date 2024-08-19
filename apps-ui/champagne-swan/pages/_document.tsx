import { Html, Head, Main, NextScript } from "next/document";
import emailjs from "@emailjs/browser";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fahkwang&family=Lato:ital,wght@0,100;0,400;1,300&display=swap"
          rel="stylesheet"
        />
        <script
          async
          /* nonce={nonce} */
          /* strategy="beforeInteractive" */
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />
        <script
          /* nonce={nonce} */
          id="emailClient"
          /*       strategy="beforeInteractive" */
          async
          onLoad={() =>
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_API_KEY ?? "")
          }
        />
        <script
          async
          src="https://r3.minicrm.hu/api/loader.js?60823-1y8vh5dekw08fsfrhd1i0v01i33zp8"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
