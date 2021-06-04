(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[429],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},2725:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(4996),c={id:"create_account",title:"Create a new HDX Account"},s={unversionedId:"create_account",id:"create_account",isDocsHomePage:!1,title:"Create a new HDX Account",description:"The process of creating a new HDX Account consists of three simple steps.",source:"@site/docs/create_account.md",sourceDirName:".",slug:"/create_account",permalink:"/create_account",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/create_account.md",version:"current",frontMatter:{id:"create_account",title:"Create a new HDX Account"},sidebar:"sidebar",previous:{title:"Contribute and Get Rewarded",permalink:"/new_deal"},next:{title:"Claim your HDX",permalink:"/claim"}},u=[{value:"01 Install Polkadot.js",id:"01-install-polkadot-js",children:[]},{value:"02 Upgrade metadata",id:"02-upgrade-metadata",children:[]},{value:"03 Create your HDX Account",id:"03-create-hdx-account",children:[]}],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The process of creating a new HDX Account consists of three simple steps."),(0,o.kt)("h2",{id:"01-install-polkadot-js"},"01 Install Polkadot.js"),(0,o.kt)("p",null,"In order to create and manage your HDX wallet, you need to install the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js browser extension"),"."),(0,o.kt)("h2",{id:"02-upgrade-metadata"},"02 Upgrade metadata"),(0,o.kt)("p",null,"After installing the Polkadot.js browser extension, you should make sure that it has been updated with the latest chain metadata. For this purpose, you can visit the following link and update your metadata, if prompted:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/settings/metadata"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/settings/metadata")),(0,o.kt)("h2",{id:"03-create-hdx-account"},"03 Create your HDX Account"),(0,o.kt)("p",null,"To create a new HDX address, open the Polkadot.js browser extension and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Create new account"),". "),(0,o.kt)("p",null,"You will be displayed a 12-word mnemonic phrase which can be used to recover your account. Make sure that you backup your seed phrase in a secure location. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Next step")," and fill in the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network"),": Please select ",(0,o.kt)("inlineCode",{parentName:"li"},"HydraDX Snakenet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Descriptive name of the account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password"))),(0,o.kt)("p",null,"Your account will be created after clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Add the account with the generated seed"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"create-account",src:(0,i.Z)("/create-account/create-account.png"),width:"350px"})),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to backup your recovery seed phrase by storing it in a secure location. Never share your seed phrase with anybody. The seed phrase can be used to gain access to your account. If you lose it or leak it, you might also lose all the HDX stored in your account. Please note that all HDX balances are locked until mainnet starts, so you need to make sure that you keep the account holding your tokens secure until then."))))}d.isMDXComponent=!0}}]);