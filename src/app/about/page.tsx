"use client";
import CountUp from "react-countup";
import {
  BadgeJapaneseYen,
  Pocket,
  Handshake,
  ShieldUser,
  UsersRound,
} from "lucide-react";
import { teamMembers } from "../config/about";
import { Divider, Image } from "@heroui/react";
// 定义页面元数据

// 核心价值观数据
const values = [
  {
    title: "专业",
    icon: <Handshake className="w-8 h-8 text-blue-600" />,
    description: "高端产品 专业技术专业维护服务体系",
    color: "blue",
  },
  {
    title: "品 牌",
    icon: <Pocket className="w-8 h-8 text-purple-600" />,
    description: "十大国际品牌卓越品质",
    color: "purple",
  },
  {
    title: "价 格",
    icon: <BadgeJapaneseYen className="w-8 h-8 text-green-600" />,
    description: "批量采购库存价格优势",
    color: "green",
  },
  {
    title: "保 障",
    icon: <ShieldUser className="w-8 h-8 text-orange-600" />,
    description: "可靠完善的退换货保障",
    color: "orange",
  },
  {
    title: "服 务",
    icon: <UsersRound className="w-8 h-8 text-red-600" />,
    description: "专业技术人员售前售中售后全程服务",
    color: "red",
  },
];

// 主组件
export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 页面头部banner */}
      <div className="relative h-72 md:h-96 overflow-hidden group">
        <Image
          src="/images/about_bg.png"
          alt="华山科技"
          className="object-cover rounded-none h-100 !max-w-full"
          classNames={{ wrapper: "absolute inset-0 w-full h-full z-0" }}
        />
      </div>
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 md:flex -mt-42 m-auto z-10 gap-10">
        <Image
          src={
            "http://www.dghuashan.com/template/HS-web/images/about_content.png"
          }
          alt="关于我们"
        />
        <div className="relative z-10">
          <div className="md:text-white pt-15">
            <h1 className="text-2xl">
              成立于
              <span className="text-5xl font-bold font-[lexend] text-primary">
                <CountUp end={2007} separator="" />
              </span>
              年
            </h1>
            <p className="mt-5">
              致力于为工业制造客户提供生产装配所需的工具解决方案及售后支持
            </p>
          </div>
          <div className="mt-10">
            <p>
              主要销售产品：高品质手动工具，气动工具，电池工具，智能拧紧工具，喷涂设备。
            </p>
            <p>
              主要目标客户：汽车及配件，重工机械，3C电子，白色家电，电力，航空维修，轨道交通。
            </p>
          </div>
        </div>
      </div>
      <section className="py-16 bg-cover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl">After Service</h1>
            <p className="text-lg">售后服务</p>
          </div>
          <div className="text-center py-10">
            总部设在东莞，在深圳、西安、长沙均设有技术服务办事处，能够及时快速响应客户各项需求。
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-span-1 bg-white">
                <div className="h-full cursor-pointer group p-6 hover:bg-gray-100 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl rounded-lg">
                  <h4 className="text-gray-600 text-2xl font-bold mb-3 group-hover:text-primary">
                    {member.name}
                  </h4>
                  <div className="  text-base h-40">
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 企业文化 */}
      <section className="py-16 bg-cover  bg-[url('/images/kuhu.bg.png')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-100">
            诚恳守信 客户为本
          </h2>
          <h3 className="text-base font-semibold mb-10 text-center text-gray-100">
            广纳各方意见不断进步，以无比的责任感和优质产品及服务得到客户信赖
            <br />
            不是让客户买的多 而是让客户买的对
          </h3>

          <div className="flex  bg-[url('/images/purpose_bg.png')]">
            {values.map((value, index) => {
              // 根据颜色设置不同的背景色
              const bgColor =
                value.color === "blue"
                  ? "bg-blue-100"
                  : value.color === "purple"
                  ? "bg-purple-100"
                  : value.color === "green"
                  ? "bg-green-100"
                  : value.color === "orange"
                  ? "bg-orange-100"
                  : "bg-red-100";
              return (
                <>
                  <div
                    key={index}
                    className="flex-1/5 h-90 relative group overflow-hidden"
                  >
                    <div className="h-full flex flex-col overflow-hidden items-center justify-center p-6  border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
                      <div
                        className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-6 group-hover:hidden`}
                      >
                        {value.icon}
                      </div>
                      {/* <div className="text-center">
                        <h4 className="text-lg font-bold mb-3 text-gray-800">
                          {value.title}
                        </h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div> */}
                    </div>
                    <div className="absolute justify-center bg-primary/50 top-100 group-hover:top-0 right-0 h-full w-full flex flex-col overflow-hidden items-center p-6  border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
                      <div
                        className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-6`}
                      >
                        {value.icon}
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-bold mb-3 text-white">
                          {value.title}
                        </h4>
                        <p className="text-white">{value.description}</p>
                      </div>
                    </div>
                  </div>
                  {index < values.length - 1 && (
                    <Divider
                      className="bg-primary h-90"
                      orientation="vertical"
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
