import { getAllMarkdownDocs, NewsItem } from "@/app/services/markdownService";
import NewsListUI from "./components/NewsListUI";

// 主服务器组件，负责获取数据
const NewsPage = async () => {
  // 使用markdown服务获取所有新闻项
  const newsList = (await getAllMarkdownDocs("news")) as NewsItem[];

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow w-full px-3 md:px-0">
        <div className="w-full flex flex-col items-center justify-center h-100 text-center mb-12 bg-[url(/images/newsbg.png)]">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 -mt-20">
            新闻中心
          </h1>
          <p className="text-xl text-primary">NEWS CENTER</p>
        </div>
        <div className="max-w-7xl -mt-60 mx-auto py-16">
          {/* 渲染客户端UI组件 */}
          <NewsListUI newsList={newsList} />
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
