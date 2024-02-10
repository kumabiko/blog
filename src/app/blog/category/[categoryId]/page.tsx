import { getList } from "@/lib/microcms";

import { BlogList } from "../../_components/blog-list";

export default async function Page({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const data = await getList({ filters: `category[equals]${categoryId}` });

  return <BlogList blogs={data.contents} />;
}
