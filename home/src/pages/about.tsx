import { NextPageContext } from "next";
import Head from "next/head";
import * as React from "react";
import { Header } from "../components";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <Header />

        <main>
          <div>About page</div>
        </main>
      </Head>
    </>
  );
}

About.getInitialProps = async () => {
  return {};
};
