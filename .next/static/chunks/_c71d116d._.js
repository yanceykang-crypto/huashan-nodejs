(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/config/products.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductCategory": ()=>ProductCategory,
    "ProductList": ()=>ProductList,
    "brandCate": ()=>brandCate,
    "productCateList": ()=>productCateList
});
const productCateList = [
    {
        label: "全部",
        value: "all"
    },
    {
        label: "气动工具",
        value: "pneumatic",
        children: [
            {
                label: "肯普KEMP",
                value: "pneumatic_wrench"
            },
            {
                label: "玛驰MATCH",
                value: "match"
            }
        ]
    },
    {
        label: "电动工具",
        value: "electric",
        children: [
            {
                label: "CLECO",
                value: "cleco"
            },
            {
                label: "美沃奇",
                value: "milw"
            }
        ]
    },
    {
        label: "手动工具",
        value: "manual",
        children: [
            {
                label: "世达工具",
                value: "shida"
            },
            {
                label: "力可达",
                value: "likeda"
            },
            {
                label: "实耐宝",
                value: "realnebao"
            }
        ]
    },
    {
        label: "喷涂设备",
        value: "spraying",
        children: [
            {
                label: "油漆喷涂设备",
                value: "paint"
            },
            {
                label: "粉末喷涂设备",
                value: "powder"
            }
        ]
    }
];
const ProductCategory = {
    all: "全部",
    pneumatic: "气动工具",
    electric: "电动工具",
    manual: "手动工具",
    spraying: "喷涂设备"
};
const brandCate = [
    "/images/apex.png",
    "/images/SNAP.png",
    "/images/kemp_1.png",
    "/images/weller.png",
    "/images/MATCH.png",
    "/images/cleco.png",
    "/images/milw.png",
    "/images/FEINLOGO@2x.png",
    "/images/LICOTA.png",
    "/images/waganer.png"
];
const ProductList = [
    {
        id: "OP8Nj5Be8b",
        title: "电动磁力钻",
        category: "electric",
        description: "磁力钻钻孔效率高，能保证加工精度，操作简单，使用方便安全，主要用于手电钻和钻床不适宜进行钻削加工的场合。",
        details: "<p>磁力钻钻孔效率高，能保证加工精度，操作简单，使用方便安全，主要用于手电钻和钻床不适宜进行钻削加工的场合。</p>",
        images: [
            "/images/product/ddclz/clz_1.jpg",
            "/images/product/ddclz/clz_2.jpg"
        ],
        features: [
            "重量轻，方便携带",
            "功能全，二档变速",
            "自动内部冷却装置"
        ],
        content: [
            "/images/product/ddclz/详情_01.jpg",
            "/images/product/ddclz/详情_02.jpg",
            "/images/product/ddclz/详情_03.jpg",
            "/images/product/ddclz/详情_04.jpg",
            "/images/product/ddclz/详情_05.jpg",
            "/images/product/ddclz/详情_06.jpg",
            "/images/product/ddclz/详情_07.jpg"
        ]
    },
    {
        id: "bB0qcjcgs1",
        title: "角磨机",
        category: "electric",
        price: 86000,
        description: "角磨机是一种利用玻璃钢切削和打磨的手提式电动工具，主要用于切割、研磨及刷磨金属与石材等",
        details: "<p>角磨机是一种利用玻璃钢切削和打磨的手提式电动工具，主要用于切割、研磨及刷磨金属与石材等</p>",
        images: [
            "/images/product/ddjmj/主图600-600.jpg"
        ],
        features: [
            "不同装备如带自动速度调节装备或者不带",
            "不同功率等级",
            "一样的产品质量"
        ],
        content: [
            "/images/product/ddjmj/详情_01.jpg",
            "/images/product/ddjmj/详情_02.jpg",
            "/images/product/ddjmj/详情_03.jpg",
            "/images/product/ddjmj/详情_04.jpg"
        ]
    },
    {
        id: "vinzwb6kbO",
        title: "手持空心钻",
        category: "electric",
        price: 198000,
        description: "手持空心钻",
        details: "<p>手持空心钻</p>",
        images: [
            "/images/product/sckxz/1.jpg",
            "/images/product/sckxz/2.jpg"
        ],
        features: [],
        content: [
            "/images/product/sckxz/详情_01.jpg",
            "/images/product/sckxz/详情_02.jpg"
        ]
    },
    {
        id: "SZ495ghe7K",
        title: "手电钻",
        category: "electric",
        price: 198000,
        description: "手电钻",
        details: "<p>手电钻</p>",
        images: [
            "/images/product/ddsdz/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/ddsdz/详情.jpg"
        ]
    },
    {
        id: "2eDvJTmwFQ",
        title: "移动式砂带机",
        category: "electric",
        price: 198000,
        description: "移动式砂带机",
        details: "<p>移动式砂带机</p>",
        images: [
            "/images/product/ydssdj/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/ydssdj/详情_01.jpg",
            "/images/product/ydssdj/详情_02.jpg",
            "/images/product/ydssdj/详情_03.jpg"
        ]
    },
    {
        id: "BNV5xwAcWf",
        title: "气动扳手",
        category: "pneumatic",
        price: 198000,
        description: "气动扳手",
        details: "<p>气动扳手</p>",
        images: [
            "/images/product/qdbs/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/qdbs/详情_01.jpg",
            "/images/product/qdbs/详情_02.jpg",
            "/images/product/qdbs/详情_03.jpg",
            "/images/product/qdbs/详情_04.jpg",
            "/images/product/qdbs/详情_05.jpg",
            "/images/product/qdbs/详情_06.jpg"
        ]
    },
    {
        id: "jiv43Td8GS",
        title: "气动冲击扳手",
        category: "pneumatic",
        price: 198000,
        description: "气动冲击扳手",
        details: "<p>气动冲击扳手</p>",
        images: [
            "/images/product/qdcjbs/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/qdcjbs/详情_1.jpg",
            "/images/product/qdcjbs/详情_2.jpg"
        ]
    },
    {
        id: "9UhvEOW3cs",
        title: "气动锤子",
        category: "pneumatic",
        price: 198000,
        description: "气动锤子",
        details: "<p>气动锤子</p>",
        images: [
            "/images/product/qdcz/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/qdcz/详情_01.jpg",
            "/images'/product/qdcz/详情_02.jpg"
        ]
    },
    {
        id: "kVZDL9CQBa",
        title: "气动打磨机",
        category: "pneumatic",
        price: 198000,
        description: "气动打磨机",
        details: "<p>气动打磨机</p>",
        images: [
            "/images/product/qddmj/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/qddmj/详情_01.jpg",
            "/images/product/qddmj/详情_02.jpg",
            "/images/product/qddmj/详情_03.jpg",
            "/images/product/qddmj/详情_04.jpg",
            "/images/product/qddmj/详情_05.jpg",
            "/images/product/qddmj/详情_06.jpg",
            "/images/product/qddmj/详情_07.jpg",
            "/images/product/qddmj/详情_08.jpg",
            "/images/product/qddmj/详情_09.jpg",
            "/images/product/qddmj/详情_10.jpg",
            "/images/product/qddmj/详情_11.jpg",
            "/images/product/qddmj/详情_12.jpg",
            "/images/product/qddmj/详情_13.jpg"
        ]
    },
    {
        id: "UDjuvyRdfj",
        title: "气动管道螺母工具",
        category: "pneumatic",
        price: 198000,
        description: "气动管道螺母工具",
        details: "<p>气动管道螺母工具</p>",
        images: [
            "/images/product/qdgdlmgj/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/qdgdlmgj/详情_1.jpg",
            "/images/product/qdgdlmgj/详情_2.jpg"
        ]
    },
    {
        id: "q8793XR2qQ",
        title: "气动棘轮扳手",
        category: "pneumatic",
        price: 198000,
        description: "气动棘轮扳手",
        details: "<p>气动棘轮扳手</p>",
        images: [
            "/images/product/qdjlbs/主图.jpg"
        ],
        features: [
            "依据工位螺栓尺寸、螺栓等级、目标扭矩、硬软接合程度选择匹配的工具型号。",
            "狭小空间螺栓应用",
            "最大扭力从小到大规格，肯普皆有对应工具机种。"
        ],
        content: [
            "/images/product/qdjlbs/详情_1.jpg",
            "/images/product/qdjlbs/详情_2.jpg"
        ]
    },
    {
        id: "GFWSqM98zV",
        title: "气动角磨机",
        category: "pneumatic",
        price: 198000,
        description: "气动角磨机",
        details: "<p>气动角磨机</p>",
        images: [
            "/images/product/qdjmj/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/qdjmj/详情_01.jpg",
            "/images/product/qdjmj/详情_02.jpg"
        ]
    },
    {
        id: "fp7QsXChwn",
        title: "全自动气动起子",
        category: "pneumatic",
        price: 198000,
        description: "全自动气动起子",
        details: "<p>全自动气动起子</p>",
        images: [
            "/images/product/qzdqdqz/主图600-600.jpg"
        ],
        features: [],
        content: [
            "/images/product/qzdqdqz/详情_01.jpg",
            "/images/product/qzdqdqz/详情_02.jpg",
            "/images/product/qzdqdqz/详情_03.jpg",
            "/images/product/qzdqdqz/详情_04.jpg"
        ]
    },
    {
        id: "yAuN21AEMJ",
        title: "气动液压拉铆螺母枪",
        category: "pneumatic",
        price: 198000,
        description: "气动液压拉铆螺母枪",
        details: "<p>气动液压拉铆螺母枪</p>",
        images: [
            "/images/product/qdyylmlmq/主图_1.jpg",
            "/images/product/qdyylmlmq/主图_2.jpg"
        ],
        features: [
            "螺帽尺寸大小与材质软硬跟机种的拉力相关",
            "针对固定铆螺母尺寸建议如下：",
            "不锈钢材质M8以下建议选择 A-ENT-HM2-S06T157",
            "不锈纲材质Ｍ8以上建议选择 A-ENT-HM2-S08T245",
            "比不锈钢材质较软或韧性低的其他材质没有太大差异。"
        ],
        content: [
            "/images/product/qdyylmlmq/详情_01.jpg",
            "/images/product/qdyylmlmq/详情_02.jpg",
            "/images/product/qdyylmlmq/详情_03.jpg"
        ]
    },
    {
        id: "e8CZmtTQMP",
        title: "锤子",
        category: "manual",
        price: 198000,
        description: "锤子",
        details: "<p>锤子</p>",
        images: [
            "/images/product/sdcz/主图_1.jpg",
            "/images/product/sdcz/主图_2.jpg"
        ],
        features: [
            "达到美国ANSI标准",
            "锤头可更换，耐敲击、防滑、不可燃"
        ],
        content: [
            "/images/product/sdcz/14捶子类152.jpg",
            "/images/product/sdcz/14捶子类153.jpg",
            "/images/product/sdcz/14捶子类154.jpg",
            "/images/product/sdcz/14捶子类155.jpg"
        ]
    },
    {
        id: "e6O9Muyqvu",
        title: "多功能工具车",
        category: "manual",
        price: 198000,
        description: "多功能工具车",
        details: "<p>多功能工具车</p>",
        images: [
            "/images/product/dgngjc/主图.jpg"
        ],
        features: [
            "定制的轮胎、重载悬挂和能有效控制刹车的手柄，让工作变得省时省力"
        ],
        content: [
            "/images/product/dgngjc/详情_1.jpg",
            "/images/product/dgngjc/详情_2.jpg",
            "/images/product/dgngjc/详情_3.jpg",
            "/images/product/dgngjc/详情_4.jpg"
        ]
    },
    {
        id: "CVYEtA2gHg",
        title: "活动扳手",
        category: "manual",
        price: 198000,
        description: "活动扳手",
        details: "<p>活动扳手</p>",
        images: [
            "/images/product/hdbs/主图_1.jpg",
            "/images/product/hdbs/主图_2.jpg"
        ],
        features: [
            "定制的轮胎、重载悬挂和能有效控制刹车的手柄，让工作变得省时省力"
        ],
        content: [
            "/images/product/hdbs/9-106.jpg",
            "/images/product/hdbs/9-107.jpg",
            "/images/product/hdbs/9-108.jpg",
            "/images/product/hdbs/9-109.jpg"
        ]
    },
    {
        id: "e7ys13KH0i",
        title: "棘轮扳手",
        category: "manual",
        price: 198000,
        description: "棘轮扳手",
        details: "<p>棘轮扳手</p>",
        images: [
            "/images/product/jlbs/主图_1.jpg",
            "/images/product/jlbs/主图_2.jpg"
        ],
        features: [
            "独特快速脱落功能产品达到甚至超过美国ANSI标准",
            "专利防油防腐蚀软柄设计，比普通手柄使用寿命高50%"
        ],
        content: [
            "/images/product/jlbs/详情_1.jpg",
            "/images/product/jlbs/详情_2.jpg",
            "/images/product/jlbs/详情_3.jpg",
            "/images/product/jlbs/详情_4.jpg",
            "/images/product/jlbs/详情_5.jpg"
        ]
    },
    {
        id: "ZX69EsnkhD",
        title: "六角扳手",
        category: "manual",
        price: 198000,
        description: "六角扳手",
        details: "<p>六角扳手</p>",
        images: [
            "/images/product/ljbs/主图 (1).jpg",
            "/images/product/ljbs/主图 (2).jpg"
        ],
        features: [
            "S2高级工具钢锻造"
        ],
        content: [
            "/images/product/ljbs/详情 (1).jpg",
            "/images/product/ljbs/详情 (2).jpg",
            "/images/product/ljbs/详情 (3).jpg",
            "/images/product/ljbs/详情 (4).jpg",
            "/images/product/ljbs/详情 (5).jpg",
            "/images/product/ljbs/详情 (6).jpg",
            "/images/product/ljbs/详情 (7).jpg",
            "/images/product/ljbs/详情 (8).jpg",
            "/images/product/ljbs/详情 (9).jpg",
            "/images/product/ljbs/详情 (10).jpg",
            "/images/product/ljbs/详情 (11).jpg",
            "/images/product/ljbs/详情 (12).jpg",
            "/images/product/ljbs/详情 (13).jpg",
            "/images/product/ljbs/详情 (14).jpg",
            "/images/product/ljbs/详情 (15).jpg"
        ]
    },
    {
        id: "oinE8H3aO2",
        title: "螺丝刀",
        category: "manual",
        price: 198000,
        description: "螺丝刀",
        details: "<p>螺丝刀</p>",
        images: [
            "/images/product/lsd/主图.jpg"
        ],
        features: [
            "Snap-on螺丝刀的基础是专利的软手柄设计，提供您多30%的扭力",
            "可换滚花不锈钢刀头为您的工作提供合适的长度和种类",
            "内置钕磁铁可牢牢吸住螺丝匹头，安全可靠"
        ],
        content: [
            "/images/product/lsd/详情 (1).jpg",
            "/images/product/lsd/详情 (2).jpg",
            "/images/product/lsd/详情 (3).jpg",
            "/images/product/lsd/详情 (4).jpg",
            "/images/product/lsd/详情 (5).jpg",
            "/images/product/lsd/详情 (6).jpg",
            "/images/product/lsd/详情 (7).jpg"
        ]
    },
    {
        id: "gswv9fVh88",
        title: "扭力扳手",
        category: "manual",
        price: 198000,
        description: "扭力扳手",
        details: "<p>扭力扳手</p>",
        images: [
            "/images/product/nlbs/主图 (1).jpg",
            "/images/product/nlbs/主图 (2).jpg"
        ],
        features: [
            "LICOTA扭矩扳手系列经国家权威工具检测所认定，产品扭力精度被控制在±3之内"
        ],
        content: [
            "/images/product/nlbs/详情 (1).jpg",
            "/images/product/nlbs/详情 (2).jpg",
            "/images/product/nlbs/详情 (3).jpg",
            "/images/product/nlbs/详情 (4).jpg",
            "/images/product/nlbs/详情 (5).jpg",
            "/images/product/nlbs/详情 (6).jpg",
            "/images/product/nlbs/详情 (7).jpg",
            "/images/product/nlbs/详情 (8).jpg",
            "/images/product/nlbs/详情 (9).jpg"
        ]
    },
    {
        id: "lQowWIY64C",
        title: "钳子",
        category: "manual",
        price: 198000,
        description: "钳子",
        details: "<p>钳子</p>",
        images: [
            "/images/product/qz/主图 (1).jpg",
            "/images/product/qz/主图 (2).jpg"
        ],
        features: [
            "精密剪切刃口经热处理，硬度可达HRC60±2以上，剪切更锋利",
            "根据人体工学原理设计的双色环保材料手柄",
            "产品质量达到甚至超过德国DIN标准，美国ANSI标准"
        ],
        content: [
            "/images/product/qz/10 钳子类 110.jpg",
            "/images/product/qz/10 钳子类 111.jpg",
            "/images/product/qz/10 钳子类 112.jpg",
            "/images/product/qz/10 钳子类 113.jpg",
            "/images/product/qz/10 钳子类 114.jpg",
            "/images/product/qz/10 钳子类 115.jpg",
            "/images/product/qz/10 钳子类 116.jpg",
            "/images/product/qz/10 钳子类 117.jpg",
            "/images/product/qz/10 钳子类 118.jpg",
            "/images/product/qz/10 钳子类 119.jpg"
        ]
    },
    {
        id: "hU2G3lZLtg",
        title: "实耐宝新型扭力扳手",
        category: "manual",
        price: 198000,
        description: "实耐宝新型扭力扳手",
        details: "<p>实耐宝新型扭力扳手</p>",
        images: [
            "/images/product/snbnlbs/主图.jpg"
        ],
        features: [],
        content: [
            "/images/product/snbnlbs/详情 (1).jpg",
            "/images/product/snbnlbs/详情 (2).jpg",
            "/images/product/snbnlbs/详情 (3).jpg",
            "/images/product/snbnlbs/详情 (4).jpg"
        ]
    },
    {
        id: "pwZFfdeSlD",
        title: "套筒",
        category: "manual",
        price: 198000,
        description: "套筒",
        details: "<p>套筒</p>",
        images: [
            "/images/product/taotong/主图.jpg"
        ],
        features: [],
        content: [
            "/images/product/taotong/详情 (1).jpg",
            "/images/product/taotong/详情 (2).jpg",
            "/images/product/taotong/详情 (3).jpg",
            "/images/product/taotong/详情 (4).jpg",
            "/images/product/taotong/详情 (5).jpg"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/ProductContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductContent": ()=>ProductContent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/products.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/image/dist/chunk-BHGNW4BO.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProductContent(param) {
    let { productList } = param;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [childCategory, setChildCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("child_all");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 从路由参数中获取当前选中的分类
    const category = searchParams.get("category") || "all";
    // 根据分类筛选产品
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductContent.useMemo[filteredProducts]": ()=>{
            if (category === "all") {
                return productList;
            } else {
                return productList.filter({
                    "ProductContent.useMemo[filteredProducts]": (product)=>{
                        if (childCategory !== "child_all") {
                            return product.category === category && product.cate === childCategory;
                        } else {
                            return product.category === category;
                        }
                    }
                }["ProductContent.useMemo[filteredProducts]"]);
            }
        }
    }["ProductContent.useMemo[filteredProducts]"], [
        category,
        childCategory,
        productList
    ]);
    // 处理分类切换
    const handleCategoryChange = (newCategory)=>{
        // 根据分类切换路由参数
        setChildCategory("child_all");
        if (newCategory === "all") {
            router.push("/products");
        } else {
            router.push("/products?category=".concat(encodeURIComponent(newCategory)));
        }
    };
    const childCateList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductContent.useMemo[childCateList]": ()=>{
            var _productCateList_find;
            return ((_productCateList_find = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productCateList"].find({
                "ProductContent.useMemo[childCateList]": (item)=>item.value === category
            }["ProductContent.useMemo[childCateList]"])) === null || _productCateList_find === void 0 ? void 0 : _productCateList_find.children) || [];
        }
    }["ProductContent.useMemo[childCateList]"], [
        category
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-4",
                        children: "产品分类"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/ProductContent.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productCateList"].map((cat)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCategoryChange(cat.value),
                                className: "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ".concat(category === cat.value ? "bg-primary text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
                                children: cat.label
                            }, cat.value, false, {
                                fileName: "[project]/src/app/products/ProductContent.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/ProductContent.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3 mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setChildCategory("child_all"),
                                className: "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ".concat("child_all" === childCategory ? "bg-primary text-white shadow-md" : " text-gray-700 hover:bg-gray-200"),
                                children: "全部"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/ProductContent.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            childCateList.map((cat)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setChildCategory(cat.value),
                                    className: "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ".concat(childCategory === cat.value ? "bg-primary text-white shadow-md" : " text-gray-700 hover:bg-gray-200"),
                                    children: cat.label
                                }, cat.value, false, {
                                    fileName: "[project]/src/app/products/ProductContent.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/ProductContent.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/ProductContent.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: filteredProducts.map((product)=>{
                    var _productCateList_find;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-48 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                    src: product.images[0],
                                    alt: product.title,
                                    classNames: {
                                        img: "!max-w-full",
                                        wrapper: "object-cover h-48 w-full transition-transform duration-500 hover:scale-110 !max-w-full"
                                    },
                                    className: "object-cover h-48 w-full transition-transform duration-500 hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/ProductContent.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/ProductContent.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded",
                                        children: ((_productCateList_find = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productCateList"].find((cat)=>cat.value === product.category)) === null || _productCateList_find === void 0 ? void 0 : _productCateList_find.label) || product.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductContent.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-800 my-2 h-14 line-clamp-2",
                                        children: product.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductContent.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-4 line-clamp-2 h-12",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductContent.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products/details/".concat(product.id),
                                            className: "px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors",
                                            children: "查看详情"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/ProductContent.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/ProductContent.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/ProductContent.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/src/app/products/ProductContent.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/products/ProductContent.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/ProductContent.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ProductContent, "ejPan9kN5+AcBBjPzO8CXHAUbiU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductContent;
var _c;
__turbopack_context__.k.register(_c, "ProductContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_c71d116d._.js.map