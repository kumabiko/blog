import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: Category;
} & MicroCMSDate;

export type Category = {
  id: string;
  name: string;
} & MicroCMSDate;

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
  customFetch: (input, init) => {
    if (typeof input === "string") {
      const newInput = new URL(input);
      const time = new Date();
      newInput.searchParams.set("cacheclearparam", `${time.getMinutes()}`);
      return fetch(newInput.href, init);
    }
    return fetch(input, init);
  },
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData.contents;
};

// カテゴリ一覧を取得
export const getCategoryList = async () => {
  const listData = await client.getList<Category>({
    endpoint: "categories",
  });

  return listData.contents;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};
