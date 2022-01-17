"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[366],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),c=n(4996),i=["components"],l={id:"create_account",title:"Create a new HDX Account"},s=void 0,u={unversionedId:"create_account",id:"create_account",title:"Create a new HDX Account",description:"The process of creating a new HDX Account consists of three simple steps.",source:"@site/docs/create_account.md",sourceDirName:".",slug:"/create_account",permalink:"/de/create_account",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/create_account.md",tags:[],version:"current",frontMatter:{id:"create_account",title:"Create a new HDX Account"},sidebar:"sidebar",previous:{title:"Der Beitrag und die Belohnung",permalink:"/de/new_deal"},next:{title:"HDX beanspruchen",permalink:"/de/claim"}},p=[{value:"01 Install Polkadot.js",id:"01-install-polkadot-js",children:[],level:2},{value:"02 Upgrade metadata",id:"02-upgrade-metadata",children:[],level:2},{value:"03 Create your HDX Account",id:"03-create-hdx-account",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The process of creating a new HDX Account consists of three simple steps."),(0,o.kt)("h2",{id:"01-install-polkadot-js"},"01 Install Polkadot.js"),(0,o.kt)("p",null,"In order to create and manage your HDX wallet, you need to install the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js browser extension"),"."),(0,o.kt)("h2",{id:"02-upgrade-metadata"},"02 Upgrade metadata"),(0,o.kt)("p",null,"After installing the Polkadot.js browser extension, you should make sure that it has been updated with the latest chain metadata. For this purpose, you can visit the following link and update your metadata, if prompted:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/settings/metadata"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/settings/metadata")),(0,o.kt)("h2",{id:"03-create-hdx-account"},"03 Create your HDX Account"),(0,o.kt)("p",null,"To create a new HDX address, open the Polkadot.js browser extension and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Create new account"),". "),(0,o.kt)("p",null,"You will be displayed a 12-word mnemonic phrase which can be used to recover your account. Make sure that you backup your seed phrase in a secure location. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Next step")," and fill in the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network"),": Please select ",(0,o.kt)("inlineCode",{parentName:"li"},"HydraDX Snakenet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Descriptive name of the account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password"))),(0,o.kt)("p",null,"Your account will be created after clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Add the account with the generated seed"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"create-account",src:(0,c.Z)("/create-account/create-account.png"),width:"350px"})),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to backup your recovery seed phrase by storing it in a secure location. Never share your seed phrase with anybody. The seed phrase can be used to gain access to your account. If you lose it or leak it, you might also lose all the HDX stored in your account. Please note that all HDX balances are locked until mainnet starts, so you need to make sure that you keep the account holding your tokens secure until then."))))}m.isMDXComponent=!0}}]);