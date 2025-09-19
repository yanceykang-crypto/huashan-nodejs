// 产品分类接口
export interface ProductCategory {
  label: string;
  value: string;
  children?: ProductCategory[];
}

// 产品项接口
export interface ProductItem {
  id: string;
  title: string;
  description: string;
  category: string;
  cate?: string;
  subcategory?: string;
  details?: string;
  images: string[];
  features: string[];
  content: string[];
}

// 产品分类列表
export const productCateList: ProductCategory[] = [
  {
    label: "全部",
    value: "all",
  },
  {
    label: "气动工具",
    value: "pneumatic",
    children: [
      {
        label: "肯普KEMP",
        value: "pneumatic_wrench",
      },
      {
        label: "玛驰MATCH",
        value: "match",
      },
    ],
  },
  {
    label: "电动工具",
    value: "electric",
    children: [
      {
        label: "CLECO",
        value: "cleco",
      },
      {
        label: "美沃奇",
        value: "milw",
      },
    ],
  },
  {
    label: "手动工具",
    value: "manual",
    children: [
      {
        label: "世达工具",
        value: "shida",
      },
      {
        label: "力可达",
        value: "likeda",
      },
      {
        label: "实耐宝",
        value: "realnebao",
      },
    ],
  },
];
