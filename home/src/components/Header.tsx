import * as React from "react";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className="flex items-center px-6 py-3 text-lg shadow-md">
        <Link href="/">
          <a className="font-bold">Blog</a>
        </Link>

        <div className="flex-1"></div>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/create">
          <a>Create</a>
        </Link>
      </header>
    </>
  );
}
