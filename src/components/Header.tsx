import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-10 py-5">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Blog</Link>
        </h1>
      </div>
    </header>
  );
}
