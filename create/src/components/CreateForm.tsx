import * as React from "react";

type Props = {
  onSubmit?: (data: { title: string; content: string }) => void;
};

export function CreateForm({ onSubmit }: Props) {
  React.useEffect(() => {
    console.log(`Hooks work!`);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const titleInput = form.elements.namedItem("title") as HTMLInputElement;
    const contentInput = form.elements.namedItem("content") as HTMLTextAreaElement;

    const title = titleInput.value as string;
    const content = contentInput.value as string;
    onSubmit?.({ title, content });
  }

  return (
    <form className="flex flex-col w-96 gap-y-4" onSubmit={handleSubmit}>
      <h3 className="text-4xl font-medium text-center">Create post</h3>

      <label htmlFor="title" className="font-medium">
        Title
      </label>
      <input name="title" className="border border-pink-500 rounded" required />

      <label className="font-medium" htmlFor="content">
        Content
      </label>
      <textarea name="content" className="border border-pink-500 rounded" rows={5} required />

      <button
        type="submit"
        className="px-2 py-1 font-bold text-white transition duration-300 bg-pink-700 rounded hover:bg-opacity-80"
      >
        Submit
      </button>
    </form>
  );
}
