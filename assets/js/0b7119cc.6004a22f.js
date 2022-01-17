"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[548],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8462:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(3117),i=a(102),o=(a(7294),a(3905)),r=(a(4996),["components"]),s={id:"staking",title:"Staking"},l=void 0,d={unversionedId:"staking",id:"staking",title:"Staking",description:"This section provides a brief introduction into how staking works in the HydraDX network. If you are not familiar with staking in a Substrate-based network, we recommend that you read this before deciding to participate.",source:"@site/docs/staking.md",sourceDirName:".",slug:"/staking",permalink:"/staking",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/staking.md",tags:[],version:"current",frontMatter:{id:"staking",title:"Staking"},sidebar:"sidebar",previous:{title:"Connect to a Public Node",permalink:"/polkadotjs_apps_public"},next:{title:"Staking Rewards",permalink:"/staking_rewards"}},c=[{value:"Validators",id:"validators",children:[],level:3},{value:"Nominators",id:"nominators",children:[],level:3}],h={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section provides a brief introduction into how staking works in the HydraDX network. If you are not familiar with staking in a Substrate-based network, we recommend that you read this before deciding to participate."),(0,o.kt)("p",null,"The consensus mechanism used by HydraDX is called Nominated Proof-of-Stake (NPoS). NPoS is a variation of Proof-of-Stake and is used in Substrate-based blockchains such as Polkadot and Kusama. The two central actors in an NPoS environment are called ",(0,o.kt)("a",{parentName:"p",href:"#validators"},(0,o.kt)("strong",{parentName:"a"},"validators"))," and ",(0,o.kt)("a",{parentName:"p",href:"#nominators"},(0,o.kt)("strong",{parentName:"a"},"nominators")),". "),(0,o.kt)("h3",{id:"validators"},"Validators"),(0,o.kt)("p",null,"Validators participate in the network by running validator nodes, which provide the infrastructure that allows the HydraDX network to operate securely. Validator nodes fulfill three functions which are of paramount importance to the consensus mechanism. In the first place, they validate the information contained in blocks, such as the identity of the parties and the subject of the contract. In the second place, validators participate in the production of new blocks based on the validity statements of other validators. In the third place, they guarantee the finality of blockchain transactions."),(0,o.kt)("p",null,"An important characteristic of NPoS is that not all validators participate in the validating process at the same time. Only validators in the ",(0,o.kt)("em",{parentName:"p"},"active validator set")," perform the above-mentioned operations and earn ",(0,o.kt)("a",{parentName:"p",href:"/staking_rewards"},"rewards")," for doing so. The set of active validators is limited to a fixed number of nodes. In ",(0,o.kt)("a",{parentName:"p",href:"/snakenet"},"HydraDX Snakenet")," we expect this number to be around 300, scaling it up as we progress towards mainnet."),(0,o.kt)("p",null,"Validators are elected into the active set by following the principle of ",(0,o.kt)("em",{parentName:"p"},"proportional justified representation"),". This principle aims to safeguard decentralization and fair representation by assigning the available slots to validators in proportion to their nominated stake. The higher the amount of staked tokens with a given validator, the higher the chance that the node will be elected in the active set. Validators which are not included in the active set are placed on a waiting list. The set of active validators is updated at the beginning of every era, providing a possible entry window for new validators."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In a Substrate-based network, time is divided in units called ",(0,o.kt)("strong",{parentName:"p"},"eras"),". In ",(0,o.kt)("a",{parentName:"p",href:"/snakenet"},"HydraDX Snakenet"),", ",(0,o.kt)("em",{parentName:"p"},"1 Era = 24 hours"),"."))),(0,o.kt)("p",null,"Participating as a validator requires a certain level of technical knowledge for securely setting up and maintaining a validator node. Misbehavior of the validator node can be punished by slashing, resulting in an involuntary loss of funds for you and your nominators. If you believe that you have the necessary experience for running a validator node, you can refer to our ",(0,o.kt)("a",{parentName:"p",href:"/node_setup"},"validator guide"),". Otherwise, we highly recommend that you consider participating as a nominator."),(0,o.kt)("h3",{id:"nominators"},"Nominators"),(0,o.kt)("p",null,"Nominators help secure the network by nominating validators to be elected in the active validator set. They do so by staking their HDX tokens with the validators of their choice. The nomination process does not require running and maintaining nodes, making this form of staking more accessible to everybody. Tokens which are used to nominate validators are ",(0,o.kt)("em",{parentName:"p"},"bonded"),", meaning that they are frozen and cannot be used for other purposes. It is at any time possible to change or stop your nominations which will be reflected at the end of the current era. Nominators can also free up their tokens, however this will only become effective after a waiting period of ",(0,o.kt)("em",{parentName:"p"},"28 days")," following the unbonding transaction."),(0,o.kt)("p",null,"Before nominating, you should always do your due diligence and research the credibility of the chosen validators. You can do so by checking their identity as well as historical information like era points, elected stake, rewards and slashes. At the beginning of Snakenet it might be difficult to find all this information, however. If you are in doubt about the choice of validators, approach us in the Discord and we will share our community curated list of trusted validators with you."),(0,o.kt)("p",null,"Another point to consider when choosing a validator is the ",(0,o.kt)("em",{parentName:"p"},"reward commission percentage"),". This represents the proportion of the rewards which will be paid out to the validator for providing its services to nominators. The lowest commission percentage is not always the best - running a performant and available node has high operational costs which can only be covered sustainably by demanding a realistic reward commission."),(0,o.kt)("p",null,"In HydraDX, it is possible to nominate a ",(0,o.kt)("strong",{parentName:"p"},"maximum of 16 validators")," with your stake. Nominating more than one validator, however, does not necessarily mean that your stake will be assigned to all chosen validators every time. When the following era begins, Substrate will run a series of complex algorithms to determine the most optimal distribution of all nominations within the network, with the ultimate goal of deciding which validators are to be included in the set of active validators. If none of the validators you have chosen receives sufficient backing to be included in the active set, your ",(0,o.kt)("strong",{parentName:"p"},"nominations will remain inactive")," for the duration of the era (",(0,o.kt)("em",{parentName:"p"},"24 hours"),"), and you will also receive no rewards for this period. To maximize the chances of having your stake included in the set of active validators, we strongly advise that you ",(0,o.kt)("strong",{parentName:"p"},"nominate several validators"),", which will also contribute to our efforts in enhancing decentralization."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure that you do not nominate validators that are oversubscribed. Currently, there is a ",(0,o.kt)("strong",{parentName:"p"},"limit of 64 nominations")," for a single validator, after which it becomes oversubscribed. When the following era begins, an oversubscribed validator will only be elected using the maximum allowed number of nominators. If this occurs, the nominators with the highest stake take precedence, while the nominators with the lowest stake will be disregarded and will not earn any awards during that era."),(0,o.kt)("p",{parentName:"div"},"Nominating is a more accessible form of staking however it also bears risks. Validators which breach the rules of the network may be punished by slashing, resulting in loss of funds for both the validator and its nominators. This is why it is important to only nominate reputable validator nodes."))),(0,o.kt)("p",null,"Are you interested in staking your HDX tokens by nominating validators? Check out our ",(0,o.kt)("a",{parentName:"p",href:"/start_nominating"},"nominator guide")," to start nominating."))}p.isMDXComponent=!0}}]);