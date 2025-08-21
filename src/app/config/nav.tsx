import { Building2 } from "lucide-react";
import { Image } from "@heroui/react";
type NavConfig = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: NavConfig[];
};
export const navConfig: NavConfig[] = [
  {
    label: "关于化善",
    children: [
      {
        icon: <Building2 />,
        label: "合作伙伴",
        href: "/partner",
      },
      {
        icon: <Building2 />,
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
        label: "气动工具",
        children: [
          {
            icon: (
              <Image
                width={40}
                className="min-w-[40px] rounded-none object-cover"
                radius="none"
                alt="KEMP"
                src={"/images/KEMP.png"}
              />
            ),
            label: "KEMP",
            href: "/products/kemp",
          },
          {
            icon: (
              <Image
                width={40}
                radius="none"
                alt="APEX"
                src={"/images/apex.png"}
              />
            ),
            label: "APEX",
          },
          {
            icon: (
              <Image
                width={40}
                radius="none"
                alt="MATCH"
                src={"/images/MATCH.png"}
              />
            ),
            label: "MATCH",
          },
        ],
      },
      {
        label: "电动工具",
        children: [
          {
            icon: (
              <Image
                width={40}
                radius="none"
                alt="FEIN"
                src={"/images/FEIN.png"}
              />
            ),
            label: "FEIN",
          },
          {
            icon: (
              <Image
                width={40}
                radius="none"
                alt="APEX"
                src={"/images/APEX.png"}
              />
            ),
            label: "APEX",
          },
          {
            icon: (
              <Image
                width={40}
                radius="none"
                alt="美沃奇"
                src={"/images/MEIWOQI.png"}
              />
            ),
            label: "美沃奇",
          },
        ],
      },
      {
        label: " 手动工具",
        children: [
          {
            icon: (
              <Image
                radius="none"
                width={40}
                alt="LICOTA"
                src={"/images/LICOTA.png"}
              />
            ),
            label: "LICOTA",
          },
          {
            icon: (
              <Image
                radius="none"
                width={40}
                alt="SNAP"
                src={"/images/SNAP.png"}
              />
            ),
            label: "SNAP",
          },
        ],
      },
    ],
  },
  {
    label: "资质证书",
    href: "/honors",
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
