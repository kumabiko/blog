import { notFound } from "next/navigation";

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

export type Information = {
  url: string;
  siteName: string;
  description: string;
  siteThumbnail?: string;
  copyright: string;
  profileName: string;
  profileDescription: string;
  profileImage?: MicroCMSImage;
  twitterLink?: string;
  githubLink?: string;
} & MicroCMSDate;

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: "blogs",
      queries,
      customRequestInit: {
        next: { tags: ["blogs"] },
      },
    })
    .catch(notFound);

  return listData;
};

// カテゴリ一覧を取得
export const getCategoryList = async () => {
  const listData = await client
    .getList<Category>({
      endpoint: "categories",
      customRequestInit: {
        next: { tags: ["categories"] },
      },
    })
    .catch(notFound);

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: "blogs",
      contentId,
      queries,
      customRequestInit: {
        next: { tags: ["blogs"] },
      },
    })
    .catch(notFound);

  return detailData;
};

// 基本情報を取得
export const getInformation = async () => {
  const objectData = await client
    .getObject<Information>({
      endpoint: "information",
      customRequestInit: {
        next: { tags: ["information"] },
      },
    })
    .catch(notFound);

  return objectData;
};
