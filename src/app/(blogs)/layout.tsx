import CategoryNavLink from "@/components/category-nav-link";
import { getCategoryList } from "@/lib/microcms";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategoryList();
  return (
    <section>
      <div className="hidden-scrollbar flex gap-2 overflow-x-auto whitespace-nowrap p-4">
        <CategoryNavLink href={"/"} name="すべて" />
        {categories.map((category) => (
          <CategoryNavLink
            key={category.id}
            href={`/category/${category.id}`}
            name={category.name}
          />
        ))}
      </div>
      {children}
    </section>
  );
}
