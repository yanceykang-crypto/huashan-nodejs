"use client";

import React from "react";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary?: string;
  content: string;
  author?: string;
  category?: string;
}

interface NewsDetailUIProps {
  news: NewsItem;
}

const NewsDetailUI: React.FC<NewsDetailUIProps> = ({ news }) => {
  return (
    <>
      <div className="mb-8">
        <Link
          href="/news"
          className="text-primary hover:text-primary-600 flex items-center w-fit"
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {news.title}
        </h1>
        <div className="mb-6">
          <span className="text-sm text-gray-500">{news.date}</span>
        </div>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </div>
    </>
  );
};

export default NewsDetailUI;
