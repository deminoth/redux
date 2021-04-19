(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(3),o=a(8),n=(a(0),a(158)),i={id:"overview",title:"Redux Toolkit: Overview",description:"Redux Toolkit is the recommended way to write Redux logic",hide_title:!0},l={unversionedId:"redux-toolkit/overview",id:"redux-toolkit/overview",isDocsHomePage:!1,title:"Redux Toolkit: Overview",description:"Redux Toolkit is the recommended way to write Redux logic",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/redux-toolkit/overview.md",slug:"/redux-toolkit/overview",permalink:"/redux-toolkit/overview",version:"current",sidebar:"docs",previous:{title:"compose",permalink:"/api/compose"}},c=[{value:"What is Redux Toolkit?",id:"what-is-redux-toolkit",children:[{value:"Installation",id:"installation",children:[]}]},{value:"Purpose",id:"purpose",children:[]},{value:"Why You Should Use Redux Toolkit",id:"why-you-should-use-redux-toolkit",children:[]},{value:"What&#39;s Included",id:"whats-included",children:[]},{value:"Documentation",id:"documentation",children:[{value:"Documentation Links",id:"documentation-links",children:[]}]}],u={toc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"what-is-redux-toolkit"},"What is Redux Toolkit?"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://redux-toolkit.js.org"},"Redux Toolkit"))," is our official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it."),Object(n.b)("p",null,'It includes several utility functions that simplify the most common Redux use cases, including store setup, defining reducers, immutable update logic, and even creating entire "slices" of state at once without writing any action creators or action types by hand. It also includes the most widely used Redux addons, like Redux Thunk for async logic and Reselect for writing selector functions, so that you can use them right away.'),Object(n.b)("h3",{id:"installation"},"Installation"),Object(n.b)("p",null,"Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install @reduxjs/toolkit\n\n# Yarn\nyarn add @reduxjs/toolkit\n")),Object(n.b)("h2",{id:"purpose"},"Purpose"),Object(n.b)("p",null,"The Redux core library is deliberately unopinionated. It lets you decide how you want to handle everything, like store setup, what your state contains, and how you want to build your reducers."),Object(n.b)("p",null,"This is good in some cases, because it gives you flexibility, but that flexibility isn't always needed. Sometimes we just want the simplest possible way to get started, with some good default behavior out of the box. Or, maybe you're writing a larger application and finding yourself writing some similar code, and you'd like to cut down on how much of that code you have to write by hand."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Redux Toolkit")," was originally created to help address three common concerns about Redux:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'"Configuring a Redux store is too complicated"'),Object(n.b)("li",{parentName:"ul"},'"I have to add a lot of packages to get Redux to do anything useful"'),Object(n.b)("li",{parentName:"ul"},'"Redux requires too much boilerplate code"')),Object(n.b)("p",null,"We can't solve every use case, but in the spirit of ",Object(n.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},Object(n.b)("inlineCode",{parentName:"a"},"create-react-app"))," and ",Object(n.b)("a",{parentName:"p",href:"https://dev-blog.apollodata.com/zero-config-graphql-state-management-27b1f1b3c2c3"},Object(n.b)("inlineCode",{parentName:"a"},"apollo-boost")),", we can provide an official recommended set of tools that handle the most common use cases and reduce the need to make extra decisions."),Object(n.b)("h2",{id:"why-you-should-use-redux-toolkit"},"Why You Should Use Redux Toolkit"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Redux Toolkit")," makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. Redux Toolkit is ",Object(n.b)("strong",{parentName:"p"},"beneficial to all Redux users")," regardless of skill level or experience. It can be added at the start of a new project, or used as part of an incremental migration in an existing project."),Object(n.b)("p",null,"Note that ",Object(n.b)("strong",{parentName:"p"},"you are not ",Object(n.b)("em",{parentName:"strong"},"required")," to use Redux Toolkit to use Redux"),'. There are many existing applications that use other Redux wrapper libraries, or write all Redux logic "by hand". ',Object(n.b)("strong",{parentName:"p"},"If you prefer to use a different approach, go ahead!")),Object(n.b)("p",null,"Overall, whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, ",Object(n.b)("strong",{parentName:"p"},"using Redux Toolkit will make your code better and more maintainable"),"."),Object(n.b)("h2",{id:"whats-included"},"What's Included"),Object(n.b)("p",null,"Redux Toolkit includes:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/configureStore"},Object(n.b)("inlineCode",{parentName:"a"},"configureStore()")," function")," with simplified configuration options. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes ",Object(n.b)("inlineCode",{parentName:"li"},"redux-thunk")," by default, and enables use of the Redux DevTools Extension."),Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createReducer"},Object(n.b)("inlineCode",{parentName:"a"},"createReducer()")," utility")," that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the ",Object(n.b)("a",{parentName:"li",href:"https://github.com/mweststrate/immer"},Object(n.b)("inlineCode",{parentName:"a"},"immer")," library")," to let you write simpler immutable updates with normal mutative code, like ",Object(n.b)("inlineCode",{parentName:"li"},"state.todos[3].completed = true"),"."),Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createAction"},Object(n.b)("inlineCode",{parentName:"a"},"createAction()")," utility")," that returns an action creator function for the given action type string. The function itself has ",Object(n.b)("inlineCode",{parentName:"li"},"toString()")," defined, so that it can be used in place of the type constant."),Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSlice"},Object(n.b)("inlineCode",{parentName:"a"},"createSlice()")," function")," that accepts a set of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSelector"},Object(n.b)("inlineCode",{parentName:"a"},"createSelector")," utility")," from the ",Object(n.b)("a",{parentName:"li",href:"https://github.com/reduxjs/reselect"},"Reselect")," library, re-exported for ease of use.")),Object(n.b)("h2",{id:"documentation"},"Documentation"),Object(n.b)("p",null,"The complete Redux Toolkit documentation is available at ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://redux-toolkit.js.org"},"https://redux-toolkit.js.org")),"."),Object(n.b)("h3",{id:"documentation-links"},"Documentation Links"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Introduction"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/introduction/quick-start"},"Quick Start")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tutorials"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/tutorials/basic-tutorial"},"Basic Tutorial")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/tutorials/intermediate-tutorial"},"Intermediate Tutorial")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/tutorials/advanced-tutorial"},"Advanced Tutorial")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Using Redux Toolkit"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/usage/usage-guide"},"Usage Guide")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"API Reference"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/configureStore"},Object(n.b)("inlineCode",{parentName:"a"},"configureStore"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/getDefaultMiddleware"},Object(n.b)("inlineCode",{parentName:"a"},"getDefaultMiddleware"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createReducer"},Object(n.b)("inlineCode",{parentName:"a"},"createReducer"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createAction"},Object(n.b)("inlineCode",{parentName:"a"},"createAction"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSlice"},Object(n.b)("inlineCode",{parentName:"a"},"createSlice"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSelector"},Object(n.b)("inlineCode",{parentName:"a"},"createSelector"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/other-exports"},"Other Exports"))))))}s.isMDXComponent=!0},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||n;return a?o.a.createElement(m,l(l({ref:t},u),{},{components:a})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);