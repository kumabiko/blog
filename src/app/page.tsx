import Link from "next/link";

import ContentCard from "@/components/content-card";
import { badgeVariants } from "@/components/ui/badge";
import { getCategoryList, getList } from "@/lib/microcms";

export default async function Page() {
  const blogs = await getList();
  const categories = await getCategoryList();

  if (!blogs || blogs.length === 0) {
    return <h1>No blogs</h1>;
  }

  return (
    <>
      <div className="hidden-scrollbar flex w-full gap-2 overflow-x-auto whitespace-nowrap p-4">
        {categories.map((category) => (
          <>
            <Link
              key={category.id}
              href={`/${category.id}`}
              className={badgeVariants({ variant: "outline" })}
            >
              {category.name}
            </Link>
            <Link
              key={category.id}
              href={`/${category.id}`}
              className={badgeVariants({ variant: "outline" })}
            >
              {category.name}
            </Link>
          </>
        ))}
      </div>
      <ul className="flex w-full flex-col gap-4 px-4">
        {blogs.map(
          ({ id, title, eyecatch, createdAt, revisedAt, category }) => (
            <li key={id} className="w-full">
              <ContentCard
                title={title}
                eyecatch={eyecatch}
                createdAt={createdAt}
                revisedAt={revisedAt}
                name={category?.name}
                to={`/${id}`}
              />
            </li>
          ),
        )}
      </ul>
    </>
  );
}
