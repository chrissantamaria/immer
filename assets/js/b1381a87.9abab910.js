"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"map-set",title:"Map and Set"},p=void 0,c={unversionedId:"map-set",id:"map-set",title:"Map and Set",description:"\u26a0 Since version 6 support for Maps and Sets has to be enabled explicitly by calling enableMapSet() once when starting your application.",source:"@site/docs/map-set.md",sourceDirName:".",slug:"/map-set",permalink:"/immer/map-set",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/map-set.md",tags:[],version:"current",frontMatter:{id:"map-set",title:"Map and Set"},sidebar:"Immer",previous:{title:"API overview",permalink:"/immer/api"},next:{title:"Classes",permalink:"/immer/complex-objects"}},l={},m=[],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("center",null,(0,i.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u26a0 Since version 6 support for ",(0,i.kt)("inlineCode",{parentName:"em"},"Map"),"s and ",(0,i.kt)("inlineCode",{parentName:"em"},"Set"),"s has to be enabled explicitly by calling ",(0,i.kt)("a",{parentName:"em",href:"/immer/installation#pick-your-immer-version"},(0,i.kt)("inlineCode",{parentName:"a"},"enableMapSet()"))," once when starting your application.")),(0,i.kt)("p",null,"Plain objects, arrays, ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"s are always drafted by Immer. An example of using Maps with immer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'test("Producers can update Maps", () => {\n    const usersById_v1 = new Map()\n\n    const usersById_v2 = produce(usersById_v1, draft => {\n        // Modifying a map results in a new map\n        draft.set("michel", {name: "Michel Weststrate", country: "NL"})\n    })\n\n    const usersById_v3 = produce(usersById_v2, draft => {\n        // Making a change deep inside a map, results in a new map as well!\n        draft.get("michel").country = "UK"\n    })\n\n    // We got a new map each time!\n    expect(usersById_v2).not.toBe(usersById_v1)\n    expect(usersById_v3).not.toBe(usersById_v2)\n    // With different content obviously\n    expect(usersById_v1).toMatchInlineSnapshot(`Map {}`)\n    expect(usersById_v2).toMatchInlineSnapshot(`\n        Map {\n          "michel" => Object {\n            "country": "NL",\n            "name": "Michel Weststrate",\n          },\n        }\n    `)\n    expect(usersById_v3).toMatchInlineSnapshot(`\n        Map {\n          "michel" => Object {\n            "country": "UK",\n            "name": "Michel Weststrate",\n          },\n        }\n    `)\n    // The old one was never modified\n    expect(usersById_v1.size).toBe(0)\n    // And trying to change a Map outside a producers is going to: NO!\n    expect(() => usersById_v3.clear()).toThrowErrorMatchingInlineSnapshot(\n        `"This object has been frozen and should not be mutated"`\n    )\n})\n')),(0,i.kt)("p",null,"Maps and Sets that are produced by Immer will be made artificially immutable. This means that they will throw an exception when trying mutative methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clear")," etc. outside a producer."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: The ",(0,i.kt)("strong",{parentName:"em"},"keys")," of a map are never drafted! This is done to avoid confusing semantics and keep keys always referentially equal")))}u.isMDXComponent=!0}}]);