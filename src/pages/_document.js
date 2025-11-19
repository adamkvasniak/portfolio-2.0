import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Your custom logo as favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* App icons for mobile */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Manifest (optional) */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
