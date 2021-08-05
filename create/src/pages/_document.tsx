/* eslint-disable @next/next/no-sync-scripts */
import * as React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script data-webpack="home" src="http://localhost:3000/_next/static/chunks/remoteEntry.js" />
          <script data-webpack="create" src="http://localhost:3001/_next/static/chunks/remoteEntry.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
