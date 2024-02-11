import { LIMIT } from "@/constants";
import { getList } from "@/lib/microcms";

import { BlogList } from "./_components/blog-list";
import Pagination from "./_components/pagination";

type Props = {
  searchParams: {
    page?: string;
    query?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const current = parseInt(searchParams.page || "1", 10);

  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    q: searchParams.query,
  });

  return (
    <>
      <BlogList blogs={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
