import { AgentBrandConfig } from "@/app/config/home";
import { FC } from "react";
import { Image } from "@heroui/react";

const Page: FC = () => {
  return (
    <div className="font-sans">
      <main className="w-full bg-[url('/images/partnerbg.png')] bg-cover px-3 md:px-0">
        <div className="max-w-7xl m-auto py-20 group">
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
            <h1 className="text-4xl md:text-6xl font-bold  text-primary mb-4 tracking-tight transform transition-transform duration-500">
              代理品牌
            </h1>
            <p className="text-xl md:text-2xl  text-primary max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
              AGENT BRAND
            </p>
          </div>
          <div className="gap-5 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 mt-20">
            {AgentBrandConfig.map((item, index) => {
              return (
                <div
                  className="w-full bg-default-100 hover:bg-white border-gray-300 h-25 flex justify-center items-center"
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
      </main>
    </div>
  );
};

export default Page;
