import {
  BrandIcon,
  CarIcon,
  CCCIcon,
  HouseholdIcon,
  MonitorSetIcon,
  OtherIcon,
  PriceIcon,
  ReliIcon,
  WXIcon,
} from "@/app/components/Icons";

export const SalesScope = [
  {
    label: "航空航天",
    icon: (
      <MonitorSetIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
    ),
    images: ["/images/1-1.png", "/images/1-2.png", "/images/1-3.png"],
  },
  {
    label: "汽车重工",
    icon: <CarIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
    images: ["/images/2-1.png", "/images/2-2.png", "/images/2-3.png"],
  },
  {
    label: "电子3C",
    icon: <CCCIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
    images: ["/images/3-1.png", "/images/3-2.png", "/images/3-3.png"],
  },
  {
    label: "白色家电",
    icon: <HouseholdIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
    images: ["/images/4-1.jpg", "/images/4-2.jpg", "/images/4-3.jpg"],
  },
  {
    label: "其他",
    icon: <OtherIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
    images: ["/images/5-1.jpg", "/images/5-2.jpg", "/images/5-3.jpg"],
  },
];

export const AgentBrandConfig = [
  "/images/apex.png",
  "/images/cleco.png",
  "/images/milw.png",
  "/images/kemp_1.png",
  "/images/waganer.png",
  "/images/SNAP.png",
  "/images/weller.png",
  "/images/FEINLOGO@2x.png",
  "/images/LICOTA.png",
  "/images/MATCH.png",
];
export const aboutConfig = [
  {
    title: "专业维护服务体系",
    icon: <WXIcon className="w-18 h-18  md:w-15 md:h-15 mr-5" />,
    des: "Professional maintenance service system",
  },
  {
    title: "批量价格优势",
    icon: <PriceIcon className="w-16 h-16  md:w-15 md:h-15 mr-5" />,
    des: "Batch price advantage",
  },
  {
    title: "九大国际品牌 卓越品质",
    icon: <BrandIcon className="w-18 h-18 md:w-15 md:h-15 mr-5" />,
    des: "Excellent quality of nine  international brands",
  },
  {
    title: "可靠完善的退换货保障",
    icon: <ReliIcon className="w-16 h-16 md:w-15 md:h-15 mr-5" />,
    des: "Reliable and perfect return guarantee",
  },
];
