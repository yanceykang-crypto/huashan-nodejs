"use client";

import { Button, cn, Divider, Image, Link } from "@heroui/react";
// import Banner from "../components/Banner";

import { AgentBrandConfig, SalesScope } from "@/app/config/home";
import { useState } from "react";
import Banner from "./components/Banner";
import { NewsList } from "./config/news";

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div className="font-noto-sans-sc">
      <main className="w-full">
        <Banner />
        <div className="pb-20 bg-[#f0edf1]">
          <div className="max-w-7xl m-auto px-2 md:px-0">
            <div className="md:flex sm:block justify-between items-center md:py-10 py-5">
              <div className="flex flex-col">
                <h2 className="md:text-5xl font-bold">销售范围</h2>
                <h3 className="md:text-3xl font-bold mt-2.5">Sales Scope</h3>
              </div>
              <div className="flex gap-1 md:gap-10 mt-10 md:mt-0 justify-between">
                {SalesScope.map((item, key) => {
                  return (
                    <div
                      className={`flex flex-col justify-center w-18 md:w-20 items-center cursor-pointer ${
                        active === key ? "text-primary" : "text-gray-600"
                      }`}
                      key={key}
                      onMouseEnter={() => setActive(key)}
                    >
                      {item.icon}
                      <p className="m-2 text-xs md:text-base font-bold">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex w-full">
              {SalesScope[active].images.map((item, key) => {
                return (
                  <Image
                    key={key}
                    radius="none"
                    className="h-full object-cover"
                    alt="image"
                    isZoomed
                    classNames={{
                      img: "w-full",
                      wrapper: "w-full !max-w-[33%]",
                    }}
                    src={item}
                  />
                );
              })}
            </div>
            <div className="mt-10 md:mt-20 relative">
              <div className="bg-primary w-full md:w-150 md:h-160 px-10 py-8 md:py-15">
                <h1 className="text-white text-3xl md:text-5xl font-extrabold">
                  公司宣传视频
                </h1>
                <h2 className="text-white text-xl md:text-xl font-bold mt-5">
                  Company promotional video
                </h2>
                <Divider className="bg-white h-0.5 md:h-1 my-1 md:my-5 w-20 md:w-25 md:mt-25"></Divider>
                <p className="text-white text-base md:text-2xl mt-5 md:mt-40 font-extrabold">
                  带您更深入的了解我们
                </p>
                <p className="text-white text-base mt-0 md:mt-5 font-medium md:font-extrabold">
                  Take you to know more about us
                </p>
              </div>
              <div className="md:w-[65%] md:h-110 md:absolute md:right-0 md:top-25">
                <video
                  controls
                  loop
                  src="/images/hs.mp4"
                  height={"100%"}
                  width={"100%"}
                ></video>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[url(/images/agetnt-bg.png)] bg-default-50 bg-contain md:px-0 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center p-6">
              <h1 className="text-3xl md:text-5xl font-extrabold md:mt-10 md:mb-5">
                代理品牌
              </h1>
              <p className="text-xl md:text-2xl font-extrabold font-sans">
                AGENT BRAND
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5">
              {AgentBrandConfig.map((item, index) => {
                return (
                  <div
                    className="w-full border border-gray-300 h-35 flex justify-center items-center"
                    key={index}
                  >
                    <Image
                      src={item}
                      alt="item"
                      className="max-w-[85%] max-h-25"
                      classNames={{
                        img: "text-center h-full object-contain !max-w-[85%]",
                        wrapper:
                          "w-full text-center flex justify-center items-center",
                        zoomedWrapper:
                          "w-full h-full flex justify-center items-center",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full bg-[url(/images/cus_bg.png)] bg-cover bg-bottom pb-20 px-2 md:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center p-6 text-white">
              <h1 className="text-3xl md:text-5xl font-extrabold md:mt-10 md:mb-5">
                部分客户
              </h1>
              <p className="text-xl md:text-2xl font-extrabold font-sans">
                Some customers
              </p>
            </div>
            <div className="max-w-7xl mt-5 md:mt-20 mx-auto flex justify-center items-center">
              <Image
                src={"/images/customes.png"}
                alt="customers"
                classNames={{
                  img: "w-5xl m-auto",
                  wrapper: "w-full flex justify-center items-center",
                }}
                className="w-full h-full object-cover m-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-blue-0 pt-15 pb-15 px-2 md:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">News Center</h1>
                <p className="text-xl font-bold">新闻中心</p>
              </div>
              <div>
                <Button color="primary" className="text-white">
                  查看更多
                </Button>
              </div>
            </div>
            <div className="md:flex mt-10 gap-10">
              <div className="w-full md:w-2xl relative overflow-hidden rounded-xl">
                <a href={`/news/${NewsList[0].id}`}>
                  <Image
                    alt=""
                    className="md:h-101 md:w-full object-contain "
                    src={NewsList[0].imageUrl}
                  ></Image>
                  <div className="w-full p-4 absolute bottom-0 left-0 z-10 bg-[#e6241b66] text-white">
                    <h2 className="text-xl md:text-[26px] md:pr-30 relative overflow-hidden text-ellipsis line-clamp-1">
                      {NewsList[0].title}
                      <span className="md:absolute text-base right-0 top-0 font-[lexend]">
                        {NewsList[0].date}
                      </span>
                    </h2>
                    <p className="mt-5 overflow-hidden text-ellipsis line-clamp-1 md:line-clamp-3">
                      {NewsList[0].summary}
                    </p>
                  </div>
                </a>
              </div>
              <div className="md:w-3xl mt-10 md:mt-0">
                <ul>
                  {NewsList.slice(1, 4).map((item, index) => {
                    return (
                      <li
                        className="group group-hover:border-1 cursor-pointer"
                        key={index}
                      >
                        <Link href={`/news/${item.id}`} className="block">
                          <h3
                            className={cn(
                              "text-xl md:text-2xl group-hover:text-primary pr-30 md:pr-40 relative  overflow-hidden text-ellipsis line-clamp-1",
                              index !== 0 && "mt-5"
                            )}
                          >
                            {item.title}
                            <span className="absolute right-0 top-0">
                              2025/08/25
                            </span>
                          </h3>
                          <p className="mt-5 text-foreground overflow-hidden text-ellipsis line-clamp-2 h-12">
                            {item.summary}
                          </p>
                          <Divider className="mt-5 group-hover:bg-primary" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
