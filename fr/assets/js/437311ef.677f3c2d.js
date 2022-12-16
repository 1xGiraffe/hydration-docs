"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[19],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,y=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8399:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=a(4996),l=["components"],s={id:"howto_wallet_parity_signer",title:"Use Parity Signer"},d=void 0,c={unversionedId:"howto_wallet_parity_signer",id:"howto_wallet_parity_signer",title:"Use Parity Signer",description:"Parity Signer is a mobile app which turns your iOS or Android device into a dedicated hardware wallet for Polkadot, Kusama, and any other Substrate-based chain. It allows you to keep your private keys offline while still being able to conveniently sign transactions in an air-gapped way using QR codes.",source:"@site/docs/howto_wallet_parity_signer.md",sourceDirName:".",slug:"/howto_wallet_parity_signer",permalink:"/fr/howto_wallet_parity_signer",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/howto_wallet_parity_signer.md",tags:[],version:"current",frontMatter:{id:"howto_wallet_parity_signer",title:"Use Parity Signer"},sidebar:"sidebar",previous:{title:"Create a new HDX Account",permalink:"/fr/create_account"},next:{title:"R\xe9clamer une r\xe9compense de tr\xe9sorerie",permalink:"/fr/tip_request"}},p=[{value:"Set Up Parity Signer",id:"set-up-parity-signer",children:[{value:"Before You Start: Stay Safe",id:"before-you-start-stay-safe",children:[{value:"Start clean",id:"start-clean",children:[],level:4},{value:"Don\u2019t Insert Sim",id:"dont-insert-sim",children:[],level:4},{value:"Use Strong Passwords",id:"use-strong-passwords",children:[],level:4},{value:"Setup New Account",id:"setup-new-account",children:[],level:4},{value:"No Biometrics",id:"no-biometrics",children:[],level:4},{value:"Disable All Signal-receiving Features",id:"disable-all-signal-receiving-features",children:[],level:4},{value:"Logout From All Accounts",id:"logout-from-all-accounts",children:[],level:4},{value:"Updating Your Device",id:"updating-your-device",children:[],level:4}],level:3},{value:"Install Parity Signer",id:"install-parity-signer",children:[],level:3},{value:"Create a New Account",id:"create-a-new-account",children:[{value:"01 Add Seed",id:"01-add-seed",children:[],level:4},{value:"02 Back Up your Recovery Phrase",id:"02-back-up-your-recovery-phrase",children:[],level:4}],level:3},{value:"Connect to Polkadot.js/apps",id:"connect-to-polkadotjsapps",children:[{value:"On Polkadot.js/apps",id:"on-polkadotjsapps",children:[],level:4},{value:"On Parity Signer",id:"on-parity-signer",children:[],level:4}],level:3},{value:"Add HydraDX Chain",id:"add-hydradx-chain",children:[{value:"01 Get Chain Specs",id:"01-get-chain-specs",children:[],level:4},{value:"02 Add Specs",id:"02-add-specs",children:[],level:4}],level:3}],level:2},{value:"Use Parity Signer",id:"use-parity-signer",children:[{value:"Sign a Transaction",id:"sign-a-transaction",children:[],level:3},{value:"Update Metadata",id:"update-metadata",children:[{value:"01 Get Metadata",id:"01-get-metadata",children:[],level:4},{value:"02 Update",id:"02-update",children:[],level:4}],level:3}],level:2}],u={toc:p};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer/"},"Parity Signer")," is a mobile app which turns your iOS or Android device into a dedicated hardware wallet for Polkadot, Kusama, and any other Substrate-based chain. It allows you to keep your private keys offline while still being able to conveniently sign transactions in an air-gapped way using QR codes."),(0,r.kt)("h2",{id:"set-up-parity-signer"},"Set Up Parity Signer"),(0,r.kt)("h3",{id:"before-you-start-stay-safe"},"Before You Start: Stay Safe"),(0,r.kt)("h4",{id:"start-clean"},"Start clean"),(0,r.kt)("p",null,"Before installing Parity Signer, make sure that your phone is in a clean state. If it has been used, perform a factory reset and do not install any other apps besides Parity Signer."),(0,r.kt)("h4",{id:"dont-insert-sim"},"Don\u2019t Insert Sim"),(0,r.kt)("p",null,"If possible, don\u2019t turn on WiFi or use a secure WiFi connection, preferably with no other connected devices and a reputable VPN provider to connect, update the device, and install the Parity signer app."),(0,r.kt)("h4",{id:"use-strong-passwords"},"Use Strong Passwords"),(0,r.kt)("p",null,"For robust security, use long passwords for the device and the accounts you need to create to use it."),(0,r.kt)("h4",{id:"setup-new-account"},"Setup New Account"),(0,r.kt)("p",null,"Don\u2019t use your old google ID or apple ID, create a new one specifically for this use which will be used only to download updates and parity signer. In case of Android device it\u2019s better to not use WiFi or google account at all. We recommend using some sort of OS that encrypts your data like ",(0,r.kt)("a",{parentName:"p",href:"https://lineageos.org"},"Lineage O.S.")," If an email is required, create a new one. Alternatively, you can create new apple id and email on iOS."),(0,r.kt)("h4",{id:"no-biometrics"},"No Biometrics"),(0,r.kt)("p",null,"Avoid fingerprint scanners, face ID, or shot numeric codes as they are exploitable. Use a strong password instead."),(0,r.kt)("h4",{id:"disable-all-signal-receiving-features"},"Disable All Signal-receiving Features"),(0,r.kt)("p",null,"Use airplane mode and make sure to disable all of these features manually. If you are on an iOS device, turn it off and ask to auto-join networks and hotspots in the WiFi settings. Including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Location services"),(0,r.kt)("li",{parentName:"ul"},"WiFi (if required to upgrade or setup, disable right after the update)"),(0,r.kt)("li",{parentName:"ul"},"Bluetooth")),(0,r.kt)("h4",{id:"logout-from-all-accounts"},"Logout From All Accounts"),(0,r.kt)("p",null,"Log out from App stores, iCloud, and any other accounts you\u2019ve joined."),(0,r.kt)("h4",{id:"updating-your-device"},"Updating Your Device"),(0,r.kt)("p",null,"If you are using WiFi to update your device, remember to disable it right after the update and use it only in a secure environment, preferably through a secure and encrypted VPN channel. After the update is complete, forget the WiFi network to make sure you don't automatically rejoin."),(0,r.kt)("h3",{id:"install-parity-signer"},"Install Parity Signer"),(0,r.kt)("p",null,"Install Parity Signer from the official app store for your device (iOS / Android).",(0,r.kt)("br",{parentName:"p"}),"\n","Make sure that the application you are downloading has been published by Parity Technologies."),(0,r.kt)("h3",{id:"create-a-new-account"},"Create a New Account"),(0,r.kt)("p",null,"To create a new account, follow the steps below."),(0,r.kt)("h4",{id:"01-add-seed"},"01 Add Seed"),(0,r.kt)("p",null,"Open the Parity Signer app and select ",(0,r.kt)("inlineCode",{parentName:"p"},"New seed"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_wallets/parity_signer_seed.jpg"),width:"350px"})),(0,r.kt)("h4",{id:"02-back-up-your-recovery-phrase"},"02 Back Up your Recovery Phrase"),(0,r.kt)("p",null,"The app will display your recover phrase. Write it down and store it in a safe place."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_wallets/parity_signer_seed_2.jpg"),width:"350px"})),(0,r.kt)("p",null,"After completing this, you are all set to go! You can use your phone passcode or authentication method (fingerprint / face id) in Parity Signer."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Stay safe!"),(0,r.kt)("p",{parentName:"div"},"Anyone with your seed phrase can access your funds, and there is no recourse for someone stealing your seed phrase. "),(0,r.kt)("p",{parentName:"div"},"To protect your seed phrase, consider the following tips:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Never store your seed phrase as a digital file on any device."),(0,r.kt)("li",{parentName:"ul"},"Always write down your seed phrase with a pen and paper."),(0,r.kt)("li",{parentName:"ul"},"Store the paper with your seed phrase on it somewhere safe."),(0,r.kt)("li",{parentName:"ul"},"Never give your seed phrase to anybody, including support staff.")))),(0,r.kt)("h3",{id:"connect-to-polkadotjsapps"},"Connect to Polkadot.js/apps"),(0,r.kt)("p",null,"Optionally, you can add your Parity Signer account into the Polkadot.js browser extension which will allow you to view your balances on the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot.js/apps accounts page")," and to sign transactions more easily."),(0,r.kt)("h4",{id:"on-polkadotjsapps"},"On Polkadot.js/apps"),(0,r.kt)("p",null,"To add your account, open the Polkadot.js browser extension, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Attach external QR-signer account"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_wallets/parity_signer_polkajs_attach.jpg"),width:"350px"})),(0,r.kt)("h4",{id:"on-parity-signer"},"On Parity Signer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"Keys")," tab in the bottom menu;"),(0,r.kt)("li",{parentName:"ul"},"Select the network you will be using from the dropdown menu next to chain;"),(0,r.kt)("li",{parentName:"ul"},"Select your desired account or sub-account;"),(0,r.kt)("li",{parentName:"ul"},"You will see a QR code which you need to scan with your device camera.")),(0,r.kt)("h3",{id:"add-hydradx-chain"},"Add HydraDX Chain"),(0,r.kt)("p",null,"To use Parity Signer, you first need to add a new chain to Parity Signer. If you want to use Parity only for Polkadot or Kusama, you can skip this step and proceed with updating metadata. To add a new chain, you need to scan a QR code with base information about the chain."),(0,r.kt)("h4",{id:"01-get-chain-specs"},"01 Get Chain Specs"),(0,r.kt)("p",null,"On your Desktop, navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://nova-wallet.github.io/metadata-portal/"},"https://nova-wallet.github.io/metadata-portal/")," and select HydraDX as the desired chain. After that, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain Specs"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_wallets/parity_signer_add_chain.jpg")})),(0,r.kt)("h4",{id:"02-add-specs"},"02 Add Specs"),(0,r.kt)("p",null,"On your Parity Signer, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Scanner"),", scan the QR code and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add new chain"),"."),(0,r.kt)("h2",{id:"use-parity-signer"},"Use Parity Signer"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Always make sure you are scanning a QR code signed by a trusted verifier."))),(0,r.kt)("h3",{id:"sign-a-transaction"},"Sign a Transaction"),(0,r.kt)("p",null,"To sign a transaction from your parity signer, we recommended adding it to polkadot.js extension for ease of use. Until more chains can work with Parity Signer directly, it will be the most convenient way to use it inside applications on your desktop."),(0,r.kt)("p",null,"When signing a transaction using your Parity Signer, Polkadot.js/apps will display a QR code."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_wallets/parity_signer_sign_1.jpg"),width:"350px"})),(0,r.kt)("p",null,"Scan the QR code using Parity Signer and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Unlock key and sign"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_wallets/parity_signer_sign_2.jpg"),width:"350px"})),(0,r.kt)("p",null,"Your Parity Signer will now display a QR code. To complete signing the transaction, switch back to Polkadot.js/apps and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Scan signature via camera"),"."),(0,r.kt)("h3",{id:"update-metadata"},"Update Metadata"),(0,r.kt)("p",null,"To use the Parity Signer, you require the latest metadata for decoding transactions in the Parity Signer. You can acquire the metadata by scanning a multi-part QR code containing this data, allowing the Parity Signer to decode the actual transaction and display it correctly before you sign. This step is similar to updating your ledger application."),(0,r.kt)("h4",{id:"01-get-metadata"},"01 Get Metadata"),(0,r.kt)("p",null,"On your Desktop, navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://nova-wallet.github.io/metadata-portal/"},"https://nova-wallet.github.io/metadata-portal/")," and select the desired chain. After that, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"metadata",src:(0,o.Z)("/howto_wallets/parity_signer_metadata.jpg")})),(0,r.kt)("h4",{id:"02-update"},"02 Update"),(0,r.kt)("p",null,"On your Parity Signer, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Scanner"),", and update the Metadata by scanning the QR code"))}h.isMDXComponent=!0}}]);