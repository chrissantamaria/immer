"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,f=l["".concat(s,".").concat(m)]||l[m]||c[m]||o;return n?r.createElement(f,d(d({ref:t},u),{},{components:n})):r.createElement(f,d({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,d[1]=i;for(var p=2;p<o;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(3117),a=n(102),o=(n(7294),n(3905)),d=["components"],i={id:"update-patterns",title:"Update patterns"},s=void 0,p={unversionedId:"update-patterns",id:"update-patterns",title:"Update patterns",description:"Working with immutable data, before Immer, used to mean learning all the immutable update patterns.",source:"@site/docs/update-patterns.md",sourceDirName:".",slug:"/update-patterns",permalink:"/immer/update-patterns",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/update-patterns.md",tags:[],version:"current",frontMatter:{id:"update-patterns",title:"Update patterns"},sidebar:"Immer",previous:{title:"React & Immer",permalink:"/immer/example-setstate"},next:{title:"API overview",permalink:"/immer/api"}},u={},l=[{value:"Object mutations",id:"object-mutations",level:3},{value:"Array mutations",id:"array-mutations",level:3},{value:"Nested data structures",id:"nested-data-structures",level:3}],c={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("center",null,(0,o.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),(0,o.kt)("p",null,"Working with immutable data, before Immer, used to mean learning all the immutable update patterns."),(0,o.kt)("p",null,"To help 'unlearning' those patterns here is an overview how you can leverage the built-in JavaScript APIs to update objects and collections:"),(0,o.kt)("h3",{id:"object-mutations"},"Object mutations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\nconst todosObj = {\n    id1: {done: false, body: "Take out the trash"},\n    id2: {done: false, body: "Check Email"}\n}\n\n// add\nconst addedTodosObj = produce(todosObj, draft => {\n    draft["id3"] = {done: false, body: "Buy bananas"}\n})\n\n// delete\nconst deletedTodosObj = produce(todosObj, draft => {\n    delete draft["id1"]\n})\n\n// update\nconst updatedTodosObj = produce(todosObj, draft => {\n    draft["id1"].done = true\n})\n')),(0,o.kt)("h3",{id:"array-mutations"},"Array mutations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\nconst todosArray = [\n    {id: "id1", done: false, body: "Take out the trash"},\n    {id: "id2", done: false, body: "Check Email"}\n]\n\n// add\nconst addedTodosArray = produce(todosArray, draft => {\n    draft.push({id: "id3", done: false, body: "Buy bananas"})\n})\n\n// delete by index\nconst deletedTodosArray = produce(todosArray, draft => {\n    draft.splice(3 /*the index */, 1)\n})\n\n// update by index\nconst updatedTodosArray = produce(todosArray, draft => {\n    draft[3].done = true\n})\n\n// insert at index\nconst updatedTodosArray = produce(todosArray, draft => {\n    draft.splice(3, 0, {id: "id3", done: false, body: "Buy bananas"})\n})\n\n// remove last item\nconst updatedTodosArray = produce(todosArray, draft => {\n    draft.pop()\n})\n\n// remove first item\nconst updatedTodosArray = produce(todosArray, draft => {\n    draft.shift()\n})\n\n// add item at the beginning of the array\nconst addedTodosArray = produce(todosArray, draft => {\n    draft.unshift({id: "id3", done: false, body: "Buy bananas"})\n})\n\n// delete by id\nconst deletedTodosArray = produce(todosArray, draft => {\n    const index = draft.findIndex(todo => todo.id === "id1")\n    if (index !== -1) draft.splice(index, 1)\n})\n\n// update by id\nconst updatedTodosArray = produce(todosArray, draft => {\n    const index = draft.findIndex(todo => todo.id === "id1")\n    if (index !== -1) draft[index].done = true\n})\n\n// filtering items\nconst updatedTodosArray = produce(todosArray, draft => {\n    // creating a new state is simpler in this example\n    // (note that we don\'t need produce in this case,\n    // but as shown below, if the filter is not on the top\n    // level produce is still pretty useful)\n    return draft.filter(todo => todo.done)\n})\n')),(0,o.kt)("h3",{id:"nested-data-structures"},"Nested data structures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\n// example complex data structure\nconst store = {\n    users: new Map([\n        [\n            "17",\n            {\n                name: "Michel",\n                todos: [\n                    {\n                        title: "Get coffee",\n                        done: false\n                    }\n                ]\n            }\n        ]\n    ])\n}\n\n// updating something deeply in-an-object-in-an-array-in-a-map-in-an-object:\nconst nextStore = produce(store, draft => {\n    draft.users.get("17").todos[0].done = true\n})\n\n// filtering out all unfinished todo\'s\nconst nextStore = produce(store, draft => {\n    const user = draft.users.get("17")\n    // when filtering, creating a fresh collection is simpler than\n    // removing irrelevant items\n    user.todos = user.todos.filter(todo => todo.done)\n})\n')),(0,o.kt)("p",null,"Note that many array operations can be used to insert multiple items at once by passing multiple arguments or using the spread operation: ",(0,o.kt)("inlineCode",{parentName:"p"},"todos.unshift(...items)"),"."),(0,o.kt)("p",null,"Note that when working with arrays that contain objects that are typically identified by some id, we recommend to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," or index based objects (as shown above) instead of performing frequent find operations, lookup tables perform much better in general."))}m.isMDXComponent=!0}}]);