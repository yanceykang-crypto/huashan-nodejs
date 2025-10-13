"use server";
"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// 定义新闻项的接口
export type NewsItem = {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  imageUrl?: string;
  author?: string;
  category?: string;
  tags?: string[];
  order: number;
};

// 定义产品项的接口
export type ProductItem = {
  id: string;
  title: string;
  category: string;
  cate?: string;
  price?: number;
  description: string;
  details: string;
  images: string[];
  features: string[];
  content?: string;
  detailsImages?: string[];
  order: number;
};

/**
 * 读取并解析所有markdown文件
 * @returns 解析后的项数组
 */
export async function getAllMarkdownDocs<T extends NewsItem | ProductItem>(
  dir: string
): Promise<T[]> {
  try {
    const CONTENT_DIR = path.join(process.cwd(), `content/${dir}`);

    // 检查content目录是否存在
    if (!fs.existsSync(CONTENT_DIR)) {
      console.warn(`Content directory ${CONTENT_DIR} does not exist`);
      return [];
    }

    // 读取content目录下的所有markdown文件
    const fileNames = fs
      .readdirSync(CONTENT_DIR)
      .filter((fileName) => fileName.endsWith(".md"));
    // 处理每个文件
    const items = await Promise.all(
      fileNames.map(async (fileName) => {
        const fullPath = path.join(CONTENT_DIR, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // 解析front-matter和内容
        const matterResult = matter(fileContents);

        // 将markdown转换为HTML
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // 生成ID（使用文件名去掉.md后缀）
        const id = fileName.replace(/\.md$/, "");

        // 根据目录类型提取相应的数据
        if (dir === "news") {
          const {
            title,
            date,
            summary,
            imageUrl,
            author,
            category,
            tags,
            detailsImages,
            order,
          } = matterResult.data;

          // 确保必要字段存在
          if (!title || !date) {
            console.warn(`Skipping file ${fileName}: missing required fields`);
            return null;
          }

          return {
            id,
            title: title || "",
            date: date || "",
            summary: summary || "",
            content: contentHtml || "",
            imageUrl: imageUrl || undefined,
            author: author || undefined,
            category: category || undefined,
            tags: tags || undefined,
            order: order || 0,
            detailsImages: detailsImages || [],
          } as unknown as T;
        } else if (dir === "products") {
          const {
            title,
            category,
            price,
            cate,
            description,
            details,
            images,
            features,
            content,
            order,
            detailsImages,
          } = matterResult.data;

          // 确保必要字段存在
          if (!title || !category || !images) {
            console.warn(`Skipping file ${fileName}: missing required fields`);
            return null;
          }

          return {
            id,
            title: title || "",
            category: category || "",
            price: price || undefined,
            cate: cate || "",
            description: description || "",
            details: details || "",
            images: images || [],
            features: features || [],
            order: order || 0,
            content: content || contentHtml,
            detailsImages: detailsImages || [],
          } as T;
        }

        return null;
      })
    );

    // 过滤掉null值，并根据不同类型排序
    const validItems = items.filter((item) => item !== null);

    // 新闻按日期降序排序
    if (dir === "news") {
      return validItems.sort(
        (a, b) =>
          new Date((b as NewsItem).date).getTime() -
          new Date((a as NewsItem).date).getTime()
      );
    } else {
      return validItems.sort((a, b) => a.order - b.order);
    }
  } catch (error) {
    console.error(`Error reading ${dir} items:`, error);
    return [];
  }
}

/**
 * 根据ID获取单个新闻项
 * @param id - 新闻项ID
 * @returns 新闻项或undefined
 */
export async function getNewsItemById(
  id: string
): Promise<NewsItem | undefined> {
  try {
    const allNewsItems = await getAllMarkdownDocs<NewsItem>("news");
    return allNewsItems.find((item) => item.id === id);
  } catch (error) {
    console.error(`Error getting news item with id ${id}:`, error);
    return undefined;
  }
}

/**
 * 获取所有产品项
 * @returns 产品项数组
 */
export async function getAllProducts(): Promise<ProductItem[]> {
  try {
    return await getAllMarkdownDocs<ProductItem>("products");
  } catch (error) {
    console.error("Error getting all products:", error);
    return [];
  }
}

/**
 * 根据ID获取单个产品项
 * @param id - 产品项ID
 * @returns 产品项或undefined
 */
export async function getProductById(
  id: string
): Promise<ProductItem | undefined> {
  try {
    const allProducts = await getAllMarkdownDocs<ProductItem>("products");
    return allProducts.find((item) => item.id === id);
  } catch (error) {
    console.error(`Error getting product with id ${id}:`, error);
    return undefined;
  }
}

/**
 * 这个函数是为了向后兼容而保留的
 */
export async function getProductItem(
  id: string
): Promise<NewsItem | undefined> {
  try {
    const allNewsItems = await getAllMarkdownDocs<NewsItem>("products");
    return allNewsItems.find((item) => item.id === id);
  } catch (error) {
    console.error(`Error getting news item with id ${id}:`, error);
    return undefined;
  }
}
