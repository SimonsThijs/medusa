var Re=Object.create;var A=Object.defineProperty;var Ve=Object.getOwnPropertyDescriptor;var Le=Object.getOwnPropertyNames;var Ne=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var s=(e,t)=>A(e,"name",{value:t,configurable:!0});var Ue=(e,t)=>{for(var o in t)A(e,o,{get:t[o],enumerable:!0})},le=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Le(t))!Oe.call(e,n)&&n!==o&&A(e,n,{get:()=>t[n],enumerable:!(r=Ve(t,n))||r.enumerable});return e};var f=(e,t,o)=>(o=e!=null?Re(Ne(e)):{},le(t||!e||!e.__esModule?A(o,"default",{value:e,enumerable:!0}):o,e)),ze=e=>le(A({},"__esModule",{value:!0}),e);var at={};Ue(at,{ALIASED_PACKAGES:()=>z,build:()=>oe,clean:()=>ae,develop:()=>ce,findAllValidRoutes:()=>D,findAllValidSettings:()=>P,findAllValidWidgets:()=>_,forbiddenRoutes:()=>I,injectionZones:()=>R,logger:()=>c,normalizePath:()=>v,withCustomWebpackConfig:()=>re});module.exports=ze(at);var I=["/products","/products/:id","/product-categories","/product-categories","/orders","/orders/:id","/customers","/customers/:id","/customers/groups","/customers/groups/:id","/discounts","/discounts/new","/discounts/:id","/gift-cards","/gift-cards/:id","/gift-cards/manage","/pricing","/pricing/new","/pricing/:id","/inventory","/collections","/collections/:id","/draft-orders","/draft-orders/:id","/login","/sales-channels","/publishable-api-keys","/oauth","/oauth/:app_name"];var R=["order.details.before","order.details.after","order.list.before","order.list.after","draft_order.list.before","draft_order.list.after","draft_order.details.before","draft_order.details.after","customer.details.before","customer.details.after","customer.list.before","customer.list.after","customer_group.details.before","customer_group.details.after","customer_group.list.before","customer_group.list.after","product.details.before","product.details.after","product.list.before","product.list.after","product_collection.details.before","product_collection.details.after","product_collection.list.before","product_collection.list.after","price_list.details.before","price_list.details.after","price_list.list.before","price_list.list.after","discount.details.before","discount.details.after","discount.list.before","discount.list.after","gift_card.details.before","gift_card.details.after","gift_card.list.before","gift_card.list.after","custom_gift_card.before","custom_gift_card.after","login.before","login.after"];var G=f(require("path")),_e=f(require("webpack"));var ge=f(require("fs-extra")),U=f(require("path"));var q=f(require("fs-extra"));function V(e){return!(q.default.lstatSync(e).isDirectory()&&e.includes("__test__")||q.default.lstatSync(e).isFile()&&(e.includes(".test")||e.includes(".spec")||e.includes("webpack.config")))}s(V,"copyFilter");var E=f(require("fs-extra")),p=f(require("path")),W=f(require("ts-dedent"));var b=f(require("picocolors")),J=f(require("readline"));var B="[@medusajs/admin]";function Me(){let e=process.stdout.rows-2,t=e>0?`
`.repeat(e):"";console.log(t),J.default.cursorTo(process.stdout,0,0),J.default.clearScreenDown(process.stdout)}s(Me,"clearScreen");var Ge=process.stdout.isTTY&&!process.env.CI,qe=Ge?Me:()=>{};function Be(){let e=s((t,o,r)=>{let n=t==="info"?"log":t,a=s(()=>{let i=t==="info"?b.default.cyan(b.default.bold(B)):t==="warn"?b.default.yellow(b.default.bold(B)):b.default.red(b.default.bold(B));return`${b.default.dim(new Date().toLocaleTimeString())} ${i} ${o}`},"format");r!=null&&r.clearScreen&&qe(),console[n](a()),r!=null&&r.error&&console.error(r.error)},"output");return{info:(t,o)=>e("info",t,o),warn:(t,o)=>e("warn",t,o),error:(t,o)=>e("error",t,o),panic:(t,o)=>{e("error",t,o),e("error","Exiting process",{}),process.exit(1)}}}s(Be,"createLogger");var c=Be();function v(e){let o=process.platform==="win32"?"\\":"/",r=new RegExp(`\\${o}`,"g");return e.replace(r,"/")}s(v,"normalizePath");var L=require("@babel/parser"),j=f(require("@babel/traverse")),y=f(require("fs-extra")),C=f(require("path"));function de(e){return R.includes(e)}s(de,"isValidInjectionZone");function Je(e){let t=e.find(r=>r.type==="ObjectProperty"&&r.key.type==="Identifier"&&r.key.name==="zone");if(!t)return!1;let o=!1;return t.value.type==="StringLiteral"?o=de(t.value.value):t.value.type==="ArrayExpression"&&(o=t.value.elements.every(r=>r.type==="StringLiteral"&&de(r.value))),o}s(Je,"validateWidgetConfigExport");function Ke(e){let t=e.find(n=>n.type==="ObjectProperty"&&n.key.type==="Identifier"&&n.key.name==="link");if(!t)return!0;let o=t.value,r=!1;return o.properties.some(n=>n.type==="ObjectProperty"&&n.key.type==="Identifier"&&n.key.name==="label"&&n.value.type==="StringLiteral")&&(r=!0),r}s(Ke,"validateRouteConfigExport");function Xe(e){let t=e.find(a=>a.type==="ObjectProperty"&&a.key.type==="Identifier"&&a.key.name==="card");if(!t)return!1;let o=t.value,r=!1,n=!1;return o.properties.some(a=>a.type==="ObjectProperty"&&a.key.type==="Identifier"&&a.key.name==="label"&&a.value.type==="StringLiteral")&&(r=!0),o.properties.some(a=>a.type==="ObjectProperty"&&a.key.type==="Identifier"&&a.key.name==="description"&&a.value.type==="StringLiteral")&&(n=!0),r&&n}s(Xe,"validateSettingConfigExport");function K(e,t){let o=!1,r=e.node.declaration;if(r&&r.type==="VariableDeclaration"){let n=r.declarations.find(a=>a.type==="VariableDeclarator"&&a.id.type==="Identifier"&&a.id.name==="config");if(n&&n.init.type==="ObjectExpression"){let a=n.init.properties;t==="widget"&&(o=Je(a)),t==="route"&&(o=Ke(a)),t==="setting"&&(o=Xe(a))}else o=!1}return o}s(K,"validateConfigExport");function X(e,t){let o=!1,r=e.node.declaration;if(r&&(r.type==="Identifier"||r.type==="FunctionDeclaration")){let n=r.type==="Identifier"?r.name:r.id&&r.id.name;if(n)try{(0,j.default)(t,{VariableDeclarator({node:a,scope:i}){let l=!1;a.id.type==="Identifier"&&a.id.name===n&&(l=!0),l&&(0,j.default)(a,{ReturnStatement(m){var u,d;(((u=m.node.argument)==null?void 0:u.type)==="JSXElement"||((d=m.node.argument)==null?void 0:d.type)==="JSXFragment")&&(o=!0)}},i)}})}catch(a){return c.error(`There was an error while validating the default export of ${e}. The following error must be resolved before continuing:`,{error:a}),!1}}return o}s(X,"validateDefaultExport");async function fe(e){let t=await y.default.readFile(e,"utf-8"),o={sourceType:"module",plugins:["jsx"]};(e.endsWith(".ts")||e.endsWith(".tsx"))&&o.plugins.push("typescript");let r;try{r=(0,L.parse)(t,o)}catch(i){return c.error(`An error occurred while parsing the Widget "${e}", and the Widget cannot be injected. The following error must be resolved before continuing:`,{error:i}),!1}let n=!1,a=!1;try{(0,j.default)(r,{ExportDefaultDeclaration:i=>{a=X(i,r)},ExportNamedDeclaration:i=>{n=K(i,"widget")}})}catch(i){return c.error(`An error occurred while validating the Widget "${e}". The following error must be resolved before continuing:`,{error:i}),!1}return n&&!a&&(a||c.error(`The default export in the Widget "${e}" is invalid and the widget will not be injected. Please make sure that the default export is a valid React component.`)),!n&&a&&c.error(`The Widget config export in "${e}" is invalid and the Widget cannot be injected. Please ensure that the config is valid.`),n&&a}s(fe,"validateWidget");function ue(e){let t=v(e),o=/\[(.*?)\]/g;return t.replace(o,":$1").replace(/\/page\.[jt]sx?$/i,"")}s(ue,"createPath");function Ze(e){return I.includes(e)}s(Ze,"isForbiddenRoute");function pe(e,t){if(Ze(e))return{error:`A route from ${t} is using a forbidden path: ${e}.`,valid:!1};let o=["/",":","-"];for(let r=0;r<e.length;r++){let n=e[r];if(!o.includes(n)&&!/^[a-z0-9]$/i.test(n))return{error:`A route from ${t} is using an invalid path: ${e}. Only alphanumeric characters, "/", ":", and "-" are allowed.`,valid:!1};if(n===":"&&(r===0||e[r-1]!=="/"))return{error:`A route from ${t} is using an invalid path: ${e}. All dynamic segments must be preceded by a "/".`,valid:!1}}return{valid:!0,error:""}}s(pe,"validatePath");async function me(e,t){let o=ue(e.replace(t,"")),{valid:r,error:n}=pe(o,e);if(!r)return c.error(`The path ${o} for the UI Route "${e}" is invalid and the route cannot be injected. The following error must be fixed before the route can be injected: ${n}`),null;let a=await y.default.readFile(e,"utf-8"),i=!1,l=!1,m={sourceType:"module",plugins:["jsx"]};(e.endsWith(".ts")||e.endsWith(".tsx"))&&m.plugins.push("typescript");let u;try{u=(0,L.parse)(a,m)}catch(d){return c.error(`An error occurred while parsing the UI Route "${e}", and the UI Route cannot be injected. The following error must be resolved before continuing:`,{error:d}),null}try{(0,j.default)(u,{ExportDefaultDeclaration:d=>{i=X(d,u)},ExportNamedDeclaration:d=>{l=K(d,"route")}})}catch(d){return c.error(`An error occurred while validating the UI Route "${e}", and the UI Route cannot be injected. The following error must be resolved before continuing:`,{error:d}),null}return i?{path:o,hasConfig:l,file:e}:(c.error(`The default export in the UI Route "${e}" is invalid and the route cannot be injected. Please make sure that the default export is a valid React component.`),null)}s(me,"validateRoute");async function he(e,t){let o=ue(e.replace(t,"")),{valid:r,error:n}=pe(o,e);if(!r)return c.error(`The path ${o} for the Setting "${e}" is invalid and the setting cannot be injected. The following error must be fixed before the Setting can be injected: ${n}`),null;let a=await y.default.readFile(e,"utf-8"),i=!1,l=!1,m={sourceType:"module",plugins:["jsx"]};(e.endsWith(".ts")||e.endsWith(".tsx"))&&m.plugins.push("typescript");let u;try{u=(0,L.parse)(a,m)}catch(d){return c.error(`
      An error occured while parsing the Setting "${e}". The following error must be resolved before continuing:
      `,{error:d}),null}try{(0,j.default)(u,{ExportDefaultDeclaration:d=>{i=X(d,u)},ExportNamedDeclaration:d=>{l=K(d,"setting")}})}catch(d){return c.error(`
      An error occured while validating the Setting "${e}". The following error must be resolved before continuing:`,{error:d}),null}return i?l?{path:o,file:e}:(c.error(`The named export "config" in the Setting "${e}" is invalid or missing and the settings page will not be injected. Please make sure that the file exports a valid config.`),null):(c.error(`The default export in the Setting "${e}" is invalid and the page will not be injected. Please make sure that the default export is a valid React component.`),null)}s(he,"validateSetting");async function P(e){let t=[];if(!await y.default.pathExists(e))return[];let r=await y.default.readdir(e),n=!1;for(let i of r){let l=C.default.join(e,i);if((await y.default.stat(l)).isDirectory()){let u=await y.default.readdir(l);for(let d of u){let w=C.default.join(e,i,d),$=await y.default.stat(w);if($.isFile()&&/^(.*\/)?page\.[jt]sx?$/i.test(d)){t.push(w);break}else $.isDirectory()&&(n=!0)}}}return n&&c.warn(`The directory ${e} contains subdirectories. Settings do not support nested routes, only UI Routes support nested paths.`),(await Promise.all(t.map(async i=>he(i,e)))).filter(i=>i!==null)}s(P,"findAllValidSettings");async function _(e){let t=[];if(!await y.default.pathExists(e))return[];async function r(i){let l=await y.default.readdir(i);for(let m of l){let u=C.default.join(i,m),d=await y.default.stat(u);d.isDirectory()?await r(u):d.isFile()&&/\.(js|jsx|ts|tsx)$/i.test(m)&&t.push(u)}}s(r,"traverseDirectory"),await r(e);let n=t.map(i=>fe(i)?i:null);return(await Promise.all(n)).filter(i=>i!==null)}s(_,"findAllValidWidgets");async function D(e){let t=[];if(!await y.default.pathExists(e))return[];async function r(i){let l=await y.default.readdir(i);for(let m of l){let u=C.default.join(i,m),d=await y.default.stat(u);d.isDirectory()?await r(u):d.isFile()&&/^(.*\/)?page\.[jt]sx?$/i.test(m)&&t.push(u)}}s(r,"traverseDirectory"),await r(e);let n=t.map(async i=>me(i,e));return(await Promise.all(n)).filter(i=>i!==null)}s(D,"findAllValidRoutes");var N=/\.[^/.]+$/;async function He(e,t){try{await E.default.copy(e,t,{filter:V})}catch(o){return c.error("Could not copy local extensions to cache folder. See the error below for details:",{error:o}),!1}return!0}s(He,"copyLocalExtensions");async function Qe(e,t){let o=p.default.resolve(e,"src","admin");if(!await E.default.pathExists(o))return!1;if(!await He(o,p.default.resolve(t,"admin","src","extensions")))return c.error("Could not copy local extensions to cache folder. See above error for details. The error must be fixed before any local extensions can be injected."),!1;let[a,i,l]=await Promise.all([_(p.default.resolve(t,"admin","src","extensions","widgets")),D(p.default.resolve(t,"admin","src","extensions","routes")),P(p.default.resolve(t,"admin","src","extensions","settings"))]),m=a.map((h,g)=>{let x=v(p.default.relative(p.default.resolve(t,"admin","src","extensions"),h).replace(N,""));return{importStatement:`import Widget${g}, { config as widgetConfig${g} } from "./${x}"`,extension:`{ Component: Widget${g}, config: { ...widgetConfig${g}, type: "widget" } }`}}),u=i.map((h,g)=>{let x=v(p.default.relative(p.default.resolve(t,"admin","src","extensions"),h.file).replace(N,"")),Te=h.hasConfig?`import Page${g}, { config as routeConfig${g} } from "./${x}"`:`import Page${g} from "./${x}"`,Ie=h.hasConfig?`{ Component: Page${g}, config: { ...routeConfig${g}, type: "route",  path: "${h.path}" } }`:`{ Component: Page${g}, config: { path: "${h.path}", type: "route" } }`;return{importStatement:Te,extension:Ie}}),d=l.map((h,g)=>{let x=v(p.default.relative(p.default.resolve(t,"admin","src","extensions"),h.file).replace(N,""));return{importStatement:`import Setting${g}, { config as settingConfig${g} } from "./${x}"`,extension:`{ Component: Setting${g}, config: { ...settingConfig${g}, path: "${h.path}", type: "setting" } }`}}),w=[...m,...u,...d],$=W.default`
    ${w.map(h=>h.importStatement).join(`
`)}

    const LocalEntry = {
      identifier: "local",
      extensions: [
        ${w.map(h=>h.extension).join(`,
`)}
      ],
    }

    export default LocalEntry
  `;try{await E.default.outputFile(p.default.resolve(t,"admin","src","extensions","_local-entry.ts"),$)}catch(h){c.panic("Failed to write the entry file for the local extensions. See the error below for details:",{error:h})}return!0}s(Qe,"createLocalExtensionsEntry");function Ye(e){let t=[];for(let o of e)try{let r=p.default.dirname(require.resolve(`${o}/package.json`,{paths:[process.cwd()]})),n=p.default.resolve(r,"dist","admin","_virtual_entry.js");E.default.existsSync(n)&&t.push(n)}catch{c.warn(`There was an error while attempting to load extensions from the plugin: ${o}. Are you sure it is installed?`)}return t}s(Ye,"findPluginsWithExtensions");async function et(e,t){let o=W.default`
    const path = require("path")

    const devPath = path.join(__dirname, "..", "..", "src/admin/**/*.{js,jsx,ts,tsx}")

    module.exports = {
      content: [
        devPath,
        ${t.map(r=>`"${v(p.default.relative(p.default.resolve(e,"admin"),p.default.dirname(p.default.join(r,"..",".."))))}/dist/admin/**/*.{js,jsx,ts,tsx}"`).join(`,
`)}
      ],
    }
  
  `;try{await E.default.outputFile(p.default.resolve(e,"admin","tailwind.content.js"),o)}catch{c.warn(`Failed to write the Tailwind content file to ${e}. The admin UI will remain functional, but CSS classes applied to extensions from plugins might not have the correct styles`)}}s(et,"writeTailwindContentFile");async function tt(e,t,o){if(!t.length&&!o){let i=W.default`
      const extensions = []

      export default extensions
    `;try{await E.default.outputFile(p.default.resolve(e,"admin","src","extensions","_main-entry.ts"),i)}catch(l){c.panic("Failed to write the entry file for the main extensions. See the error below for details:",{error:l})}return}let n=[...t.map(i=>v(p.default.relative(p.default.resolve(e,"admin","src","extensions"),i).replace(N,""))).map((i,l)=>({importStatement:`import Plugin${l} from "${i}"`,extension:`Plugin${l}`})),...o?[{importStatement:'import LocalEntry from "./_local-entry"',extension:"LocalEntry"}]:[]],a=W.default`
      ${n.map(i=>i.importStatement).join(`
`)}

      const extensions = [
        ${n.map(i=>i.extension).join(`,
`)}
      ]

      export default extensions
    `;try{await E.default.outputFile(p.default.resolve(e,"admin","src","extensions","_main-entry.ts"),a)}catch(i){c.panic("Failed to write the extensions entry file. See the error below for details:",{error:i})}}s(tt,"createMainExtensionsEntry");async function O({appDir:e,dest:t,plugins:o}){let r=await Qe(e,t),n=Ye(o);await tt(t,n,r),await et(t,n)}s(O,"createEntry");async function rt(e){let t=U.default.resolve(__dirname,"..","ui"),o=U.default.resolve(e,"admin");try{await ge.default.copy(t,o,{filter:V})}catch(r){c.panic(`Could not copy the admin UI to ${o}. See the error below for details:`,{error:r})}}s(rt,"copyAdmin");async function F({appDir:e,plugins:t}){let o=U.default.resolve(e,".cache");return await rt(o),await O({appDir:e,dest:o,plugins:t}),{cacheDir:o}}s(F,"createCacheDir");var Z=f(require("dotenv")),ye=f(require("fs-extra")),H=f(require("path"));var ot=/^MEDUSA_ADMIN_/i,S="";switch(process.env.NODE_ENV){case"production":S=".env.production";break;case"staging":S=".env.staging";break;case"test":S=".env.test";break;case"development":default:S=".env";break}ye.default.existsSync(S)?Z.default.config({path:H.default.resolve(process.cwd(),S)}):S!==".env"&&Z.default.config({path:H.default.resolve(process.cwd(),".env")});var Q=s(e=>{let t=Object.keys(process.env).filter(r=>ot.test(r)).reduce((r,n)=>(r[n]=process.env[n],r),{ADMIN_PATH:e.path||"/",NODE_ENV:e.env||"development",MEDUSA_BACKEND_URL:e.backend||process.env.MEDUSA_BACKEND_URL});return{"process.env":Object.keys(t).reduce((r,n)=>(r[n]=JSON.stringify(t[n]),r),{})}},"getClientEnv");var ve=f(require("chokidar")),we=f(require("fs-extra")),k=f(require("path"));async function Y(e,t,o){let r=k.default.resolve(e,"src","admin"),n=ve.default.watch(r,{ignored:/(^|[/\\])\../,ignoreInitial:!0});n.on("all",async(a,i)=>{(a==="unlinkDir"||a==="unlink")&&nt(i,e,t),await O({appDir:e,dest:t,plugins:o}),c.info("Extensions cache directory was re-initialized")}),process.on("SIGINT",async()=>{await n.close()}).on("SIGTERM",async()=>{await n.close()})}s(Y,"watchLocalAdminFolder");function nt(e,t,o){let r=k.default.resolve(t,"src","admin"),n=k.default.relative(r,e),a=k.default.resolve(o,"admin","src","extensions"),i=k.default.resolve(a,n);try{we.default.removeSync(i)}catch(l){c.error(`An error occurred while removing ${i}: ${l}`)}}s(nt,"removeUnlinkedFile");var Ae=f(require("fs-extra")),Ce=f(require("path")),Pe=f(require("webpack"));function xe(e){let{options:t}=e;t.path&&(t.path.startsWith("/")||c.panic("'path' in the options of `@medusajs/admin` must start with a '/'"),t.path!=="/"&&t.path.endsWith("/")&&c.panic("'path' in the options of `@medusajs/admin` cannot end with a '/'"),typeof t.path!="string"&&c.panic("'path' in the options of `@medusajs/admin` must be a string"))}s(xe,"validateArgs");var Ee=f(require("@pmmmwh/react-refresh-webpack-plugin")),$e=f(require("html-webpack-plugin")),M=f(require("mini-css-extract-plugin")),ee=f(require("path")),Se=require("swc-minify-webpack-plugin"),je=f(require("webpack")),ke=f(require("webpackbar"));var z=["react","react-dom","react-router-dom","react-dnd","react-dnd-html5-backend","react-select","react-helmet-async","@tanstack/react-query","@tanstack/react-table","@emotion/react","medusa-react"];var be=z.reduce((e,t)=>(e[`${t}$`]=require.resolve(t),e),{});function it(e){return e?e==="/"||e.endsWith("/")?e:`${e}/`:"/app/"}s(it,"formatPublicPath");function te({entry:e,dest:t,cacheDir:o,env:r,options:n,template:a,reporting:i="fancy"}){let l=r==="production",m=Q({env:r,backend:n==null?void 0:n.backend,path:n==null?void 0:n.path}),u=it(n==null?void 0:n.path),d=l?[new M.default({filename:"[name].[chunkhash].css",chunkFilename:"[name].[chunkhash].css"}),new ke.default({basic:i==="minimal",fancy:i==="fancy"})]:[new M.default];return{mode:r,bail:!!l,devtool:l?!1:"eval-source-map",entry:[e],output:{path:t,filename:l?"[name].[contenthash:8].js":"[name].bundle.js",chunkFilename:l?"[name].[contenthash:8].chunk.js":"[name].chunk.js"},optimization:{minimize:!0,minimizer:[new Se.SwcMinifyWebpackPlugin],moduleIds:"deterministic",runtimeChunk:!0},module:{rules:[{test:/\.tsx?$/,exclude:/node_modules/,include:[o],use:{loader:"swc-loader",options:{jsc:{parser:{syntax:"typescript",jsx:!0},transform:{react:{runtime:"automatic"}}}}}},{test:/\.jsx?$/,exclude:/node_modules/,include:[o],use:{loader:"swc-loader",options:{jsc:{parser:{syntax:"ecmascript",jsx:!0},transform:{react:{runtime:"automatic"}}}}}},{test:/\.css$/,use:[M.default.loader,"css-loader","postcss-loader"]},{test:/\.svg$/,oneOf:[{type:"asset/resource",resourceQuery:/url/},{type:"asset/inline",resourceQuery:/base64/},{issuer:/\.[jt]sx?$/,use:["@svgr/webpack"]}],generator:{filename:`images/${l?"[name]-[hash][ext]":"[name][ext]"}`}},{test:/\.(eot|otf|ttf|woff|woff2)$/,type:"asset/resource"},{test:/\.(js|mjs)(\.map)?$/,enforce:"pre",use:["source-map-loader"]},{test:/\.m?jsx?$/,resolve:{fullySpecified:!1}}]},resolve:{alias:be,symlinks:!1,extensions:[".js",".jsx",".ts",".tsx"],mainFields:["browser","module","main"],modules:["node_modules",ee.default.resolve(__dirname,"..","node_modules")],fallback:{readline:!1,path:!1}},plugins:[new $e.default({inject:!0,template:a||ee.default.resolve(__dirname,"..","ui","index.html"),publicPath:u}),new je.default.DefinePlugin(m),!l&&new Ee.default,...d].filter(Boolean)}}s(te,"getWebpackConfig");async function T(e,t){xe(t);let o=te(t),r=Ce.default.join(e,"src","admin","webpack.config.js");if(await Ae.default.pathExists(r)){let a;try{a=require(r)}catch(i){c.panic("An error occured while trying to load your custom Webpack config. See the error below for details:",{error:i})}typeof a=="function"&&(t.devServer&&(o.devServer=t.devServer),o=a(o,Pe.default),o||c.panic("Nothing was returned from your custom webpack configuration"))}return o}s(T,"getCustomWebpackConfig");function re(e){return(t,o)=>e(t,o)}s(re,"withCustomWebpackConfig");async function oe({appDir:e,buildDir:t,plugins:o,options:r,reporting:n="fancy"}){await F({appDir:e,plugins:o});let a=G.default.resolve(e,".cache"),i=G.default.resolve(a,"admin","src","main.tsx"),l=G.default.resolve(e,t),u=await T(e,{entry:i,dest:l,cacheDir:a,env:"production",options:r,reporting:n}),d=(0,_e.default)(u);return new Promise((w,$)=>{d.run((h,g)=>{h&&(h.details&&c.error(h.details),$(h));let x=g.toJson();return g.hasErrors()&&c.error(JSON.stringify(x.errors)),w({stats:g,warnings:x.warnings})})})}s(oe,"build");var ne=f(require("fs-extra")),ie=f(require("path"));async function ae({appDir:e,outDir:t}){let o=ie.default.resolve(e,".cache","admin"),r=ie.default.resolve(e,t);await ne.default.remove(r),await ne.default.remove(o)}s(ae,"clean");var se=f(require("path")),De=f(require("react-dev-utils/openBrowser")),We=f(require("webpack")),Fe=f(require("webpack-dev-server"));async function ce({appDir:e,buildDir:t,plugins:o,options:r={path:"/",backend:"http://localhost:9000",develop:{open:!0,port:7001,logLevel:"error",stats:"normal"}}}){let{cacheDir:n}=await F({appDir:e,plugins:o}),a=se.default.resolve(n,"admin","src","main.tsx"),i=se.default.resolve(e,t),m=await T(e,{entry:a,dest:i,cacheDir:n,env:"development",options:r}),u=(0,We.default)({...m,infrastructureLogging:{level:r.develop.logLevel},stats:r.develop.stats==="normal"?"errors-only":void 0}),d={port:r.develop.port,client:{logging:"none",overlay:{errors:!0,warnings:!1}},open:!1,onListening:r.develop.open?function(h){h||c.warn("Failed to open browser."),(0,De.default)(`http://localhost:${r.develop.port}${r.path?r.path:""}`)}:void 0,devMiddleware:{publicPath:r.path,stats:r.develop.stats==="normal"?!1:void 0},historyApiFallback:{index:r.path,disableDotRule:!0},hot:!0},w=new Fe.default(d,u);await s(async()=>{c.info(`Started development server on http://localhost:${r.develop.port}${r.path?r.path:""}`),await w.start()},"runServer")(),await Y(e,n,o)}s(ce,"develop");0&&(module.exports={ALIASED_PACKAGES,build,clean,develop,findAllValidRoutes,findAllValidSettings,findAllValidWidgets,forbiddenRoutes,injectionZones,logger,normalizePath,withCustomWebpackConfig});
//# sourceMappingURL=index.js.map