import ContentCard from "@/components/content-card";
import { getList } from "@/lib/microcms";

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  console.log(contents);

  return (
    <ul className="hidden-scrollbar flex w-full gap-4 overflow-auto px-4">
      {contents.map(({ id, title, eyecatch, createdAt, revisedAt }) => {
        return (
          <li key={id}>
            <ContentCard
              title={title}
              eyecatch={eyecatch}
              createdAt={createdAt}
              revisedAt={revisedAt}
              to={`/${id}`}
            />
          </li>
        );
      })}
    </ul>
  );
}
