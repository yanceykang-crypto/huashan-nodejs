"use client";

import { Divider, Image } from "@heroui/react";
// import Banner from "../components/Banner";

import { AgentBrandConfig, SalesScope } from "@/app/config/home";
import { useState } from "react";
import { aboutConfig } from "@/app/config/home";
import Banner from "./components/Banner";

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div className="font-noto-sans-sc">
      <main className="w-full">
        <Banner />
        <div className="max-w-7xl m-auto px-2 md:px-0">
          <div className="md:flex sm:block justify-between items-center md:py-10 py-5">
            <div className="flex flex-col">
              <h2 className="md:text-5xl font-bold">Sales Scope</h2>
              <h3 className="md:text-4xl font-bold mt-2.5">销售范围</h3>
            </div>
            <div className="flex gap-1 md:gap-10 mt-10 md:mt-0 justify-between">
              {SalesScope.map((item, key) => {
                return (
                  <div
                    className={`flex flex-col justify-center w-18 md:w-20 items-center cursor-pointer ${
                      active === key ? "text-primary" : "text-gray-600"
                    }`}
                    key={key}
                    onClick={() => setActive(key)}
                  >
                    {item.icon}
                    <p className="m-2 text-xs md:text-base">{item.label}</p>
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
                  classNames={{ img: "w-full", wrapper: "w-full !max-w-[33%]" }}
                  src={item}
                />
              );
            })}
          </div>
          <div className="mt-10 md:mt-20 relative">
            <div className="bg-primary w-full md:w-150 md:h-160 px-10 py-8 md:py-15">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold">
                Brand Video
              </h1>
              <h2 className="text-white text-xl md:text-2xl font-bold mt-5">
                品牌视频
              </h2>
              <Divider className="bg-white h-0.5 md:h-1 my-1 md:my-5 w-20 md:w-25 md:mt-25"></Divider>
              <p className="text-white text-base md:text-2xl mt-5 md:mt-40 font-extrabold">
                带您更深入的了解我们
              </p>
              <p className="text-white text-base mt-0 md:mt-5 font-medium md:font-extrabold">
                Take you to know more about us
              </p>
            </div>
            <div className="bg-amber-500  md:w-[70%] md:h-110 md:absolute md:right-0 md:top-25">
              <video
                autoPlay
                controls
                loop
                src="/images/hs.mp4"
                height={"100%"}
                width={"100%"}
              ></video>
            </div>
          </div>
        </div>
        <div className="w-full bg-blue-50 pb-20 px-2 md:px-0">
          <div className="max-w-7xl mt-10 md:mt-20 mx-auto">
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
                    className="w-full border border-gray-300 h-25 flex justify-center items-center"
                    key={index}
                  >
                    <Image
                      src={item}
                      alt="item"
                      className="max-w-[85%] max-h-11"
                      classNames={{
                        img: "text-center",
                        wrapper:
                          "w-full text-center flex justify-center items-center",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full bg-primary pb-20 px-2 md:px-0">
          <div className="max-w-7xl mt-10 md:mt-20 mx-auto">
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
        <div className="w-full bg-blue-50 pb-20 px-2 md:px-0">
          <div className="max-w-7xl mt-10 md:mt-20 mx-auto">
            <div className="text-center p-6 text-primary">
              <h1 className="text-3xl md:text-5xl font-extrabold md:mt-10 md:mb-5">
                关于化善
              </h1>
              <p className="text-xl md:text-2xl font-extrabold font-sans">
                Huashan company
              </p>
            </div>
            <div className="max-w-7xl mt-2 md:mt-10 mx-auto flex flex-col justify-center items-center">
              <div className="text-gray-600 text-sm md:text-2xl leading-10 md:leading-15">
                <p className="text-center">
                  化善智能装备(东莞)有限公司成立于2007年，致力于为工业制造客户提供生产装配所需的工具解决方案及售后支持。
                </p>
                <p className="text-center">
                  主要销售产品：高品质手动工具，气动工具，电池工具，智能拧紧工具，喷涂设备。
                </p>
                <p className="text-center">
                  主要目标客户：汽车及配件，重工机械，3C电子，白色家电，电力，航空维修，轨道交通。
                </p>
              </div>
              <div className="gap-4 md:gap-10 grid grid-cols-1 md:grid-cols-2 mt-5 text-gray-500">
                {aboutConfig.map((item, index) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <div className="fill-primary w-18">{item.icon}</div>
                      <div className="ml-2 flex flex-col justify-center">
                        <h1 className="text-lg md:text-xl font-bold">
                          {item.title}
                        </h1>
                        <p className="text-sm">{item.des}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
