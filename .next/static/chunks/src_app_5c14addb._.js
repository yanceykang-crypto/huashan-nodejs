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
"[project]/src/app/products/details/[id]/ProductDetail.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/products.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$chip$2f$dist$2f$chunk$2d$IHOGUXIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/chip/dist/chunk-IHOGUXIG.mjs [app-client] (ecmascript) <export chip_default as Chip>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ProductDetail = (param)=>{
    let { product } = param;
    var _productCateList_find;
    _s();
    const [currImage, setCurrImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/products",
                className: "inline-flex items-center text-primary hover:text-primary-600 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 19l-7-7 7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "返回产品列表"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-64 md:h-80 overflow-hidden rounded-lg mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: currImage || product.images[0],
                                            alt: product.title,
                                            fill: true,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2",
                                        children: product.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-16 overflow-hidden rounded-md cursor-pointer hover:opacity-80 transition-opacity",
                                                onClick: ()=>setCurrImage(image),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: image,
                                                    alt: "".concat(product.title, " - ").concat(index + 1),
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-white font-medium mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$chip$2f$dist$2f$chunk$2d$IHOGUXIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                            color: "primary",
                                            children: ((_productCateList_find = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productCateList"].find((cat)=>cat.value === product.category)) === null || _productCateList_find === void 0 ? void 0 : _productCateList_find.label) || product.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-bold text-gray-800 mb-4",
                                        children: product.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-6",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    product.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-gray-800 mb-3",
                                                children: "产品特点"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: product.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "!w-5 !h-5 text-green-500 mr-2 mt-0.5",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M5 13l4 4L19 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700 flex-1/2",
                                                                children: feature
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            color: "primary",
                                            className: "text-white bg-primary h-10 leading-10 px-4  rounded-md shadow-sm hover:bg-primary/90 transition-colors",
                                            children: "获得报价"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-200 p-6 md:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose max-w-none markdown-body",
                            dangerouslySetInnerHTML: {
                                __html: product.content || ""
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/details/[id]/ProductDetail.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductDetail, "ww1lPtUpKYAvWSYoBOdQM15ojz8=");
_c = ProductDetail;
const __TURBOPACK__default__export__ = ProductDetail;
var _c;
__turbopack_context__.k.register(_c, "ProductDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_5c14addb._.js.map