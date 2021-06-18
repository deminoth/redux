(self.webpackChunk=self.webpackChunk||[]).push([[1328],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1745:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],u={id:"three-principles",title:"3\uac00\uc9c0 \uc6d0\uce59",description:"\uc18c\uac1c > 3\uac00\uc9c0 \uc6d0\uce59: Redux \uc0ac\uc6a9\uc758 3\uac00\uc9c0 \uc911\uc694 \uc6d0\uce59",hide_title:!0},c={unversionedId:"understanding/thinking-in-redux/three-principles",id:"understanding/thinking-in-redux/three-principles",isDocsHomePage:!1,title:"3\uac00\uc9c0 \uc6d0\uce59",description:"\uc18c\uac1c > 3\uac00\uc9c0 \uc6d0\uce59: Redux \uc0ac\uc6a9\uc758 3\uac00\uc9c0 \uc911\uc694 \uc6d0\uce59",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/understanding/thinking-in-redux/ThreePrinciples.md",sourceDirName:"understanding/thinking-in-redux",slug:"/understanding/thinking-in-redux/three-principles",permalink:"/understanding/thinking-in-redux/three-principles",version:"current",frontMatter:{id:"three-principles",title:"3\uac00\uc9c0 \uc6d0\uce59",description:"\uc18c\uac1c > 3\uac00\uc9c0 \uc6d0\uce59: Redux \uc0ac\uc6a9\uc758 3\uac00\uc9c0 \uc911\uc694 \uc6d0\uce59",hide_title:!0},sidebar:"docs",previous:{title:"\ub3d9\uae30",permalink:"/understanding/thinking-in-redux/motivation"},next:{title:"\uc6a9\uc5b4\uc9d1",permalink:"/understanding/thinking-in-redux/glossary"}},s=[{value:"\uc9c4\uc2e4\uc740 \ud558\ub098\uc758 \uadfc\uc6d0\uc73c\ub85c\ubd80\ud130",id:"\uc9c4\uc2e4\uc740-\ud558\ub098\uc758-\uadfc\uc6d0\uc73c\ub85c\ubd80\ud130",children:[]},{value:"\uc0c1\ud0dc\ub294 \uc77d\uae30 \uc804\uc6a9\uc774\ub2e4",id:"\uc0c1\ud0dc\ub294-\uc77d\uae30-\uc804\uc6a9\uc774\ub2e4",children:[]},{value:"\ubcc0\ud654\ub294 \uc21c\uc218 \ud568\uc218\ub85c \uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4",id:"\ubcc0\ud654\ub294-\uc21c\uc218-\ud568\uc218\ub85c-\uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4",children:[]}],l={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3\uac00\uc9c0-\uc6d0\uce59"},"3\uac00\uc9c0 \uc6d0\uce59"),(0,a.kt)("p",null,"Redux\uc758 \uae30\ucd08\ub97c \uc774\ub8e8\ub294 \uc6d0\uce59\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc9c4\uc2e4\uc740-\ud558\ub098\uc758-\uadfc\uc6d0\uc73c\ub85c\ubd80\ud130"},"\uc9c4\uc2e4\uc740 \ud558\ub098\uc758 \uadfc\uc6d0\uc73c\ub85c\ubd80\ud130"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 ",(0,a.kt)("a",{parentName:"strong",href:"/understanding/thinking-in-redux/glossary#%EC%83%81%ED%83%9C"},"\uc0c1\ud0dc"),"\ub294 \ud558\ub098\uc758 ",(0,a.kt)("a",{parentName:"strong",href:"/understanding/thinking-in-redux/glossary#%EC%A0%80%EC%9E%A5%EC%86%8C"},"\uc800\uc7a5\uc18c")," \uc548\uc5d0 \ud558\ub098\uc758 \uac1d\uccb4 \ud2b8\ub9ac \uad6c\uc870\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub97c \ud1b5\ud574 \ubc94\uc6a9\uc801\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158(universal application, \ud558\ub098\uc758 \ucf54\ub4dc \ubca0\uc774\uc2a4\ub85c \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud55c \ucf54\ub4dc)\uc744 \ub9cc\ub4e4\uae30 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc11c\ubc84\ub85c\ubd80\ud130 \uac00\uc838\uc628 \uc0c1\ud0dc\ub294 \uc2dc\ub9ac\uc5bc\ub77c\uc774\uc988\ub418\uac70\ub098(serialized) \uc218\ud654\ub418\uc5b4(hydrated) \uc804\ub2ec\ub418\uba70 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ucd94\uac00\uc801\uc778 \ucf54\ub529 \uc5c6\uc774\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud558\ub098\uc758 \uc0c1\ud0dc \ud2b8\ub9ac\ub9cc\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub514\ubc84\uae45\uc5d0\ub3c4 \uc6a9\uc774\ud560 \uac83\uc785\ub2c8\ub2e4. \ube60\ub978 \uac1c\ubc1c \uc0ac\uc774\ud074\uc744 \uc704\ud574 \uac1c\ubc1c\uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud574\ub193\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\ub098\uc758 \uc0c1\ud0dc \ud2b8\ub9ac\ub9cc\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\uc804\uc5d0\ub294 \uad49\uc7a5\ud788 \uad6c\ud604\ud558\uae30 \uc5b4\ub824\uc6e0\ub358 \uae30\ub2a5\uc778 \uc2e4\ud589\ucde8\uc18c/\ub2e4\uc2dc\uc2e4\ud589(undo/redo)\uc744 \uc190\uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(store.getState());\n\n{\n  visibilityFilter: 'SHOW_ALL',\n  todos: [{\n    text: 'Consider using Redux',\n    completed: true,\n  }, {\n    text: 'Keep all state in a single tree',\n    completed: false\n  }]\n}\n")),(0,a.kt)("h3",{id:"\uc0c1\ud0dc\ub294-\uc77d\uae30-\uc804\uc6a9\uc774\ub2e4"},"\uc0c1\ud0dc\ub294 \uc77d\uae30 \uc804\uc6a9\uc774\ub2e4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc0c1\ud0dc\ub97c \ubcc0\ud654\uc2dc\ud0a4\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \ubb34\uc2a8 \uc77c\uc774 \ubc8c\uc5b4\uc9c0\ub294 \uc9c0\ub97c \ubb18\uc0ac\ud558\ub294 ",(0,a.kt)("a",{parentName:"strong",href:"/understanding/thinking-in-redux/glossary#%EC%95%A1%EC%85%98"},"\uc561\uc158")," \uac1d\uccb4\ub97c \uc804\ub2ec\ud558\ub294 \ubc29\ubc95\ubfd0\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub97c \ud1b5\ud574\uc11c \ubdf0\ub098 \ub124\ud2b8\uc6cc\ud06c \ucf5c\ubc31\uc5d0\uc11c \uacb0\ucf54 \uc0c1\ud0dc\ub97c \uc9c1\uc811 \ubc14\uafb8\uc9c0 \ubabb \ud55c\ub2e4\ub294 \uac83\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \uc0c1\ud0dc \ubcc0\ud654\ub294 \uc911\uc559\uc5d0\uc11c \uad00\ub9ac\ub418\uba70 \ubaa8\ub4e0 \uc561\uc158\uc740 \uc5c4\uaca9\ud55c \uc21c\uc11c\uc5d0 \uc758\ud574 \ud558\ub098\ud558\ub098 \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0, \uc2e0\uacbd\uc368\uc11c \uad00\ub9ac\ud574\uc57c\ud560 \ubbf8\ubb18\ud55c \uacbd\uc7c1 \uc0c1\ud0dc\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc561\uc158\uc740 \uadf8\uc800 \ud3c9\ubc94\ud55c \uac1d\uccb4\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uae30\ub85d\uc744 \ub0a8\uae38 \uc218 \uc788\uace0, \uc2dc\ub9ac\uc5bc\ub77c\uc774\uc988\ud560 \uc218 \uc788\uc73c\uba70, \uc800\uc7a5\ud560 \uc218 \uc788\uace0, \uc774\ud6c4\uc5d0 \ud14c\uc2a4\ud2b8\ub098 \ub514\ubc84\uae45\uc744 \uc704\ud574\uc11c \uc7ac\ud604\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch({\n  type: 'COMPLETE_TODO',\n  index: 1\n})\n\nstore.dispatch({\n  type: 'SET_VISIBILITY_FILTER',\n  filter: 'SHOW_COMPLETED'\n})\n")),(0,a.kt)("h3",{id:"\ubcc0\ud654\ub294-\uc21c\uc218-\ud568\uc218\ub85c-\uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4"},"\ubcc0\ud654\ub294 \uc21c\uc218 \ud568\uc218\ub85c \uc791\uc131\ub418\uc5b4\uc57c\ud55c\ub2e4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc561\uc158\uc5d0 \uc758\ud574 \uc0c1\ud0dc \ud2b8\ub9ac\uac00 \uc5b4\ub5bb\uac8c \ubcc0\ud654\ud558\ub294 \uc9c0\ub97c \uc9c0\uc815\ud558\uae30 \uc704\ud574 \ud504\ub85c\uadf8\ub798\uba38\ub294 \uc21c\uc218 ",(0,a.kt)("a",{parentName:"strong",href:"/understanding/thinking-in-redux/glossary#%EB%A6%AC%EB%93%80%EC%84%9C"},"\ub9ac\ub4c0\uc11c"),"\ub97c \uc791\uc131\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ub9ac\ub4c0\uc11c\ub294 \uadf8\uc800 \uc774\uc804 \uc0c1\ud0dc\uc640 \uc561\uc158\uc744 \ubc1b\uc544 \ub2e4\uc74c \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\ub294 \uc21c\uc218 \ud568\uc218\uc785\ub2c8\ub2e4. \uc774\uc804 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ub300\uc2e0 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\uc11c \ubc18\ud658\ud574\uc57c\ud55c\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uae30\uc5b5\ud574\uc57c \ud569\ub2c8\ub2e4. \ucc98\uc74c\uc5d0\ub294 \ud558\ub098\uc758 \ub9ac\ub4c0\uc11c\ub9cc\uc73c\ub85c \ucda9\ubd84\ud558\uc9c0\ub9cc, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc131\uc7a5\ud574\ub098\uac00\uba74 \uc0c1\ud0dc \ud2b8\ub9ac\uc758 \ud2b9\uc815\ud55c \ubd80\ubd84\ub4e4\uc744 \uc870\uc791\ud558\ub294 \ub354 \uc791\uc740 \ub9ac\ub4c0\uc11c\ub4e4\ub85c \ub098\ub204\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub9ac\ub4c0\uc11c\ub294 \uadf8\uc800 \ud568\uc218\uc774\uae30 \ub54c\ubb38\uc5d0 \ud638\ucd9c\ub418\ub294 \uc21c\uc11c\ub97c \uc815\ud558\uac70\ub098 \ucd94\uac00\uc801\uc778 \ub370\uc774\ud130\ub97c \ub118\uae38 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc2ec\uc9c0\uc5b4 \ud398\uc774\uc9c0\ub124\uc774\uc158\uacfc \uac19\uc774 \uc77c\ubc18\uc801\uc778 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ub9ac\ub4c0\uc11c\ub97c \uc791\uc131\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function visibilityFilter(state = 'SHOW_ALL', action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return action.filter\n    default:\n      return state\n  }\n}\n\nfunction todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return [\n        ...state,\n        {\n          text: action.text,\n          completed: false\n        }\n      ]\n    case 'COMPLETE_TODO':\n      return [\n        ...state.slice(0, action.index),\n        Object.assign({}, state[action.index], {\n          completed: true\n        }),\n        ...state.slice(action.index + 1)\n      ]\n    default:\n      return state\n  }\n}\n\nimport { combineReducers, createStore } from 'redux'\nlet reducer = combineReducers({ visibilityFilter, todos })\nlet store = createStore(reducer)\n")),(0,a.kt)("p",null,"\uc774\uac8c \uc804\ubd80\uc785\ub2c8\ub2e4. Redux\uac00 \ubb34\uc5c7\uc778\uc9c0\uc5d0 \ub300\ud574\uc11c \uc804\ubd80 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4."))}p.isMDXComponent=!0}}]);