import type { Metadata } from "next";
import { Geist, Lexend, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { FloatButton } from "./components/FloatButton";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 配置Lexend字体
const lexend = Lexend({
  subsets: ["latin"], // 指定字符集
  weight: ["400", "500", "600", "700"], // 需要的字重
  variable: "--font-lexend", // 可选，用于CSS变量
});

// 配置Noto Sans SC字体
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"], // 包含中文字符
  weight: ["400", "500", "700"], // 需要的字重（400常规、500中等、700粗体）
  variable: "--font-noto-sans-sc", // 定义CSS变量，方便全局使用
});
export const metadata: Metadata = {
  title: "化善智能装备制造",
  description: "化善智能装备制造 - 专业的工业自动化解决方案提供商",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSansSC.variable} ${geistSans.variable} ${lexend.variable} antialiased`}
    >
      <body className={`${lexend.className} `}>
        <meta charSet="utf-8" />
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
          <Header></Header>
        </header>
        {children}
        <Footer />
        <FloatButton />
      </body>
    </html>
  );
}
