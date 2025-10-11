"use client";
import { productCateList } from "../config/products";
import Link from "next/link";
import { Image } from "@heroui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ProductItem } from "../services/markdownService";

export function ProductContent({
  productList,
}: {
  productList: ProductItem[];
}) {
  const searchParams = useSearchParams();
  const [childCategory, setChildCategory] = useState<string>("child_all");
  const router = useRouter();

  // 从路由参数中获取当前选中的分类
  const category = searchParams.get("category") || "all";

  // 根据分类筛选产品
  const filteredProducts = useMemo(() => {
    if (category === "all") {
      return productList;
    } else {
      return productList.filter((product) => {
        if (childCategory !== "child_all") {
          return (
            product.category === category && product.cate === childCategory
          );
        } else {
          return product.category === category;
        }
      });
    }
  }, [category, childCategory, productList]);
  // 处理分类切换
  const handleCategoryChange = (newCategory: string) => {
    // 根据分类切换路由参数
    setChildCategory("child_all");
    if (newCategory === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${encodeURIComponent(newCategory)}`);
    }
  };
  const childCateList = useMemo(() => {
    return (
      productCateList.find((item) => item.value === category)?.children || []
    );
  }, [category]);
  return (
    <div className="container mx-auto px-4 py-12">
      {/* 分类筛选器 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">产品分类</h2>
        <div className="flex flex-wrap gap-3">
          {productCateList.map((cat) => {
            return (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  category === cat.value
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          <button
            onClick={() => setChildCategory("child_all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              "child_all" === childCategory
                ? "bg-primary text-white shadow-md"
                : " text-gray-700 hover:bg-gray-200"
            }`}
          >
            全部
          </button>
          {childCateList.map((cat) => {
            return (
              <button
                key={cat.value}
                onClick={() => setChildCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  childCategory === cat.value
                    ? "bg-primary text-white shadow-md"
                    : " text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 产品列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-65 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                classNames={{
                  img: "!max-w-full h-65 object-contain",
                  wrapper:
                    "object-contain  w-full transition-transform duration-500 !max-w-full",
                }}
                className="object-contain h-full w-full transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                {productCateList.find((cat) => cat.value === product.category)
                  ?.label || product.category}
              </span>
              <h2 className="text-xl font-bold text-gray-800 my-2 h-14 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2 h-12">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/products/details/${product.id}`}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors"
                >
                  查看详情
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
