"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[628],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4787:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(4996),l=["components"],p={id:"identity",title:"\u8bbe\u7f6e\u60a8\u7684\u8eab\u4efd"},c=void 0,s={unversionedId:"identity",id:"identity",title:"\u8bbe\u7f6e\u60a8\u7684\u8eab\u4efd",description:"\u5e10\u6237\u6301\u6709\u4eba\uff0c\u53ef\u901a\u8fc7\u63d0\u4f9b\u7279\u5b9a\u4fe1\u606f\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u94fe\u4e0a\u6765\u8bbe\u7f6e\u8eab\u4efd\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8eab\u4efd\u4fe1\u606f\u8fd8\u53ef\u4ee5\u63d0\u4ea4\u7ed9 HydraDX \u6ce8\u518c\u5546\u8fdb\u884c\u8ba4\u8bc1\u3002\u901a\u8fc7\u8bbe\u7f6e\u5e76\u8ba4\u8bc1\u8eab\u4efd\uff0c\u6709\u52a9\u4e8e\u9a8c\u8bc1\u4eba\u53ca\u63d0\u540d\u4eba\u4fdd\u62a4\u5176\u7f51\u7edc\u4fe1\u7528\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/identity.md",sourceDirName:".",slug:"/identity",permalink:"/cn/identity",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/identity.md",tags:[],version:"current",frontMatter:{id:"identity",title:"\u8bbe\u7f6e\u60a8\u7684\u8eab\u4efd"},sidebar:"sidebar",previous:{title:"\u7533\u9886\u60a8\u7684 HDX",permalink:"/cn/claim"},next:{title:"\u8fde\u63a5\u5230\u672c\u5730\u8282\u70b9",permalink:"/cn/polkadotjs_apps_local"}},d=[{value:"01 \u8bbe\u7f6e\u8eab\u4efd",id:"01-set-identity",children:[],level:2},{value:"02 \u63d0\u4ea4\u8eab\u4efd\u8bc1\u660e",id:"02-verify-identity",children:[],level:2},{value:"03 \u8ba4\u8bc1\u7ed3\u679c",id:"03-verification-outcome",children:[],level:2}],m={toc:d};function u(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5e10\u6237\u6301\u6709\u4eba\uff0c\u53ef\u901a\u8fc7\u63d0\u4f9b\u7279\u5b9a\u4fe1\u606f\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u94fe\u4e0a\u6765\u8bbe\u7f6e\u8eab\u4efd\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8eab\u4efd\u4fe1\u606f\u8fd8\u53ef\u4ee5\u63d0\u4ea4\u7ed9 HydraDX \u6ce8\u518c\u5546\u8fdb\u884c\u8ba4\u8bc1\u3002\u901a\u8fc7\u8bbe\u7f6e\u5e76\u8ba4\u8bc1\u8eab\u4efd\uff0c\u6709\u52a9\u4e8e\u9a8c\u8bc1\u4eba\u53ca\u63d0\u540d\u4eba\u4fdd\u62a4\u5176\u7f51\u7edc\u4fe1\u7528\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u662f HydraDX \u9a8c\u8bc1\u4eba\uff0c\u6211\u4eec ",(0,i.kt)("strong",{parentName:"p"},"\u5f3a\u70c8\u5efa\u8bae")," \u60a8\u8bbe\u7f6e\u8eab\u4efd\u5e76\u901a\u8fc7\u8ba4\u8bc1\u7a0b\u5e8f\u3002\u7ecf\u8fc7\u8ba4\u8bc1\u7684\u9a8c\u8bc1\u4eba\u4f3c\u4e4e\u66f4\u503c\u5f97\u4fe1\u4efb\uff0c\u5e76\u5438\u5f15\u66f4\u591a\u7684\u63d0\u540d\uff0c\u4e5f\u4f1a\u56e0\u6b64\u589e\u52a0\u8fdb\u5165\u6d3b\u8dc3\u9a8c\u8bc1\u4eba\u96c6\u7684\u673a\u4f1a\u3002"))),(0,i.kt)("h2",{id:"01-set-identity"},"01 \u8bbe\u7f6e\u8eab\u4efd"),(0,i.kt)("p",null,"\u8981\u8bbe\u7f6e\u8eab\u4efd\uff0c\u8bf7\u6253\u5f00 Polkadot/apps\uff08\u8fde\u63a5\u5230 ",(0,i.kt)("em",{parentName:"p"},"HydraDX Snakenet")," \u7f51\u7edc\uff09\uff0c\u7136\u540e\u5bfc\u822a\u5230 ",(0,i.kt)("em",{parentName:"p"},"My accounts")," \uff08\u6211\u7684\u8d26\u6237\uff09\u3002\u6216\u8005\uff0c\u76f4\u63a5\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts"},"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts")),(0,i.kt)("p",null,"\u5728\u5e10\u6237\u9875\u9762\uff0c\u627e\u5230\u6301\u6709\u60a8\u7684\u7ed1\u5b9a HDX \u4ee4\u724c\u7684\u5e10\u6237\uff08\u5982\u679c\u60a8\u662f\u9a8c\u8bc1\u4eba-\u5e94\u4e3a\u63a7\u5236\u5e10\u6237\uff09\u3002\u7136\u540e\uff0c\u70b9\u51fb\u5e10\u53f7\u65c1\u8fb9\u7684\u4e09\u4e2a\u70b9\uff08\u5728\u53f3\u4fa7\uff09\uff0c\u5e76\u9009\u62e9 ",(0,i.kt)("em",{parentName:"p"},"Set on-chain identity")," \uff08\u8bbe\u7f6e\u94fe\u4e0a\u8eab\u4efd\uff09\u3002"),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-1.jpg")}),(0,i.kt)("p",null,"\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("em",{parentName:"p"},"register identity")," \uff08\u6ce8\u518c\u8eab\u4efd\uff09\u7684\u5f39\u7a97\u3002\u5728\u8fd9\u91cc\uff0c\u60a8\u53ef\u4ee5\u8f93\u5165\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"legal name\uff08\u6cd5\u5b9a\u540d\u79f0\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"email\uff08\u90ae\u4ef6\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"web\uff08\u7f51\u7edc\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"twitter\uff08\u63a8\u7279\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"riot name\uff08roit\u59d3\u540d\uff09\uff08\u5982\u679c\u4f7f\u7528 Matrix \u4fe1\u606f\uff09\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6240\u6709\u8fd9\u4e9b\u4fe1\u606f\u90fd\u662f\u53ef\u9009\u7684\uff0c\u53ef\u968f\u610f\u63d0\u4f9b\u60a8\u9009\u62e9\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u4f46\u662f\uff0c\u5982\u679c\u60a8\u6b63\u5728\u8fd0\u884c\u9a8c\u8bc1\u8282\u70b9\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u8bbe\u7f6e\u7535\u5b50\u90ae\u4ef6\u3002\u5982\u679c\u9047\u5230\u4e0e\u60a8\u7684\u8282\u70b9\u6709\u5173\u7684\u95ee\u9898\uff0c\u8fd9\u5c06\u4f7f\u6211\u4eec\u80fd\u591f\u548c\u60a8\u8054\u7cfb\u3002"))),(0,i.kt)("p",null,"\u5728\u5f39\u51fa\u7a97\u53e3\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u9700\u5b58\u5165\u7684 HDX \u6570\u91cf\uff0c\u4f5c\u4e3a\u5b58\u50a8\u60a8\u8eab\u4efd\u4fe1\u606f\u7684\u4fdd\u8bc1\u91d1\u3002\u4ee5\u540e\uff0c\u4e00\u65e6\u51b3\u5b9a\u6e05\u9664\u8eab\u4efd\u4fe1\u606f\uff0c\u60a8\u4f1a\u6536\u56de\u8fd9\u7b14\u4fdd\u8bc1\u91d1\u3002"),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-2.jpg")}),(0,i.kt)("p",null,"\u586b\u5199\u5b8c\u4fe1\u606f\u540e\uff0c\u5355\u51fb ",(0,i.kt)("em",{parentName:"p"},"Set Identity")," \uff08\u8bbe\u7f6e\u8eab\u4efd\uff09\uff0c\u5e76\u4f7f\u7528 Polkadot.js \u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f\u5bf9\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d\u3002\u4e00\u65e6\u786e\u8ba4\u4e86\u4ea4\u6613\uff0c\u60a8\u7684\u8eab\u4efd\u5c31\u8bbe\u7f6e\u597d\u4e86\u3002"),(0,i.kt)("h2",{id:"02-verify-identity"},"02 \u63d0\u4ea4\u8eab\u4efd\u8bc1\u660e"),(0,i.kt)("p",null,"\u5728\u60a8\u8bbe\u7f6e\u597d\u8eab\u4efd\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u5b83\u63d0\u4ea4\u7ed9\u7f51\u7edc\u6ce8\u518c\u5546\u8fdb\u884c\u8ba4\u8bc1\u3002\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u8bf7\u6253\u5f00 Polkadot/apps \u5e76\u5bfc\u822a\u5230 ",(0,i.kt)("em",{parentName:"p"},"Developer"),"\uff08\u5f00\u53d1\u8005\uff09> ",(0,i.kt)("em",{parentName:"p"},"Extrinsics"),"\uff08\u4ea4\u6613\uff09\u3002\u6216\u8005\uff0c\u76f4\u63a5\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics"},"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/extrinsics")),(0,i.kt)("p",null,"\u5728\u4e0a\u4e00\u6b65\u9009\u62e9\u76f8\u5e94 HydraDX \u5e10\u6237\u540e\uff0c\u60a8\u9700\u8981\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"submit the following extrinsic"),"\uff08\u63d0\u4ea4\u4e0b\u9762\u7684\u5916\u90e8\u4fe1\u606f\uff09\uff1a \u5de6\u4fa7\u9009 ",(0,i.kt)("inlineCode",{parentName:"li"},"identity")," \uff08\u8eab\u4efd\uff09\uff1b\u53f3\u4fa7\u9009 ",(0,i.kt)("inlineCode",{parentName:"li"},"requestJudgement(reg_index, max_fee)")," \uff08\u8bf7\u6c42\u5224\u5b9a\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reg_index"),"\uff08\u6ce8\u518c\u5546 ID\uff09: \u5728\u8fd9\u91cc\u9700\u8981\u8f93\u5165\u60a8\u9009\u62e9\u7684\u6ce8\u518c\u5546 ID \u8fdb\u884c\u9a8c\u8bc1\u3002\nHydraDX \u6709\u4e24\u4e2a\u6ce8\u518c\u5546\uff1aHydraSik \u7684 Simon Kraus ( ID: ",(0,i.kt)("strong",{parentName:"li"},"0")," ) \u548c Jimmy Tudeski - stakenode ( ID: ",(0,i.kt)("strong",{parentName:"li"},"1")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max_fee"),"\uff08\u6700\u5927\u8d39\u7528\uff09\uff1a\u5728\u8fd9\u91cc\u9700\u8981\u8f93\u5165\u60a8\u613f\u610f\u7528 HDX \u652f\u4ed8\u7ed9\u6ce8\u518c\u5546\u7684\u6700\u9ad8\u8d39\u7528\u3002\u53ea\u6709\u8d39\u7528\u4f4e\u4e8e\u60a8\u6700\u5927\u8d39\u7528\u7684\u6ce8\u518c\u5546\uff0c\u624d\u6709\u8d44\u683c\u8fdb\u884c\u9a8c\u8bc1\u3002")),(0,i.kt)("p",null,"\u82e5\u8981\u63d0\u4ea4\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u8bf7\u5355\u51fb ",(0,i.kt)("em",{parentName:"p"},"Submit Transaction")," \uff08\u63d0\u4ea4\u4ea4\u6613\uff09\u5e76\u7b7e\u7f72\u4ea4\u6613\u3002"),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-3.jpg")}),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8eab\u4efd\u8ba4\u8bc1\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u3002\u8981\u67e5\u770b\u60a8\u7684\u8bf7\u6c42\u72b6\u6001\uff0c\u5bfc\u822a\u5230 ",(0,i.kt)("strong",{parentName:"p"},"My accounts"),"\uff08\u6211\u7684\u8d26\u6237\uff09\u5e76\u5c06\u9f20\u6807\u505c\u5728\u663e\u793a\u60a8\u8eab\u4efd\u7684\u90e8\u5206\uff0c\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u663e\u793a\u5f53\u524d\u72b6\u6001\u7684\u5f39\u51fa\u6846\u3002"),(0,i.kt)("h2",{id:"03-verification-outcome"},"03 \u8ba4\u8bc1\u7ed3\u679c"),(0,i.kt)("p",null,"\u5728\u5904\u7406\u60a8\u7684\u8ba4\u8bc1\u8bf7\u6c42\u540e\uff0c\u6ce8\u518c\u5546\u5c06\u63d0\u4ea4\u4ee5\u4e0b\u5176\u4e2d\u4e00\u9879\u5224\u65ad\uff0c\u8be5\u5224\u65ad\u5c06\u5728\u60a8\u7684\u8eab\u4efd\u72b6\u6001\u4e2d\u663e\u793a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unknown")," - \u9ed8\u8ba4\u503c\uff0c\u5c1a\u672a\u505a\u51fa\u5224\u65ad\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reasonable")," - \u6240\u63d0\u4f9b\u7684\u8d44\u6599\u770b\u6765\u662f\u5408\u7406\u7684\uff0c\u4f46\u662f\u6ca1\u6709\u8fdb\u884c\u6df1\u5165\u7684\u68c0\u67e5\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"KnownGood")," - \u4fe1\u606f\u6b63\u786e\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OutOfDate")," - \u8fd9\u4e2a\u4fe1\u606f\u5728\u8fc7\u53bb\u662f\u6b63\u786e\u7684\uff0c\u4f46\u73b0\u5728\u5df2\u7ecf\u8fc7\u65f6\u4e86\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LowQuality")," - \u4fe1\u606f\u4e0d\u7cbe\u786e\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0\u4fee\u6b63\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Erroneous")," - \u6240\u63d0\u4f9b\u7684\u4fe1\u606f\u662f\u9519\u8bef\u7684\uff0c\u53ef\u80fd\u8868\u660e\u5b58\u5728\u6076\u610f\u610f\u56fe\u3002")))}u.isMDXComponent=!0}}]);