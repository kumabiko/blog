import { notFound } from "next/navigation";

import { getDetail, getList } from "@/libs/microcms";
import dayjs from "dayjs";
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
    <div>
      <h1>{post.title}</h1>
      <time dateTime={post.updatedAt}>
        {dayjs(post.updatedAt).format("YYYY年MM月DD日")}
      </time>
      <article className="prose">{parse(post.content)}</article>
    </div>
  );
}
