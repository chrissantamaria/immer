"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"current",title:"Extracting the current state from a draft",sidebar_label:"Current"},c=void 0,s={unversionedId:"current",id:"current",title:"Extracting the current state from a draft",description:"Immer exposes a named export current that creates a copy of the current state of the draft. This can be very useful for debugging purposes (as those objects won't be Proxy objects and not be logged as such). Also, references to current can be safely leaked from a produce function. Put differently, current provides a snapshot of the current state of a draft.",source:"@site/docs/current.md",sourceDirName:".",slug:"/current",permalink:"/immer/current",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/current.md",tags:[],version:"current",frontMatter:{id:"current",title:"Extracting the current state from a draft",sidebar_label:"Current"},sidebar:"Immer",previous:{title:"Classes",permalink:"/immer/complex-objects"},next:{title:"Original",permalink:"/immer/original"}},p={},u=[{value:"Example",id:"example",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("center",null,(0,o.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),(0,o.kt)("p",null,"Immer exposes a named export ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," that creates a copy of the current state of the draft. This can be very useful for debugging purposes (as those objects won't be Proxy objects and not be logged as such). Also, references to ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," can be safely leaked from a produce function. Put differently, ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," provides a snapshot of the current state of a draft."),(0,o.kt)("p",null,"Objects generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," work similar to the objects created by produce itself."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unmodified objects will be structurally shared with the original objects."),(0,o.kt)("li",{parentName:"ol"},"If no changes are made to a draft, generally it holds that ",(0,o.kt)("inlineCode",{parentName:"li"},"original(draft) === current(draft)"),", but this is not guaranteed."),(0,o.kt)("li",{parentName:"ol"},"Future changes to the draft won't be reflected in the object produced by ",(0,o.kt)("inlineCode",{parentName:"li"},"current")," (except for references to undraftable objects)"),(0,o.kt)("li",{parentName:"ol"},"Unlike ",(0,o.kt)("inlineCode",{parentName:"li"},"produce")," objects created by ",(0,o.kt)("inlineCode",{parentName:"li"},"current")," will ",(0,o.kt)("em",{parentName:"li"},"not")," be frozen.")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," sparingly, it can be a potentially expensive operation, especially when using ES5."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," cannot be invoked on objects that aren't drafts."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"The following example shows the effect of ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," (and ",(0,o.kt)("inlineCode",{parentName:"p"},"original"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const base = {\n    x: 0\n}\n\nconst next = produce(base, draft => {\n    draft.x++\n    const orig = original(draft)\n    const copy = current(draft)\n    console.log(orig.x)\n    console.log(copy.x)\n\n    setTimeout(() => {\n        // this will execute after the produce has finished!\n        console.log(orig.x)\n        console.log(copy.x)\n    }, 100)\n\n    draft.x++\n    console.log(draft.x)\n})\nconsole.log(next.x)\n\n// This will print\n// 0 (orig.x)\n// 1 (copy.x)\n// 2 (draft.x)\n// 2 (next.x)\n// 0 (after timeout, orig.x)\n// 1 (after timeout, copy.x)\n")))}f.isMDXComponent=!0}}]);