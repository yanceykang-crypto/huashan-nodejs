import { NewsList, NewsItem } from "@/app/config/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// 为新闻详情页生成动态元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const news: NewsItem | undefined = NewsList.find((item) => item.id === id);

  if (!news) {
    return {
      title: "新闻不存在 - 华山科技",
    };
  }

  return {
    title: `${news.title} - 华山科技`,
    description: news.summary,
  };
}

// 在App Router中，page组件可以是异步函数
const NewsDetail: React.FC<{ params: Promise<{ id: string }> }> = async ({
  params,
}) => {
  // params是一个Promise，需要await
  const { id } = await params;
  const news: NewsItem | undefined = NewsList.find((item) => item.id === id);

  if (!news) {
    notFound();
  }

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow w-full bg-gray-50 px-3 md:px-0">
        <div className="max-w-4xl m-auto py-16">
          <div className="mb-8">
            <Link
              href="/news"
              className="text-blue-600 hover:text-blue-800 flex items-center w-fit"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              返回新闻列表
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <span className="text-sm text-gray-500">{news.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {news.title}
            </h1>
            <div
              className="prose max-w-none text-gray-700 [&>p]:leading-8  [&>p]:mb-4 indent-8"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsDetail;
