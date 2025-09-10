type Product = {
  id: string;
  title: string;
  description?: string;
  category: "pneumatic" | "electric";
  images: string[];
};
export const productList: Product[] = [
  {
    id: "OP8Nj5Be8b",
    title: "气动打磨机",
    description: "",
    category: "pneumatic",
    images: ["/images/product_imgs/OP8Nj5Be8b.png"],
  },
  {
    id: "",
    title: "气动工具",
    description: "",
    category: "pneumatic",
    images: ["/images/product_imgs/OP8Nj5Be8b.png"],
  },
];
