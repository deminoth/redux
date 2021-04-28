(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{157:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),u=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},b=function(e){var r=u(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},s=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(t),s=a,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||c;return t?n.a.createElement(m,o(o({ref:r},l),{},{components:t})):n.a.createElement(m,o({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=s;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},94:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var a=t(3),n=t(7),c=(t(0),t(157)),i={id:"api-reference",title:"API \ub808\ud37c\ub7f0\uc2a4",hide_title:!0},o={unversionedId:"api/api-reference",id:"api/api-reference",isDocsHomePage:!1,title:"API \ub808\ud37c\ub7f0\uc2a4",description:"Redux API\uc758 \ub4dc\ub7ec\ub09c \ubd80\ubd84\uc740 \ub9e4\uc6b0 \uc791\uc2b5\ub2c8\ub2e4. Redux\ub294 (reducers\uc640 \uac19\uc740)\uad6c\ud604\uc744 \uc704\ud55c \uaddc\uc57d \ubaa8\uc74c\uc744 \uc815\uc758\ud558\uace0, \uc774\ub4e4 \uaddc\uc57d\uc744 \ud55c\ub370 \ubb36\uae30 \uc704\ud55c \uba87 \uac00\uc9c0 \ud5ec\ud37c \ud568\uc218\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/README.md",sourceDirName:"api",slug:"/api/api-reference",permalink:"/api/api-reference",version:"current",frontMatter:{id:"api-reference",title:"API \ub808\ud37c\ub7f0\uc2a4",hide_title:!0},sidebar:"docs",previous:{title:"Style Guide",permalink:"/style-guide/style-guide"},next:{title:"`createStore(reducer, [preloadedState], [enhancer])`",permalink:"/api/createstore"}},p=[{value:"\ucd5c\uc0c1\uc704 \uc775\uc2a4\ud3ec\ud2b8",id:"\ucd5c\uc0c1\uc704-\uc775\uc2a4\ud3ec\ud2b8",children:[]},{value:"Store API",id:"store-api",children:[]},{value:"\uc784\ud3ec\ud2b8\ud558\uae30",id:"\uc784\ud3ec\ud2b8\ud558\uae30",children:[]}],l={toc:p};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Redux API\uc758 \ub4dc\ub7ec\ub09c \ubd80\ubd84\uc740 \ub9e4\uc6b0 \uc791\uc2b5\ub2c8\ub2e4. Redux\ub294 (",Object(c.b)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EB%A6%AC%EB%93%80%EC%84%9C"},"reducers"),"\uc640 \uac19\uc740)\uad6c\ud604\uc744 \uc704\ud55c \uaddc\uc57d \ubaa8\uc74c\uc744 \uc815\uc758\ud558\uace0, \uc774\ub4e4 \uaddc\uc57d\uc744 \ud55c\ub370 \ubb36\uae30 \uc704\ud55c \uba87 \uac00\uc9c0 \ud5ec\ud37c \ud568\uc218\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc774 \uc808\uc740 Redux\uc758 \uc804\uccb4 API \ubb38\uc11c\uc785\ub2c8\ub2e4. Redux\ub294 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294\ub370\uc5d0\ub9cc \uc9d1\uc911\ud55c\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud574\ub450\uc138\uc694. \uc2e4\uc81c \uc571\uc5d0\uc11c\ub294 ",Object(c.b)("a",{parentName:"p",href:"https://github.com/gaearon/react-redux"},"react-redux"),"\uc640 \uac19\uc740 UI \ubc14\uc778\ub529 \ub610\ud55c \ud544\uc694\ud560\uac81\ub2c8\ub2e4."),Object(c.b)("h3",{id:"\ucd5c\uc0c1\uc704-\uc775\uc2a4\ud3ec\ud2b8"},"\ucd5c\uc0c1\uc704 \uc775\uc2a4\ud3ec\ud2b8"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/createstore"},"createStore(reducer, [preloadedState])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/combinereducers"},"combineReducers(reducers)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/applymiddleware"},"applyMiddleware(...middlewares)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/bindactioncreators"},"bindActionCreators(actionCreators, dispatch)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/compose"},"compose(...functions)"))),Object(c.b)("h3",{id:"store-api"},"Store API"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/store"},"Store"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/store#getState"},"getState()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/store#dispatch"},"dispatch(action)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/store#subscribe"},"subscribe(listener)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/store#replaceReducer"},"replaceReducer(nextReducer)"))))),Object(c.b)("h3",{id:"\uc784\ud3ec\ud2b8\ud558\uae30"},"\uc784\ud3ec\ud2b8\ud558\uae30"),Object(c.b)("p",null,"\uc704\uc758 \ud568\uc218\ub4e4\uc740 \ubaa8\ub450 \ucd5c\uc0c1\uc704 \uc775\uc2a4\ud3ec\ud2b8\uc785\ub2c8\ub2e4. \uc544\ub798\uc640 \uac19\uc774 \uc784\ud3ec\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(c.b)("h4",{id:"es6"},"ES6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\n")),Object(c.b)("h4",{id:"es5-commonjs"},"ES5 (CommonJS)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var createStore = require('redux').createStore\n")),Object(c.b)("h4",{id:"es5-umd-build"},"ES5 (UMD build)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var createStore = Redux.createStore\n")))}u.isMDXComponent=!0}}]);