import * as React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(
  () => {
    return import("home/Header").then((mod) => mod.Header);
  },
  { ssr: false },
);

export default function Create() {
  return (
    <>
      <Header />

      <main>Create page</main>
    </>
  );
}

Create.getInitialProps = async () => {
  return {};
};
