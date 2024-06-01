import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getDetail } from "@/lib/microcms";
import { formatFromDateString } from "@/utils/date";
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

  const { title, content, updatedAt, revisedAt } = post;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Badge variant="secondary" className="w-fit">
          <time dateTime={revisedAt ?? updatedAt}>
            {formatFromDateString(revisedAt ?? updatedAt)}
          </time>
        </Badge>
      </div>
      <article className="prose break-all dark:prose-invert">
        {parse(content, options)}
      </article>
    </div>
  );
}
