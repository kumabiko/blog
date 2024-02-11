import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDetail } from "@/lib/microcms";
import parse, { HTMLReactParserOptions } from "html-react-parser";

type Props = {
  params: { postId: string };
};

export async function generateMetadata({
  params: { postId },
}: Props): Promise<Metadata> {
  const post = await getDetail(postId);
  return { title: post.title };
}

export default async function Page({ params: { postId } }: Props) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  const options: HTMLReactParserOptions = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    replace: ({ attribs, name }: any) => {
      if (!attribs || Object.keys(attribs).length === 0) return;

      // ハイドレーションエラーが生じるため、悪さをしているscriptタグを削除
      if (name === "script" && attribs.src === "//cdn.iframe.ly/embed.js") {
        return <></>;
      }
    },
  };

  return (
    <div className="flex flex-col">
      <h1>{post.title}</h1>
      <article className="prose dark:prose-invert">
        {parse(post.content, options)}
      </article>
    </div>
  );
}
