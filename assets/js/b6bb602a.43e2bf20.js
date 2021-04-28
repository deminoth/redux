(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),i=(r(0),r(157)),o={id:"reducers",title:"Reducers",hide_title:!0},c={unversionedId:"faq/reducers",id:"faq/reducers",isDocsHomePage:!1,title:"Redux FAQ: Reducers",description:"Table of Contents",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/faq/Reducers.md",sourceDirName:"faq",slug:"/faq/reducers",permalink:"/faq/reducers",version:"current",frontMatter:{id:"reducers",title:"Reducers",hide_title:!0},sidebar:"docs",previous:{title:"Redux FAQ: General",permalink:"/faq/general"},next:{title:"Redux FAQ: Organizing State",permalink:"/faq/organizing-state"}},s=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Reducers",id:"reducers",children:[{value:"How do I share state between two reducers? Do I have to use <code>combineReducers</code>?",id:"how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers",children:[]},{value:"Do I have to use the <code>switch</code> statement to handle actions?",id:"do-i-have-to-use-the-switch-statement-to-handle-actions",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#redux-faq-reducers"},"Redux FAQ: Reducers"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#reducers"},"Reducers"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers"},"How do I share state between two reducers? Do I have to use ",Object(i.b)("inlineCode",{parentName:"a"},"combineReducers"),"?"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#further-information"},"Further information")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#do-i-have-to-use-the-switch-statement-to-handle-actions"},"Do I have to use the ",Object(i.b)("inlineCode",{parentName:"a"},"switch")," statement to handle actions?"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#further-information-1"},"Further information"))))))))),Object(i.b)("h2",{id:"reducers"},"Reducers"),Object(i.b)("h3",{id:"how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers"},"How do I share state between two reducers? Do I have to use ",Object(i.b)("inlineCode",{parentName:"h3"},"combineReducers"),"?"),Object(i.b)("p",null,"The suggested structure for a Redux store is to split the state object into multiple \u201cslices\u201d or \u201cdomains\u201d by key, and provide a separate reducer function to manage each individual data slice. This is similar to how the standard Flux pattern has multiple independent stores, and Redux provides the ",Object(i.b)("a",{parentName:"p",href:"/api/combinereducers"},Object(i.b)("inlineCode",{parentName:"a"},"combineReducers"))," utility function to make this pattern easier. However, it's important to note that ",Object(i.b)("inlineCode",{parentName:"p"},"combineReducers")," is ",Object(i.b)("em",{parentName:"p"},"not")," required\u2014it is simply a utility function for the common use case of having a single reducer function per state slice, with plain JavaScript objects for the data."),Object(i.b)("p",null,"Many users later want to try to share data between two reducers, but find that ",Object(i.b)("inlineCode",{parentName:"p"},"combineReducers")," does not allow them to do so. There are several approaches that can be used:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If a reducer needs to know data from another slice of state, the state tree shape may need to be reorganized so that a single reducer is handling more of the data."),Object(i.b)("li",{parentName:"ul"},"You may need to write some custom functions for handling some of these actions. This may require replacing ",Object(i.b)("inlineCode",{parentName:"li"},"combineReducers")," with your own top-level reducer function. You can also use a utility such as ",Object(i.b)("a",{parentName:"li",href:"https://github.com/acdlite/reduce-reducers"},"reduce-reducers")," to run ",Object(i.b)("inlineCode",{parentName:"li"},"combineReducers")," to handle most actions, but also run a more specialized reducer for specific actions that cross state slices."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/tutorials/fundamentals/part-4-store#middleware"},"Middleware with async logic")," such as ",Object(i.b)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk"},"redux-thunk")," have access to the entire state through ",Object(i.b)("inlineCode",{parentName:"li"},"getState()"),". An action creator can retrieve additional data from the state and put it in an action, so that each reducer has enough information to update its own state slice.")),Object(i.b)("p",null,"In general, remember that reducers are just functions\u2014you can organize them and subdivide them any way you want, and you are encouraged to break them down into smaller, reusable functions (\u201creducer composition\u201d). While you do so, you may pass a custom third argument from a parent reducer if a child reducer needs additional data to calculate its next state. You just need to make sure that together they follow the basic rules of reducers: ",Object(i.b)("inlineCode",{parentName:"p"},"(state, action) => newState"),", and update state immutably rather than mutating it directly."),Object(i.b)("h4",{id:"further-information"},"Further information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Documentation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/api/combinereducers"},"API: combineReducers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/recipes/structuring-reducers/structuring-reducers"},"Recipes: Structuring Reducers"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discussions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/601"},"#601: A concern on combineReducers, when an action is related to multiple reducers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1400"},"#1400: Is passing top-level state object to branch reducer an anti-pattern?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34333979/accessing-other-parts-of-the-state-when-using-combined-reducers"},"Stack Overflow: Accessing other parts of the state when using combined reducers?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34427851/reducing-an-entire-subtree-with-redux-combinereducers"},"Stack Overflow: Reducing an entire subtree with redux combineReducers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://invalidpatent.wordpress.com/2016/02/18/sharing-state-between-redux-reducers/"},"Sharing State Between Redux Reducers"))),Object(i.b)("h3",{id:"do-i-have-to-use-the-switch-statement-to-handle-actions"},"Do I have to use the ",Object(i.b)("inlineCode",{parentName:"h3"},"switch")," statement to handle actions?"),Object(i.b)("p",null,"No. You are welcome to use any approach you'd like to respond to an action in a reducer. The ",Object(i.b)("inlineCode",{parentName:"p"},"switch")," statement is the most common approach, but it's fine to use ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statements, a lookup table of functions, or to create a function that abstracts this away. In fact, while Redux does require that action objects contain a ",Object(i.b)("inlineCode",{parentName:"p"},"type")," field, your reducer logic doesn't even have to rely on that to handle the action. That said, the standard approach is definitely using a switch statement or a lookup table based on ",Object(i.b)("inlineCode",{parentName:"p"},"type"),"."),Object(i.b)("h4",{id:"further-information-1"},"Further information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Documentation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/recipes/reducing-boilerplate"},"Recipes: Reducing Boilerplate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/recipes/structuring-reducers/splitting-reducer-logic"},"Recipes: Structuring Reducers - Splitting Reducer Logic"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discussions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/883"},"#883: take away the huge switch block")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1167"},"#1167: Reducer without switch"))))}l.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),p=a,h=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return r?n.a.createElement(h,c(c({ref:t},u),{},{components:r})):n.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);