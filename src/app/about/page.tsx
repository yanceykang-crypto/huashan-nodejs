import Image from "next/image";
import { Metadata } from "next";
import {
  BadgeJapaneseYen,
  Pocket,
  Handshake,
  ShieldUser,
  UsersRound,
} from "lucide-react";
import { teamMembers } from "../config/about";

// 定义页面元数据
export const metadata: Metadata = {
  title: "关于我们 - 华山科技",
  description:
    "了解华山科技的公司简介、发展历程、企业文化、团队介绍及荣誉资质。",
};

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
          fill
          className="object-cover"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight transform transition-transform duration-500 group-hover:scale-105">
            关于我们
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
            专业的工业自动化解决方案提供商，致力于为客户创造价值
          </p>
        </div>
      </div>

      {/* 公司简介 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-w">
                公司简介
              </h2>
              <p className="text-gray-600 mb-4 text-xl leading-relaxed">
                成立于
                <span
                  className={`text-5xl font-bold font-[lexend] text-primary`}
                >
                  2007
                </span>
                年
                致力于为工业制造客户提供生产装配所需的工具解决方案及售后支持。
                总部设在东莞，在深圳、西安、长沙均设有技术服务办事处，能够及时快速响应客户各项需求。
              </p>
              <p className="text-gray-600 mb-6 text-xl leading-relaxed">
                主要销售产品：高品质手动工具，气动工具，电池工具，智能拧紧工具，喷涂设备。
              </p>
              <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                主要目标客户：汽车及配件，重工机械，3C电子，白色家电，电力，航空维修，轨道交通。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/5-1.jpg"
                  alt="公司环境"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <Image
                  src="/images/5-2.jpg"
                  alt="生产车间"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/5-3.jpg"
                  alt="研发团队"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <Image
                  src="/images/4-1.jpg"
                  alt="产品展示"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="py-16 bg-[url('/images/purpose_bg.png')] bg-gray-900 bg-cover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-100">
            诚恳守信 客户为本
          </h2>
          <h3 className="text-base font-semibold mb-10 text-center text-gray-100">
            广纳各方意见不断进步，以无比的责任感和优质产品及服务得到客户信赖
            <br />
            不是让客户买的多 而是让客户买的对
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                <div key={index} className="col-span-1">
                  <div className="h-full flex flex-col  bg-white overflow-hidden items-center p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl">
                    <div
                      className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-6`}
                    >
                      {value.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-bold mb-3 text-gray-800">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            售后服务
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-span-1 bg-white">
                <div className="h-full overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl rounded-lg">
                  <div className="relative h-64 ">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                      <h4 className="text-white text-2xl font-bold mb-1">
                        {member.name}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-600 font-medium text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
