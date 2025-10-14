"use client";
import React, { useState } from "react";
import { ProductItem } from "@/app/services/markdownService";
import { productCateList } from "@/app/config/products";
import { Button, Chip, Image } from "@heroui/react";
import { useRouter } from "next/navigation";

interface ProductDetailProps {
  product: ProductItem;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [currImage, setCurrImage] = useState("");
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        className="inline-flex items-center text-primary hover:text-primary-600 mb-6"
        variant="light"
        onPress={() => router.back()}
      >
        <svg
          className="w-4 h-4 mr-1"
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
        返回产品列表
      </Button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          <div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
              <Image
                src={currImage || product.images[0]}
                alt={product.title}
                className="object-contain"
                classNames={{
                  img: "!max-w-full h-full object-contain m-auto",
                  wrapper:
                    "object-contain h-full m-auto w-full transition-transform duration-500 !max-w-full",
                }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative h-16 overflow-hidden rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setCurrImage(image)}
                >
                  <Image
                    src={image}
                    width={100}
                    alt={`${product.title} - ${index + 1}`}
                    className="object-contain h-full"
                    classNames={{
                      img: "!max-w-full h-full object-contain m-auto",
                      wrapper:
                        "object-contain h-full m-auto w-full transition-transform duration-500 !max-w-full",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm text-white font-medium mb-2">
              <Chip color="primary">
                {productCateList.find((cat) => cat.value === product.category)
                  ?.label || product.category}
              </Chip>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <div
              className="text-gray-600 mb-6 [&>p]:mb-2"
              dangerouslySetInnerHTML={{ __html: product.description || "" }}
            ></div>
            {product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                  产品特点
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="!w-5 !h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 flex-1/2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                color="primary"
                className="text-white bg-primary h-10 leading-10 px-4  rounded-md shadow-sm hover:bg-primary/90 transition-colors"
              >
                获得报价
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-6 md:p-8">
          <div
            className="prose max-w-none markdown-body [&>p>img]:max-w-full md:[&>p>img]:max-w-4xl"
            dangerouslySetInnerHTML={{ __html: product.content || "" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {product.detailsImages?.map((image: string, index: number) => (
              <div key={index} className="relative  rounded-md">
                <Image
                  src={image}
                  alt={`${product.title} - 详情图 ${index + 1}`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
