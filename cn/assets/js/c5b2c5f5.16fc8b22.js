"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[554],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,c(c({ref:e},u),{},{components:n})):r.createElement(f,c({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[s]="string"==typeof t?t:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1436:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905)),o=n(4996);const c={id:"create_account",title:"\u521b\u5efa HDX \u65b0\u8d26\u6237"},i=void 0,l={unversionedId:"create_account",id:"create_account",title:"\u521b\u5efa HDX \u65b0\u8d26\u6237",description:"\u521b\u5efa HDX \u65b0\u5e10\u6237\u7684\u8fc7\u7a0b\u5305\u62ec\u4e09\u4e2a\u7b80\u5355\u7684\u6b65\u9aa4\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/create_account.md",sourceDirName:".",slug:"/create_account",permalink:"/cn/create_account",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/create_account.md",tags:[],version:"current",frontMatter:{id:"create_account",title:"\u521b\u5efa HDX \u65b0\u8d26\u6237"},sidebar:"sidebar",previous:{title:"\u8d28\u62bc HDX",permalink:"/cn/howto_stake"},next:{title:"\u4f7f\u7528 Parity Signer",permalink:"/cn/howto_wallet_parity_signer"}},p={},u=[{value:"01 \u5b89\u88c5 Polkadot.js",id:"01-install-polkadot-js",level:2},{value:"02 \u5347\u7ea7 metadata\uff08\u5143\u6570\u636e\uff09",id:"02-upgrade-metadata",level:2},{value:"03 \u521b\u5efa\u60a8\u7684 HDX \u8d26\u6237",id:"03-create-hdx-account",level:2}],s={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u521b\u5efa HDX \u65b0\u5e10\u6237\u7684\u8fc7\u7a0b\u5305\u62ec\u4e09\u4e2a\u7b80\u5355\u7684\u6b65\u9aa4\u3002"),(0,a.kt)("h2",{id:"01-install-polkadot-js"},"01 \u5b89\u88c5 Polkadot.js"),(0,a.kt)("p",null,"\u4e3a\u4e86\u521b\u5efa\u548c\u7ba1\u7406\u60a8\u7684 HDX \u94b1\u5305\uff0c\u60a8\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/extension/"},"Polkadot.js \u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f")),"\u3002"),(0,a.kt)("h2",{id:"02-upgrade-metadata"},"02 \u5347\u7ea7 metadata\uff08\u5143\u6570\u636e\uff09"),(0,a.kt)("p",null,"\u5b89\u88c5 Polkadot.js \u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f\u540e\uff0c\u60a8\u5e94\u786e\u4fdd\u5b83\u5df2\u66f4\u65b0\u4e3a\u6700\u65b0\u7684\u94fe\u5143\u6570\u636e\u3002 \u4e3a\u6b64\uff0c\u53ef\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u5e76\u5728\u51fa\u73b0\u63d0\u793a\u65f6\u66f4\u65b0\u5143\u6570\u636e\uff1a\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/settings/metadata"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/settings/metadata"))),(0,a.kt)("h2",{id:"03-create-hdx-account"},"03 \u521b\u5efa\u60a8\u7684 HDX \u8d26\u6237"),(0,a.kt)("p",null,"\u8981\u521b\u5efa HDX \u65b0\u5730\u5740\uff0c\u8bf7\u6253\u5f00 Polkadot.js \u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f\u5e76\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Create new account"),"\uff08\u521b\u5efa\u65b0\u8d26\u6237\uff09\u3002"),(0,a.kt)("p",null,"\u60a8\u5c06\u770b\u5230\u4e00\u4e2a 12 \u4e2a\u77ed\u8bed\u7684\u52a9\u8bb0\u8bcd\uff0c\u53ef\u7528\u4e8e\u6062\u590d\u60a8\u7684\u5e10\u6237\u3002 \u786e\u4fdd\u5728\u5b89\u5168\u7684\u4f4d\u7f6e\u5907\u4efd\u60a8\u7684\u79cd\u5b50\u77ed\u8bed\u3002 \u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Next step")," \uff08\u4e0b\u4e00\u6b65\uff09\u5e76\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network"),"\uff08\u7f51\u7edc\uff09: \u8bf7\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"HydraDX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Descriptive name of the account"),"\uff08\u8d26\u6237\u7684\u63cf\u8ff0\u6027\u540d\u79f0\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password"),"\uff08\u8d26\u6237\u5bc6\u7801\uff09")),(0,a.kt)("p",null,"\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Add the account with the generated seed"),"\uff08\u4f7f\u7528\u751f\u6210\u7684\u79cd\u5b50\u6dfb\u52a0\u8d26\u6237\uff09\u540e\uff0c\u5c06\u521b\u5efa\u60a8\u7684\u5e10\u6237\u3002"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"create-account",src:(0,o.Z)("/create-account/create-account.png"),width:"350px"})),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u786e\u4fdd\u901a\u8fc7\u5c06\u5176\u5b58\u50a8\u5728\u5b89\u5168\u4f4d\u7f6e\u6765\u5907\u4efd\u60a8\u7684\u6062\u590d\u79cd\u5b50\u77ed\u8bed\u3002 \u6c38\u8fdc\u4e0d\u8981\u4e0e\u4efb\u4f55\u4eba\u5206\u4eab\u60a8\u7684\u79cd\u5b50\u77ed\u8bed\u3002 \u79cd\u5b50\u77ed\u8bed\u53ef\u7528\u4e8e\u8bbf\u95ee\u60a8\u7684\u5e10\u6237\u3002 \u5982\u679c\u4e22\u5931\u6216\u6cc4\u9732\uff0c\u60a8\u53ef\u80fd\u8fd8\u4f1a\u4e22\u5931\u5e10\u6237\u4e2d\u5b58\u50a8\u7684\u6240\u6709 HDX\u3002 \u8bf7\u6ce8\u610f\uff0c\u5728\u4e3b\u7f51\u542f\u52a8\u4e4b\u524d\uff0c\u6240\u6709 HDX \u4f59\u989d\u90fd\u4f1a\u88ab\u9501\u5b9a\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u786e\u4fdd\u5728\u6b64\u4e4b\u524d\u4fdd\u6301\u6301\u6709\u4ee4\u724c\u7684\u5e10\u6237\u5b89\u5168\u3002")))}d.isMDXComponent=!0}}]);