import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "../components";

const CreateForm = dynamic(
  () => {
    const mod = import("create/CreateForm").then((mod) => mod.CreateForm);
    return mod;
  },
  { ssr: false },
);

export default function Home() {
  function handleSubmit({ title, content }: { title: string; content: string }) {
    console.log(title, content);
  }

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Header />

      <main>
        <div className="flex items-center justify-center pt-40">
          <CreateForm onSubmit={handleSubmit} />
        </div>
      </main>
    </>
  );
}
