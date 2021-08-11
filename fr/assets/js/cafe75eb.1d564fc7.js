(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[358],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),v=o,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4443:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(4996),c={id:"polkadotjs_apps_local",title:"Se connecter \xe0 un node local"},l={unversionedId:"polkadotjs_apps_local",id:"polkadotjs_apps_local",isDocsHomePage:!1,title:"Se connecter \xe0 un node local",description:"Vous pouvez utiliser Polkadot/apps pour vous connecter \xe0 votre node HydraDX local. Pour ce faire, vous devez avoir acc\xe8s au port 9944 qui est utilis\xe9 connexions websockets RPC.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/polkadotjs_apps_local.md",sourceDirName:".",slug:"/polkadotjs_apps_local",permalink:"/fr/polkadotjs_apps_local",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_local.md",version:"current",frontMatter:{id:"polkadotjs_apps_local",title:"Se connecter \xe0 un node local"},sidebar:"sidebar",previous:{title:"R\xe9clamer une r\xe9compense de tr\xe9sorerie",permalink:"/fr/tip_request"},next:{title:"Se connecter \xe0 un node publique",permalink:"/fr/polkadotjs_apps_public"}},s=[{value:"Acc\xe9der \xe0 votre  node local en utilisant Polkadot/apps",id:"accessing-your-local-node-using-polkadotapps",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Vous pouvez utiliser Polkadot/apps pour vous connecter \xe0 votre node HydraDX local. Pour ce faire, vous devez avoir acc\xe8s au port ",(0,a.kt)("inlineCode",{parentName:"p"},"9944")," qui est utilis\xe9 connexions websockets RPC."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Si vous faites fonctionner un node en tant que validateur, nous recommandons fortement que vous blacklistiez le port ",(0,a.kt)("inlineCode",{parentName:"p"},"9944")," pour des connexions \xe0 distance (hors LAN). Ce port pourrait \xeatre exploit\xe9 par des personnes tierces pour alt\xe9rer la performance de votre node, ce qui peut r\xe9sulter par un slashing et une perte involontaire de fonds. Vous devriez utiliser le port ",(0,a.kt)("inlineCode",{parentName:"p"},"9944"),"  pour vous connecter \xe0 votre node validateur seulement quand le node est dans votre r\xe9seau local."))),(0,a.kt)("h3",{id:"accessing-your-local-node-using-polkadotapps"},"Acc\xe9der \xe0 votre  node local en utilisant Polkadot/apps"),(0,a.kt)("p",null,"Pour acc\xe9der \xe0 votre node, ouvrez ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," et cliquez dans le coin sup\xe9rieur gauche pour changer de r\xe9seau."),(0,a.kt)("div",null,(0,a.kt)("img",{src:(0,i.Z)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),(0,a.kt)("p",null,"Apr\xe8s avoir ouvert le menu, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Development")," et choisissez ",(0,a.kt)("strong",{parentName:"p"},"Local node"),"."),(0,a.kt)("p",null,"ou dans l'interface en fran\xe7ais: "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D\xe9veloppement")," et choisissez ",(0,a.kt)("strong",{parentName:"p"},"N\u0153ud local(propre N\u0153ud)")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/polkadotjs-apps/local-1.png")})),(0,a.kt)("p",null,"R\xe9gler l'IP si n\xe9cessaire et cliquez sur ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Switch"))," pour passer \xe0 votre node local."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/polkadotjs-apps/local-2.png")})),(0,a.kt)("p",null,"Maintenant vous devriez \xeatre connect\xe9 \xe0 votre node local et \xeatre capable d'interagir avec."))}u.isMDXComponent=!0}}]);