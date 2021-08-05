import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "../components";

const Test = dynamic(
  () => {
    const mod = import("create/Test").then((mod) => mod.Test);
    return mod;
  },
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Header />

      <main>
        <Test />
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  return {};
};
