(self.webpackChunk=self.webpackChunk||[]).push([[3396],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(a),s=r,m=k["".concat(o,".").concat(s)]||k[s]||d[s]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2296:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return k}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],p={id:"store",title:"Store",hide_title:!0},o=void 0,u={unversionedId:"api/store",id:"api/store",isDocsHomePage:!1,title:"Store",description:"&nbsp;",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/Store.md",sourceDirName:"api",slug:"/api/store",permalink:"/api/store",version:"current",frontMatter:{id:"store",title:"Store",hide_title:!0},sidebar:"docs",previous:{title:"createStore",permalink:"/api/createstore"},next:{title:"combineReducers",permalink:"/api/combinereducers"}},c=[{value:"Store \uba54\uc11c\ub4dc",id:"store-\uba54\uc11c\ub4dc",children:[]},{value:"Store \uba54\uc11c\ub4dc",id:"store-\uba54\uc11c\ub4dc-1",children:[{value:"getState()",id:"getstate",children:[]},{value:"dispatch(action)",id:"dispatchaction",children:[]},{value:"subscribe(listener)",id:"subscribelistener",children:[]},{value:"replaceReducer(nextReducer)",id:"replacereducernextreducer",children:[]}]}],d={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"store"},"Store"),(0,i.kt)("p",null,"\uc571\uc758 \uc804\uccb4 ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EC%83%81%ED%83%9C"},"\uc0c1\ud0dc \ud2b8\ub9ac"),"\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uc800\uc7a5\uc18c\uc785\ub2c8\ub2e4.\n\uc774 \uc548\uc758 \uc0c1\ud0dc\ub97c \ubc14\uafb8\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc5ec\uae30\uc5d0 ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EC%95%A1%EC%85%98"},"\uc561\uc158"),"\uc744 \ubcf4\ub0b4\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc800\uc7a5\uc18c\ub294 \ud074\ub798\uc2a4\uac00 \uc544\ub2d9\ub2c8\ub2e4. \ub2e8\uc9c0 \uc548\uc5d0 \uba87\uac00\uc9c0 \uba54\uc11c\ub4dc\uac00 \ub4e4\uc5b4\uc788\ub294 \uac1d\uccb4\uc77c \ubfd0\uc785\ub2c8\ub2e4.\n\uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub8e8\ud2b8 ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EB%A6%AC%EB%93%80%EC%84%9C"},"\ub9ac\ub4c0\uc2f1 \ud568\uc218"),"\ub97c ",(0,i.kt)("a",{parentName:"p",href:"/api/createstore"},(0,i.kt)("inlineCode",{parentName:"a"},"createStore")),"\uc5d0 \uc804\ub2ec\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"flux-\uc0ac\uc6a9\uc790\ub97c-\uc704\ud55c-\ud55c\ub9c8\ub514"},"Flux \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \ud55c\ub9c8\ub514")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Flux\ub97c \uc4f0\ub2e4\uac00 \uc624\uc168\ub2e4\uba74, \uc774\ud574\ud574\uc57c \ud558\ub294 \ud55c \uac00\uc9c0 \uc911\uc694\ud55c \ucc28\uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. Redux\ub294 \ub514\uc2a4\ud328\uccd0\ub97c \uac00\uc9c0\uc9c0\ub3c4 \uc54a\uace0, \uc5ec\ub7ec\uac1c\uc758 \uc800\uc7a5\uc18c\ub97c \uc9c0\uc6d0\ud558\uc9c0\ub3c4 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"\ub300\uc2e0, \ud558\ub098\uc758 \ub8e8\ud2b8 ",(0,i.kt)("a",{parentName:"strong",href:"/understanding/thinking-in-redux/glossary#%EB%A6%AC%EB%93%80%EC%84%9C"},"\ub9ac\ub4c0\uc2f1 \ud568\uc218"),"\ub97c \uac00\uc9c0\ub294 \ud558\ub098\uc758 \uc800\uc7a5\uc18c\ub9cc \uc788\uc2b5\ub2c8\ub2e4.")," \uc571\uc774 \ucee4\uc9d0\uc5d0 \ub530\ub77c \uc800\uc7a5\uc18c\ub97c \ucd94\uac00\ud558\ub294 \ub300\uc2e0 \ub8e8\ud2b8 \ub9ac\ub4c0\uc11c\ub97c \uc5ec\ub7ec\uac1c\uc758 \uc791\uc740 \ub9ac\ub4c0\uc11c\ub85c \ub098\ub204\uba74 \ub429\ub2c8\ub2e4. \uac01 \ub9ac\ub4c0\uc11c\ub294 \uc0c1\ud0dc \ud2b8\ub9ac\uc758 \uc11c\ub85c \ub2e4\ub978 \ubd80\ubd84\ub4e4\uc5d0\uc11c \ub3c5\ub9bd\uc801\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc744 \ud569\uce58\uae30 \uc704\ud574 ",(0,i.kt)("a",{parentName:"p",href:"/api/combinereducers"},(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"))," \uac19\uc740 \ud5ec\ud37c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ub9c8\uce58 React \uc571\uc5d0 \ud558\ub098\uc758 \ub8e8\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub9cc \uc874\uc7ac\ud558\uc9c0\ub9cc, \uadf8 \uc548\uc5d0 \uc5ec\ub7ec \uc791\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc774 \uc870\ud569\ub418\uc5b4 \uc788\ub294 \uac83\uacfc \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"store-\uba54\uc11c\ub4dc"},"Store \uba54\uc11c\ub4dc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#store"},"Store"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#store-%EB%A9%94%EC%84%9C%EB%93%9C"},"Store \uba54\uc11c\ub4dc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#store-%EB%A9%94%EC%84%9C%EB%93%9C-1"},"Store \uba54\uc11c\ub4dc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getstate"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EB%B0%98%ED%99%98"},"\ubc18\ud658")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch(action)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EC%A0%84%EB%8B%AC%EC%9D%B8%EC%9E%90"},"\uc804\ub2ec\uc778\uc790")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EB%B0%98%ED%99%98-1"},"\ubc18\ud658")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EC%B0%B8%EA%B3%A0"},"\ucc38\uace0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EC%98%88%EC%A0%9C"},"\uc608\uc81c")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subscribelistener"},(0,i.kt)("inlineCode",{parentName:"a"},"subscribe(listener)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EC%A0%84%EB%8B%AC%EC%9D%B8%EC%9E%90-1"},"\uc804\ub2ec\uc778\uc790"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EB%B0%98%ED%99%98-2"},"\ubc18\ud658")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EC%98%88%EC%A0%9C-1"},"\uc608\uc81c")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#replacereducernextreducer"},(0,i.kt)("inlineCode",{parentName:"a"},"replaceReducer(nextReducer)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EC%A0%84%EB%8B%AC%EC%9D%B8%EC%9E%90-2"},"\uc804\ub2ec\uc778\uc790"))))))))),(0,i.kt)("h2",{id:"store-\uba54\uc11c\ub4dc-1"},"Store \uba54\uc11c\ub4dc"),(0,i.kt)("h3",{id:"getstate"},(0,i.kt)("a",{parentName:"h3",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()"))),(0,i.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud604\uc7ac \uc0c1\ud0dc \ud2b8\ub9ac\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n\uc800\uc7a5\uc18c\uc758 \ub9ac\ub4c0\uc11c\uac00 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubc18\ud658\ud55c \uac12\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\ubc18\ud658"},"\ubc18\ud658"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(any)"),": \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud604\uc7ac \uc0c1\ud0dc \ud2b8\ub9ac."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dispatchaction"},(0,i.kt)("a",{parentName:"h3",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch(action)"))),(0,i.kt)("p",null,"\uc561\uc158\uc744 \ubcf4\ub0c5\ub2c8\ub2e4. \uc774\uac83\uc774 \uc0c1\ud0dc \ubcc0\uacbd\uc744 \uc77c\uc73c\ud0a4\uae30 \uc704\ud55c \uc720\uc77c\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc800\uc7a5\uc18c\uc758 \ub9ac\ub4c0\uc2f1 \ud568\uc218\ub294 ",(0,i.kt)("a",{parentName:"p",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()")),"\uc758 \ud604\uc7ac \uacb0\uacfc\uc640 \uc8fc\uc5b4\uc9c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"\uc561\uc158"),"\uacfc \ud568\uaed8 \ub3d9\uae30\uc801\uc73c\ub85c \ud638\ucd9c\ub429\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac12\uc774 \ub2e4\uc74c \uc0c1\ud0dc\uac00 \ub418\uc5b4 \uc774\uc81c\ubd80\ud130 ",(0,i.kt)("a",{parentName:"p",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()")),"\uc5d0\uc11c \ubc18\ud658\ub420 \uac83\uc774\uace0, \uc0c1\ud0dc \ubcc0\uacbd \ub9ac\uc2a4\ub108\ub4e4\uc740 \uc989\uc2dc \uc54c\ub9bc\uc744 \ubc1b\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"flux-\uc0ac\uc6a9\uc790\ub4e4\uc744-\uc704\ud55c-\ud55c\ub9c8\ub514"},"Flux \uc0ac\uc6a9\uc790\ub4e4\uc744 \uc704\ud55c \ud55c\ub9c8\ub514"),(0,i.kt)("p",{parentName:"blockquote"},"\ub9cc\uc57d ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),"\ub97c ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EB%A6%AC%EB%93%80%EC%84%9C"},"\ub9ac\ub4c0\uc11c"),"\uc548\uc5d0\uc11c \ud638\ucd9c\ud558\ub824\uace0 \ud558\uba74 \u201cReducers may not dispatch actions.\u201d \uc774\ub77c\ub294 \uc5d0\ub7ec\ub97c \uc77c\uc73c\ud0ac \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 Flux\uc758 \u201cCannot dispatch in a middle of dispatch\u201d \uc5d0\ub7ec\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc, \uc774\uc640 \uad00\ub828\ub41c \ubb38\uc81c\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. Flux\uc5d0\uc11c\ub294 Store\uac00 \uc561\uc158\uc744 \ub2e4\ub8e8\uace0 \uc5c5\ub370\uc774\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ub3d9\uc548 \uc561\uc158\uc744 \ubcf4\ub0b4\ub294 \uac83\uc774 \uae08\uc9c0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ucef4\ud3ec\ub10c\ud2b8 \uc0dd\uba85\uc8fc\uae30 \ud6c5\uc774\ub098 \ub2e4\ub978 \uacf3\uc5d0\uc11c \uc561\uc158\uc744 \ubcf4\ub0bc \uc218 \uc5c6\uac8c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Redux\uc5d0\uc11c\ub294 \ub8e8\ud2b8 \ub9ac\ub4c0\uc11c\uac00 \uc0c8 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud55c \ub2e4\uc74c\uc5d0 \uad6c\ub3c5\uc790\ub4e4\uc774 \ud638\ucd9c\ub418\uae30 \ub54c\ubb38\uc5d0, \ub9ac\uc2a4\ub108 \uc548\uc5d0\uc11c\ub3c4 \uc561\uc158\uc744 ",(0,i.kt)("em",{parentName:"p"},"\ubcf4\ub0bc \uc218")," \uc788\uc2b5\ub2c8\ub2e4. \uc561\uc158\uc744 \ubcf4\ub0bc \uc218 \uc5c6\ub294 \uacf3\uc740 \ub9ac\ub4c0\uc11c \uc548\ucabd \ubfd0\uc774\uba70, \ub9ac\ub4c0\uc11c\uc5d0\uc11c\ub294 \uc0ac\uc774\ub4dc\uc774\ud399\ud2b8\uac00 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc561\uc158\uc5d0 \ub300\ud55c \uc751\ub2f5\uc73c\ub85c \uc0ac\uc774\ub4dc\uc774\ud399\ud2b8\ub97c \uc77c\uc73c\ud0a4\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EC%95%A1%EC%85%98-%EC%83%9D%EC%82%B0%EC%9E%90"},"\uc561\uc158 \uc0dd\uc0b0\uc790")," \uc548\uc5d0\uc11c \ud558\ub294\uac8c \uc801\uc808\ud569\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\uc804\ub2ec\uc778\uc790"},"\uc804\ub2ec\uc778\uc790"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"action")," (",(0,i.kt)("em",{parentName:"li"},"Object"),(0,i.kt)("sup",null,"\u2020"),"): \uc571\uc758 \ubcc0\uacbd\uc0ac\ud56d\uc744 \uae30\uc220\ud558\ub294 \ud3c9\ubc94\ud55c \uac1d\uccb4\uc785\ub2c8\ub2e4. \uc561\uc158\uc740 \uc800\uc7a5\uc18c\ub85c \ub370\uc774\ud130\ub97c \ubcf4\ub0b4\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc774\uae30 \ub54c\ubb38\uc5d0 UI \uc774\ubca4\ud2b8, \ub124\ud2b8\uc6cc\ud06c \ucf5c\ubc31, \uc6f9\uc18c\ucf13 \ub4f1 \ub2e4\ub978 \uc5b4\ub5a4 \uc18c\uc2a4\uc5d0\uc11c \uc624\ub294 \ub370\uc774\ud130\ub4e0\uac04\uc5d0 \uc561\uc158\uc744 \ud1b5\ud574 \ubcf4\ub0b4\uc838\uc57c \ud569\ub2c8\ub2e4. \uc561\uc158\uc740 \ubc18\ub4dc\uc2dc \uc5b4\ub5a4 \ud615\ud0dc\uc758 \uc561\uc158\uc774 \ud589\ud574\uc9c8\uc9c0 \uc9c0\uc2dc\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," \ud544\ub4dc\ub97c \uac00\uc838\uc57c \ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),"\uc5d0\ub294 ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol"},"Symbols")," \ubcf4\ub2e4\ub294 \ubb38\uc790\uc5f4\uc744 \uc0ac\uc6a9\ud558\ub294 \ud3b8\uc774 \uc9c1\ub82c\ud654\uac00 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0 \ub354 \ub0ab\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," \uc678\uc5d0 \uc561\uc158 \uac1d\uccb4\uc758 \uad6c\uc870\ub294 \uc5ec\ub7ec\ubd84\uc5d0\uac8c \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. \uad00\uc2ec\uc774 \uc788\ub2e4\uba74 \uc561\uc158\uc744 \uc5b4\ub5bb\uac8c \uad6c\uc131\ud558\ub294\uac83\uc744 \ucd94\ucc9c\ud558\ub294\uc9c0 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/acdlite/flux-standard-action"},"Flux Standard Action"),"\uc5d0\uc11c \ud655\uc778\ud574\ubcf4\uc138\uc694.")),(0,i.kt)("h4",{id:"\ubc18\ud658-1"},"\ubc18\ud658"),(0,i.kt)("p",null,"(Object",(0,i.kt)("sup",null,"\u2020"),"): \uc1a1\ub2ec\ub41c \uc561\uc158(\ucc38\uace0\ub97c \ubcf4\uc138\uc694)."),(0,i.kt)("h4",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,i.kt)("sup",null,"\u2020")," [`createStore`](/api/createstore) \ud638\ucd9c\uc5d0\uc11c \uc5bb\uc744 \uc218 \uc788\ub294 \ud3c9\ubc94\ud55c(vanilla) \uc800\uc7a5\uc18c\ub294 \ud3c9\ubc94\ud55c \uc624\ube0c\uc81d\ud2b8\ub9cc\uc744 \uc561\uc158\uc73c\ub85c \ubc1b\uc744 \uc218 \uc788\uc73c\uba70 \ubc1b\uc740 \uc561\uc158\uc740 \ubc14\ub85c \ub9ac\ub4c0\uc11c\uc5d0 \ub118\uae41\ub2c8\ub2e4.",(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc ",(0,i.kt)("a",{parentName:"p",href:"/api/createstore"},(0,i.kt)("inlineCode",{parentName:"a"},"createStore")),"\ub97c ",(0,i.kt)("a",{parentName:"p",href:"/api/applymiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"applyMiddleware")),"\ub85c \uac10\uc2f8\uba74 \ubbf8\ub4e4\uc6e8\uc5b4\uac00 \uc561\uc158\uc744 \uc911\uac04\uc5d0 \ub2e4\ub974\uac8c \ucc98\ub9ac\ud574\uc11c ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%95%A1%EC%85%98"},"\ube44\ub3d9\uae30 \uc561\uc158"),"\uc744 \ubcf4\ub0bc \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4. \ube44\ub3d9\uae30 \uc561\uc158\uc740 \ubcf4\ud1b5 Promise, Observable, thunk\uc640 \uac19\uc740 \ube44\ub3d9\uae30 \uc6d0\uc2dc \ud0c0\uc785\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c0\uace0 Redux\uc5d0 \uae30\ubcf8\uc801\uc73c\ub85c \ud3ec\ud568\ub418\uc5b4 \ub098\uc624\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk"},"redux-thunk"),"\ub098 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acdlite/redux-promise"},"redux-promise")," \uac19\uc740 \ud328\ud0a4\uc9c0\ub97c \uc9c1\uc811 \uc124\uce58\ud574\uc918\uc57c \ud569\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc774 \uc9c1\uc811 \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ube44\ub3d9\uae30\uc801\uc73c\ub85c API\ub97c \ud638\ucd9c\ud558\uac70\ub098, \uc561\uc158 \uc0dd\uc0b0\uc790 \uc548\uc5d0\uc11c \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc77d\uac70\ub098, \uc0ac\uc774\ub4dc\uc774\ud399\ud2b8\ub97c \uc77c\uc73c\ud0a4\uac70\ub098, \uc774\ub4e4\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc5ee\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\ub824\uba74 ",(0,i.kt)("a",{parentName:"p",href:"/api/applymiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"applyMiddleware")),"\uc758 \uc608\uc81c\ub97c \ubcf4\uc138\uc694."),(0,i.kt)("h4",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\nlet store = createStore(todos, ['Use Redux'])\n\nfunction addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n\nstore.dispatch(addTodo('Read the docs'))\nstore.dispatch(addTodo('Read about the middleware'))\n")),(0,i.kt)("p",null,"--"),(0,i.kt)("h3",{id:"subscribelistener"},(0,i.kt)("a",{parentName:"h3",href:"#subscribe"},(0,i.kt)("inlineCode",{parentName:"a"},"subscribe(listener)"))),(0,i.kt)("p",null,"\ubcc0\uacbd\uc0ac\ud56d\uc5d0 \ub300\ud55c \ub9ac\uc2a4\ub108\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \ub9ac\uc2a4\ub108\ub294 \uc561\uc158\uc774 \ubcf4\ub0b4\uc838\uc11c \uc0c1\ud0dc \ud2b8\ub9ac\uc758 \uc77c\ubd80\uac00 \ubcc0\uacbd\ub420 \uc218 \uc788\uc744 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub429\ub2c8\ub2e4. \ucf5c\ubc31 \uc548\uc5d0\uc11c \ud604\uc7ac \uc0c1\ud0dc \ud2b8\ub9ac\ub97c \uc77d\uc73c\ub824\uba74 ",(0,i.kt)("a",{parentName:"p",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()")),"\ub97c \ud638\ucd9c\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub2e4\uc74c \uc720\uc758\uc0ac\ud56d\ub4e4\uc744 \ub530\ub978\ub2e4\uba74 \ub9ac\uc2a4\ub108 \uc548\uc5d0\uc11c ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()")),"\ub97c \ud638\ucd9c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ub9ac\uc2a4\ub108\ub294 \uc0ac\uc6a9\uc790 \uc561\uc158\uc5d0 \uc751\ub2f5\ud558\uae30 \uc704\ud574\uc11c\ub098 \ud2b9\uc815 \uc870\uac74 \ud558\uc5d0\uc11c\ub9cc ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()")),"\ub97c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uae30\uc220\uc801\uc73c\ub85c\ub294 \uc544\ubb34\ub7f0 \uc870\uac74 \uc5c6\uc774 ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()")),"\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc9c0\ub9cc, \ud638\ucd9c\ub420\ub54c\ub9c8\ub2e4 \ub2e4\uc2dc \ub9ac\uc2a4\ub108\ub97c \uc791\ub3d9\uc2dc\ud0a4\uae30 \ub54c\ubb38\uc5d0 \ubb34\ud55c \ub8e8\ud504\uc5d0 \ube60\uc9c8 \uac83\uc785\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uad6c\ub3c5\uc790\ub4e4\uc740 \ub9e4\ubc88 ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()")),"\uac00 \ud638\ucd9c\ub418\uae30 \uc804 \uc2dc\uc810\uc758 \uac83\ub4e4\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub9cc\uc57d \ub9ac\uc2a4\ub108 \uc548\uc5d0\uc11c \uad6c\ub3c5\uc774\ub098 \uad6c\ub3c5\ucde8\uc18c\ub97c \ud558\ub354\ub77c\ub3c4 \uc9c0\uae08 \uc9c4\ud589\uc911\uc778 ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()")),"\uc5d0\ub294 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc911\ucca9 \uc5ec\ubd80\uc640 \uad00\uacc4 \uc5c6\uc774, \ub2e4\uc74c ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," \ud638\ucd9c\uc5d0\uc11c\ub294 \ub354 \ucd5c\uadfc\uc758 \uad6c\ub3c5 \ubaa9\ub85d\uc774 \uc0ac\uc6a9\ub420 \uac83\uc785\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ub9ac\uc2a4\ub108\uac00 \ud638\ucd9c\ub418\uae30 \uc804\uc5d0 \uc911\ucca9\ub41c ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()")),"\ub4e4\uc774 \uc0c1\ud0dc\ub97c \uc5ec\ub7ec\ubc88 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \ub9ac\uc2a4\ub108\uac00 \ubaa8\ub4e0 \uc0c1\ud0dc \ubcc0\ud654\ub97c \ubc1b\uc544\ubcfc \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud558\uc9c0\ub294 \ub9c8\uc2ed\uc2dc\uc624. \ud558\uc9c0\ub9cc ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()")),"\uac00 \uc2dc\uc791\ud558\uae30 \uc804\uc5d0 \ub4f1\ub85d\ub41c \ubaa8\ub4e0 \uad6c\ub3c5\uc790\ub4e4\uc740 \ud574\ub2f9 \uc2dc\uc810\uc758 \ucd5c\uc2e0 \uc0c1\ud0dc\ub97c \ubc1b\uc544\ubcfc \uac83\uc774 \ubcf4\uc7a5\ub429\ub2c8\ub2e4."))),(0,i.kt)("p",null,"\uc774\uac83\uc740 \ub85c\uc6b0\ub808\ubca8 API\uc774\uae30 \ub54c\ubb38\uc5d0 \uc9c1\uc811 \uc0ac\uc6a9\ud558\uae30\ubcf4\ub2e4\ub294 React(\ub610\ub294 \ub2e4\ub978) \ubc14\uc778\ub529\uc744 \uc0ac\uc6a9\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4. \uc0c1\ud0dc \ubcc0\ud654\uc5d0 \ubc18\uc751\ud558\uae30 \uc704\ud574 \ucf5c\ubc31\uc744 \uc8fc\ub85c \uc0ac\uc6a9\ud55c\ub2e4\uba74, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/redux/issues/303#issuecomment-125184409"},"\uc9c1\uc811 ",(0,i.kt)("inlineCode",{parentName:"a"},"observeStore")," \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc791\uc131"),"\ud558\uae30\ub97c \uc6d0\ud560\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),"\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenparsing/es-observable"},(0,i.kt)("inlineCode",{parentName:"a"},"Observable")),"\uc774\uae30\ub3c4 \ud558\ubbc0\ub85c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJS"},"RxJS")," \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud1b5\ud574 \ubcc0\uacbd\uc0ac\ud56d\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub9ac\uc2a4\ub108\uc758 \uad6c\ub3c5\uc744 \ud574\uc9c0\ud558\ub824\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe"),"\uac00 \ubc18\ud658\ud55c \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc138\uc694."),(0,i.kt)("h4",{id:"\uc804\ub2ec\uc778\uc790-1"},"\uc804\ub2ec\uc778\uc790"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"listener")," (",(0,i.kt)("em",{parentName:"li"},"Function"),"): \uc561\uc158\uc774 \ubcf4\ub0b4\uc838\uc11c \uc0c1\ud0dc \ud2b8\ub9ac\uac00 \ubc14\ub00c\uac8c \ub420 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ud560 \ucf5c\ubc31\uc785\ub2c8\ub2e4. \ud604\uc7ac \uc0c1\ud0dc \ud2b8\ub9ac\ub97c \uc77d\uae30 \uc704\ud574 \ucf5c\ubc31 \ub0b4\uc5d0\uc11c ",(0,i.kt)("a",{parentName:"li",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()")),"\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc800\uc7a5\uc18c\uc758 \ub9ac\ub4c0\uc11c\ub294 \uc21c\uc218 \ud568\uc218\uc77c \uac83\uc774\ubbc0\ub85c \uc0c1\ud0dc \ud2b8\ub9ac\uc758 \uac12\uc774 \ubcc0\uacbd\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \ub808\ud37c\ub7f0\uc2a4\ub97c \ube44\uad50\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h5",{id:"\ubc18\ud658-2"},"\ubc18\ud658"),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"Function"),"): \ubcc0\uacbd \ub9ac\uc2a4\ub108\ub97c \uad6c\ub3c5 \ud574\uc9c0\ud558\ub294 \ud568\uc218."),(0,i.kt)("h5",{id:"\uc608\uc81c-1"},"\uc608\uc81c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function select(state) {\n  return state.some.deep.property\n}\n\nlet currentValue\nfunction handleChange() {\n  let previousValue = currentValue\n  currentValue = select(store.getState())\n\n  if (previousValue !== currentValue) {\n    console.log(\n      'Some deep nested property changed from',\n      previousValue,\n      'to',\n      currentValue\n    )\n  }\n}\n\nlet unsubscribe = store.subscribe(handleChange)\nunsubscribe()\n")),(0,i.kt)("p",null,"--"),(0,i.kt)("h3",{id:"replacereducernextreducer"},(0,i.kt)("a",{parentName:"h3",href:"#replaceReducer"},(0,i.kt)("inlineCode",{parentName:"a"},"replaceReducer(nextReducer)"))),(0,i.kt)("p",null,"\ud604\uc7ac \uc800\uc7a5\uc18c\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uacc4\uc0b0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\uc911\uc778 \ub9ac\ub4c0\uc11c\ub97c \uad50\uccb4\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\uac83\uc740 \uace0\uae09 API\ub85c \ucf54\ub4dc \ubd84\ud560\uc774\ub098 \ub3d9\uc801\uc73c\ub85c \ub9ac\ub4c0\uc11c\ub97c \ubd88\ub7ec\uc624\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Redux\uc5d0\uc11c \ud56b \ub9ac\ub85c\ub529\uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc804\ub2ec\uc778\uc790-2"},"\uc804\ub2ec\uc778\uc790"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"reducer")," (",(0,i.kt)("em",{parentName:"li"},"Function"),") \uc800\uc7a5\uc18c\uac00 \uc55e\uc73c\ub85c \uc0ac\uc6a9\ud560 \ub9ac\ub4c0\uc11c")))}k.isMDXComponent=!0}}]);