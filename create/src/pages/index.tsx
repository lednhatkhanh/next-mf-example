import * as React from "react";
import dynamic from "next/dynamic";
import { CreateForm } from "../components";

const Header = dynamic<{}>(() => window.home.get("home/Header").then(factory => factory().Header), { ssr: false });
const Footer = dynamic<{}>(() => window.home.get("home/Footer").then(factory => factory().Footer), { ssr: false });

export default function IndexPage() {
  return (
    <>
      <Header />

      <main>
        <CreateForm />
      </main>

      <Footer />
    </>
  );
}
