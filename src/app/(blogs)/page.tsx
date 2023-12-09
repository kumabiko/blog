import ContentCard from "@/components/content-card";
import { getList } from "@/lib/microcms";

export default async function Page() {
  const blogs = await getList();

  if (!blogs || blogs.length === 0) {
    return <h1>No blogs</h1>;
  }

  return (
    <ul className="flex w-full flex-col gap-4">
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
