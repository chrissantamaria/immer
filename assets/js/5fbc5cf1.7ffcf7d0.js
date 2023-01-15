"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[207],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7480:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={id:"api",title:"API overview"},p=void 0,m={unversionedId:"api",id:"api",title:"API overview",description:"| Exported name | Description | Section |",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/immer/api",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/api.md",tags:[],version:"current",frontMatter:{id:"api",title:"API overview"},sidebar:"Immer",previous:{title:"Update patterns",permalink:"/immer/update-patterns"},next:{title:"Map and Set",permalink:"/immer/map-set"}},d={},s=[{value:"Importing immer",id:"importing-immer",level:2}],u={toc:s};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("center",null,(0,l.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Exported name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Section"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(default)")),(0,l.kt)("td",{parentName:"tr",align:null},"The core API of Immer, typically named ",(0,l.kt)("inlineCode",{parentName:"td"},"produce"),": ",(0,l.kt)("inlineCode",{parentName:"td"},'import produce from "immer"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/produce"},"Produce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"applyPatches")),(0,l.kt)("td",{parentName:"tr",align:null},"Given a base state or draft, and a set of patches, applies the patches"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/patches"},"Patches"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"castDraft")),(0,l.kt)("td",{parentName:"tr",align:null},"Converts any immutable type to its mutable counterpart. This is just a cast and doesn't actually do anything."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/typescript"},"TypeScript"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"castImmutable")),(0,l.kt)("td",{parentName:"tr",align:null},"Converts any mutable type to its immutable counterpart. This is just a cast and doesn't actually do anything."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/typescript"},"TypeScript"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"createDraft")),(0,l.kt)("td",{parentName:"tr",align:null},"Given a base state, creates a mutable draft for which any modifications will be recorded"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/async"},"Async"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"current")),(0,l.kt)("td",{parentName:"tr",align:null},"Given a draft object (doesn't have to be a tree root), takes a snapshot of the current state of the draft"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/current"},"Current"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Draft<T>")),(0,l.kt)("td",{parentName:"tr",align:null},"Exposed TypeScript type to convert an immutable type to a mutable type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/typescript"},"TypeScript"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableAllPlugins()")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables all plugins mentioned below"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/installation#pick-your-immer-version"},"Installation"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableES5()")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables support for older JavaScript engines, such as Internet Explorer and React Native"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/installation#pick-your-immer-version"},"Installation"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableMapSet()")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables support for ",(0,l.kt)("inlineCode",{parentName:"td"},"Map")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"Set")," collections."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/installation#pick-your-immer-version"},"Installation"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enablePatches()")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables support for JSON patches."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./installation#pick-your-immer-version"},"Installation"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"finishDraft")),(0,l.kt)("td",{parentName:"tr",align:null},"Given an draft created using ",(0,l.kt)("inlineCode",{parentName:"td"},"createDraft"),", seals the draft and produces and returns the next immutable state that captures all the changes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/async"},"Async"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"freeze(obj, deep?)")),(0,l.kt)("td",{parentName:"tr",align:null},"Freezes draftable objects. Returns the original object. By default freezes shallowly, but if the second argument is ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," it will freeze recursively."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Immer")),(0,l.kt)("td",{parentName:"tr",align:null},'constructor that can be used to create a second "immer" instance (exposing all APIs listed in this instance), that doesn\'t share its settings with global instance.'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"immerable")),(0,l.kt)("td",{parentName:"tr",align:null},"Symbol that can be added to a constructor or prototype, to indicate that Immer should treat the class as something that can be safely drafted"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/complex-objects"},"Classes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Immutable<T>")),(0,l.kt)("td",{parentName:"tr",align:null},"Exposed TypeScript type to convert mutable types to immutable types"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isDraft")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the given object is a draft object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isDraftable")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if Immer is capable of turning this object into a draft. Which is true for: arrays, objects without prototype, objects with ",(0,l.kt)("inlineCode",{parentName:"td"},"Object")," as their prototype, objects that have the ",(0,l.kt)("inlineCode",{parentName:"td"},"immerable")," symbol on their constructor or prototype"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nothing")),(0,l.kt)("td",{parentName:"tr",align:null},"Value that can be returned from a recipe, to indicate that the value ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," should be produced"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/return"},"Return"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"original")),(0,l.kt)("td",{parentName:"tr",align:null},"Given a draft object (doesn't have to be a tree root), returns the original object at the same path in the original state tree, if present"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/original"},"Original"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Patch")),(0,l.kt)("td",{parentName:"tr",align:null},"Exposed TypeScript type, describes the shape of an (inverse) patch object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/patches"},"Patches"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"produce")),(0,l.kt)("td",{parentName:"tr",align:null},"The core API of Immer, also exposed as the ",(0,l.kt)("inlineCode",{parentName:"td"},"default")," export"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/produce"},"Produce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"produceWithPatches")),(0,l.kt)("td",{parentName:"tr",align:null},"Works the same as ",(0,l.kt)("inlineCode",{parentName:"td"},"produce"),", but instead of just returning the produced object, it returns a tuple, consisting of ",(0,l.kt)("inlineCode",{parentName:"td"},"[result, patches, inversePatches]"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/patches"},"Patches"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setAutoFreeze")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables / disables automatic freezing of the trees produces. By default enabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/immer/freezing"},"Freezing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setUseProxies")),(0,l.kt)("td",{parentName:"tr",align:null},"Can be used to disable or force the use of ",(0,l.kt)("inlineCode",{parentName:"td"},"Proxy")," objects. Useful when filing bug reports."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"importing-immer"},"Importing immer"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"produce")," is exposed as the default export, but optionally it can be used as name import as well, as this benefits some older project setups. So the following imports are all correct, where the first is recommended:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\nimport {produce} from "immer"\n\nconst {produce} = require("immer")\nconst produce = require("immer").produce\nconst produce = require("immer").default\n\nimport unleashTheMagic from "immer"\nimport {produce as unleashTheMagic} from "immer"\n')))}c.isMDXComponent=!0}}]);