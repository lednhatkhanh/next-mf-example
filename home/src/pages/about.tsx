import Head from "next/head";
import * as React from "react";
import { Header, Footer } from "../components";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Header />

      <main>
        <div>About page</div>
      </main>

      <Footer />
    </>
  );
}
