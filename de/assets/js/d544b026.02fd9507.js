"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[961],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(k,i(i({ref:n},s),{},{components:t})):r.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7791:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(4996),l=["components"],p={id:"polkadotjs_apps_local",title:"Mit einer lokalen Node verbinden"},d=void 0,s={unversionedId:"polkadotjs_apps_local",id:"polkadotjs_apps_local",title:"Mit einer lokalen Node verbinden",description:"Sie k\xf6nnen Polkadot/apps verwenden um sich mit ihrem Lokalen HydraDX Node zu verbinden. Daf\xfcr ist es n\xf6tig Zugang zum Port 9944zu haben, welcher f\xfcr RPC Websocket verbindungen verwendet wird.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/polkadotjs_apps_local.md",sourceDirName:".",slug:"/polkadotjs_apps_local",permalink:"/de/polkadotjs_apps_local",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_local.md",tags:[],version:"current",frontMatter:{id:"polkadotjs_apps_local",title:"Mit einer lokalen Node verbinden"},sidebar:"sidebar",previous:{title:"Teilnahme an Ratswahlen",permalink:"/de/participate_in_council_elections"},next:{title:"Mit einer \xf6ffentlichen Node verbinden",permalink:"/de/polkadotjs_apps_public"}},c=[{value:"\xdcber Polkadot/apps mit einer lokalen Node verbinden",id:"accessing-your-local-node-using-polkadotapps",children:[],level:3}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sie k\xf6nnen Polkadot/apps verwenden um sich mit ihrem Lokalen HydraDX Node zu verbinden. Daf\xfcr ist es n\xf6tig Zugang zum Port ",(0,o.kt)("inlineCode",{parentName:"p"},"9944"),"zu haben, welcher f\xfcr RPC Websocket verbindungen verwendet wird."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Wenn Sie den Node als Validator verwenden, empfehlen wir den Port ",(0,o.kt)("inlineCode",{parentName:"p"},"9944"),"auf die Blacklist f\xfcr Remote Zugriffe zu setzen. Dieser Port k\xf6nnte sonst von Dritten daf\xfcr verwendet werden die Performance Ihres Nodes einzuschr\xe4nken, was wiederum in Slashing oder unbeabsichtigen Verlust von Krypto f\xfchren k\xf6nnte. Sie sollten den Port ",(0,o.kt)("inlineCode",{parentName:"p"},"9944")," nur dann zum Verbinden zu Ihrem Node verwenden wenn dieser in Ihrem Lokalen Netzwerk ist."))),(0,o.kt)("h3",{id:"accessing-your-local-node-using-polkadotapps"},"\xdcber Polkadot/apps mit einer lokalen Node verbinden"),(0,o.kt)("p",null,"Um auf Ihren Node zuzugreifen \xf6ffnen Sie",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," und klicken Sie in die obere linke Ecke um das Netzwerk zu wechseln."),(0,o.kt)("div",null,(0,o.kt)("img",{src:(0,i.Z)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),(0,o.kt)("p",null,"Nachdem das Men\xfc sich \xf6ffnet klicken sie auf ",(0,o.kt)("strong",{parentName:"p"},"Development")," und w\xe4hlen sie ",(0,o.kt)("strong",{parentName:"p"},"Local node"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,i.Z)("/polkadotjs-apps/local-1.png")})),(0,o.kt)("p",null,"Passen Sie die IP wenn n\xf6tig an und klicken Sie auf  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Switch"))," um zu Ihrer lokalen Node zu wechseln."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,i.Z)("/polkadotjs-apps/local-2.png")})),(0,o.kt)("p",null,"Jetzt sollten Sie mit Ihrer lokalen Node verbunden sein und k\xf6nnen nun darauf zugreifen."))}m.isMDXComponent=!0}}]);