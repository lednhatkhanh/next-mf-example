import * as React from "react";
import dynamic from "next/dynamic";
import { CreateForm } from "../components";

const Header = dynamic<{}>(() => window.home.get("./Header").then(factory => factory().Header), { ssr: false });
const Footer = dynamic<{}>(() => window.home.get("./Footer").then(factory => factory().Footer), { ssr: false });

export default function IndexPage() {
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    async function loadJson() {
      const testJson = await window.home.get("./test").then(factory => factory());
      console.log(testJson);
    }

    loadJson();
  }, []);

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
