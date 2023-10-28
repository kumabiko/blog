import { notFound } from "next/navigation";

import { getDetail, getList } from "@/lib/microcms";
import parse from "html-react-parser";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col px-4">
      <h1>{post.title}</h1>
      <article className="prose dark:prose-invert">
        {parse(post.content)}
      </article>
    </div>
  );
}
