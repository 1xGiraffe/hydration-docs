"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[9366],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905)),o=n(4996);const c={id:"create_account",title:"Create a new HDX Account"},i=void 0,l={unversionedId:"create_account",id:"create_account",title:"Create a new HDX Account",description:"The process of creating a new HDX Account consists of three simple steps.",source:"@site/docs/create_account.md",sourceDirName:".",slug:"/create_account",permalink:"/fr/create_account",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/create_account.md",tags:[],version:"current",frontMatter:{id:"create_account",title:"Create a new HDX Account"},sidebar:"sidebar",previous:{title:"Stake HDX",permalink:"/fr/howto_stake"},next:{title:"Use Parity Signer",permalink:"/fr/howto_wallet_parity_signer"}},s={},u=[{value:"01 Install Polkadot.js",id:"01-install-polkadot-js",level:2},{value:"02 Upgrade metadata",id:"02-upgrade-metadata",level:2},{value:"03 Create your HDX Account",id:"03-create-hdx-account",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The process of creating a new HDX Account consists of three simple steps."),(0,a.kt)("h2",{id:"01-install-polkadot-js"},"01 Install Polkadot.js"),(0,a.kt)("p",null,"In order to create and manage your HDX wallet, you need to install the ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js browser extension"),"."),(0,a.kt)("h2",{id:"02-upgrade-metadata"},"02 Upgrade metadata"),(0,a.kt)("p",null,"After installing the Polkadot.js browser extension, you should make sure that it has been updated with the latest chain metadata. For this purpose, you can visit the following link and update your metadata, if prompted:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/settings/metadata"},"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/settings/metadata")),(0,a.kt)("h2",{id:"03-create-hdx-account"},"03 Create your HDX Account"),(0,a.kt)("p",null,"To create a new HDX address, open the Polkadot.js browser extension and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Create new account"),". "),(0,a.kt)("p",null,"You will be displayed a 12-word mnemonic phrase which can be used to recover your account. Make sure that you backup your seed phrase in a secure location. Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Next step")," and fill in the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network"),": Please select ",(0,a.kt)("inlineCode",{parentName:"li"},"HydraDX Snakenet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Descriptive name of the account")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password"))),(0,a.kt)("p",null,"Your account will be created after clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Add the account with the generated seed"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"create-account",src:(0,o.Z)("/create-account/create-account.png"),width:"350px"})),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to backup your recovery seed phrase by storing it in a secure location. Never share your seed phrase with anybody. The seed phrase can be used to gain access to your account. If you lose it or leak it, you might also lose all the HDX stored in your account. Please note that all HDX balances are locked until mainnet starts, so you need to make sure that you keep the account holding your tokens secure until then.")))}d.isMDXComponent=!0}}]);