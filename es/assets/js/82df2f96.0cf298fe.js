"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[412],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=r.createContext({}),l=function(e){var a=r.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=l(e.components);return r.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=t,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(v,s(s({ref:a},c),{},{components:n})):r.createElement(v,s({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1361:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(3117),t=n(102),o=(n(7294),n(3905)),s=(n(4996),["components"]),i={id:"staking_rewards",title:"Recompesas de Staking"},d=void 0,l={unversionedId:"staking_rewards",id:"staking_rewards",title:"Recompesas de Staking",description:"Las recompensas del staking incentivan a los validadores y nominadores a hacer stake de sus tokens HDX . Hay tres tipos de recompensas por staking que se analizan en este art\xedculo:  base rewards, era points y los tips",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/staking_rewards.md",sourceDirName:".",slug:"/staking_rewards",permalink:"/es/staking_rewards",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/staking_rewards.md",tags:[],version:"current",frontMatter:{id:"staking_rewards",title:"Recompesas de Staking"},sidebar:"sidebar",previous:{title:"Staking",permalink:"/es/staking"},next:{title:"Introducci\xf3n",permalink:"/es/democracy_intro"}},c=[{value:"Recompensas Base",id:"base-rewards",children:[],level:2},{value:"Puntos Era",id:"era-points",children:[],level:2},{value:"Tips",id:"tips",children:[],level:2}],p={toc:c};function u(e){var a=e.components,n=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Las recompensas del staking incentivan a los validadores y nominadores a ",(0,o.kt)("a",{parentName:"p",href:"/staking"},"hacer stake de sus tokens HDX")," . Hay tres tipos de recompensas por staking que se analizan en este art\xedculo:  ",(0,o.kt)("a",{parentName:"p",href:"#base-rewards"},"base rewards"),", ",(0,o.kt)("a",{parentName:"p",href:"#era-points"},"era points")," y los ",(0,o.kt)("a",{parentName:"p",href:"#tips"},"tips")),(0,o.kt)("h2",{id:"base-rewards"},"Recompensas Base"),(0,o.kt)("p",null,"Al final de cada era (24 horas), todos los grupos de validadores activos reciben recompensas b\xe1sicas en forma de tokens HDX. Un pool de validaci\xf3n consiste en un validador elegido (teniendo su propio HDX en stake ) y todas las nominaciones activos que respaldan el validador (para m\xe1s informaci\xf3n leer en ",(0,o.kt)("a",{parentName:"p",href:"/staking"},"Staking")," ). Un principio central del mecanismo de consenso de Proof-of-Stake (NPoS) es que ",(0,o.kt)("strong",{parentName:"p"},"trabajos iguales traen recompensas iguales")," . En otras palabras, dado que todos los grupos de validadores realizan esencialmente el mismo trabajo, las recompensas b\xe1sicas disponibles se dividen por igual entre ellos. Esto significa que los grupos de validadores no son recompensados en proporci\xf3n a su participaci\xf3n total, lo cual es una gran diferencia con las redes tradicionales de PoS."),(0,o.kt)("p",null,"El mecanismo de compartir las recompensas b\xe1sicas por igual entre todos los grupos de validadores participantes contribuye a la seguridad de la red al evitar la concentraci\xf3n de poder en unos pocos grupos de validadores, fortaleciendo as\xed la descentralizaci\xf3n. Con el tiempo, incentiva a los nominadores a nominar validadores con una participaci\xf3n menor de HDX. Este proceso eventualmente equilibrar\xe1 las relaciones de poder en la red y conducir\xe1 a una situaci\xf3n en la que todos los grupos de validadores tengan aproximadamente una cantidad equivalente de HDX apostado."),(0,o.kt)("p",null,"La distribuci\xf3n de recompensas se lleva a cabo de la siguiente manera. Despu\xe9s de calcular la cantidad (igual) de recompensas para cada grupo de validadores, el validador recibe su parte en forma de ",(0,o.kt)("strong",{parentName:"p"},"comisiones")," por mantener el nodo. Como segundo paso, los tokens restantes se distribuyen entre todas las apuestas de manera ",(0,o.kt)("strong",{parentName:"p"},"proporcional")," (incluido el monto del propio validadorr). Esto significa que los stake m\xe1s altos recibir\xe1n una mayor proporci\xf3n de las recompensas que se atribuyen al grupo de validadores en particular."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"En nuestra red de prueba incentivada llamada Snakenet, la cantidad de recompensas recibidas por hacer stake de sus tokens HDX se estima en alrededor del ",(0,o.kt)("strong",{parentName:"p"},"50% APY")," ."))),(0,o.kt)("h2",{id:"era-points"},"Puntos Era"),(0,o.kt)("p",null,"Los validadores pueden ganar recompensas adicionales en proporci\xf3n a los puntos de era que hayan ganado en la era pasada. Estas recompensas se suman a las recompensas b\xe1sicas descritas anteriormente. Los validadores pueden ganar puntos de era mediante la realizaci\xf3n de determinadas acciones espec\xedficas como:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Produciendo un non-uncle block en la Relay "),(0,o.kt)("li",{parentName:"ul"},"Produciendo una referencia a un uncle block no referenciado previamente"),(0,o.kt)("li",{parentName:"ul"},"Produciendo un uncle block referenciado")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," Un uncle block es un bloque de la Relay Chain que es v\xe1lido en todos los aspectos, que sin embargo no ha logrado convertirse en canonical. Esto puede suceder cuando dos o m\xe1s validadores son productores de bloques en una sola ranura, y el bloque producido por un validador llega al siguiente productor de bloques antes que los dem\xe1s. Los bloques rezagados se denominan uncle block"))),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("p",null,"Finalmente, los validadores pueden ganar tips que tambi\xe9n se agregan a las recompensas b\xe1sicas al final de cada era. Los tips representan una tarifa de transacci\xf3n adicional que los usuarios pueden pagar opcionalmente para darle a su transacci\xf3n una prioridad m\xe1s alta."))}u.isMDXComponent=!0}}]);