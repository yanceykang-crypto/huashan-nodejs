import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNewsItemById } from "@/app/services/markdownService";
import NewsDetailUI from "@/app/news/components/NewsDetailUI";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary?: string;
  content: string;
  author?: string;
  category?: string;
  tags?: string[];
}

// 为新闻详情页生成动态元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const news: NewsItem | undefined = await getNewsItemById(id);

  if (!news) {
    return {
      title: "新闻不存在 - 化善智能装备制造",
    };
  }

  return {
    title: `${news.title} - 化善智能装备制造`,
    description: news.summary,
  };
}

// 主服务器组件，负责获取数据
const NewsDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  // params是一个Promise，需要await
  const { id } = await params;
  const news: NewsItem | undefined = await getNewsItemById(id);

  if (!news) {
    notFound();
  }

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow w-full bg-gray-50 px-3 md:px-0">
        <div className="max-w-4xl m-auto py-16">
          {/* 渲染客户端UI组件 */}
          <NewsDetailUI news={news} />
        </div>
      </main>
    </div>
  );
};

export default NewsDetail;
