(self.webpackChunk=self.webpackChunk||[]).push([[303],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1139:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],p={id:"compose",title:"compose",hide_title:!0},c=void 0,u={unversionedId:"api/compose",id:"api/compose",isDocsHomePage:!1,title:"compose",description:"&nbsp;",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/compose.md",sourceDirName:"api",slug:"/api/compose",permalink:"/api/compose",version:"current",frontMatter:{id:"compose",title:"compose",hide_title:!0},sidebar:"docs",previous:{title:"bindActionCreators",permalink:"/api/bindactioncreators"},next:{title:"Redux Toolkit: Overview",permalink:"/redux-toolkit/overview"}},l=[],s={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"composefunctions"},(0,i.kt)("inlineCode",{parentName:"h1"},"compose(...functions)")),(0,i.kt)("p",null,"\ud568\uc218\ub97c \uc624\ub978\ucabd\uc5d0\uc11c \uc67c\ucabd\uc73c\ub85c \uc870\ud569\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\uac83\uc740 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \uc720\ud2f8\ub9ac\ud2f0\ub85c, Redux\uc5d0\ub294 \ud3b8\ub9ac\ud568\uc744 \uc704\ud574 \ud3ec\ud568\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc5ec\ub7ec ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EC%A0%80%EC%9E%A5%EC%86%8C-%EC%9D%B8%ED%95%B8%EC%84%9C"},"\uc800\uc7a5\uc18c \uc778\ud578\uc11c"),"\ub4e4\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc801\uc6a9\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc778\uc218"},"\uc778\uc218"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"(",(0,i.kt)("em",{parentName:"li"},"arguments"),"): \uc870\ud569\ud560 \ud568\uc218\ub4e4\uc785\ub2c8\ub2e4. \uac01\uac01\uc758 \ud568\uc218\ub294 \ud558\ub098\uc758 \uc778\uc790\ub97c \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4. \ud568\uc218\uc758 \ubc18\ud658\uac12\uc740 \uc67c\ucabd\uc5d0 \uc788\ub294 \ud568\uc218\uc758 \uc778\uc218\ub85c \uc81c\uacf5\ub418\ub294 \uc2dd\uc73c\ub85c \uc5f0\uc18d\ub429\ub2c8\ub2e4. \uc608\uc678\ub294 \uac00\uc7a5 \uc624\ub978\ucabd\uc5d0 \uc788\ub294 \uc778\uc218\ub85c, \uc5ec\ub7ec \uac1c\uc758 \uc778\uc790\ub97c \ubc1b\uc744 \uc218 \uc788\uc73c\uba70 \uc870\ud569\ub41c \ud568\uc218\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub294 \uc774\ub97c \ub530\ub985\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\ubc18\ud658"},"\ubc18\ud658"),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"Function"),"): \uc624\ub978\ucabd\uc5d0\uc11c \uc67c\ucabd\uc73c\ub85c \uc870\ud569\ub41c \ucd5c\uc885 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,i.kt)("p",null,"\uc774 \uc608\uc81c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"compose"),"\ub97c \uc0ac\uc6a9\ud574 ",(0,i.kt)("a",{parentName:"p",href:"/api/store"},"\uc800\uc7a5\uc18c"),"\ub97c ",(0,i.kt)("a",{parentName:"p",href:"/api/applymiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"applyMiddleware")),"\uc640 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-devtools"},"redux-devtools")," \ud328\ud0a4\uc9c0\uc758 \uba87\uba87 \uac1c\ubc1c\ud234\ub85c \uac15\ud654\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore, combineReducers, applyMiddleware, compose } from 'redux'\nimport thunk from 'redux-thunk'\nimport DevTools from './containers/DevTools'\nimport reducer from '../reducers/index'\n\nconst store = createStore(\n  reducer,\n  compose(applyMiddleware(thunk), DevTools.instrument())\n)\n")),(0,i.kt)("h4",{id:"\ud301"},"\ud301"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compose"),"\uac00 \ud558\ub294 \uc77c\uc740 \uae4a\uc774 \uc911\ucca9\ub41c \ud568\uc218 \ubcc0\ud658\uc744 \uae38\uac8c \ub298\uc5b4\uc9c4 \ucf54\ub4dc \uc5c6\uc774 \uc791\uc131\ud558\uac8c \ud574\uc8fc\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4. \ub108\ubb34 \ub300\ub2e8\ud558\uac8c \uc5ec\uae30\uc9c0 \ub9c8\uc138\uc694!")))}m.isMDXComponent=!0}}]);