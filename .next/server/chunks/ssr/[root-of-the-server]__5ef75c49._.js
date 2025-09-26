module.exports = {

"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "minpath": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "minproc": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "urlToPath": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00c19c77a679ea28e1bfef9f76961a31c8691c10d9":"getAllProducts","4024adaf002df9ae50615c28ae9b03015af8c2e198":"getProductById","40a75bf95ca4253111342328abd3b08fdfc9e20411":"getNewsItemById","40bcf7cc09002f04db91567e907b1c4085b1713259":"getAllMarkdownDocs","40d7a367f94c150de52f218bd7e14ebe59d5a7580a":"getProductItem"},"",""] */ __turbopack_context__.s({
    "getAllMarkdownDocs": ()=>getAllMarkdownDocs,
    "getAllProducts": ()=>getAllProducts,
    "getNewsItemById": ()=>getNewsItemById,
    "getProductById": ()=>getProductById,
    "getProductItem": ()=>getProductItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-html/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function getAllMarkdownDocs(dir) {
    try {
        const CONTENT_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), `content/${dir}`);
        // 检查content目录是否存在
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(CONTENT_DIR)) {
            console.warn(`Content directory ${CONTENT_DIR} does not exist`);
            return [];
        }
        // 读取content目录下的所有markdown文件
        const fileNames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(CONTENT_DIR).filter((fileName)=>fileName.endsWith(".md"));
        // 处理每个文件
        const items = await Promise.all(fileNames.map(async (fileName)=>{
            const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, fileName);
            const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, "utf8");
            // 解析front-matter和内容
            const matterResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileContents);
            // 将markdown转换为HTML
            const processedContent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["remark"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$html$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).process(matterResult.content);
            const contentHtml = processedContent.toString();
            // 生成ID（使用文件名去掉.md后缀）
            const id = fileName.replace(/\.md$/, "");
            // 根据目录类型提取相应的数据
            if (dir === "news") {
                const { title, date, summary, imageUrl, author, category, tags } = matterResult.data;
                // 确保必要字段存在
                if (!title || !date) {
                    console.warn(`Skipping file ${fileName}: missing required fields`);
                    return null;
                }
                return {
                    id,
                    title: title || "",
                    date: date || "",
                    summary: summary || "",
                    content: contentHtml || "",
                    imageUrl: imageUrl || undefined,
                    author: author || undefined,
                    category: category || undefined,
                    tags: tags || undefined
                };
            } else if (dir === "products") {
                const { title, category, price, cate, description, details, images, features, content } = matterResult.data;
                // 确保必要字段存在
                if (!title || !category || !images) {
                    console.warn(`Skipping file ${fileName}: missing required fields`);
                    return null;
                }
                return {
                    id,
                    title: title || "",
                    category: category || "",
                    price: price || undefined,
                    cate: cate || "",
                    description: description || "",
                    details: details || "",
                    images: images || [],
                    features: features || [],
                    content: content || contentHtml
                };
            }
            return null;
        }));
        // 过滤掉null值，并根据不同类型排序
        const validItems = items.filter((item)=>item !== null);
        // 新闻按日期降序排序
        if (dir === "news") {
            return validItems.sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
        }
        return validItems;
    } catch (error) {
        console.error(`Error reading ${dir} items:`, error);
        return [];
    }
}
async function getNewsItemById(id) {
    try {
        const allNewsItems = await getAllMarkdownDocs("news");
        return allNewsItems.find((item)=>item.id === id);
    } catch (error) {
        console.error(`Error getting news item with id ${id}:`, error);
        return undefined;
    }
}
async function getAllProducts() {
    try {
        return await getAllMarkdownDocs("products");
    } catch (error) {
        console.error("Error getting all products:", error);
        return [];
    }
}
async function getProductById(id) {
    try {
        const allProducts = await getAllMarkdownDocs("products");
        return allProducts.find((item)=>item.id === id);
    } catch (error) {
        console.error(`Error getting product with id ${id}:`, error);
        return undefined;
    }
}
async function getProductItem(id) {
    try {
        const allNewsItems = await getAllMarkdownDocs("products");
        return allNewsItems.find((item)=>item.id === id);
    } catch (error) {
        console.error(`Error getting news item with id ${id}:`, error);
        return undefined;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAllMarkdownDocs,
    getNewsItemById,
    getAllProducts,
    getProductById,
    getProductItem
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllMarkdownDocs, "40bcf7cc09002f04db91567e907b1c4085b1713259", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsItemById, "40a75bf95ca4253111342328abd3b08fdfc9e20411", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllProducts, "00c19c77a679ea28e1bfef9f76961a31c8691c10d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductById, "4024adaf002df9ae50615c28ae9b03015af8c2e198", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductItem, "40d7a367f94c150de52f218bd7e14ebe59d5a7580a", null);
}),
"[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}),
"[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "00c19c77a679ea28e1bfef9f76961a31c8691c10d9": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProducts"],
    "4024adaf002df9ae50615c28ae9b03015af8c2e198": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"],
    "40a75bf95ca4253111342328abd3b08fdfc9e20411": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsItemById"],
    "40bcf7cc09002f04db91567e907b1c4085b1713259": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllMarkdownDocs"],
    "40d7a367f94c150de52f218bd7e14ebe59d5a7580a": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductItem"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}),
"[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "00c19c77a679ea28e1bfef9f76961a31c8691c10d9": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00c19c77a679ea28e1bfef9f76961a31c8691c10d9"],
    "4024adaf002df9ae50615c28ae9b03015af8c2e198": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4024adaf002df9ae50615c28ae9b03015af8c2e198"],
    "40a75bf95ca4253111342328abd3b08fdfc9e20411": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a75bf95ca4253111342328abd3b08fdfc9e20411"],
    "40bcf7cc09002f04db91567e907b1c4085b1713259": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40bcf7cc09002f04db91567e907b1c4085b1713259"],
    "40d7a367f94c150de52f218bd7e14ebe59d5a7580a": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40d7a367f94c150de52f218bd7e14ebe59d5a7580a"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$details$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/details/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/products/details/[id]/ProductDetail.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/details/[id]/ProductDetail.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/details/[id]/ProductDetail.tsx <module evaluation>", "default");
}),
"[project]/src/app/products/details/[id]/ProductDetail.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/details/[id]/ProductDetail.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/details/[id]/ProductDetail.tsx", "default");
}),
"[project]/src/app/products/details/[id]/ProductDetail.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$details$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/details/[id]/ProductDetail.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$details$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/details/[id]/ProductDetail.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$details$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/products/details/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "generateMetadata": ()=>generateMetadata,
    "generateStaticParams": ()=>generateStaticParams
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$details$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/details/[id]/ProductDetail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/markdownService.ts [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    const ProductList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllMarkdownDocs"])("products");
    return ProductList.map((product)=>({
            id: product.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const ProductList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllMarkdownDocs"])("products");
    const product = ProductList.find((product)=>product.id === id);
    if (!product) {
        return {
            title: "产品不存在 - 华山科技",
            description: "抱歉，您访问的产品不存在。"
        };
    }
    return {
        title: `${product.title} - 华山科技`,
        description: product.description
    };
}
const ProductDetailPage = async ({ params })=>{
    const { id } = await params;
    const ProductList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$markdownService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllMarkdownDocs"])("products");
    const product = ProductList.find((product)=>product.id === id);
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$details$2f5b$id$5d2f$ProductDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        product: product
    }, void 0, false, {
        fileName: "[project]/src/app/products/details/[id]/page.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductDetailPage;
}),
"[project]/src/app/products/details/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/products/details/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5ef75c49._.js.map