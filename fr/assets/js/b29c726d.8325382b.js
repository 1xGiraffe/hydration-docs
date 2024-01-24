"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[6714],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return i?a.createElement(m,n(n({ref:t},u),{},{components:i})):a.createElement(m,n({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,n[1]=s;for(var c=2;c<o;c++)n[c]=i[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},4618:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return n},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=i(3117),r=(i(7294),i(3905));const o={id:"omnipool_security",title:"State of the Art Security"},n=void 0,s={unversionedId:"omnipool_security",id:"omnipool_security",title:"State of the Art Security",description:"The HydraDX Protocol pursues a multi-layered security strategy. On this page you will find a description of the various measures which work together to keep your funds safe.",source:"@site/docs/omnipool_security.md",sourceDirName:".",slug:"/omnipool_security",permalink:"/fr/omnipool_security",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_security.md",tags:[],version:"current",frontMatter:{id:"omnipool_security",title:"State of the Art Security"},sidebar:"sidebar",previous:{title:"Hydrate Your Treasury (B2B)",permalink:"/fr/omnipool_treasuries"},next:{title:"Impermanent Loss",permalink:"/fr/omnipool_impermanent_loss"}},l={},c=[{value:"Audits",id:"audits",level:2},{value:"Bug Bounty Program",id:"bug-bounties",level:2},{value:"Mechanisms for Protecting Omnipool Liquidity",id:"protecting-liquidity",level:2},{value:"TVL Caps",id:"tvl-caps",level:3},{value:"Oracles",id:"oracles",level:3},{value:"Dynamic Withdrawal Fees",id:"dynamic-withdrawal-fees",level:3},{value:"In-block Trade Limits",id:"trade-limits",level:3},{value:"Targeted Function Pausing",id:"tfp",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The HydraDX Protocol pursues a multi-layered security strategy. On this page you will find a description of the various measures which work together to keep your funds safe."),(0,r.kt)("p",null,"The most basic layer of the HydraDX security strategy consists carefully conducted research and development, as well as rigorous peer review processes. On top of that, HydraDX strives to have all mission-critical code undergo rigorous audits. The next layer of the security strategy is a generous bug bounty program which makes it worthwhile to find and disclose vulnerabilities (as opposed to exploiting them)."),(0,r.kt)("p",null,"Finally, the protocol has implemented a combination of state-of-the-art measures which are designed to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hydradx.io/omnipool_security#protecting-liquidity"},"protect your liquidity")," against unfortunate events such as toxic assets or (economic) exploits."),(0,r.kt)("h2",{id:"audits"},"Audits"),(0,r.kt)("p",null,"The HydraDX protocol conducts audits of all mission-critical code and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-audit-reports"},"publishes the audit reports")," on a regular basis. "),(0,r.kt)("p",null,"The security audit of the Rust implementation of the HydraDX Omnipool was performed by ",(0,r.kt)("a",{parentName:"p",href:"https://runtimeverification.com/"},"Runtime Verification")," - an established industry leader with clients such as NASA, Ethereum and Polkadot. The scope of the security audit includes the source code of\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node/blob/master/pallets/omnipool/src/"},"HydraDX Omnipool pallet"),",its\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-math/tree/main/src/omnipool"},"mathematical logic")," and\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/warehouse/tree/main/asset-registry"},"asset registry"),", as well as 3rd party libraries which have been included as a (Substrate) dependency. The results of the audit were published in September 2022, you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220907-Runtime-Verification-Security-Audit.pdf"},"consult the full report here"),"."),(0,r.kt)("p",null,"In March 2022, the economic/math audit of the Omnipool was completed by ",(0,r.kt)("a",{parentName:"p",href:"https://block.science/"},"BlockScience")," - a leading web3 native firm dedicated to analyzing complex systems for the likes of Graph Protocol and Protocol Labs (Filecoin). The scope of this audit was to provide an overview of the AMM specification with a special attention to the mathematical and economic concepts underpinning the Omnipool, together with the implications of those mechanisms for liquidity provisioning and trading activity. You can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-audit-reports/blob/main/220322-BlockScience-Omnipool-Report%2Baddendum-by-HydraDX.pdf"},"consult the full report here"),", including the addendum by HydraDX with post-factum changes."),(0,r.kt)("h2",{id:"bug-bounties"},"Bug Bounty Program"),(0,r.kt)("p",null,"HydraDX has set up a ",(0,r.kt)("a",{parentName:"p",href:"https://immunefi.com/bounty/hydradx/"},"generous bug bounty program")," which provides strong incentives for the detection and responsible disclosure of bugs and other vulnerabilities. "),(0,r.kt)("p",null,"Rewards are distributed according to the impact of the vulnerability based on the ",(0,r.kt)("a",{parentName:"p",href:"https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/"},"Immunefi Vulnerability Severity Classification System V2.2"),". This is a simplified 5-level scale, with separate scales for websites/apps, smart contracts, and blockchains/DLTs, focusing on the impact of the vulnerability reported."),(0,r.kt)("h2",{id:"protecting-liquidity"},"Mechanisms for Protecting Omnipool Liquidity"),(0,r.kt)("p",null,"The HydraDX protocol is continuously researching and implementing mechanisms that keep the Omnipool liquidity safe. These mechanisms are activated in the unfortunate (but not impossible) scenario that an actor tries to drain liquidity from the Omnipool by abusing a toxic asset situation (LUNA-like scenario) or some malicious exploit."),(0,r.kt)("h3",{id:"tvl-caps"},"TVL Caps"),(0,r.kt)("p",null,"All assets are subject to a specific TVL cap defining the maximum proportion of liquidity which any given asset can represent in the Omnipool. Riskier assets will have lower caps compared to less risky (high mcap or stable) assets. This allows the HydraDX protocol to significantly limit the damage which may potentially be caused from toxic asset flows: Using a hyper-inflationary asset, attackers cannot drain more liquidity than its TVL cap."),(0,r.kt)("h3",{id:"oracles"},"Oracles"),(0,r.kt)("p",null,"On-chain oracles provide average price information for a specified Omnipool asset during a given timeframe (e.g. 10 blocks). Oracles are an essential monitoring tool that allow the HydraDX protocol to detect irregularities and potential price manipulation attacks - and to act accordingly."),(0,r.kt)("h3",{id:"dynamic-withdrawal-fees"},"Dynamic Withdrawal Fees"),(0,r.kt)("p",null,"To protect the Omnipool liquidity, all withdrawals of liquidity positions are subject to a fee. The withdrawal fee is dynamic, ranging between 0.01% and 1% of the total amount. The exact fee amount is determined at the time of withdrawal based on the asset in question."),(0,r.kt)("p",null,"The withdrawal fee covers the spread between the current spot price of the asset and the its average price over the previous 10 blocks (fetched from the HydraDX oracles). A large discrepancy between spot and average price indicates a potential price manipulation attack, and a higher withdrawal fee is applied to eliminate the economic incentives for carrying out such an attack."),(0,r.kt)("p",null,"In the scenario that extreme volatility leads to the spread between the spot price and average oracle price of an asset being greater than 1%, liquidity addition or withdrawal for that asset will be temporarily paused. These operations will again resume once this threshold is respected."),(0,r.kt)("h3",{id:"trade-limits"},"In-block Trade Limits"),(0,r.kt)("p",null,"To protect the Omnipool against economic exploits, there is a limit in place that no more than 50% of an asset's liquidity can be traded in a single block - trades that are greater than this amount should be spread across multiple blocks."),(0,r.kt)("h3",{id:"tfp"},"Targeted Function Pausing"),(0,r.kt)("p",null,"If some suspicious behaviour is detected on-chain, Targeted Function Pausing allows the HydraDX Technical Committee to take swift action and temporarily pause certain or all actions relating to specific assets. This action of last resort can help mitigate the damage and allow for further investigation."))}p.isMDXComponent=!0}}]);