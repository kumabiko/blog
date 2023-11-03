import { notFound } from "next/navigation";

import ContentCard from "@/components/content-card";
import { getCategoryList, getList } from "@/lib/microcms";

export async function generateStaticParams() {
  const categories = await getCategoryList();

  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}

export default async function Page({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  console.log("categoryId", categoryId);
  const blogs = await getList({ filters: `category[equals]${categoryId}` });

  if (!blogs) {
    notFound();
  }
  return (
    <ul className="flex w-full flex-col gap-4 px-4">
      {blogs.map(({ id, title, eyecatch, createdAt, revisedAt, category }) => {
        return (
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
        );
      })}
    </ul>
  );
}
