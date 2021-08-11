import * as React from "react";
import styles from "./CreateForm.module.css";

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
    <form className={styles.createForm} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Create post</h3>

      <label htmlFor="title" className={styles.label}>
        Title
      </label>
      <input name="title" className={styles.input} required />

      <label className={styles.label} htmlFor="content">
        Content
      </label>
      <textarea name="content" className={styles.input} rows={5} required />

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}
