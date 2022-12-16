"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[841],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),c=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=t,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(k,o(o({ref:a},d),{},{components:n})):r.createElement(k,o({ref:a},d))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1541:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(3117),t=n(102),i=(n(7294),n(3905)),o=n(4996),s=["components"],l={id:"claim",title:"Reclamar tus HDX"},c=void 0,d={unversionedId:"claim",id:"claim",title:"Reclamar tus HDX",description:"Tu puedes reclamar tus HDX con los xHDX tokens (ERC-20) que obtuvo durante nuestro Balancer LBP mientras etsuvo activo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/claim.md",sourceDirName:".",slug:"/claim",permalink:"/es/claim",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/claim.md",tags:[],version:"current",frontMatter:{id:"claim",title:"Reclamar tus HDX"},sidebar:"sidebar",previous:{title:"Participar en las elecciones del consejo",permalink:"/es/participate_in_council_elections"},next:{title:"Establecer tu Identidad",permalink:"/es/identity"}},u=[{value:"Pre-requisitos",id:"prequisites",children:[],level:2},{value:"Proceso de Reclamo",id:"claim-process",children:[{value:"00 Autorizaci\xf3n",id:"00-authorize",children:[],level:3},{value:"01 Selecciona tu direcci\xf3n ETH",id:"01-select-your-eth-address",children:[],level:3},{value:"02 Crea y Selecciona una direcci\xf3n HDX",id:"02-create-and-select-an-hdx-address",children:[],level:3},{value:"03 Firma",id:"03-sign",children:[],level:3},{value:"04 Reclamo",id:"04-claim",children:[],level:3}],level:2}],p={toc:u};function m(e){var a=e.components,n=(0,t.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tu puedes reclamar tus HDX con los xHDX tokens (ERC-20) que obtuvo durante nuestro ",(0,i.kt)("a",{parentName:"p",href:"https://hydradx.substack.com/p/lbp-announcement"},"Balancer LBP")," mientras etsuvo activo."),(0,i.kt)("h2",{id:"prequisites"},"Pre-requisitos"),(0,i.kt)("p",null,"Hay dos requisitos previos para reclamar su HDX. En primer lugar, debe instalar la ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"extensi\xf3n del navegador Polkadot.js")," que se utilizar\xe1 para crear su billetera HDX. En segundo lugar, necesita acceso a sus tokens xHDX, que deben almacenarse en una billetera que admita la firma de mensajes relacionados con tokens ERC-20 (por ejemplo, Metamask)."),(0,i.kt)("p",null,"Si sus tokens xHDX est\xe1n almacenados en Coinbase Wallet o Trust Wallet, deber\xe1 utilizar una de las siguientes soluciones para reclamar su HDX, ya que estas carteras no admiten la firma de mensajes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metamask: puede usar la extensi\xf3n del navegador Metamask e importar su billetera usando la frase inicial de recuperaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},"MEW (MyEtherWallet): tambi\xe9n puede usar MEW importando su frase inicial de recuperaci\xf3n (",(0,i.kt)("em",{parentName:"li"}," Frase mnem\xf3nica "),") o usando la opci\xf3n de conexi\xf3n WalletLink. Se puede acceder a ambas opciones desde la ",(0,i.kt)("a",{parentName:"li",href:"https://www.myetherwallet.com/access-my-wallet"},"p\xe1gina de acceso a la billetera MEW"),". Si est\xe1 utilizando Coinbase Wallet, puede usar WalletLink, que puede encontrar la Configuraci\xf3n de Coinbase Wallet.")),(0,i.kt)("h2",{id:"claim-process"},"Proceso de Reclamo"),(0,i.kt)("p",null,"Despu\xe9s de asegurarse de que ha cumplido con los requisitos previos descritos anteriormente, puede navegar a la ",(0,i.kt)("a",{parentName:"p",href:"https://claim.hydradx.io"},"aplicaci\xf3n HydraDX Claim")," y continuar con el proceso de reclamaci\xf3n."),(0,i.kt)("p",null,"Durante el proceso de reclamo, usar\xe1 sus tokens xHDX (ERC-20) para reclamar su parte de tokens HDX."),(0,i.kt)("h3",{id:"00-authorize"},"00 Autorizaci\xf3n"),(0,i.kt)("p",null,"La aplicaci\xf3n HydraDX Claim solicitar\xe1 la autorizaci\xf3n de la extensi\xf3n del navegador Polkadot.js."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Aseg\xfarese de no ser v\xedctima de un ataque de phishing y preste atenci\xf3n a la ventana emergente de autorizaci\xf3n: la aplicaci\xf3n debe identificarse como ",(0,i.kt)("strong",{parentName:"p"},"CLAIM.HYDRADX.IO")," y la solicitud debe provenir de ",(0,i.kt)("strong",{parentName:"p"},"https://reclamo .hidradx.io"),"."))),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/claim/authorize.jpg")}),(0,i.kt)("p",null,"Despu\xe9s de autorizar, se le pedir\xe1 que actualice los metadatos para la extensi\xf3n del navegador Polkadot.js. Esto permitir\xe1 que Polkadot.js cree direcciones espec\xedficas de HydraDX que se requieren para completar el proceso de reclamo."),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/claim/metadata.jpg")}),(0,i.kt)("h3",{id:"01-select-your-eth-address"},"01 Selecciona tu direcci\xf3n ETH"),(0,i.kt)("p",null,"En el primer paso del proceso de reclamo, se le pedir\xe1 que seleccione la cuenta que contiene sus tokens xHDX. Esto se puede hacer conect\xe1ndose a su billetera con los tokens ERC-20 (por ejemplo, Metamask) o ingresando su direcci\xf3n ETH manualmente en el cuadro de entrada (en ese caso, deber\xe1 firmar el mensaje manualmente m\xe1s tarde)."),(0,i.kt)("p",null,"Despu\xe9s de ingresar su direcci\xf3n ETH, deber\xeda ver el saldo de tokens HDX que puede reclamar, incluido el ",(0,i.kt)("a",{parentName:"p",href:"https://hydradx.substack.com/p/first-governance-vote"},"reembolso de las tarifas del gas")," que ha gastado para obtener su xHDX en Balancer."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"No es elegible para un reembolso de gasolina si ha obtenido su xHDX en alg\xfan otro lugar que no sea el grupo oficial de Balancer (como Uniswap), o si ha sacado sus tokens de la billetera de compra original."))),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/claim/claim-01.jpg")}),(0,i.kt)("h3",{id:"02-create-and-select-an-hdx-address"},"02 Crea y Selecciona una direcci\xf3n HDX"),(0,i.kt)("p",null,"En el segundo paso, se le pedir\xe1 que seleccione su direcci\xf3n HDX."),(0,i.kt)("p",null,"Para crear una nueva direcci\xf3n HDX, abra la extensi\xf3n del navegador Polkadot.js y haga clic en el signo + para crear una nueva cuenta. En el primer paso de la creaci\xf3n de la cuenta, ver\xe1 la frase mnemot\xe9cnica de 12 trabajos que se puede utilizar para recuperar su cuenta. Despu\xe9s de guardar su frase inicial en un lugar seguro, haga clic en ",(0,i.kt)("em",{parentName:"p"},"Siguiente paso"),". Aqu\xed, debe cambiar la ",(0,i.kt)("strong",{parentName:"p"},"Red")," seleccionando la opci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"HydraDX Snakenet"),". Ingrese un nombre y contrase\xf1a para su cuenta y finalice la creaci\xf3n de la cuenta."),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/claim/create-account.png")}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Aseg\xfarese de hacer una copia de seguridad de su frase inicial de recuperaci\xf3n guard\xe1ndola en un lugar seguro y nunca la comparta con nadie. Usar la frase inicial es la \xfanica forma en que puede recuperar su cuenta y, si la pierde o filtra, sus fondos podr\xedan verse comprometidos. Tenga en cuenta que debe proteger su acceso a esta billetera hasta que se inicie la red principal, ya que todos los saldos de HDX est\xe1n actualmente bloqueados. Si pierde el acceso a su billetera HDX, tambi\xe9n perder\xe1 su HDX."))),(0,i.kt)("p",null,"Despu\xe9s de crear su cuenta HDX, deber\xeda poder seleccionarla en la aplicaci\xf3n HydraDX Claim. Despu\xe9s de hacerlo, la aplicaci\xf3n deber\xeda proporcionarle una descripci\xf3n general de las direcciones ETH y HDX utilizadas para el proceso de reclamo. Haga clic en siguiente para continuar con la firma del mensaje."),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/claim/claim-02.jpg")}),(0,i.kt)("h3",{id:"03-sign"},"03 Firma"),(0,i.kt)("p",null,"En el tercer paso del proceso de reclamo utilizando la aplicaci\xf3n HydraDX Claim, se le proporcionar\xe1 la opci\xf3n de firmar el mensaje para usar sus tokens xHDX para reclamar HDX."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tenga en cuenta que en este paso ver\xe1 la ",(0,i.kt)("strong",{parentName:"p"},"clave p\xfablica")," de su direcci\xf3n HDX, y no la direcci\xf3n en su forma legible por humanos como se mostr\xf3 en el paso anterior y en la extensi\xf3n de su navegador Polkadot.js (para m\xe1s detalles consulte los ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/keyring/start/ss58"},"ss58 docs"),"). Si ha seguido todos los pasos descritos anteriormente, no hay nada de qu\xe9 preocuparse y es seguro continuar con la firma del mensaje. Tambi\xe9n verificaremos que la cuenta HDX que est\xe1 utilizando para firmar la transacci\xf3n de reclamo en el paso final corresponda con la cuenta que recibe el HDX reclamado."))),(0,i.kt)("p",null,"Dependiendo de la elecci\xf3n que haya hecho en el primer paso, tiene dos opciones para firmar el mensaje para usar los tokens xHDX en el proceso de reclamo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Si est\xe1 utilizando ",(0,i.kt)("strong",{parentName:"p"},"Metamask"),", despu\xe9s de hacer clic en el bot\xf3n ",(0,i.kt)("em",{parentName:"p"},"Firmar"),", Metamask le pedir\xe1 que firme el mensaje. Siga las instrucciones en Metamask.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Si ingres\xf3 su direcci\xf3n ETH manualmente, deber\xe1 firmar el mensaje a trav\xe9s de la billetera externa que contiene las claves privadas de sus tokens xHDX. Una vez que haya firmado el mensaje, copie la firma (comenzando con ",(0,i.kt)("em",{parentName:"p"},"0x"),") en el campo respectivo en la aplicaci\xf3n HydraDX Claim."))),(0,i.kt)("img",{alt:"authorize",src:(0,o.Z)("/claim/claim-03.jpg")}),(0,i.kt)("h3",{id:"04-claim"},"04 Reclamo"),(0,i.kt)("p",null,"Despu\xe9s de firmar el mensaje con la billetera que contiene sus tokens xHDX, la extensi\xf3n Polkadot.js deber\xeda abrirse y se le pedir\xe1 que firme la transacci\xf3n para reclamar el HDX a su cuenta. Ingrese la contrase\xf1a de su cuenta HDX y haga clic en ",(0,i.kt)("em",{parentName:"p"},"Firmar la transacci\xf3n"),"."),(0,i.kt)("p",null,"\xa1Ya ha completado el proceso de reclamaci\xf3n, convirti\xe9ndose as\xed oficialmente en propietario de HDX!"),(0,i.kt)("p",null,"Puede consultar su saldo utilizando ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/accounts"},"Polkadot/apps")," conectado a HydraDX Red: ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/accounts"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/accounts")))}m.isMDXComponent=!0}}]);