type NavConfig = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: NavConfig[];
};
export const mobileNavConfig: NavConfig[] = [
  {
    label: "关于化善",
    href: "/about",
  },
  {
    label: "合作伙伴",
    href: "/partner",
  },
  {
    label: "产品中心",
    href: "/products",
  },
  {
    label: "资质证书",
    href: "/honors",
  },
  {
    label: "联系我们",
    href: "/contact",
  },
];
export const navConfig: NavConfig[] = [
  {
    label: "关于化善",
    href: "/about",
    children: [
      {
        label: "合作伙伴",
        href: "/partner",
      },
      {
        href: "/about",
        label: "关于我们",
      },
    ],
  },
  {
    label: "产品中心",
    href: "/products",
    children: [
      {
        label: "全部产品",
        href: "/products",
      },
      {
        label: "气动工具",
        href: "/products?category=pneumatic",
        // children: [
        //   {
        //     icon: (
        //       <Image
        //         width={40}
        //         className="min-w-[40px] rounded-none object-cover"
        //         radius="none"
        //         alt="KEMP"
        //         src={"/images/KEMP.png"}
        //       />
        //     ),
        //     label: "KEMP",
        //     href: "/products/kemp",
        //   },
        //   {
        //     icon: (
        //       <Image
        //         width={40}
        //         radius="none"
        //         alt="APEX"
        //         src={"/images/apex.png"}
        //       />
        //     ),
        //     label: "APEX",
        //   },
        //   {
        //     icon: (
        //       <Image
        //         width={40}
        //         radius="none"
        //         alt="MATCH"
        //         src={"/images/MATCH.png"}
        //       />
        //     ),
        //     label: "MATCH",
        //   },
        // ],
      },
      {
        label: "电动工具",
        href: "/products?category=electric",
        // children: [
        //   {
        //     icon: (
        //       <Image
        //         width={40}
        //         radius="none"
        //         alt="FEIN"
        //         src={"/images/FEIN.png"}
        //       />
        //     ),
        //     label: "FEIN",
        //   },
        //   {
        //     icon: (
        //       <Image
        //         width={40}
        //         radius="none"
        //         alt="APEX"
        //         src={"/images/APEX.png"}
        //       />
        //     ),
        //     label: "APEX",
        //   },
        //   {
        //     icon: (
        //       <Image
        //         width={40}
        //         radius="none"
        //         alt="美沃奇"
        //         src={"/images/MEIWOQI.png"}
        //       />
        //     ),
        //     label: "美沃奇",
        //   },
        // ],
      },
      {
        label: " 手动工具",
        href: "/products?category=manual",
        // children: [
        //   {
        //     icon: (
        //       <Image
        //         radius="none"
        //         width={40}
        //         alt="LICOTA"
        //         src={"/images/LICOTA.png"}
        //       />
        //     ),
        //     label: "LICOTA",
        //   },
        //   {
        //     icon: (
        //       <Image
        //         radius="none"
        //         width={40}
        //         alt="SNAP"
        //         src={"/images/SNAP.png"}
        //       />
        //     ),
        //     label: "SNAP",
        //   },
        // ],
      },
    ],
  },
  {
    label: "资质证书",
    href: "/honors",
    children: [
      {
        label: "资质证书",
        href: "/honors?type=certificate",
      },
      {
        label: "授权证书",
        href: "/honors?type=license",
      },
    ],
  },
  {
    label: "联系我们",
    href: "/contact",
  },

  {
    label: "新闻中心",
    href: "/news",
  },
];
