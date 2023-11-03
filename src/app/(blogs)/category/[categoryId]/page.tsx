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
  const blogs = await getList({ filters: `category[equals]${categoryId}` });

  if (!blogs || blogs.length === 0) {
    return <h1>No blogs</h1>;
  }

  return (
    <ul className="flex w-full flex-col gap-4 px-4">
      {blogs.map(({ id, title, eyecatch, createdAt, revisedAt, category }) => (
        <li key={id} className="w-full">
          <ContentCard
            title={title}
            eyecatch={eyecatch}
            createdAt={createdAt}
            revisedAt={revisedAt}
            name={category?.name}
            to={`blog/${id}`}
          />
        </li>
      ))}
    </ul>
  );
}
