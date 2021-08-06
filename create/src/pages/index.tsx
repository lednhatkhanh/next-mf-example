import * as React from "react";
import dynamic from "next/dynamic";
import { CreateForm } from "../components";

const Header = dynamic(
  () => {
    const mod = import("home/Header").then((mod) => mod.Header);
    return mod;
  },
  { ssr: false },
);

const Footer = dynamic(
  () => {
    const mod = import("home/Footer").then((mod) => mod.Footer);
    return mod;
  },
  { ssr: false },
);

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
