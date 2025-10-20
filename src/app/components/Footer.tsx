import Link from "next/link";
import {
  address,
  ipcNo,
  siteName,
  telNumber,
  telNumber1,
  telNumber2,
} from "../config/common";
const Footer = () => {
  return (
    <footer className="bg-[url(/images/footer_bg.png)] text-gray-400 py-5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <div className="md:flex block gap-8  pb-5">
          <div className="md:flex block gap-20 flex-1 ">
            <div>
              <h3 className="text-white text-lg font-medium mb-4 mt-4">
                网站首页
              </h3>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4 mt-4">
                关于化善
              </h3>
              <ul className="md:flex md:flex-col flex-row gap-4">
                <li>
                  <Link
                    href="/partner"
                    className="hover:text-white transition-colors"
                  >
                    合作伙伴
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    关于我们
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4 mt-4">
                产品中心
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/products?category=pneumatic"
                    className="hover:text-white transition-colors"
                  >
                    气动工具
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=electric"
                    className="hover:text-white transition-colors"
                  >
                    电动工具
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=manual"
                    className="hover:text-white transition-colors"
                  >
                    手动工具
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=spraying"
                    className="hover:text-white transition-colors"
                  >
                    喷涂设备
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-lg font-medium mb-4 mt-4">
              联系我们
            </h3>
            <ul className="flex flex-col md:grid-cols-3 gap-x-5 gap-4">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>
                  <Link
                    target="_blank"
                    href={"https://surl.amap.com/14nFUe1b7SJ"}
                  >
                    {address}
                  </Link>
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>
                  {telNumber}/ {telNumber1}/ {telNumber2}
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>info@huashan-tools.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-400 mt-3 pt-5 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} 「{siteName}」. 保留所有权利.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={"https://beian.miit.gov.cn/"} target="_blank">
              备案号：{ipcNo}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
