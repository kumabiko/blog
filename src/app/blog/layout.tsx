import ChipLink from "@/components/chip-link";
import { getCategoryList } from "@/lib/microcms";

import { SearchField } from "./_components/search-field";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getCategoryList();
  const { contents: categories } = data;
  return (
    <section>
      <SearchField placeholder="検索" />
      <div className="hidden-scrollbar flex gap-2 overflow-x-auto whitespace-nowrap p-4">
        <ChipLink href={"/blog"} name="すべて" />
        {categories.map((category) => (
          <ChipLink
            key={category.id}
            href={`/blog/category/${category.id}`}
            name={category.name}
          />
        ))}
      </div>
      {children}
    </section>
  );
}
