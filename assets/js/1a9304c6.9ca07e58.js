(self.webpackChunk=self.webpackChunk||[]).push([[5447],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9538:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],u={id:"immutable-update-patterns",title:"\ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134: How to correctly update state immutably, with examples of common mistakes",hide_title:!0},c=void 0,l={unversionedId:"recipes/structuring-reducers/immutable-update-patterns",id:"recipes/structuring-reducers/immutable-update-patterns",isDocsHomePage:!1,title:"\ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134: How to correctly update state immutably, with examples of common mistakes",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/recipes/structuring-reducers/ImmutableUpdatePatterns.md",sourceDirName:"recipes/structuring-reducers",slug:"/recipes/structuring-reducers/immutable-update-patterns",permalink:"/recipes/structuring-reducers/immutable-update-patterns",version:"current",frontMatter:{id:"immutable-update-patterns",title:"\ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134: How to correctly update state immutably, with examples of common mistakes",hide_title:!0},sidebar:"docs",previous:{title:"\ub9ac\ub4c0\uc11c \ub85c\uc9c1 \uc7ac\uc0ac\uc6a9\ud558\uae30",permalink:"/recipes/structuring-reducers/reusing-reducer-logic"},next:{title:"\uc0c1\ud0dc \ucd08\uae30\ud654\ud558\uae30",permalink:"/recipes/structuring-reducers/initializing-state"}},s=[{value:"\uc911\ucca9\ub41c \uac1d\uccb4 \uc5c5\ub370\uc774\ud2b8\ud558\uae30",id:"\uc911\ucca9\ub41c-\uac1d\uccb4-\uc5c5\ub370\uc774\ud2b8\ud558\uae30",children:[]},{value:"\uc694\uc18c\ub97c \ubc30\uc5f4\uc5d0 \ucd94\uac00\ud558\uace0 \uc9c0\uc6b0\uae30",id:"\uc694\uc18c\ub97c-\ubc30\uc5f4\uc5d0-\ucd94\uac00\ud558\uace0-\uc9c0\uc6b0\uae30",children:[]},{value:"\ubc30\uc5f4\uc758 \uc694\uc18c \uc5c5\ub370\uc774\ud2b8\ud558\uae30",id:"\ubc30\uc5f4\uc758-\uc694\uc18c-\uc5c5\ub370\uc774\ud2b8\ud558\uae30",children:[]},{value:"\ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \uc720\ud2f8\ub9ac\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"\ubd88\ubcc0-\uc5c5\ub370\uc774\ud2b8-\uc720\ud2f8\ub9ac\ud2f0-\ub77c\uc774\ube0c\ub7ec\ub9ac",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ubd88\ubcc0-\uc5c5\ub370\uc774\ud2b8-\ud328\ud134"},"\ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ud328\ud134"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/recipes/structuring-reducers/prerequisite-concepts#immutable-data-management"},"\uc0ac\uc804\uc5d0 \uc694\uad6c\ub418\ub294 \uac1c\ub150\ub4e4#\ubd88\ubcc0\uac1d\uccb4\uad00\ub9ac"),"\uc5d0\uc11c \uc18c\uac1c\ub41c \uae00\ub4e4\uc740 \uac1d\uccb4\uc758 \ud544\ub4dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uac70\ub098 \ubc30\uc5f4\uc758 \ub05d\uc5d0 \ud56d\ubaa9\uc744 \ucd94\uac00\ud55c\ub2e4\ub358\uc9c0\ud558\ub294, \ubd88\ubcc0\uac1d\uccb4\ub97c \uad00\ub9ac\ud558\ub294 \uae30\ubcf8\uc801\uc778 \ubc29\ubc95\ub4e4\uc758 \uc88b\uc740 \uc608\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uac00\ub054 \ub9ac\ub4c0\uc11c\uac00 \ubcf5\uc7a1\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 \uc5ec\ub7ec \uae30\ubcf8\uc801\uc778 \uac83\ub4e4\uc744 \uc870\ud569\ud574\uc11c \uc0ac\uc6a9\ud574\uc57c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uad6c\ud604\ud574\uc57c \ud558\ub294 \uc791\uc5c5\uc758 \uc608\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc911\ucca9\ub41c-\uac1d\uccb4-\uc5c5\ub370\uc774\ud2b8\ud558\uae30"},"\uc911\ucca9\ub41c \uac1d\uccb4 \uc5c5\ub370\uc774\ud2b8\ud558\uae30"),(0,i.kt)("p",null,"\uc911\ucca9\ub41c \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud55c \ud0a4\ub294 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"\ubaa8\ub4e0")," \uc911\ucca9\uc758 \ub2e8\uacc4\ub97c \uc801\uc808\ud788 \ubcf5\uc0ac\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uac83\uc785\ub2c8\ub2e4"),". \uc774\uac83\uc774 \ub9ac\ub355\uc2a4\ub97c \ud559\uc2b5\ud558\ub294\ub370 \uc788\uc5b4\uc11c \uc5b4\ub824\uc6b4 \uac1c\ub150\uc77c \uc218 \uc788\uc9c0\ub9cc, \uc911\ucca9\ub41c \uac1d\uccb4\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \ube48\ubc88\ud788 \uc77c\uc5b4\ub098\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4. \uc774\ub294 \uc2e4\uc218\ub85c \uc9c1\uc811\uc801\uc778 \ubcc0\uacbd\uc744 \uc77c\uc73c\ud0a4\ubbc0\ub85c \ud53c\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("h5",{id:"\uc77c\ubc18\uc801\uc778-\uc2e4\uc218-1-\uac19\uc740-\uac1d\uccb4\ub97c-\uac00\ub974\ud0a4\ub294-\uc0c8\ub85c\uc6b4-\ubcc0\uc218"},"\uc77c\ubc18\uc801\uc778 \uc2e4\uc218 #1: \uac19\uc740 \uac1d\uccb4\ub97c \uac00\ub974\ud0a4\ub294 \uc0c8\ub85c\uc6b4 \ubcc0\uc218"),(0,i.kt)("p",null,"\uc0c8 \ubcc0\uc218\ub97c \uc815\uc758\ud558\ub294 \uac83\uc740 \uc2e4\uc81c \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc9c0 ",(0,i.kt)("em",{parentName:"p"},"\uc54a\uace0"),". - \uac19\uc740 \uac1d\uccb4\uc758 \ub2e4\ub978 \ucc38\uc870\ub97c \ud615\uc131\ud569\ub2c8\ub2e4. \uc774 \uc624\ub958\uc758 \uc608\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateNestedState(state, action) {\n  let nestedState = state.nestedState\n  // \uc5d0\ub7ec: \uc874\uc7ac\ud558\ub294 \uac1d\uccb4\uc758 \ucc38\uc870\uc5d0 \ub300\ud55c \uc9c1\uc811\uc801\uc778 \ubcc0\uacbd - \ud558\uc9c0\ub9c8\uc138\uc694!\n  nestedState.nestedField = action.data\n\n  return {\n    ...state,\n    nestedState\n  }\n}\n")),(0,i.kt)("p",null,"\uc774 \ud568\uc218\ub294 \uc0c1\ud0dc \ucd5c\uc0c1\uc704 \uac1d\uccb4\ub97c \uc595\uc740 \ubcf5\uc0ac \ud574\uc11c \uc81c\ub300\ub85c \ubc18\ud658\ud558\uc9c0\ub9cc, ",(0,i.kt)("inlineCode",{parentName:"p"},"nestedState"),"\ubcc0\uc218\uac00 \uc874\uc7ac\ud558\ub294 \uac1d\uccb4\ub97c \uac00\ub974\ud0a4\uae30 \ub54c\ubb38\uc5d0 \uc0c1\ud0dc\uac00 \uc9c1\uc811 \ubcc0\uacbd\ub429\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc77c\ubc18\uc801\uc778-\uc2e4\uc218-2-\ud55c-\ub2e8\uacc4\uc758-\uc595\uc740-\ubcf5\uc0ac\ub97c-\ub9cc\ub4e6"},"\uc77c\ubc18\uc801\uc778 \uc2e4\uc218 #2: \ud55c \ub2e8\uacc4\uc758 \uc595\uc740 \ubcf5\uc0ac\ub97c \ub9cc\ub4e6"),(0,i.kt)("p",null,"\uc774 \uc624\ub958\uc758 \uc77c\ubc18\uc801\uc778 \ubc84\uc804\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateNestedState(state, action) {\n  // \ubb38\uc81c: \uc774\ub294 \uc595\uc740 \ubcf5\uc0ac\ub97c \uc218\ud589\ud569\ub2c8\ub2e4!\n  let newState = { ...state }\n\n  // \uc5d0\ub7ec: nestedState\ub294 \uc5ec\uc804\ud788 \uac19\uc740 \uac1d\uccb4\uc785\ub2c8\ub2e4!\n  newState.nestedState.nestedField = action.data\n\n  return newState\n}\n")),(0,i.kt)("p",null,"\ucd5c\uc0c1\uc704\uc758 \uc595\uc740 \ubcf5\uc0ac\ub85c\ub294 \ucda9\ubd84\ud558\uc9c0 ",(0,i.kt)("em",{parentName:"p"},"\uc54a\uc2b5\ub2c8\ub2e4"),". - ",(0,i.kt)("inlineCode",{parentName:"p"},"nestedState"),"\uac1d\uccb4\ub3c4 \ubcf5\uc0ac\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc62c\ubc14\ub978-\uc811\uadfc-\uc911\ucca9\ub41c-\ubaa8\ub4e0-\ub2e8\uacc4-\ubcf5\uc0ac"},"\uc62c\ubc14\ub978 \uc811\uadfc: \uc911\ucca9\ub41c \ubaa8\ub4e0 \ub2e8\uacc4 \ubcf5\uc0ac"),(0,i.kt)("p",null,"\ubd88\ud589\ud558\uac8c\ub3c4 \uae4a\uac8c \uc911\ucca9\ub41c \uc0c1\ud0dc\uc5d0 \ubd88\ubcc0\uac1d\uccb4 \uc5c5\ub370\uc774\ud2b8\ub97c \uc801\uc808\ud788 \uc801\uc6a9\ud558\ub294 \ub2e8\uacc4\ub294 \uc27d\uac8c \ubc88\uc7a1\ud574\uc9c0\uace0 \uc77d\uae30 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4. \ub2e4\uc74c\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"state.first.second[someId].fourth"),"\uc758 \uc5c5\ub370\uc774\ud2b8\uc5d0 \ub300\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateVeryNestedField(state, action) {\n    return {\n        ....state,\n        first : {\n            ...state.first,\n            second : {\n                ...state.first.second,\n                [action.someId] : {\n                    ...state.first.second[action.someId],\n                    fourth : action.someValue\n                }\n            }\n        }\n    }\n}\n")),(0,i.kt)("p",null,"\ud655\uc2e4\ud788 \uc911\ucca9\ub41c \uac01 \ub808\uc774\uc5b4\ub294 \uac00\ub3c5\uc131\uc744 \ub5a8\uc5b4\ub728\ub9ac\uace0 \uc2e4\uc218\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc0c1\ud0dc\ub97c \uac00\ub2a5\ud55c \ud3c9\ud3c9\ud558\uace0 \uc870\uc9c1\uc801\uc73c\ub85c \uc720\uc9c0\ud574\uc57c \ud558\ub294 \uc774\uc720 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc694\uc18c\ub97c-\ubc30\uc5f4\uc5d0-\ucd94\uac00\ud558\uace0-\uc9c0\uc6b0\uae30"},"\uc694\uc18c\ub97c \ubc30\uc5f4\uc5d0 \ucd94\uac00\ud558\uace0 \uc9c0\uc6b0\uae30"),(0,i.kt)("p",null,"\ubcf4\ud1b5, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc30\uc5f4\uc758 \ub0b4\uc6a9\ubb3c\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unshift"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"splice"),'\uc640 \uac19\uc740 \uac00\ubcc0\ud568\uc218\ub97c \uc0ac\uc6a9\ud574\uc11c \uc218\uc815\ub429\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ub9ac\ub4c0\uc11c\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uc9c1\uc811 \ubc14\uafb8\uae30\ub97c \uc6d0\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0, \ubcf4\ud1b5 \uc774\ub97c \ud53c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub85c "\uc0bd\uc785"\uc774\ub098 "\uc81c\uac70"\uac00 \ub2e4\uc74c\ucc98\ub7fc \uc791\uc131\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function insertItem(array, action) {\n  return [\n    ...array.slice(0, action.index),\n    action.item,\n    ...array.slice(action.index)\n  ]\n}\n\nfunction removeItem(array, action) {\n  return [...array.slice(0, action.index), ...array.slice(action.index + 1)]\n}\n")),(0,i.kt)("p",null,"\uadf8\ub7ec\ub098, ",(0,i.kt)("em",{parentName:"p"},"\uc6d0\ub798 \uba54\ubaa8\ub9ac\uc758 \ucc38\uc870"),"\ub294 \uc218\uc815\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"\uc6b0\ub9ac\uac00 \uba3c\uc800 \ubcf5\uc0ac\ubcf8\uc744 \ub9cc\ub4dc\ub294 \ud55c, \uc548\uc804\ud55c \uac00\ubcc0 \ubcf5\uc0ac\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")," \ubc30\uc5f4\uacfc \uac1d\uc5d0 \ubaa8\ub450\uc5d0 \uc801\uc6a9\ub418\uc9c0\ub9cc \uc911\ucca9\ub41c \uac12\ub3c4 \uac19\uc740 \uaddc\uce59\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub3fc\uc57c \ud55c\ub2e4\ub294 \uac83\uc5d0 \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0bd\uc785\uacfc \uc81c\uac70\ud568\uc218\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function insertItem(array, action) {\n  let newArray = array.slice()\n  newArray.splice(action.index, 0, action.item)\n  return newArray\n}\n\nfunction removeItem(array, action) {\n  let newArray = array.slice()\n  newArray.splice(action.index, 1)\n  return newArray\n}\n")),(0,i.kt)("p",null,"\uc81c\uac70\ud568\uc218\ub294 \ub2e4\uc74c\uac19\uc774\ub3c4 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function removeItem(array, action) {\n  return array.filter((item, index) => index !== action.index)\n}\n")),(0,i.kt)("h2",{id:"\ubc30\uc5f4\uc758-\uc694\uc18c-\uc5c5\ub370\uc774\ud2b8\ud558\uae30"},"\ubc30\uc5f4\uc758 \uc694\uc18c \uc5c5\ub370\uc774\ud2b8\ud558\uae30"),(0,i.kt)("p",null,"\ubc30\uc5f4\uc5d0\uc11c \ud558\ub098\uc758 \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uac83\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.map"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uc6b0\ub9ac\uac00 \uc5c5\ub370\uc774\ud2b8\ud558\uae38 \uc6d0\ud558\ub294 \uc694\uc18c\uc5d0 \uc0c8\ub85c\uc6b4 \uac12\uc744 \ubc18\ud658\ud558\uace0 \ub2e4\ub978 \ubaa8\ub4e0 \uc544\uc774\ud15c\uc5d0\ub294 \uae30\uc874 \uac12\uc744 \ubc18\ud658\ud568\uc73c\ub85c\uc368 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateObjectInArray(array, action) {\n  return array.map((item, index) => {\n    if (index !== action.index) {\n      // \uc774\ub294 \uad00\uc2ec\uc5c6\ub294 \uc694\uc18c\uc785\ub2c8\ub2e4 - \uadf8\ub300\ub85c \uc720\uc9c0\ud558\uc138\uc694\n      return item\n    }\n\n    // \uadf8\uac8c \uc544\ub2c8\uba74, \uc6b0\ub9ac\uac00 \uc6d0\ud558\ub294\uac83\uc785\ub2c8\ub2e4. - \uc5c5\ub370\uc774\ud2b8\ub41c \uac12\uc744 \ubc18\ud658\ud558\uc138\uc694\n    return {\n      ...item,\n      ...action.item\n    }\n  })\n}\n")),(0,i.kt)("h2",{id:"\ubd88\ubcc0-\uc5c5\ub370\uc774\ud2b8-\uc720\ud2f8\ub9ac\ud2f0-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"\ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \uc720\ud2f8\ub9ac\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,i.kt)("p",null,"\ubd88\ubcc0\uc5c5\ub370\uc774\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc740 \uc9c0\ub8e8\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \uacfc\uc815\uc744 \ucd94\uc0c1\ud654\ud558\uae30 \uc704\ud55c \ub9ce\uc740 \uc720\ud2f8\ub9ac\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 API\uc640 \uc0ac\uc6a9\ubc95\uc774 \ub2e4\uc591\ud558\uc9c0\ub9cc \uc5b4\uca0c\uac70\ub098 \uc9e7\uace0 \uac04\uacb0\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\ub824 \ud569\ub2c8\ub2e4. \uc77c\ubd80 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/debitoor/dot-prop-immutable"},"dot-prop-immutable"),"\uacfc \uac19\uc740 \uacf3\uc5d0\uc11c\ub294 \ubb38\uc790\uc5f4 \uacbd\ub85c\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"state = dotProp.set(state, `todos.${index}.complete`, true)\n")),(0,i.kt)("p",null,"\uadf8 \uc678\uc5d0 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kolodny/immutability-helper"},"immutability-helper"),"(\ud604\uc7ac \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ub9ac\uc561\ud2b8 \ubd88\ubcc0 \ud5ec\ud37c \uc5d0\ub4dc\uc628\uc758 \ud3ec\ud06c) \uac19\uc740 \uac83\uc740 \uc911\ucca9\ub41c \uac12\uacfc \ud5ec\ud37c \ud568\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var collection = [1, 2, { a: [12, 17, 15] }]\nvar newCollection = update(collection, {\n  2: { a: { $splice: [[1, 1, 13, 14]] } }\n})\n")),(0,i.kt)("p",null,"\uc774\ub4e4\uc740 \uc218\ub3d9\uc73c\ub85c \ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc744 \uc791\uc131\ud558\ub294 \uac83\uc5d0 \ub300\ud55c \uc720\uc6a9\ud55c \ub300\uc548\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub9ce\uc740 \ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \uc720\ud2f8\ub9ac\ud2f0\ub4e4\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities"},"Immutable Data#Immutable Update Utilities"),"\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links"},"Redux Addons Catalog"),"\uc139\uc158\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);