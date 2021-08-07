import * as React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { FilterInput, Header, PostList } from "../components";
import { Post } from "../types";

type CreateFormProps = {
  onSubmit?: (data: { title: string; content: string }) => void;
};

const CreateForm = dynamic<CreateFormProps>(
  () => window["create"].get("./CreateForm").then(factory => factory().CreateForm),
  {
    ssr: false,
  },
);

export default function Home() {
  const [posts, setPosts] = React.useState<Post[]>([]);

  function handleSubmit(newPost: { title: string; content: string }) {
    setPosts(current => [...current, newPost]);
  }

  function handleDelete(title: string) {
    setPosts(current => current.filter(filtering => filtering.title !== title));
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

        <FilterInput />

        <PostList onDelete={handleDelete} posts={posts} />
      </main>
    </>
  );
}
