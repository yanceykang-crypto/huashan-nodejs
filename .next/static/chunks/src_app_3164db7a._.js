(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/config/nav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "mobileNavConfig": ()=>mobileNavConfig,
    "navConfig": ()=>navConfig
});
const mobileNavConfig = [
    {
        label: "关于化善",
        href: "/about"
    },
    {
        label: "合作伙伴",
        href: "/partner"
    },
    {
        label: "产品中心",
        href: "/products"
    },
    {
        label: "资质证书",
        href: "/honors"
    },
    {
        label: "联系我们",
        href: "/contact"
    }
];
const navConfig = [
    {
        label: "关于化善",
        href: "/about",
        children: [
            {
                label: "合作伙伴",
                href: "/partner"
            },
            {
                href: "/about",
                label: "关于我们"
            }
        ]
    },
    {
        label: "产品中心",
        href: "/products",
        children: [
            {
                label: "全部产品",
                href: "/products"
            },
            {
                label: "气动工具",
                href: "/products?category=pneumatic"
            },
            {
                label: "电动工具",
                href: "/products?category=electric"
            },
            {
                label: " 手动工具",
                href: "/products?category=manual"
            },
            {
                label: "喷涂工具",
                href: "/products?category=spraying"
            }
        ]
    },
    {
        label: "资质证书",
        href: "/honors",
        children: [
            {
                label: "资质证书",
                href: "/honors?type=certificate"
            },
            {
                label: "授权证书",
                href: "/honors?type=license"
            }
        ]
    },
    {
        label: "联系我们",
        href: "/contact"
    },
    {
        label: "新闻中心",
        href: "/news"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/myfont_1b16344f.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "myfont_1b16344f-module__N5Wp5a__className",
  "variable": "myfont_1b16344f-module__N5Wp5a__variable",
});
}),
"[project]/src/app/components/myfont_1b16344f.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$myfont_1b16344f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/myfont_1b16344f.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$myfont_1b16344f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'myFont', 'myFont Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$myfont_1b16344f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$myfont_1b16344f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Search.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$drawer$2f$dist$2f$chunk$2d$3T5MLG3K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__drawer_default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/drawer/dist/chunk-3T5MLG3K.mjs [app-client] (ecmascript) <export drawer_default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$NWAOTABO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__DrawerContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/modal/dist/chunk-NWAOTABO.mjs [app-client] (ecmascript) <export modal_content_default as DrawerContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__DrawerBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/modal/dist/chunk-FOPEYBSC.mjs [app-client] (ecmascript) <export modal_body_default as DrawerBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/image/dist/chunk-BHGNW4BO.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$SSA7SXE4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/input/dist/chunk-SSA7SXE4.mjs [app-client] (ecmascript) <export input_default as Input>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Search = (param)=>{
    let { isOpen, onClose } = param;
    _s();
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const onSearch = ()=>{
        if (!searchValue) {
            return;
        }
        window.location.href = "https://www.baidu.com/s?wd=".concat(searchValue, " site:www.dghuashan.com");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$drawer$2f$dist$2f$chunk$2d$3T5MLG3K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__drawer_default__as__Drawer$3e$__["Drawer"], {
        isOpen: isOpen,
        size: "full",
        onClose: onClose,
        className: "z-[200]",
        classNames: {
            closeButton: "text-white bg-primary"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$NWAOTABO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__DrawerContent$3e$__["DrawerContent"], {
            children: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__DrawerBody$3e$__["DrawerBody"], {
                        className: "bg-black text-white px-10 md:px-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex flex-col justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10 -mt-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                        src: "/images/site_logo.png",
                                        className: "h-16",
                                        alt: "logo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 37,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Search.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-5 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$SSA7SXE4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                            color: "default",
                                            placeholder: "Type to search...",
                                            size: "lg",
                                            className: "flex-1",
                                            classNames: {
                                                input: "text-default placeholder:text-[#000]"
                                            },
                                            onChange: (e)=>setSearchValue(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Search.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                            size: "lg",
                                            color: "primary",
                                            onPress: ()=>{
                                                onSearch();
                                            },
                                            children: "搜索"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Search.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Search.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Search.tsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Search.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Search.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Search, "F12Wsjogj0HVecr0VGWn/MCEg+A=");
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$myfont_1b16344f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/myfont_1b16344f.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$GACT3GHG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/navbar/dist/chunk-GACT3GHG.mjs [app-client] (ecmascript) <export navbar_default as Navbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$4DMBHLGU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/navbar/dist/chunk-4DMBHLGU.mjs [app-client] (ecmascript) <export navbar_brand_default as NavbarBrand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$UYTDJMPP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/navbar/dist/chunk-UYTDJMPP.mjs [app-client] (ecmascript) <export navbar_content_default as NavbarContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5LMKFFWA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/navbar/dist/chunk-5LMKFFWA.mjs [app-client] (ecmascript) <export navbar_item_default as NavbarItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/image/dist/chunk-BHGNW4BO.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$dropdown$2f$dist$2f$chunk$2d$XHRYXXZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/dropdown/dist/chunk-XHRYXXZA.mjs [app-client] (ecmascript) <export dropdown_default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$menu$2f$dist$2f$chunk$2d$BIY4SM4Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/menu/dist/chunk-BIY4SM4Z.mjs [app-client] (ecmascript) <export menu_item_base_default as DropdownItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$dropdown$2f$dist$2f$chunk$2d$UIQ4674R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/dropdown/dist/chunk-UIQ4674R.mjs [app-client] (ecmascript) <export dropdown_menu_default as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$dropdown$2f$dist$2f$chunk$2d$4LJ2IKXJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/dropdown/dist/chunk-4LJ2IKXJ.mjs [app-client] (ecmascript) <export dropdown_trigger_default as DropdownTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$menu$2f$dist$2f$chunk$2d$X7MTWOQW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/menu/dist/chunk-X7MTWOQW.mjs [app-client] (ecmascript) <export menu_section_base_default as DropdownSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/link/dist/chunk-JOT4BT4P.mjs [app-client] (ecmascript) <export link_default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$HAU6HCV4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_menu_toggle_default__as__NavbarMenuToggle$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/navbar/dist/chunk-HAU6HCV4.mjs [app-client] (ecmascript) <export navbar_menu_toggle_default as NavbarMenuToggle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$SOOT4SRX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_menu_default__as__NavbarMenu$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/navbar/dist/chunk-SOOT4SRX.mjs [app-client] (ecmascript) <export navbar_menu_default as NavbarMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$W4R67QGI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_menu_item_default__as__NavbarMenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/navbar/dist/chunk-W4R67QGI.mjs [app-client] (ecmascript) <export navbar_menu_item_default as NavbarMenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Search.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleMouseEnter]": (href)=>{
            setIsOpen(href || "");
        }
    }["Header.useCallback[handleMouseEnter]"], []);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleMouseLeave]": ()=>{
            setIsOpen("");
        }
    }["Header.useCallback[handleMouseLeave]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$GACT3GHG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__["Navbar"], {
            maxWidth: "xl",
            className: "h-20 border-b border-gray-200 bg-gray-50",
            classNames: {
                wrapper: "px-3"
            },
            onMouseLeave: ()=>handleMouseLeave(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$4DMBHLGU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__["NavbarBrand"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                src: "/images/site_logo.png",
                                className: "h-16",
                                alt: "logo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl ml-4 text-primary font-light hidden sm:block ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$myfont_1b16344f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                src: "/images/site_sulg.png",
                                className: "h-6",
                                alt: "logo",
                                classNames: {
                                    wrapper: "rounded-none",
                                    img: "rounded-none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$UYTDJMPP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                    className: "lg:hidden",
                    justify: "center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$HAU6HCV4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_menu_toggle_default__as__NavbarMenuToggle$3e$__["NavbarMenuToggle"], {}, void 0, false, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$SOOT4SRX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_menu_default__as__NavbarMenu$3e$__["NavbarMenu"], {
                    className: "mt-3 bg-white",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileNavConfig"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$W4R67QGI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_menu_item_default__as__NavbarMenuItem$3e$__["NavbarMenuItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                className: "w-full",
                                href: item.href,
                                size: "lg",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        }, "".concat(item, "-").concat(index), false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$UYTDJMPP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                    className: "hidden lg:flex gap-6",
                    justify: "center",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navConfig"].map((item, index)=>{
                        var _item_children;
                        if ((_item_children = item.children) === null || _item_children === void 0 ? void 0 : _item_children.length) {
                            var _item_children1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$dropdown$2f$dist$2f$chunk$2d$XHRYXXZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__["Dropdown"], {
                                offset: 30,
                                showArrow: true,
                                isOpen: isOpen === item.href,
                                onMouseLeave: ()=>handleMouseLeave(),
                                onMouseEnter: ()=>handleMouseEnter(item.href),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5LMKFFWA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__["NavbarItem"], {
                                        onMouseEnter: ()=>handleMouseEnter(item.href),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$dropdown$2f$dist$2f$chunk$2d$4LJ2IKXJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__["DropdownTrigger"], {
                                            trigger: "hover",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                                color: "foreground",
                                                children: [
                                                    item.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        color: "#ccc",
                                                        className: "pl-1",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Header.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 86,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$dropdown$2f$dist$2f$chunk$2d$UIQ4674R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__["DropdownMenu"], {
                                        "aria-label": "ACME features",
                                        className: "font-bold gap-1 ",
                                        children: (_item_children1 = item.children) === null || _item_children1 === void 0 ? void 0 : _item_children1.map((child, index)=>{
                                            var _child_children;
                                            if ((_child_children = child.children) === null || _child_children === void 0 ? void 0 : _child_children.length) {
                                                var _child_children1;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$menu$2f$dist$2f$chunk$2d$X7MTWOQW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                    title: child.label,
                                                    className: "text-stone-400 text-sm font-normal",
                                                    children: (_child_children1 = child.children) === null || _child_children1 === void 0 ? void 0 : _child_children1.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$menu$2f$dist$2f$chunk$2d$BIY4SM4Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                            startContent: item.icon,
                                                            className: "my-1 text-black data-[hover=true]:bg-primary data-[hover=true]:text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                                                color: "foreground",
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Header.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "[project]/src/app/components/Header.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 31
                                                        }, this))
                                                }, index, false, {
                                                    fileName: "[project]/src/app/components/Header.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 27
                                                }, this);
                                            } else {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$menu$2f$dist$2f$chunk$2d$BIY4SM4Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                    href: child.href,
                                                    // className="data-[hover=true]:text-white"
                                                    variant: "flat",
                                                    color: "danger",
                                                    startContent: child.icon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                                        color: "foreground",
                                                        href: child.href,
                                                        children: child.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Header.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 29
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/app/components/Header.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 27
                                                }, this);
                                            }
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, this);
                        } else {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$navbar$2f$dist$2f$chunk$2d$5LMKFFWA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__["NavbarItem"], {
                                onMouseLeave: ()=>handleMouseLeave(),
                                onMouseEnter: ()=>handleMouseEnter(item.href),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                    color: "foreground",
                                    href: item.href,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 19
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, this);
                        }
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    variant: "light",
                    isIconOnly: true,
                    onPress: ()=>setIsSearchOpen(true),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isSearchOpen,
                    onClose: ()=>setIsSearchOpen(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Header.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Header, "2SDf9SJcKLP6L69lUremmkhodz0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Icons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrandIcon": ()=>BrandIcon,
    "CCCIcon": ()=>CCCIcon,
    "CarIcon": ()=>CarIcon,
    "CustomServiceIcon": ()=>CustomServiceIcon,
    "HouseholdIcon": ()=>HouseholdIcon,
    "MonitorSetIcon": ()=>MonitorSetIcon,
    "OtherIcon": ()=>OtherIcon,
    "PriceIcon": ()=>PriceIcon,
    "ReliIcon": ()=>ReliIcon,
    "WXIcon": ()=>WXIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const HouseholdIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "icon",
        viewBox: "0 0 1070 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "6419",
        width: "200",
        height: "200",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M325.189818 934.120727H1.210182V0h524.171636v190.068364a23.412364 23.412364 0 0 1-46.824727 0V46.545455H48.034909v841.029818h277.154909a23.272727 23.272727 0 1 1 0 46.545454z m166.539637-536.017454H23.528727a23.272727 23.272727 0 1 1 0-46.545455h468.200728a23.272727 23.272727 0 1 1 0 46.545455z m-351.13891-69.818182H93.765818v-116.363636H140.567273v116.363636z m0 325.818182H93.765818v-186.181818H140.567273v186.181818zM1070.382545 1024H313.181091V172.218182h757.201454V1024z m-710.376727-46.545455h663.575273V218.763636H360.005818V977.454545z m693.527273-579.351272H327.842909v-46.545455H1053.556364v46.545455zM676.328727 919.272727a228.840727 228.840727 0 1 1 230.190546-228.840727 229.771636 229.771636 0 0 1-230.190546 228.840727z m0-411.136a182.295273 182.295273 0 1 0 183.365818 182.295273 183.04 183.04 0 0 0-183.365818-182.295273z m283.578182-203.124363h-93.626182v-46.545455h93.626182v46.545455z m-117.038545 0h-46.824728v-46.545455h46.824728v46.545455z m-70.237091 0h-46.801455v-46.545455H772.654545v46.545455z m-96.302546 517.306181a131.886545 131.886545 0 1 1 132.654546-131.886545 132.421818 132.421818 0 0 1-132.654546 131.886545z m0-217.227636a85.341091 85.341091 0 1 0 85.829818 85.341091A85.690182 85.690182 0 0 0 676.328727 605.090909z",
            fill: "currentColor",
            "p-id": "6420"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Icons.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HouseholdIcon;
const OtherIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        version: "1.1",
        id: "图层_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 200 200",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32.3,49.8c-0.8,0-1.6-0.2-2.3-0.6c-2.2-1.3-3-4.2-1.7-6.4C37,27.7,50.8,15.5,66.7,8.4c2.3-1.1,5.2,0,6.3,2.3s0,5.2-2.3,6.3  c-14.2,6.3-26.4,17-34.2,30.5C35.6,49.1,34.1,49.8,32.3,49.8z M24.8,67.5c-0.5,0-0.9,0-1.3-0.2c-2-0.6-3.4-2.5-3.4-4.5  c0-0.5,0-0.9,0.2-1.2c0.8-2.5,3.3-4.1,5.8-3.3c2,0.6,3.4,2.5,3.4,4.4c0,0.5,0,0.8-0.2,1.3v0.2C28.8,66.1,26.9,67.5,24.8,67.5z  M54.7,46.1c-1.1,0-2.3-0.5-3.3-1.3c-1.9-1.7-2-4.7-0.2-6.6c6.1-6.4,13.1-11.4,21.1-15c2.3-1.1,5.2,0,6.3,2.3c1.1,2.3,0,5.2-2.3,6.3  c-6.9,3.1-13,7.5-18.1,13C57.2,45.6,55.9,46.1,54.7,46.1z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M115.6,198.4H84.4c-1.3,0-2.5-0.5-3.4-1.4s-1.4-2.2-1.3-3.4l3.1-73.6c0.2-2.7,2.2-4.7,4.8-4.5s4.5,2.3,4.5,4.8l-3,68.7h21.4  l-4.1-87c-0.2-2.7,1.9-4.8,4.5-4.8c2.7-0.2,4.8,1.9,4.8,4.5l4.2,91.9c0,1.3-0.5,2.5-1.3,3.4S116.9,198.4,115.6,198.4L115.6,198.4z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M162.5,198.4H36.4c-2.7,0-4.7-2-4.7-4.7s2-4.7,4.7-4.7h126.1c2.7,0,4.7,2,4.7,4.7S165.2,198.4,162.5,198.4z M185.9,198.4  c-0.3,0-0.6,0-0.9-0.2c-0.3,0-0.6-0.2-0.9-0.3c-0.3-0.2-0.5-0.3-0.8-0.5s-0.5-0.3-0.8-0.6l-0.6-0.6c-0.2-0.3-0.3-0.5-0.5-0.8  s-0.2-0.6-0.3-0.9c0-0.3-0.2-0.6-0.2-0.9c0-0.3,0-0.6,0.2-0.9c0-0.3,0.2-0.6,0.3-0.9c0.2-0.3,0.3-0.5,0.5-0.8s0.3-0.5,0.6-0.6  c0.3-0.2,0.5-0.5,0.8-0.6c0.3-0.2,0.5-0.3,0.8-0.5s0.6-0.2,0.9-0.3c0.6-0.2,1.3-0.2,1.9,0c0.3,0,0.6,0.2,0.9,0.3  c0.3,0.2,0.6,0.3,0.8,0.5c0.3,0.2,0.5,0.3,0.8,0.6l0.6,0.6c0.2,0.3,0.3,0.5,0.5,0.8s0.2,0.6,0.3,0.9c0,0.3,0.2,0.6,0.2,0.9  c0,0.3,0,0.6-0.2,0.9c0,0.3-0.2,0.6-0.3,0.9s-0.3,0.6-0.5,0.8c-0.2,0.3-0.3,0.5-0.6,0.6c-0.2,0.2-0.5,0.5-0.8,0.6  c-0.3,0.2-0.5,0.3-0.8,0.5s-0.6,0.2-0.9,0.3C186.6,198.4,186.3,198.4,185.9,198.4z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M85.9,108.1c-1.7,0-3.3-0.9-4.2-2.5c-1.3-2.3-0.3-5.2,2-6.3c10.2-5.2,22.3-5.3,32.7-0.2c2.3,1.1,3.3,4.1,2,6.3  c-1.1,2.3-4.1,3.3-6.3,2c-7.5-3.8-16.6-3.8-24.1,0C87.3,108,86.6,108.1,85.9,108.1L85.9,108.1z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M123.4,91.9c-0.9,0-1.7-0.3-2.5-0.8c-9.5-6.3-15.6-16.7-16.3-28.1c-0.2-2.7,1.9-4.8,4.4-5s4.8,1.9,5,4.4  c0.5,8.4,5,16.3,12,20.8c2.2,1.4,2.8,4.4,1.4,6.6C126.6,91.1,125,91.9,123.4,91.9z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M90.6,67.5h-0.3c-2.7-0.2-4.5-2.3-4.4-5l2.8-50.3c0.2-3.1,1.6-5.9,3.9-8s5.5-3,8.4-2.7c5.5,0.6,9.8,5.3,10.2,10.9l2.8,49.8  c0.2,2.7-1.9,4.8-4.4,5s-4.8-1.9-5-4.4l-2.8-50c0-1.1-0.8-2-1.7-2c-0.6,0-1.3,0.2-1.4,0.5c-0.2,0.2-0.6,0.6-0.6,1.4L95.3,63  C95.2,65.6,93.1,67.5,90.6,67.5z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M162,131.4c-1.7,0-3.4-0.5-5.2-1.3L109.1,106c-2.3-1.1-3.3-4.1-2-6.3c1.1-2.3,4.1-3.3,6.3-2l47.7,24.1  c0.6,0.3,1.3,0.2,1.6,0.2c0.3-0.2,0.8-0.5,1.1-1.1c0.3-0.8,0-1.9-0.9-2.5L121,91.1c-2.2-1.4-2.8-4.4-1.4-6.6s4.4-2.8,6.6-1.4  l41.9,27.2c4.7,3.1,6.6,9.2,4.4,14.2c-1.3,2.8-3.6,5-6.6,6.1C164.5,131.1,163.3,131.4,162,131.4L162,131.4z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38.3,131.7c-1.3,0-2.5-0.2-3.8-0.6c-3-1.1-5.3-3.1-6.6-6.1c-2.2-5-0.5-11.1,4.4-14.2l41.9-27.7c2.2-1.4,5-0.8,6.6,1.4  c1.4,2.2,0.8,5-1.4,6.6l-42,27.7c-0.9,0.6-1.3,1.7-0.9,2.5c0.3,0.6,0.8,0.9,1.1,1.1s0.9,0.2,1.6-0.2l47.5-24.4  c2.3-1.3,5.2-0.3,6.3,2c1.3,2.3,0.3,5.2-2,6.2l-47.3,24.4C41.7,131.3,40,131.7,38.3,131.7z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M93.8,84.4c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3C96.5,78.1,93.8,80.9,93.8,84.4z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = OtherIcon;
const CCCIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        version: "1.1",
        id: "图层_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 200.4 200.4",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M194.6,97c-2.5,2.9-5,5.7-7.4,8.5c-4.9-5-9.6-9.8-14.6-14.8c1.8-1.7,3.9-3.6,6-5.7c2.3-2.3,4.5-2,6.6,0.2   c3.1,3.2,6.3,6.4,9.4,9.5C194.6,95.4,194.6,96.2,194.6,97z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M86,174c-3.7-1.5-5.2-4.1-4.7-8.1c0.4-3.3,0.1-6.6,0.1-10.2c4.9,0,9.5,0,14.6,0c0,4.5,0.4,9.1-0.2,13.6   c-0.2,1.7-2.8,3.1-4.4,4.7C89.6,174,87.8,174,86,174z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M114.5,174c-3.5-1.8-4.6-4.6-4.2-8.5c0.3-3.2,0.1-6.4,0.1-9.9c4.9,0,9.6,0,14.6,0c0,4.7,0.4,9.3-0.2,13.8   c-0.2,1.7-2.7,3-4.1,4.5C118.6,174,116.6,174,114.5,174z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M56.8,174c-3.5-1.7-4.9-4.3-4.5-8.3c0.3-3.3,0.1-6.6,0.1-10.1c5,0,9.5,0,14.6,0c0,4.7,0.3,9.5-0.2,14.1   c-0.2,1.6-2.5,2.9-3.8,4.3C60.9,174,58.8,174,56.8,174z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M99,53c20.1,0,40.2,0,59.8,0c2,0,3.8,0.3,5.4,0.7c1,0.3,1.4,0.5,1.3,2c0,2.6,0,5.3,0,7.9c0,3.7,0,7.3-0.1,10.8   c0,0.4-0.3,1.1-0.5,1.3c-17.4,17.8-35.4,35.9-53.3,53.9c-2.2,2.2-5,5.7-4.6,11.7c0.1,1.6,0.1,3.2,0.1,5c-4.5,0-9,0-13.4,0   c-5,0-10.1,0-15.1,0c-9.7,0-22.4,0-35.2-0.1c-2.1,0-3.7-0.5-4.4-0.9c-0.2-0.2-0.6-0.8-0.8-1.1C38,119.6,38,94.5,38,70.2   c0-5.1,0-10.3,0-15.4c0-0.4,0-0.7,1.5-1.2c1.3-0.4,3-0.6,5-0.6C62.8,53,81.2,53,99,53 M99,47c-18.2,0-36.4,0-54.6,0   c-2.3,0-4.7,0.2-6.8,0.9C34.4,49,32,51,32,54.9c0,29.9-0.1,59.8,0.1,89.7c0,2,1.8,4.7,3.5,5.8c2.1,1.4,5,1.9,7.6,1.9   c11.8,0.1,23.5,0.1,35.2,0.1c10.1,0,20.1,0,30.2,0c1.3,0,2.5,0,4.3,0c0-4.2,0.2-7.8-0.1-11.4c-0.2-2.9,0.8-5,2.9-7   c17.9-17.9,35.7-35.8,53.4-53.9c1.3-1.3,2.1-3.5,2.2-5.3c0.3-6.3,0-12.6,0.1-18.9c0.1-4.1-1.9-6.7-5.5-7.8c-2.3-0.7-4.8-1-7.2-1   C138.9,47,119,47,99,47L99,47z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M168.1,104.4c1.8,1.8,3.8,3.8,5.8,5.8c-0.6,0.6-1.2,1.1-1.8,1.7c-4.2,4.1-8.6,8.3-12.9,12.5c-7.1,7-14,13.9-20.7,20.9   c-1.1,1.1-1.6,1.1-2.2,1.1c-0.1,0-0.3,0-0.4,0c-1.3-0.1-2.6-0.1-4.2-0.1c-0.2,0-0.3,0-0.5,0c0-2.1,0-4.1,0-6.1   c10.9-10.7,22.1-21.5,32.8-32L168.1,104.4 M168.1,96c-13.9,13.6-27.7,27-41.5,40.4c-0.6,0.6-1.3,1.4-1.3,2.2   c-0.1,4.5-0.1,9.1-0.1,13.8c2.3,0,4.4-0.1,6.4-0.1c1.3,0,2.5,0,3.7,0.1c0.3,0,0.6,0,0.9,0c2.6,0,4.6-1,6.5-3   c6.7-7.1,13.6-13.9,20.5-20.8c6.3-6.2,12.7-12.3,19-18.4C177.1,105,172.4,100.3,168.1,96L168.1,96z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M52.3,44.4c0-4.7-0.1-9,0-13.3c0.1-3.1,3-5,7-5c4.1-0.1,7.3,1.6,7.5,4.5c0.3,4.6,0.1,9.1,0.1,13.9   C62,44.4,57.5,44.4,52.3,44.4z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M96,44.6c-5.1,0-9.6,0-14.6,0c0-4.9-0.2-9.7,0.1-14.5c0.2-2.7,4.2-4.4,8.3-3.9c3.1,0.4,6,1.3,6.2,5.1   C96.2,35.5,96,39.9,96,44.6z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M125,44.4c-4.9,0-9.5,0-14.5,0c0-4.7-0.2-9.4,0.1-14.1c0.2-2.8,3.5-4.5,7.6-4.3c3.2,0.2,6.4,1,6.8,4.8   C125.3,35.3,125,39.8,125,44.4z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M139.3,44.6c0-4.9-0.1-9.3,0.1-13.6c0.1-3.3,3.4-5.1,7.8-5c4.1,0.2,6.6,2,6.7,5.3c0.1,4.2,0,8.4,0,13.3c-2.5,0-4.9,0-7.3,0   C144.4,44.6,142.1,44.6,139.3,44.6z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M28.7,92.8c0,4.9,0,9.2,0,13.9c-4.8,0-9.4,0.3-13.9-0.1c-3.8-0.4-4.6-3.8-4.5-7c0.1-3.2,0.9-6.4,4.8-6.7   C19.5,92.5,24,92.8,28.7,92.8z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M28.7,64.6c0,4.7,0,9,0,13.8c-4.8,0-9.6,0.5-14.3-0.2c-3.7-0.5-4.2-4.1-4.1-7.3c0.1-3.1,1.2-6.1,4.8-6.3   C19.6,64.4,24,64.6,28.7,64.6z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M28.8,120.9c0,4.8,0,9.1,0,13.8c-5,0-9.8,0.5-14.5-0.2c-3.7-0.5-4-4.2-3.9-7.3c0.2-3.9,2-6.1,5.4-6.3   C19.9,120.8,24.1,120.9,28.8,120.9z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M174.7,78.5c0-4.9,0-9.2,0-13.9c4.8,0,9.4-0.4,13.9,0.1c3.8,0.4,4.5,3.8,4.5,7c0.1,3.9-1.8,6.6-4.8,6.7   C183.8,78.6,179.4,78.5,174.7,78.5z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M77.5,97.7c0,3.6-1.3,6.3-3.8,8.3c-2.2,1.8-5,2.7-8.3,2.7H47.4v-5.3h17.8c4.5,0,6.7-1.9,6.7-5.6c0-3.9-2.4-5.8-7.4-5.8   H47.6v-5.3h17.6c4.3,0,6.5-1.8,6.5-5.3c0-3.1-2.1-4.7-6.2-4.7H46.7v-5.4h18.7c2.8,0,5.2,0.6,7.1,1.8c3,1.6,4.5,4.4,4.5,8.3   c0,3.7-1.2,6.5-3.6,8.3C76.1,91.1,77.5,93.9,77.5,97.7z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Icons.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M114.7,108.7h-14c-11.7,0-17.6-6.2-17.6-18.7c0-12.5,5.9-18.7,17.6-18.7h14v5.3h-14c-3.7,0-6.5,0.7-8.3,2   c-2.8,2.1-4.2,5.9-4.2,11.4s1.4,9.2,4.2,11.2c1.8,1.5,4.5,2.2,8.3,2.2h14V108.7z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Icons.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = CCCIcon;
const CarIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        version: "1.1",
        id: "图层_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 200.4 200",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.2,10.4c8.9,0,16.1,7.3,16.1,16.3S56.1,43,47.2,43s-16.1-7.3-16.1-16.3S38.3,10.4,47.2,10.4L47.2,10.4L47.2,10.4   M47.2,4.4C47.2,4.4,47.2,4.4,47.2,4.4c-12.2,0-22.1,10-22.1,22.3S35,49,47.2,49c12.2,0,22.1-10,22.1-22.3   C69.3,14.3,59.4,4.4,47.2,4.4L47.2,4.4z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M134.3,125.4c-18.6,0-33.7,15.2-33.7,34c0,18.8,15.1,34,33.7,34c18.6,0,33.7-15.2,33.7-34  C168,140.6,152.9,125.4,134.3,125.4",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "6"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M134.3,175c-8.6,0-15.5-7-15.5-15.6c0-8.6,6.9-15.7,15.5-15.7c8.6,0,15.5,7,15.5,15.7  C149.8,168,142.9,175,134.3,175L134.3,175",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "6"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M88.5,30.2L88.5,30.2L88.5,30.2 M88.3,30.4c2.7,0.1,11.4,4.2,27.4,19.3c11.4,10.8,20.5,21.6,22.1,24.4l1.4,6.4l6.5-2.6   l48.7-19.3v99.4h-12.7c-0.6-26.5-21.9-47.9-48-47.9c-26.2,0-47.5,21.4-48,47.9h-1.8c-5.2,0-12.5-6.9-12.5-11.8v-27   c0-11.4,3.7-13.1,8.9-15.3c1.3-0.6,2.7-1.2,4-2l46.9-18.2l7.9-3l-5.5-6.4c-3-3.6-28.9-33.6-45.9-40c-0.4-0.9-0.7-1.8-0.6-2.5   C87.3,31.3,87.7,30.9,88.3,30.4 M88.2,24.4c-1.1,0-2.1,0.2-2.9,0.8c-8.3,5.4-1.3,14-1.3,14c15.4,3.8,45.2,38.9,45.2,38.9L81.7,96.5   c-5.6,3.6-16.2,3.6-16.2,22.7v27c0,8.3,10.3,17.8,18.5,17.8h8c-0.1,0-0.2-3.6-0.2-5.1c0-23.4,18.8-42.8,42-42.8   c23.2,0,42,19.6,42,43c0,1.4-0.1,4.9-0.2,4.9h24.9V49.7l-56.9,22.6C142.4,67.4,103,24.4,88.2,24.4L88.2,24.4z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M106,100.1c0,0-36.9,1-27.8,18.8L106,100.1L106,100.1z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M29.6,51.6c6.3,2.7,9.6,9.5,12.9,16.1c3.7,7.6,7.9,16.1,17.2,16.1c2.4,0,4.9-0.6,7.7-1.8c3.9-1.8,7.7-2.7,11.1-2.7   c3.8,0,6,1.1,6.4,1.4c1.8,1.3,2.4,2.2,2.6,2.6c-0.4,0.6-2.7,3-12,5.6c-5.6,1.6-11,2.5-12.2,2.6c-0.5,0-0.9,0-1.4,0   c-12.5,0-15-5.6-15.3-6.3L45,75.9l-6.9,7c-12.5,12.6-12.7,42.6-12.6,46v47.5c-2.3,2.1-5.2,4.1-8.1,4.1c-3.2,0-5.6-2.3-6.8-3.7   v-47.2v-0.9l-0.3-0.8C1,101.6,6.9,81.3,7,81.1L7,81l0-0.1C13.5,55.7,26.2,52.1,29.6,51.6 M30.3,46.5c0,0-19.6,0-28.1,33.2   c0,0-6.7,21.6,3.3,49.9v48.9c0,0,4.4,7,11.8,7c3.7,0,8.1-1.7,13.1-7v-49.6c0,0-0.2-31,11.2-42.5c0,0,2.4,10.1,20.2,10.1   c0.6,0,1.2,0,1.8,0c0,0,43-6.1,24-20c0,0-3.2-2.2-9.2-2.2c-3.5,0-7.9,0.8-13.2,3.1c-2.1,1-4,1.4-5.6,1.4   C46.9,78.8,47.5,52.4,30.3,46.5L30.3,46.5z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = CarIcon;
const MonitorSetIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        version: "1.1",
        id: "图层_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 200 200",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.5,68.3l85.3,5.6l2.3,0.1c2.6,10.5,8.5,20,16.9,27l0,78.8l-5.4,5.1l-18.3-60.7l-2.6-8.6l-7,5.7L62.5,143l-3.9,3.1   l-2.3,1.8l0,3l0.2,13.6l-0.4,0.4l-7.7-17.4l-0.8-1.9l-1.8-1l-0.4-0.2l-17.7-9.7l0.5-0.5l13.1,1.1l3,0.2l2-2.3l0.1-0.1   c0.4-0.5,0.8-1,1.2-1.3l0.2-0.1l0.1-0.2l25-27l6.1-6.6l-8.4-3.1L12.2,73.3L17.5,68.3 M109.6,62l-6.4,5.9l-87.9-5.8L0.9,75.6   l67.6,24.9l-25,27c-0.7,0.6-1.2,1.3-1.8,1.9l-15.7-1.3l-8.5,8l25,13.6L43,150L54,175.1l8.5-8l-0.3-16.3l4-3.1L92.5,126l21.1,69.9   l14.4-13.5l0-84.3C116.6,89.8,109.6,76.4,109.6,62L109.6,62z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M173.8,30.1c11,6.5,18,18.4,18,31.7c0,12.9-7,24.9-18.3,31.5l-3,1.7v3.5v83.3c0,4.6-3.6,8.2-8.2,8.2h-14.6   c-4.6,0-8.2-3.6-8.2-8.2V98.4v-3.5l-3-1.7c-11.2-6.4-18.2-18.4-18.2-31.5c0-13,7.1-25,18-31.6v29.1v6h6h25.4h6v-6V30.1 M142.4,20.9   c-17.1,5.4-30,21.7-30,40.8c0,15.8,8.8,29.6,21.3,36.7v83.3c0,7.9,6.3,14.2,14.2,14.2h14.6c7.9,0,14.2-6.3,14.2-14.2V98.4   c12.9-7.5,21.2-21.3,21.2-36.7c0-19.2-12.5-35.4-30-40.8v38.3h-25.4V20.9L142.4,20.9z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Icons.tsx",
                    lineNumber: 326,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = MonitorSetIcon;
const WXIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "8168",
        width: "200",
        height: "200",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M511 181.2c-182.3 0-330 147.7-330 330s147.7 330 330 330 330-147.7 330-330-147.7-330-330-330z m45.5 373.5l12.3-12.5c6.3-6.5 16.5-6.5 22.8 0l99.9 102.9c6.3 6.4 6.3 16.8 0 23.2l-45.6 46.6c-6.3 6.4-16.5 6.4-22.8 0l-99.9-103c-6.3-6.4-6.3-16.8 0-23.2l11.2-11.5-19.6-20.1-138 154c-12.6 12.9-33 12.9-45.6 0l-11.4-11.6c-12.6-12.9-12.6-33.6 0-46.5L477 518.4l-104.5-107-33-0.1-38.2-62.7 30.8-31.4 62.8 39.3 0.5 33L501 497.9l30.8-26.4c-30-41.8-27-100.7 10.1-138.6 30.7-31.4 75.8-39.2 113.7-23.4l-67.7 68.2 56.9 58.1 67.9-68.3c15.8 38.8 8.2 85-22.6 116.6-34 34.7-85.4 40.1-125.3 17.2l-28.9 32.2 20.6 21.2z",
                "p-id": "8169"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M511.3 127.3c51.9 0 102.2 10.1 149.5 30.2 45.7 19.3 86.8 47 122.1 82.3s63 76.4 82.3 122.1c20 47.3 30.2 97.6 30.2 149.5s-10.1 102.2-30.2 149.5c-19.3 45.7-47 86.8-82.3 122.1s-76.4 63-122.1 82.3c-47.3 20-97.6 30.2-149.5 30.2s-102.2-10.1-149.5-30.2c-45.7-19.3-86.8-47-122.1-82.3s-63-76.4-82.3-122.1c-20-47.3-30.2-97.6-30.2-149.5s10.1-102.2 30.2-149.5c19.3-45.7 47-86.8 82.3-122.1s76.4-63 122.1-82.3c47.4-20 97.7-30.2 149.5-30.2m0-64c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.5-448-448-448z",
                "p-id": "8170"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = WXIcon;
const PriceIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "10089",
        width: "200",
        height: "200",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z m0 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z",
                "p-id": "10090"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M689.450667 266.538667a42.666667 42.666667 0 0 1 7.253333 55.978666l-3.242667 4.266667L605.994667 426.666667H661.333333a42.666667 42.666667 0 0 1 4.992 85.034666L661.333333 512H554.666667v85.333333h85.333333a42.666667 42.666667 0 0 1 4.992 85.034667L640 682.666667h-85.333333v42.666666a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 725.333333v-42.666666H384a42.666667 42.666667 0 0 1-4.992-85.034667L384 597.333333h85.333333v-85.333333H362.666667a42.666667 42.666667 0 0 1-4.992-85.034667L362.666667 426.666667h55.296L330.538667 326.784a42.666667 42.666667 0 0 1 60.458666-60.032l3.797334 3.84L512 404.48l117.205333-133.973333a42.666667 42.666667 0 0 1 60.245334-4.010667z",
                "p-id": "10091"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = PriceIcon;
const BrandIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "14609",
        width: "200",
        height: "200",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M815.453267 208.56106C734.511793 127.650285 626.752534 83.078137 512.01535 83.078137c-114.76993 0-222.497467 44.572148-303.43894 125.482923C127.665635 289.502533 83.093487 397.261793 83.093487 512c0 114.767883 44.572148 222.497467 125.482923 303.43894C289.517883 896.349715 397.24542 940.921863 512.01535 940.921863c114.738207 0 222.497467-44.572148 303.43894-125.482923C982.723921 648.137587 982.723921 375.894136 815.453267 208.56106zM775.99151 776.008906c-70.378907 70.409606-164.147524 109.166305-263.97616 109.166305-99.861382 0-193.5993-38.757722-264.008906-109.166305-145.56633-145.56633-145.56633-382.451482 0-527.987113C318.41605 177.612187 412.153968 138.824789 512.01535 138.824789c99.828636 0 193.597253 38.787398 263.97616 109.197004 70.411653 70.380954 109.199051 164.117848 109.199051 263.978207S846.403163 705.626929 775.99151 776.008906z",
                "p-id": "14610"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M370.21888 516.813632c13.753235 0 24.90625-11.153014 24.90625-24.87555L395.125129 346.701257c0-26.478048 25.2685-48.028876 56.341193-48.028876l121.055077 0c31.102369 0 56.401568 21.550829 56.401568 48.028876L628.922966 491.937059c0 13.722536 11.153014 24.87555 24.87555 24.87555 13.722536 0 24.87555-11.153014 24.87555-24.87555L678.674067 346.701257c0-53.92312-47.606251-97.781-106.153692-97.781L451.466322 248.920256c-58.517765 0-106.122993 43.85788-106.122993 97.781L345.343329 491.937059C345.343329 505.659595 356.496343 516.813632 370.21888 516.813632z",
                "p-id": "14611"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M665.859203 533.557992l-93.39818-1.904373-30.588669-87.141686c-4.473895-12.634762-16.473183-21.097504-29.863145-21.097504s-25.390273 8.493441-29.893844 21.128203l-30.55797 87.110987-93.428879 1.904373c-13.481036 0.301875-25.328875 9.127891-29.470195 21.974477-4.14132 12.845563 0.332575 26.900673 11.153014 35.002189l74.144674 55.646368-26.962072 88.048335c-3.898797 12.845563 0.7552 26.810622 11.576663 34.759665 2.719948 1.964748 5.682419 3.476171 8.826016 4.503571 1.571798 0.544399 2.931772 0.815575 3.869121 0.937348 0.63445 0.151449 1.632173 0.332575 2.509147 0.423649l3.536546 0.2415c2.236947 0 4.050246-0.272199 5.13802-0.484024 1.178849-0.151449 2.629897-0.423649 4.322445-0.937348 3.083222-0.997724 5.954619-2.387373 8.493441-4.170996l76.743872-52.835346 76.743872 52.835346c5.28947 3.657296 11.516288 5.591345 17.953907 5.591345 6.800893 0 13.269211-2.116197 18.739806-6.106068 10.82044-7.949043 15.47546-21.943778 11.545964-34.790364l-26.931373-88.017636 74.205049-55.676044c10.730389-8.100492 15.20326-22.186302 11.062963-35.002189C691.218778 542.656207 679.370939 533.86089 665.859203 533.557992zM560.975435 628.28647l-1.752924 1.299599 25.783223 84.23959-72.995501-50.265824-72.995501 50.265824 25.752524-84.23959-70.668503-53.016471 86.506213-1.752924 2.145873-0.030699 29.258371-83.272565 28.503171 81.247442 0.725524 2.025123 88.682785 1.783623L560.975435 628.28647z",
                "p-id": "14612"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Icons.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = BrandIcon;
const ReliIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "15632",
        width: "200",
        height: "200",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM512 960c-249.6 0-448-204.8-448-448 0-249.6 204.8-448 448-448s448 204.8 448 448C960 761.6 761.6 960 512 960zM505.6 224c0 0-32 89.6-217.6 83.2l0 192c0 0 0 211.2 217.6 294.4 211.2-83.2 217.6-294.4 217.6-294.4l0-192C537.6 320 505.6 224 505.6 224z",
            "p-id": "15633"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Icons.tsx",
            lineNumber: 425,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = ReliIcon;
const CustomServiceIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "7173",
        width: "200",
        height: "200",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M516.667511 807.863307c5.004179 0 10.095748-0.308016 15.221701-0.916884 49.157857-5.899573 90.900417-40.259787 106.306927-87.609664 1.163296-3.541463-0.515747-7.336502-3.906784-8.892339-3.352356-1.561567-7.409566-0.212029-9.306369 2.965546-0.179079 0.302285-19.710133 31.848813-95.745574 42.117909-11.382251 1.527184-22.457919 2.328025-32.956236 2.328025-53.270939-0.034383-77.00963-20.112702-77.22739-20.297512-2.680452-2.383897-6.772045-2.445501-9.519831-0.123206-2.775006 2.322294-3.413959 6.358015-1.521454 9.446767C431.202495 784.477044 472.816118 807.863307 516.667511 807.863307L516.667511 807.863307zM516.667511 807.863307M925.504492 336.633827c-0.670471 0-1.280772 0.123206-1.918292 0.123206C879.03425 143.879099 708.803342 0 504.703612 0c-209.712777 0-383.850469 151.824469-422.446972 352.685021C44.728879 359.438442 16.165088 392.423331 16.165088 432.3135l0 159.653796c0 44.746787 35.883101 81.032457 80.188637 81.032457 24.992242 0 47.051889-11.802012 61.726326-29.927655 35.457609 93.781437 107.642139 169.397117 198.995267 209.293016 0.21776-0.475633 1.946945-3.83945 4.028557-6.519902 1.438361-1.858122 3.050071-3.379576 4.432559-3.379576 1.432631 0 2.747786 0.520045 3.872401 1.313722-21.142764-15.741746-97.51344-96.656727-114.056026-209.572379-7.257707-49.699391 29.967769-98.487629 73.322038-106.557638 69.600064-12.959577 138.836239-27.722836 208.436303-40.437434 44.243933-8.070009 74.479604-32.340205 92.969135-72.750419 4.332275-9.446767 10.588573-28.546599 13.459565-56.091789 0.760727-4.095891 4.118813-7.240515 8.422436-7.240515 2.870992 0 5.310762 1.465581 6.928202 3.575846l1.919725-1.191949c27.432012 39.827133 81.833297 128.012715 89.645432 220.999042 8.971133 106.311225 3.966954 179.124679-77.406468 253.615744-0.095986 0.094554-0.219192 0.212029-0.336668 0.308016-1.130346 1.219169-1.802249 2.807956-1.802249 4.554333 0 2.289344 1.220601 4.24775 2.988468 5.439699 0.671904 0.275065 1.343808 0.643251 2.015711 0.918316 0.547265 0.123206 1.068742 0.302285 1.61744 0.302285 0.552995 0 1.04009-0.179079 1.527184-0.302285 1.158998-0.610301 2.254961-1.315155 3.385306-1.925456 82.293172-45.335598 145.423475-121.045832 174.596134-212.108136 11.809175 17.543995 30.298706 30.16977 51.776705 34.573676C874.366739 816.570836 734.623645 914.634406 561.493092 929.519439c-10.375111-25.73721-35.916051-44.014712-65.91104-44.014712-39.173853 0-70.938141 31.026483-70.938141 69.264828 0 38.239778 31.758557 69.230445 70.938141 69.230445 31.585209 0 58.037302-20.291781 67.220464-48.172207 200.406408-16.290443 361.057315-135.410819 394.595199-320.495243 29.626803-12.38366 50.432898-41.450304 50.432898-75.380729L1007.830614 418.406954C1007.830614 373.256165 970.969026 336.633827 925.504492 336.633827L925.504492 336.633827zM851.573585 383.038168C799.305488 241.448412 663.860285 140.301821 504.524533 140.301821c-158.669579 0-293.627687 100.289878-346.382879 240.96275-2.624579-3.211958-5.703303-5.959744-8.724721-8.741912C179.282985 201.099801 326.816725 70.76336 504.703612 70.76336c177.035904 0 324.10977 129.054237 354.955741 299.286578C856.610715 374.145829 853.801326 378.420799 851.573585 383.038168L851.573585 383.038168zM851.573585 383.038168M357.086779 852.365114c-0.005731 0-0.005731 0-0.011461 0C357.042368 852.436745 357.042368 852.448206 357.086779 852.365114L357.086779 852.365114zM357.086779 852.365114",
            "p-id": "7174"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Icons.tsx",
            lineNumber: 445,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Icons.tsx",
        lineNumber: 435,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c9 = CustomServiceIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "HouseholdIcon");
__turbopack_context__.k.register(_c1, "OtherIcon");
__turbopack_context__.k.register(_c2, "CCCIcon");
__turbopack_context__.k.register(_c3, "CarIcon");
__turbopack_context__.k.register(_c4, "MonitorSetIcon");
__turbopack_context__.k.register(_c5, "WXIcon");
__turbopack_context__.k.register(_c6, "PriceIcon");
__turbopack_context__.k.register(_c7, "BrandIcon");
__turbopack_context__.k.register(_c8, "ReliIcon");
__turbopack_context__.k.register(_c9, "CustomServiceIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/config/common.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "address": ()=>address,
    "email": ()=>email,
    "ipcNo": ()=>ipcNo,
    "siteName": ()=>siteName,
    "telNumber": ()=>telNumber,
    "telNumber1": ()=>telNumber1,
    "telNumber2": ()=>telNumber2
});
const telNumber = "0769-21681312";
const telNumber1 = "0769-21681312";
const telNumber2 = "0769-21681312";
const email = "info@casa-de-familia.com";
const address = "东莞市南城区南信产业国际D栋1107-1110室";
const siteName = "化善智能装备（东莞）有限公司";
const ipcNo = "粤ICP备xxxxxxxxxx号";
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/FloatButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FloatButton": ()=>FloatButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$popover$2f$dist$2f$chunk$2d$5GE3YBQI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/popover/dist/chunk-5GE3YBQI.mjs [app-client] (ecmascript) <export popover_default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$popover$2f$dist$2f$chunk$2d$Z57F4COC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_content_default__as__PopoverContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/popover/dist/chunk-Z57F4COC.mjs [app-client] (ecmascript) <export popover_content_default as PopoverContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$popover$2f$dist$2f$chunk$2d$6FXDB7ZT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_trigger_default__as__PopoverTrigger$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/popover/dist/chunk-6FXDB7ZT.mjs [app-client] (ecmascript) <export popover_trigger_default as PopoverTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/image/dist/chunk-BHGNW4BO.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$alert$2f$dist$2f$chunk$2d$OLUJUNJU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__alert_default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/alert/dist/chunk-OLUJUNJU.mjs [app-client] (ecmascript) <export alert_default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/common.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const FloatButton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-10 right-10 z-[999] ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$popover$2f$dist$2f$chunk$2d$5GE3YBQI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_default__as__Popover$3e$__["Popover"], {
            placement: "left-end",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$popover$2f$dist$2f$chunk$2d$6FXDB7ZT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_trigger_default__as__PopoverTrigger$3e$__["PopoverTrigger"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        isIconOnly: true,
                        color: "primary",
                        className: "w-16 h-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomServiceIcon"], {
                            className: "w-10 h-10",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FloatButton.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FloatButton.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/FloatButton.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$popover$2f$dist$2f$chunk$2d$Z57F4COC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_content_default__as__PopoverContent$3e$__["PopoverContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-center",
                                children: "客户热线"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/FloatButton.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 p-3 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                        color: "red"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FloatButton.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold font-[lexend]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telNumber"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FloatButton.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/FloatButton.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$alert$2f$dist$2f$chunk$2d$OLUJUNJU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__alert_default__as__Alert$3e$__["Alert"], {
                                hideIcon: true,
                                color: "secondary",
                                title: "服务时间：24小时在线",
                                className: "py-1 text-center rounded-sm",
                                classNames: {
                                    mainWrapper: "min-h-5  ms-0",
                                    title: "text-xs"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/FloatButton.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$image$2f$dist$2f$chunk$2d$BHGNW4BO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                src: "/images/1662099999696752.png",
                                alt: "",
                                className: "w-full max-w-full mt-2",
                                classNames: {
                                    wrapper: "w-full !max-w-full"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/FloatButton.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-center",
                                children: "扫一扫添加客服"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/FloatButton.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/FloatButton.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/FloatButton.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/FloatButton.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/FloatButton.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FloatButton;
var _c;
__turbopack_context__.k.register(_c, "FloatButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_3164db7a._.js.map