import { FC } from "react";
import { NewsList, NewsItem } from "@/app/config/news";
import { Image } from "@heroui/react";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

const NewsPage: FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow w-full  px-3 md:px-0">
        <div className="w-full flex flex-col items-center justify-center h-100 text-center mb-12 bg-[url(/images/newsbg.png)]">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 -mt-20">
            新闻中心
          </h1>
          <p className="text-xl text-primary">NEWS CENTER</p>
        </div>
        <div className="max-w-7xl -mt-60  mx-auto py-16">
          <div className="md:flex gap-10 shadow-md rounded-lg bg-white overflow-hidden">
            <div className="md:max-w-[40%]">
              <Link href={`/news/${NewsList[0].id}`}>
                <Image src={NewsList[0].imageUrl} alt="newsbg" />
              </Link>
            </div>
            <div className="p-10">
              <h1 className="text-3xl font-bold text-gray-600 mb-4">
                <Link href={`/news/${NewsList[0].id}`}>
                  {NewsList[0].title}
                </Link>
              </h1>
              <p className="text-sm text-gray-500 mb-4">{NewsList[0].date}</p>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {NewsList[0].summary}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {NewsList.slice(1).map((news: NewsItem) => (
              <Link
                href={`/news/${news.id}`}
                key={news.id}
                className="bg-white group rounded-lg shadow-md overflow-hidden transition-transform duration-300 border-b-3 border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-1"
              >
                {news.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover"
                      classNames={{
                        img: "transition-transform duration-500 hover:scale-105",
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500transition-colors">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800  group-hover:text-primary line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  <div className="flex justify-end">
                    <span className="text-primary font-medium flex items-center">
                      阅读更多
                      <ChevronsRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
