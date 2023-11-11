import { ImageResponse } from "next/server";

import { getDetail } from "@/lib/microcms";

/** ImageResponse対応 */
export const runtime = "edge";
/** 有効期間 */
export const revalidate = 10;

/** 13.3.0現在ここを動的にはできない */
export const alt = "記事のアイキャッチ画像";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: { postId: string };
};

export default async function og({ params: { postId } }: Props) {
  const post = await getDetail(postId);
  if (post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 64,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {post.title}
        </div>
      ),
    );
  } else {
    return new Response("Not Found", { status: 404 });
  }
}
