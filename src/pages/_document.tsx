import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

function AppHead() {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
    </Head>
  );
}
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <AppHead />

        <title>Chris Rocha Máquinas</title>
        <meta
          name="description"
          content="Loja online Chris Rocha Máquinas. Compre máquinas de costura das melhores marcas do marcado."
        />

        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
