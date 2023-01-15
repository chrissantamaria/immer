"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"return",title:"Returning new data from producers"},d=void 0,u={unversionedId:"return",id:"return",title:"Returning new data from producers",description:"<div",source:"@site/docs/return.mdx",sourceDirName:".",slug:"/return",permalink:"/immer/return",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/return.mdx",tags:[],version:"current",frontMatter:{id:"return",title:"Returning new data from producers"},sidebar:"Immer",previous:{title:"Auto freezing",permalink:"/immer/freezing"},next:{title:"Async produce / createDraft",permalink:"/immer/async"}},l={},c=[{value:"Producing <code>undefined</code> using <code>nothing</code>",id:"producing-undefined-using-nothing",level:2},{value:"Inline shortcuts using <code>void</code>",id:"inline-shortcuts-using-void",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("center",null,(0,o.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"})),(0,o.kt)("details",null,(0,o.kt)("summary",{className:"egghead-summary"},"egghead.io lesson 9: Returning completely new state"),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-return-completely-new-state-from-an-immer-producer/embed"})),(0,o.kt)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-return-completely-new-state-from-an-immer-producer"},"Hosted on egghead.io")),(0,o.kt)("p",null,"It is not needed to return anything from a producer, as Immer will return the (finalized) version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"draft")," anyway. However, it is allowed to just ",(0,o.kt)("inlineCode",{parentName:"p"},"return draft"),"."),(0,o.kt)("p",null,"It is also allowed to return arbitrarily other data from the producer function. But ",(0,o.kt)("em",{parentName:"p"},"only")," if you didn't modify the draft. This can be useful to produce an entirely new state. Some examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const userReducer = produce((draft, action) => {\n    switch (action.type) {\n        case "renameUser":\n            // OK: we modify the current state\n            draft.users[action.payload.id].name = action.payload.name\n            return draft // same as just \'return\'\n        case "loadUsers":\n            // OK: we return an entirely new state\n            return action.payload\n        case "adduser-1":\n            // NOT OK: This doesn\'t do change the draft nor return a new state!\n            // It doesn\'t modify the draft (it just redeclares it)\n            // In fact, this just doesn\'t do anything at all\n            draft = {users: [...draft.users, action.payload]}\n            return\n        case "adduser-2":\n            // NOT OK: modifying draft *and* returning a new state\n            draft.userCount += 1\n            return {users: [...draft.users, action.payload]}\n        case "adduser-3":\n            // OK: returning a new state. But, unnecessary complex and expensive\n            return {\n                userCount: draft.userCount + 1,\n                users: [...draft.users, action.payload]\n            }\n        case "adduser-4":\n            // OK: the immer way\n            draft.userCount += 1\n            draft.users.push(action.payload)\n            return\n    }\n})\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: It is not possible to return ",(0,o.kt)("inlineCode",{parentName:"em"},"undefined")," this way, as it is indistinguishable from ",(0,o.kt)("em",{parentName:"em"},"not")," updating the draft! Read on...")),(0,o.kt)("h2",{id:"producing-undefined-using-nothing"},"Producing ",(0,o.kt)("inlineCode",{parentName:"h2"},"undefined")," using ",(0,o.kt)("inlineCode",{parentName:"h2"},"nothing")),(0,o.kt)("p",null,"So, in general, one can replace the current state by just ",(0,o.kt)("inlineCode",{parentName:"p"},"return"),"ing a new value from the producer, rather than modifying the draft. There is a subtle edge case however: if you try to write a producer that wants to replace the current state with ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"produce({}, draft => {\n    // don't do anything\n})\n")),(0,o.kt)("p",null,"Versus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"produce({}, draft => {\n    // Try to return undefined from the producer\n    return undefined\n})\n")),(0,o.kt)("p",null,"The problem is that in JavaScript a function that doesn't return anything also returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"! So immer cannot differentiate between those different cases. So, by default, Immer will assume that any producer that returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," just tried to modify the draft."),(0,o.kt)("p",null,"However, to make it clear to Immer that you intentionally want to produce the value ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", you can return the built-in token ",(0,o.kt)("inlineCode",{parentName:"p"},"nothing"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import produce, {nothing} from "immer"\n\nconst state = {\n    hello: "world"\n}\n\nproduce(state, draft => {})\nproduce(state, draft => undefined)\n// Both return the original state: { hello: "world"}\n\nproduce(state, draft => nothing)\n// Produces a new state, \'undefined\'\n')),(0,o.kt)("p",null,"N.B. Note that this problem is specific for the ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," value, any other value, including ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", doesn't suffer from this issue."),(0,o.kt)("p",null,"Tip: to be able to return ",(0,o.kt)("inlineCode",{parentName:"p"},"nothing")," from a recipe when using TypeScript, the ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),"'s type must accept ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," as value."),(0,o.kt)("h2",{id:"inline-shortcuts-using-void"},"Inline shortcuts using ",(0,o.kt)("inlineCode",{parentName:"h2"},"void")),(0,o.kt)("details",null,(0,o.kt)("summary",{className:"egghead-summary"},"egghead.io lesson 10: Avoid accidental returns by using _void_"),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-avoid-accidental-returns-of-new-state-by-using-the-void-keyword/embed"})),(0,o.kt)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-avoid-accidental-returns-of-new-state-by-using-the-void-keyword"},"Hosted on egghead.io")),(0,o.kt)("p",null,"Draft mutations in Immer usually warrant a code block, since a return denotes an overwrite. Sometimes that can stretch code a little more than you might be comfortable with."),(0,o.kt)("p",null,"In such cases, you can use javascripts ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void"},(0,o.kt)("inlineCode",{parentName:"a"},"void"))," operator, which evaluates expressions and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Single mutation\nproduce(draft => void (draft.user.age += 1))\n\n// Multiple mutations\nproduce(draft => void ((draft.user.age += 1), (draft.user.height = 186)))\n")),(0,o.kt)("p",null,"Code style is highly personal, but for code bases that are to be understood by many, we recommend to stick to the classic ",(0,o.kt)("inlineCode",{parentName:"p"},"draft => { draft.user.age += 1}")," to avoid cognitive overhead."))}m.isMDXComponent=!0}}]);