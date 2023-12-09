import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDetail, getList } from "@/lib/microcms";
import parse from "html-react-parser";

export async function generateStaticParams() {
  const blogs = await getList();

  const paths = blogs.map((blog) => {
    return {
      postId: blog.id,
    };
  });

  return [...paths];
}

type Props = {
  params: { postId: string };
};

export async function generateMetadata({
  params: { postId },
}: Props): Promise<Metadata> {
  const post = await getDetail(postId);
  return { title: post.title };
}

export default async function StaticDetailPage({ params: { postId } }: Props) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <h1>{post.title}</h1>
      <article className="prose dark:prose-invert">
        {parse(post.content)}
      </article>
    </div>
  );
}
