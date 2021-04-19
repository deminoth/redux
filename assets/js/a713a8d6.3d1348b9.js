(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),i=(a(0),a(158)),o={id:"miscellaneous",title:"Miscellaneous",hide_title:!0},l={unversionedId:"faq/miscellaneous",id:"faq/miscellaneous",isDocsHomePage:!1,title:"Miscellaneous",description:"Redux FAQ: Miscellaneous",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/faq/Miscellaneous.md",slug:"/faq/miscellaneous",permalink:"/faq/miscellaneous",version:"current",sidebar:"docs",previous:{title:"React Redux",permalink:"/faq/react-redux"},next:{title:"Style Guide",permalink:"/style-guide/style-guide"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[{value:"Are there any larger, \u201creal\u201d Redux projects?",id:"are-there-any-larger-real-redux-projects",children:[]},{value:"How can I implement authentication in Redux?",id:"how-can-i-implement-authentication-in-redux",children:[]}]}],u={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"redux-faq-miscellaneous"},"Redux FAQ: Miscellaneous"),Object(i.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#are-there-any-larger-real-redux-projects"},"Are there any larger, \u201creal\u201d Redux projects?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-can-i-implement-authentication-in-redux"},"How can I implement authentication in Redux?"))),Object(i.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(i.b)("h3",{id:"are-there-any-larger-real-redux-projects"},"Are there any larger, \u201creal\u201d Redux projects?"),Object(i.b)("p",null,"Yes, lots of them! To name just a few:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mobile.twitter.com/"},"Twitter's mobile site")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Automattic/wp-calypso"},"Wordpress's new admin page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/devtools-html/debugger.html"},"Firefox's new debugger")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/zeit/hyperterm"},"The HyperTerm terminal application"))),Object(i.b)("p",null,"And many, many more! The Redux Addons Catalog has ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md"},"a list of Redux-based applications and examples"))," that points to a variety of actual applications, large and small."),Object(i.b)("h4",{id:"further-information"},"Further information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Documentation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/introduction/examples"},"Introduction: Examples"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discussions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/496db2/large_open_source_reactredux_projects/"},"Reddit: Large open source react/redux projects?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=10710240"},"HN: Is there any huge web application built using Redux?"))),Object(i.b)("h3",{id:"how-can-i-implement-authentication-in-redux"},"How can I implement authentication in Redux?"),Object(i.b)("p",null,"Authentication is essential to any real application. When going about authentication you must keep in mind that nothing changes with how you should organize your application and you should implement authentication in the same way you would any other feature. It is relatively straightforward:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create action constants for ",Object(i.b)("inlineCode",{parentName:"p"},"LOGIN_SUCCESS"),", ",Object(i.b)("inlineCode",{parentName:"p"},"LOGIN_FAILURE"),", etc.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create action creators that take in credentials, a flag that signifies whether authentication succeeded, a token, or an error message as the payload.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create an async action creator with Redux Thunk middleware or any middleware you see fit to fire a network request to an API that returns a token if the credentials are valid. Then save the token in the local storage or show a response to the user if it failed. You can perform these side effects from the action creators you wrote in the previous step.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a reducer that returns the next state for each possible authentication case (",Object(i.b)("inlineCode",{parentName:"p"},"LOGIN_SUCCESS"),", ",Object(i.b)("inlineCode",{parentName:"p"},"LOGIN_FAILURE"),", etc)."))),Object(i.b)("h4",{id:"further-information-1"},"Further information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Articles")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://auth0.com/blog/2016/01/04/secure-your-react-and-redux-app-with-jwt-authentication/"},"Authentication with JWT by Auth0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@MattiaManzati/tips-to-handle-authentication-in-redux-2-introducing-redux-saga-130d6872fbe7"},"Tips to Handle Authentication in Redux"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/joshgeller/react-redux-jwt-auth-example"},"react-redux-jwt-auth-example"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Libraries")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/use-cases.md#authentication"},"Redux Addons Catalog: Use Cases - Authentication"))))}s.isMDXComponent=!0},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return a?r.a.createElement(d,l(l({ref:t},u),{},{components:a})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);