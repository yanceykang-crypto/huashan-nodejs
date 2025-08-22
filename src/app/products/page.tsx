"use client";
import { ProductList, ProductCategory } from "@/app/config/products";
import Link from "next/link";
import { Code, Image } from "@heroui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function ProductContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 从路由参数中获取当前选中的分类
  const category = searchParams.get("category") || "all";

  // 根据分类筛选产品
  const filteredProducts =
    category === "all"
      ? ProductList
      : ProductList.filter((product) => product.category === category);

  // 处理分类切换
  const handleCategoryChange = (newCategory: string) => {
    // 根据分类切换路由参数
    if (newCategory === ProductCategory.all) {
      router.push("/products");
    } else {
      router.push(`/products?category=${encodeURIComponent(newCategory)}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 分类筛选器 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">产品分类</h2>
        <div className="flex flex-wrap gap-3">
          {Object.keys(ProductCategory).map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {ProductCategory[cat as keyof typeof ProductCategory]}
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
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                classNames={{
                  img: "!max-w-full",
                  wrapper:
                    "object-cover h-48 w-full transition-transform duration-500 hover:scale-110 !max-w-full",
                }}
                className="object-cover h-48 w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <Code color="danger">
                {
                  ProductCategory[
                    product.category as keyof typeof ProductCategory
                  ]
                }
              </Code>
              <h2 className="text-xl font-bold text-gray-800 my-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
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

export default function ProductsPage() {
  return (
    <div>
      {/* Banner区域 */}
      <div className="bg-gradient-to-r relative overflow-hidden h-72 md:h-96 from-blue-600 to-purple-600 group">
        <div className="absolute inset-0 bg-[url('/images/banner1.jpg')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            产品中心
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            探索我们的高品质产品系列，为您提供专业解决方案
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-12 text-center">
            加载中...
          </div>
        }
      >
        <ProductContent />
      </Suspense>
    </div>
  );
}
