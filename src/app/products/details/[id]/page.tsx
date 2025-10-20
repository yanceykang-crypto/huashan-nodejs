import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductDetail from "./ProductDetail";
import {
  getAllMarkdownDocs,
  ProductItem,
} from "@/app/services/markdownService";

interface Params {
  id: string;
}
export async function generateStaticParams() {
  const ProductList = (await getAllMarkdownDocs("products")) as ProductItem[];
  return ProductList.map((product) => ({
    id: product.id,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const ProductList = (await getAllMarkdownDocs("products")) as ProductItem[];
  const product = ProductList.find((product) => product.id === id);

  if (!product) {
    return {
      title: "产品不存在 - 化善智能装备制造",
      description: "抱歉，您访问的产品不存在。",
    };
  }

  return {
    title: `${product.title} - 化善智能装备制造`,
    description: product.description,
  };
}

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const ProductList = (await getAllMarkdownDocs("products")) as ProductItem[];
  const product = ProductList.find((product) => product.id === id);

  if (!product) {
    notFound();
  }
  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
