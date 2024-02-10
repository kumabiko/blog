import { getList } from "@/lib/microcms";

import { BlogList } from "../_components/blog-list";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    q: searchParams.q,
  });

  return <BlogList blogs={data.contents} />;
}
