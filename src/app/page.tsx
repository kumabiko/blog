import Link from "next/link";

import { getList } from "@/libs/microcms";

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul className="flex w-full flex-col gap-1">
        {contents.map((post) => {
          return (
            <li
              key={post.id}
              className="w-full rounded-lg border bg-card p-2 text-card-foreground shadow-sm"
            >
              <Link href={`/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
