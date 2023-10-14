import Link from "next/link";

import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-4">
      <h1 className="text-2xl font-extrabold">
        <Link href="/">Blog</Link>
      </h1>
      <ModeToggle />
    </header>
  );
}
