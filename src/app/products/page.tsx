import { Suspense } from "react";
import { getAllMarkdownDocs, ProductItem } from "../services/markdownService";
import { ProductContent } from "./ProductContent";

// 服务器组件，负责获取数据
const ProductsPage = async () => {
  const ProductList = (await getAllMarkdownDocs<ProductItem>(
    "products"
  )) as ProductItem[];

  return (
    <div>
      {/* Banner区域 */}
      <div className="bg-gradient-to-r relative overflow-hidden from-blue-600 to-purple-600 group">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        <div className="py-20 inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            产品中心
          </h1>
          <div className="text-xl md:text-xl text-blue-50 max-w-4xl mt-10 mx-auto opacity-90 font-light leading-relaxed">
            欢迎进入化善智能装备（东莞）有限公司工具矩阵。我们致力于打造极致高效、可靠稳定的专业工具，助您横扫工作中的繁琐与障碍。这里没有华而不实的功能，每一款产品都经过千锤百炼，只为让您专注于创造本身，而非工具的限制。
            这里总有一款利器，能成为您最值得信赖的“生产力倍增器”。探索工具，解锁高效能工作新体验。
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-12 text-center">
            加载中...
          </div>
        }
      >
        <ProductContent productList={ProductList} />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
