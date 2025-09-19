'use client';

import React from "react";
import { Image } from "@heroui/react";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import type { NewsItem } from "@/app/services/markdownService";

interface NewsListUIProps {
  newsList: NewsItem[];
}

const NewsListUI: React.FC<NewsListUIProps> = ({ newsList }) => {
  // 渲染UI
  if (newsList.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">暂无新闻</h2>
        <p className="text-gray-500">请在content目录下添加markdown文件</p>
      </div>
    );
  }

  return (
    <>
      <div className="md:flex gap-10 shadow-md rounded-lg bg-white overflow-hidden">
        <div className="md:max-w-[50%] w-[50%]">
          <Link href={`/news/${newsList[0].id}`}>
            <Image
              src={newsList[0].imageUrl}
              alt={newsList[0].title}
              classNames={{
                img: "h-70 w-full object-contain",
                wrapper: "h-full w-full !max-w-full",
              }}
            />
          </Link>
        </div>
        <div className="p-10">
          <h1 className="text-3xl font-bold text-gray-600 mb-4">
            <Link href={`/news/${newsList[0].id}`}>{newsList[0].title}</Link>
          </h1>
          <p className="text-sm text-gray-500 mb-4">{newsList[0].date}</p>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {newsList[0].summary}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {newsList.slice(1).map((news: NewsItem) => (
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
                    img: "transition-transform duration-500 hover:scale-105 content-cover",
                  }}
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500 transition-colors">
                  {news.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary line-clamp-2">
                {news.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{news.summary}</p>
              <div className="flex justify-end">
                <span className="text-primary font-medium flex items-center">
                  阅读更多
                  <ChevronsRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NewsListUI;