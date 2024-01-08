"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[9650],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var i=n(3117),r=(n(7294),n(3905)),o=n(4996);const a={id:"participate_in_council_elections",title:"Participate in Council Elections"},c=void 0,l={unversionedId:"participate_in_council_elections",id:"participate_in_council_elections",title:"Participate in Council Elections",description:"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate.",source:"@site/docs/participate_in_council_elections.md",sourceDirName:".",slug:"/participate_in_council_elections",permalink:"/ru/participate_in_council_elections",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/participate_in_council_elections.md",tags:[],version:"current",frontMatter:{id:"participate_in_council_elections",title:"Participate in Council Elections"},sidebar:"sidebar",previous:{title:"Participate in Referenda",permalink:"/ru/participate_in_referenda"},next:{title:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0438\u0445 HDX",permalink:"/ru/claim"}},p={},u=[{value:"Using Polkadot/apps",id:"polkajs",level:2},{value:"Vote in Council member elections",id:"polkajs-vote",level:3},{value:"Apply as a Council candidate",id:"polkajs-become_candidate",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate."),(0,r.kt)("p",null,"If you are interested in how the election mechanism works, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/democracy_council#elections"},"this post"),"."),(0,r.kt)("h2",{id:"polkajs"},"Using Polkadot/apps"),(0,r.kt)("h3",{id:"polkajs-vote"},"Vote in Council member elections"),(0,r.kt)("p",null,"You can see the current Council members as well as the runners-up on the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/council"},(0,r.kt)("em",{parentName:"a"},"Governance > Council")," page")," in Polkadot/apps."),(0,r.kt)("p",null,"To bring out your vote for Council members, click on ",(0,r.kt)("em",{parentName:"p"},"Vote"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,o.Z)("/participate_in_council_elections/polkajs-vote.jpg")})),(0,r.kt)("p",null,"Enter the amount of tokens you are willing to lock in support of your candidates."),(0,r.kt)("p",null,"After that, select your candidates in order of preference by moving them from the left list to the right one. Remeber to select multiple candidates - this will help the algorithm select the optimal distribution of candidates to the Council."),(0,r.kt)("p",null,"To bring out your vote, click on ",(0,r.kt)("em",{parentName:"p"},"Vote")," and sign the transaction."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Locked tokens cannot be transferred, however they can still be used for voting in referenda. Your tokens will remain locked and used for subsequent elections until you have decided to unlock them.")),(0,r.kt)("h3",{id:"polkajs-become_candidate"},"Apply as a Council candidate"),(0,r.kt)("p",null,"You can submit your application for Council membership by navigating to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc.hydradx.cloud#/council"},(0,r.kt)("em",{parentName:"a"},"Governance > Council"))," in Polkadot/apps."),(0,r.kt)("p",null,"Click on ",(0,r.kt)("em",{parentName:"p"},"Submit candidacy")," which will trigger a popup."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,o.Z)("/participate_in_council_elections/polkajs-apply.jpg")})),(0,r.kt)("p",null,"Select the account which is running for Council membership, click on ",(0,r.kt)("em",{parentName:"p"},"Submit"),", and sign the transaction."))}d.isMDXComponent=!0}}]);