"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[8668],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||f[m]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9250:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=a(3117),n=(a(7294),a(3905)),l=a(4996);const o={id:"fees",title:"Fees"},i=void 0,s={unversionedId:"fees",id:"fees",title:"Fees",description:"The HydraDX Protocol charges users fees for its products. Some of these fees go to the HydraDX Treasury, while others are distributed as rewards to Liquidity Providers (LPs), stakers, referrers or trades. In some cases, fees in HDX may be even burned.",source:"@site/docs/fees.md",sourceDirName:".",slug:"/fees",permalink:"/ru/fees",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/fees.md",tags:[],version:"current",frontMatter:{id:"fees",title:"Fees"},sidebar:"sidebar",previous:{title:"Liquidity bootstrapping (LBP)",permalink:"/ru/lbp"},next:{title:"HDX Tokenomics",permalink:"/ru/tokenomics"}},d={},p=[{value:"Transaction fee",id:"transaction-fee",level:2},{value:"Asset fee",id:"asset-fee",level:2},{value:"Protocol fee",id:"protocol-fee",level:2},{value:"Withdrawal fee (Omnipool)",id:"withdrawal-fee-omnipool",level:2},{value:"Trade fee (Isolated Pool)",id:"trade-fee-isolated-pool",level:2},{value:"Trade fee (Stablepool)",id:"trade-fee-stablepool",level:2},{value:"Withdrawal fee (Stablepool)",id:"withdrawal-fee-stablepool",level:2},{value:"Repayment fee (LBP)",id:"repayment-fee-lbp",level:2},{value:"Trade fee (LBP)",id:"trade-fee-lbp",level:2}],u={toc:p};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The HydraDX Protocol charges users fees for its products. Some of these fees go to the HydraDX Treasury, while others are distributed as rewards to Liquidity Providers (LPs), stakers, referrers or trades. In some cases, fees in HDX may be even burned."),(0,n.kt)("p",null,"Here is an overview of all fees:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product"),(0,n.kt)("th",{parentName:"tr",align:null},"Type fee"),(0,n.kt)("th",{parentName:"tr",align:null},"Amount"),(0,n.kt)("th",{parentName:"tr",align:null},"Details"),(0,n.kt)("th",{parentName:"tr",align:null},"Recipient"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#transaction-fee"},"Transaction fee")),(0,n.kt)("td",{parentName:"tr",align:null},"~1.60 HDX+"),(0,n.kt)("td",{parentName:"tr",align:null},"Fee paid per transaction for any action on the network"),(0,n.kt)("td",{parentName:"tr",align:null},"Treasury")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Omnipool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#asset-fee"},"Asset fee")),(0,n.kt)("td",{parentName:"tr",align:null},"0.25% to 5.00%"),(0,n.kt)("td",{parentName:"tr",align:null},"Dynamic fee on every Omnipool trade"),(0,n.kt)("td",{parentName:"tr",align:null},"LPs, referrers, traders & staking")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Omnipool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#protocol-fee"},"Protocol fee")),(0,n.kt)("td",{parentName:"tr",align:null},"0.05% to 0.10%"),(0,n.kt)("td",{parentName:"tr",align:null},"Dynamic fee on every Omnipool trade"),(0,n.kt)("td",{parentName:"tr",align:null},"Burned or HDX subpool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Omnipool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#withdrawal-fee-omnipool"},"Withdrawal fee")),(0,n.kt)("td",{parentName:"tr",align:null},"0.01% to 1.00%"),(0,n.kt)("td",{parentName:"tr",align:null},"Dynamic fee on Omnipool LP liquidity withdrawals"),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidity providers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Isolated Pool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#trade-fee-isolated-pool"},"Trade fee")),(0,n.kt)("td",{parentName:"tr",align:null},"0.3%"),(0,n.kt)("td",{parentName:"tr",align:null},"Fee on every Isolated Pool trade"),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidity providers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Stablepool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#trade-fee-stablepool"},"Trade fee")),(0,n.kt)("td",{parentName:"tr",align:null},"0.04%"),(0,n.kt)("td",{parentName:"tr",align:null},"Fee on every Stablepool trade"),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidity providers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Stablepool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#withdrawal-fee-stablepool"},"Withdrawal fee")),(0,n.kt)("td",{parentName:"tr",align:null},"0.04%"),(0,n.kt)("td",{parentName:"tr",align:null},"Fee on Stablepool LP liquidity withdrawals"),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidity providers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LBP"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#repayment-fee-lbp"},"Repayment fee")),(0,n.kt)("td",{parentName:"tr",align:null},"variable"),(0,n.kt)("td",{parentName:"tr",align:null},"Fee on all LBP trades until repay target is hit"),(0,n.kt)("td",{parentName:"tr",align:null},"Pool owner")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LBP"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#trade-fee-lbp"},"Trade fee")),(0,n.kt)("td",{parentName:"tr",align:null},"variable"),(0,n.kt)("td",{parentName:"tr",align:null},"Fee on all LBP trades after repay target has been hit"),(0,n.kt)("td",{parentName:"tr",align:null},"Liquidity providers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OTC"),(0,n.kt)("td",{parentName:"tr",align:null},"Trade fee"),(0,n.kt)("td",{parentName:"tr",align:null},"0%"),(0,n.kt)("td",{parentName:"tr",align:null},"Currently there are no fees on OTC trades"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"transaction-fee"},"Transaction fee"),(0,n.kt)("p",null,"To submit any transaction on the HydraDX network (e.g. trade an asset, transfer tokens, submit a governance vote), users must pay a ",(0,n.kt)("strong",{parentName:"p"},"transaction fee.")," In Ethereum, this is commonly referred to as ",(0,n.kt)("strong",{parentName:"p"},"gas"),"."),(0,n.kt)("p",null,"On HydraDX, users are able to pay these transaction fees in ",(0,n.kt)("strong",{parentName:"p"},"any Omnipool asset"),". In order to reduce user friction, the Protocol will automatically set the first asset sent to HydraDX as the fee payment asset. This can be changed at any time on the wallet page of the app."),(0,n.kt)("p",null,"Note: If you are using ",(0,n.kt)("strong",{parentName:"p"},"a 0x address with MetaMask"),", it is currently only possible to pay for transaction fees in ",(0,n.kt)("strong",{parentName:"p"},"WETH (MRL)"),"."),(0,n.kt)("h2",{id:"asset-fee"},"Asset fee"),(0,n.kt)("p",null,"Asset fees are are paid by users whenever they make a trade in the Omnipool. These fees are charged in the asset that is \u201cbought\u201d from the Omnipool. Asset fees are dynamic, meaning that they can increase or decrease based on the current volatility of the traded assets."),(0,n.kt)("p",null,"With the introduction of ",(0,n.kt)("strong",{parentName:"p"},"Referrals")," to HydraDX, asset fees are distributed in the following way:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"50% remains in the Omnipool as a reward for LPs"),(0,n.kt)("li",{parentName:"ul"},"50% is distributed for referrals to 3 distinctive groups: Referrers, traders & HDX stakers. The proportions vary based on the tier of referral code linked to the trader account (learn more in ",(0,n.kt)("a",{parentName:"li",href:"/referrals"},"Referrals"),")"),(0,n.kt)("li",{parentName:"ul"},"HDX asset fees are currently excluded from Referrals, they are distributed in their fullest to the HDX Staking pot (learn more in ",(0,n.kt)("a",{parentName:"li",href:"/staking"},"Staking"),")")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"metadata",src:(0,l.Z)("/referrals/rewards.jpg"),width:"800px"})),(0,n.kt)("h2",{id:"protocol-fee"},"Protocol fee"),(0,n.kt)("p",null,"Protocol fees are paid by users whenever they make a trade in the Omnipool. These fees - paid in LRNA - are burned after the trades to mitigate any negative imbalance between the ratio of LRNA and the other assets in the Omnipool."),(0,n.kt)("p",null,"When there is no negative imbalance, the protocol fee will be redirected to the HDX pool within the Omnipool. This will result in the value of HDX increasing relative to all other assets in the Omnipool. An arbitrageur will observe this and swap HDX with other assets, setting a new (likely higher) price for HDX."),(0,n.kt)("h2",{id:"withdrawal-fee-omnipool"},"Withdrawal fee (Omnipool)"),(0,n.kt)("p",null,"The withdrawal fee is a dynamic fee paid whenever users withdraws liquidity from the Omnipool. It is designed to ensure that LPs do not lose money when liquidity is withdrawn immediately after a price change. The fee is calculated as the percentage difference between the spot price and the oracle price. This is also designed to ensure that any potential manipulation of the spot price will not be profitable."),(0,n.kt)("h2",{id:"trade-fee-isolated-pool"},"Trade fee (Isolated Pool)"),(0,n.kt)("p",null,"Trade fees are are paid by users whenever they make a trade in an Isolated pool. These fees are paid in the asset that is \u201cbought\u201d from the pool. Trade fees are fixed at 0.3% and remain in the pool as rewards for LPs."),(0,n.kt)("h2",{id:"trade-fee-stablepool"},"Trade fee (Stablepool)"),(0,n.kt)("p",null,"Trade fees are are paid by users whenever they make a trade in a Stablepool. These fees are paid in the asset that is \u201cbought\u201d from the pool. Trade fees are set for each Stablepool upon its creation by the Protocol and the proceeds remain in the pool as rewards for LPs."),(0,n.kt)("h2",{id:"withdrawal-fee-stablepool"},"Withdrawal fee (Stablepool)"),(0,n.kt)("p",null,"Withdrawal fees are paid by users whenever they withdraw an asset from a Stablepool. These fees are paid in the asset that is withdrawn from the pool. Withdrawal fees are equal to the trade fee for a given Stablepool and remain in the pool as rewards for LPs."),(0,n.kt)("h2",{id:"repayment-fee-lbp"},"Repayment fee (LBP)"),(0,n.kt)("p",null,"Repayment fees are paid by users whenever they sell back a distributed asset during a Liquidity Bootstrapping Pool (LBP) event. These fees are payable until the ",(0,n.kt)("strong",{parentName:"p"},"Repayment target")," is met. If no repayment target is set, users will instead pay a ",(0,n.kt)("strong",{parentName:"p"},"Swap fee.")," Repayment fees are set in advance by the pool creator. The proceeds are distributed to an address of their choice."),(0,n.kt)("h2",{id:"trade-fee-lbp"},"Trade fee (LBP)"),(0,n.kt)("p",null,"Swap fees are paid by users whenever they sell back a distributed asset during a Liquidity Bootstrapping Pool (LBP) event. These fees are payable once the repayment target is met, or if no repayment target has been set. Swap fees are set in advance by the pool creator. The proceeds remain in the pool."))}f.isMDXComponent=!0}}]);