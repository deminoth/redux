(self.webpackChunk=self.webpackChunk||[]).push([[3745],{3905:function(n,t,e){"use strict";e.d(t,{Zo:function(){return d},kt:function(){return l}});var o=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var m=o.createContext({}),i=function(n){var t=o.useContext(m),e=t;return n&&(e="function"==typeof n?n(t):c(c({},t),n)),e},d=function(n){var t=i(n.components);return o.createElement(m.Provider,{value:t},n.children)},u={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,m=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),p=i(e),l=r,f=p["".concat(m,".").concat(l)]||p[l]||u[l]||a;return e?o.createElement(f,c(c({ref:t},d),{},{components:e})):o.createElement(f,c({ref:t},d))}));function l(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,c=new Array(a);c[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=n,s.mdxType="string"==typeof n?n:r,c[1]=s;for(var i=2;i<a;i++)c[i]=e[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,e)}p.displayName="MDXCreateElement"},9812:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return i},toc:function(){return d},default:function(){return p}});var o=e(2122),r=e(9756),a=(e(7294),e(3905)),c=["components"],s={id:"updating-normalized-data",title:"\uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30: Patterns for updating normalized data",hide_title:!0},m=void 0,i={unversionedId:"recipes/structuring-reducers/updating-normalized-data",id:"recipes/structuring-reducers/updating-normalized-data",isDocsHomePage:!1,title:"\uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30: Patterns for updating normalized data",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/recipes/structuring-reducers/UpdatingNormalizedData.md",sourceDirName:"recipes/structuring-reducers",slug:"/recipes/structuring-reducers/updating-normalized-data",permalink:"/recipes/structuring-reducers/updating-normalized-data",version:"current",frontMatter:{id:"updating-normalized-data",title:"\uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30: Patterns for updating normalized data",hide_title:!0},sidebar:"docs",previous:{title:"\uc0c1\ud0dc \uc815\uaddc\ud654\ud558\uae30",permalink:"/recipes/structuring-reducers/normalizing-state-shape"},next:{title:"\ub9ac\ub4c0\uc11c \ub85c\uc9c1 \uc7ac\uc0ac\uc6a9\ud558\uae30",permalink:"/recipes/structuring-reducers/reusing-reducer-logic"}},d=[{value:"\uc77c\ubc18\uc801\uc778 \uc811\uadfc",id:"\uc77c\ubc18\uc801\uc778-\uc811\uadfc",children:[{value:"\uac04\ub2e8\ud55c \ubcd1\ud569",id:"\uac04\ub2e8\ud55c-\ubcd1\ud569",children:[]},{value:"\uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c \uad6c\uc131",id:"\uc2ac\ub77c\uc774\uc2a4-\ub9ac\ub4c0\uc11c-\uad6c\uc131",children:[]}]},{value:"\ub2e4\ub978 \uc811\uadfc",id:"\ub2e4\ub978-\uc811\uadfc",children:[{value:"\uc791\uc5c5 \uae30\ubc18\uc758 \uc5c5\ub370\uc774\ud2b8",id:"\uc791\uc5c5-\uae30\ubc18\uc758-\uc5c5\ub370\uc774\ud2b8",children:[]},{value:"\ub9ac\ub355\uc2a4-ORM",id:"\ub9ac\ub355\uc2a4-orm",children:[]}]}],u={toc:d};function p(n){var t=n.components,e=(0,r.Z)(n,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc815\uaddc\ud654\ub41c-\ub370\uc774\ud130-\uc5c5\ub370\uc774\ud2b8\ud558\uae30"},"\uc815\uaddc\ud654\ub41c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ud558\uae30"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/recipes/structuring-reducers/normalizing-state-shape"},"\uc0c1\ud0dc \uc815\uaddc\ud654\ud558\uae30"),"\uc5d0\uc11c \uc5b8\uae09\ud55c \uac83\ucc98\ub7fc Normalizr \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc911\ucca9\ub41c \ub370\uc774\ud130\ub97c \uc800\uc7a5\uc18c\uc5d0 \ud1b5\ud569\ud558\uae30\uc5d0 \uc801\ud569\ud55c \ud615\ud0dc\ub85c \ubcc0\ud658\ud558\ub294\ub370 \uc790\uc8fc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub2e4\ub978 \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ub418\uace0 \uc788\ub294 \uc815\uaddc\ud654 \ub41c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uc5c5\ub370\uc774\ud2b8\ub97c \uc2e4\ud589\ud558\ub294\uac83\uc5d0 \ub300\ud55c \ubb38\uc81c\ub294 \ud574\uacb0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc120\ud638\uc5d0 \ub530\ub77c \ub2e4\uc591\ud55c \uc811\uadfc\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ud3ec\uc2a4\ud2b8\uc5d0 \uc0c8 \ub313\uae00\uc744 \ucd94\uac00\ud558\ub294 \uc608\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc77c\ubc18\uc801\uc778-\uc811\uadfc"},"\uc77c\ubc18\uc801\uc778 \uc811\uadfc"),(0,a.kt)("h3",{id:"\uac04\ub2e8\ud55c-\ubcd1\ud569"},"\uac04\ub2e8\ud55c \ubcd1\ud569"),(0,a.kt)("p",null,"\ud55c \uac00\uc9c0 \ubc29\ubc95\uc740 \uae30\uc874 \uc0c1\ud0dc\uc758 \uc561\uc158\uc758 \ucee8\ud150\uce20\uc5d0 \ubcd1\ud569\ud558\ub294 \uac81\ub2c8\ub2e4. \uc774 \uacbd\uc6b0\uc5d0 \uc6b0\ub9ac\ub294 \uc595\uc740 \ubcf5\uc0ac\uac00 \uc544\ub2c8\ub77c \uae4a\uc740 \uc7ac\uadc0\ubcd1\ud569\uc744 \ud574\uc57c \ud569\ub2c8\ub2e4. Lodash\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"merge"),"\ud568\uc218\ub294 \uc774\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import merge from 'lodash/merge'\n\nfunction commentsById(state = {}, action) {\n  switch (action.type) {\n    default: {\n      if (action.entities && action.entities.comments) {\n        return merge({}, state, action.entities.comments.byId)\n      }\n      return state\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\uc774\ub294 \ub9ac\ub4c0\uc11c\uc758 \uce21\uba74\uc5d0\uc11c \ucd5c\uc18c\uc758 \uc791\uc5c5\ub7c9\uc744 \ud544\uc694\ub85c\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc561\uc158\uc0dd\uc131\uc790\ub294 \uc561\uc158\uc744 \ub514\uc2a4\ud328\uce58\ud558\uae30 \uc804\uc5d0 \uc801\ub2f9\ud55c \ud615\ud0dc\ub85c \uad6c\uc131\ud558\uae30 \uc704\ud574 \ub450\ubc30\uc758 \uc791\uc5c5\uc744 \ud544\uc694\ub85c \ud569\ub2c8\ub2e4. \ub610\ud55c, \ud56d\ubaa9\uc0ad\uc81c\uc5d0 \ub300\ud574\uc11c\ub3c4 \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc2ac\ub77c\uc774\uc2a4-\ub9ac\ub4c0\uc11c-\uad6c\uc131"},"\uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c \uad6c\uc131"),(0,a.kt)("p",null,"\ub9cc\uc57d \uc6b0\ub9ac\uc5d0\uac8c \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uac00 \uc911\ucca9\ub41c \ud2b8\ub9ac\uac00 \uc788\ub2e4\uba74 \uac01 \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub294 \uc561\uc158\uc5d0 \uc801\uc808\ud788 \uc751\ub2f5\ud558\ub294 \ubc95\uc744 \uc54c\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub313\uae00 ID\uc640 \uc801\uc808\ud55c \ud3ec\uc2a4\ud2b8 \uac1d\uccb4\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \ud574\ub2f9 \ud0a4\ub97c ID\ub85c \ud558\ub294 \uc0c8\ub85c\uc6b4 \ub313\uae00 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4\uc57c\ud569\ub2c8\ub2e4. \ub610\ud55c \uc804\uccb4 \ub313\uae00 ID \ub9ac\uc2a4\ud2b8\uc5d0 \ub313\uae00\uc758 ID\ub97c \ud3ec\ud568\uc2dc\ucf1c\uc57c \ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc120 \uc774 \uc870\uac01\ub4e4\uc774 \uc5b4\ub5bb\uac8c \ub9de\uc744\uc9c0\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// actions.js\nfunction addComment(postId, commentText) {\n  // \uc720\ub2c8\ud06c\ud55c \ub313\uae00 ID\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.\n  const commentId = generateId('comment')\n\n  return {\n    type: 'ADD_COMMENT',\n    payload: {\n      postId,\n      commentId,\n      commentText\n    }\n  }\n}\n\n// reducers/posts.js\nfunction addComment(state, action) {\n  const { payload } = action\n  const { postId, commentId } = payload\n\n  // \ub0a8\uc740 \ucf54\ub4dc\ub97c \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud574 \uc801\uc808\ud55c \ud3ec\uc2a4\ud2b8\ub97c \ucc3e\uc2b5\ub2c8\ub2e4.\n  const post = state[postId]\n\n  return {\n    ...state,\n    // \ud3ec\uc2a4\ud2b8 \uac1d\uccb4\ub97c \uc0c8\ub85c\uc6b4 \"\ub313\uae00\" \ubc30\uc5f4\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4.\n    [postId]: {\n      ...post,\n      comments: post.comments.concat(commentId)\n    }\n  }\n}\n\nfunction postsById(state = {}, action) {\n  switch (action.type) {\n    case 'ADD_COMMENT':\n      return addComment(state, action)\n    default:\n      return state\n  }\n}\n\nfunction allPosts(state = [], action) {\n  // \uc0dd\ub7b5 - \uc774 \uc608\uc81c\uc5d0\uc11c \uc544\ubb34\ub7f0 \uc77c\ub3c4 \ud558\uc9c0\uc54a\uc2b5\ub2c8\ub2e4.\n}\n\nconst postsReducer = combineReducers({\n  byId: postsById,\n  allIds: allPosts\n})\n\n// reducers/comments.js\nfunction addCommentEntry(state, action) {\n  const { payload } = action\n  const { commentId, commentText } = payload\n\n  // \uc0c8 \ub313\uae00 \uac1d\uccb4 \uc0dd\uc131\n  const comment = { id: commentId, text: commentText }\n\n  // \uc0c8 \ub313\uae00 \uac1d\uccb4\ub97c \uc5c5\ub370\uc774\ud2b8\ub41c \ub8e9\uc5c5\ud14c\uc774\ube14\uc5d0 \uc0bd\uc785\n  return {\n    ...state,\n    [commentId]: comment\n  }\n}\n\nfunction commentsById(state = {}, action) {\n  switch (action.type) {\n    case 'ADD_COMMENT':\n      return addCommentEntry(state, action)\n    default:\n      return state\n  }\n}\n\nfunction addCommentId(state, action) {\n  const { payload } = action\n  const { commentId } = payload\n  // \uc0c8 \ub313\uae00 ID\ub97c \uc804\uccb4 ID \ub9ac\uc2a4\ud2b8\uc5d0 \ucd94\uac00\n  return state.concat(commentId)\n}\n\nfunction allComments(state = [], action) {\n  switch (action.type) {\n    case 'ADD_COMMENT':\n      return addCommentId(state, action)\n    default:\n      return state\n  }\n}\n\nconst commentsReducer = combineReducers({\n  byId: commentsById,\n  allIds: allComments\n})\n")),(0,a.kt)("p",null,"\uc774 \uc608\uc81c\ub294 \ubaa8\ub4e0 \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uc640 \ucf00\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub97c \uc5b4\ub5bb\uac8c \ub9de\ucd94\uace0 \uc788\ub294\uc9c0 \ubcf4\uc5ec\uc8fc\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uaf64 \uae41\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc704\uc784\uc5d0 \uc720\uc758\ud558\uc138\uc694. ",(0,a.kt)("inlineCode",{parentName:"p"},"postsById")," \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub294 \uc0c8\ub85c\uc6b4 \ub313\uae00 ID\ub97c \uc801\uc808\ud55c \ud3ec\uc2a4\ud2b8\uc5d0 \uc0bd\uc785\ud558\ub294 \uc791\uc5c5\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"addComment"),"\uc5d0 \uc704\uc784\ud569\ub2c8\ub2e4. \ubc18\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"commentsById"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"allComments")," \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub294 \ub313\uae00 \ub8e9\uc5c5\ud14c\uc774\ube14\uacfc \uc804\uccb4 \ub313\uae00 ID\ub97c \uc801\uc808\ud788 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uc790\uc2e0\uc758 \ucf00\uc774\uc2a4 \ub9ac\ub4c0\uc11c\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub2e4\ub978-\uc811\uadfc"},"\ub2e4\ub978 \uc811\uadfc"),(0,a.kt)("h3",{id:"\uc791\uc5c5-\uae30\ubc18\uc758-\uc5c5\ub370\uc774\ud2b8"},"\uc791\uc5c5 \uae30\ubc18\uc758 \uc5c5\ub370\uc774\ud2b8"),(0,a.kt)("p",null,"\ub9ac\ub4c0\uc11c\ub294 \ub2e8\uc21c\ud55c \ud568\uc218\uc774\uae30 \ub54c\ubb38\uc5d0 \ub85c\uc9c1\uc744 \ub098\ub204\ub294 \uc218\ub9ce\uc740 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\uc758 \uc0ac\uc6a9\uc740 \ubd84\uba85 \uc77c\ubc18\uc801\uc774\uc9c0\ub9cc, \ub354\uc6b1 \uc791\uc5c5 \uc9c0\ud5a5\uc801\uc778 \uad6c\uc870\ub85c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc885\uc885 \ub9ce\uc740 \uc911\ucca9\ub41c \uc5c5\ub370\uc774\ud2b8\ub97c \ud3ec\ud568\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc5c5\ub370\uc774\ud2b8 \uad6c\ubb38\uc744 \ub2e8\uc21c\ud654\ud558\uae30\uc704\ud574 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/debitoor/dot-prop-immutable"},"dot-prop-immutable")," \ub098 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mariocasciaro/object-path-immutable"},"object-path-immutable"),"\uc640 \uac19\uc740 \ubd88\ubcc0 \uc5c5\ub370\uc774\ud2b8 \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc0ac\uc6a9\ud560\uac81\ub2c8\ub2e4. \uc544\ub9c8 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import posts from "./postsReducer";\nimport comments from "./commentsReducer";\nimport dotProp from "dot-prop-immutable";\nimport {combineReducers} from "redux";\nimport reduceReducers from "reduce-reducers";\n\nconst combinedReducer = combineReducers({\n    posts,\n    comments\n});\n\n\nfunction addComment(state, action) {\n    const {payload} = action;\n    const {postId, commentId, commentText} = payload;\n\n    // \uc774\uacf3\uc758 \uc0c1\ud0dc\ub294 \uc804\uccb4\uac00 \uacb0\ud569\ub41c \uc0c1\ud0dc\uc785\ub2c8\ub2e4.\n    const updatedWithPostState = dotProp.set(\n        state,\n        `posts.byId.${postId}.comments`,\n        comments => comments.concat(commentId)\n    );\n\n    const updatedWithCommentsTable = dotProp.set(\n        updatedWithPostState,\n        `comments.byId.${commentId}`,\n        {id : commentId, text : commentText}\n    );\n\n    const updatedWithCommentsList = dotProp.set(\n        updatedWithCommentsTable,\n        `comments.allIds`,\n        allIds => allIds.concat(commentId);\n    );\n\n    return updatedWithCommentsList;\n}\n\nconst featureReducers = createReducer({}, {\n    ADD_COMMENT : addComment,\n};\n\nconst rootReducer = reduceReducers(\n    combinedReducer,\n    featureReducers\n);\n')),(0,a.kt)("p",null,"'\"ADD_COMMENTS\"'\uc758 \uacbd\uc6b0 \uc774 \uc811\uadfc\uc740 \uc5b4\ub5a4 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0 \ub9e4\uc6b0 \uba85\ud655\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub294 \uc911\ucca9\ub41c \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uacfc \ud2b9\uc815 \uc0c1\ud0dc \ud2b8\ub9ac\uc758 \ubaa8\uc591\uc5d0 \ub300\ud55c \uc9c0\uc2dd\uc744 \ud544\uc694\ub85c\ud569\ub2c8\ub2e4. \ub9ac\ub4c0\uc11c \ub85c\uc9c1\uc744 \uc5b4\ub5bb\uac8c \uad6c\uc131\ud558\uae38 \uc6d0\ud558\ub294\uc9c0\uc5d0 \ub530\ub77c \uc6d0\ud558\ub294 \uacb0\uacfc\uc77c \uc218\ub3c4, \uc544\ub2d0 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ub9ac\ub355\uc2a4-orm"},"\ub9ac\ub355\uc2a4-ORM"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tommikaikkonen/redux-orm"},"\ub9ac\ub355\uc2a4-ORM"),'\ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ub9ac\ub355\uc2a4 \uc800\uc7a5\uc18c\uc5d0\uc11c \uc815\uaddc\ud654\ub41c \ub370\uc774\ud130\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 \ub9e4\uc6b0 \uc720\uc6a9\ud55c \ucd94\uc0c1 \ub808\uc774\uc5b4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub294 \ubaa8\ub378 \ud074\ub798\uc2a4\ub97c \uc120\uc5b8\ud558\uace0 \uadf8\ub4e4\uc758 \uad00\uacc4\ub97c \uc815\uc758\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4. \ub370\uc774\ud130 \ud0c0\uc785\uc5d0 \ube48 "\ud14c\uc774\ube14"\uc744 \uc0dd\uc131\ud558\uace0 \ub370\uc774\ud130\ub97c \uc81c\uacf5\ud558\ub294 \ud2b9\uc218\ud55c \uc120\ud0dd \ub3c4\uad6c\uc758 \uc5ed\ud560\ub85c \ubd88\ubcc0 \ub370\uc774\ud130\uc758 \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\ud589\ud569\ub2c8\ub2e4.'),(0,a.kt)("p",null,"\ub9ac\ub355\uc2a4-ORM\ub97c \uc0ac\uc6a9\ud574\uc11c \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\ud589\ud558\ub294 \uba87 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uccab\ubc88\uc9f8\ub85c \ub9ac\ub355\uc2a4-ORM \ub3c4\ud050\uba3c\ud2b8\uc5d0\uc11c\ub294 \uac01 \ubaa8\ub378\uc758 \uc11c\ube0c \ud074\ub798\uc2a4\uc5d0\uc11c \ub9ac\ub4c0\uc11c \ud568\uc218\ub97c \uc815\uc758\ud558\uba74 \uc800\uc7a5\uc18c\uc5d0 \ub9ac\ub4c0\uc11c\uac00 \uc790\ub3d9 \uc0dd\uc131\ub418\uc5b4 \uacb0\ud569\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// models.js\nimport { Model, many, Schema } from 'redux-orm'\n\nexport class Post extends Model {\n  static get fields() {\n    return {\n      // many-sided \uad00\uacc4\uc815\uc758 - \ud558\ub098\uc758 \ud3ec\uc2a4\ud2b8\uac00 \uc5ec\ub7ec \ub313\uae00\uc744 \uac00\uc9c8 \uc218 \uc788\uc74c.\n      // \"comments\"\ub77c\ub294 \ud544\ub4dc\ub85c\n      comments: many('Comment')\n    }\n  }\n\n  static reducer(state, action, Post) {\n    switch (action.type) {\n      case 'CREATE_POST': {\n        // \ud3ec\uc2a4\ud2b8 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131 \ub300\uae30\n        Post.create(action.payload)\n        break\n      }\n      case 'ADD_COMMENT': {\n        const { payload } = action\n        const { postId, commentId } = payload\n        // \ud574\ub2f9 \ud3ec\uc2a4\ud2b8 \uc778\uc2a4\ud134\uc2a4\uc640 \ub313\uae00 ID\uc0ac\uc774\uc758 \uad00\uacc4 \ucd94\uac00\ub97c \uc704\ud55c \ub300\uae30\n        Post.withId(postId).comments.add(commentId)\n        break\n      }\n    }\n\n    // \ub9ac\ub355\uc2a4-ORM\uc740 \ubc18\ud658 \ub41c \ud6c4 \uc790\ub3d9\uc73c\ub85c \ud050\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4.\n  }\n}\nPost.modelName = 'Post'\n\nexport class Comment extends Model {\n  static get fields() {\n    return {}\n  }\n\n  static reducer(state, action, Comment) {\n    switch (action.type) {\n      case 'ADD_COMMENT': {\n        const { payload } = action\n        const { commentId, commentText } = payload\n\n        // \ub313\uae00 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131 \ub300\uae30\n        Comment.create({ id: commentId, text: commentText })\n        break\n      }\n    }\n\n    // \ub9ac\ub355\uc2a4-ORM\uc740 \ubc18\ud658 \ub41c \ud6c4 \uc790\ub3d9\uc73c\ub85c \ud050\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4.\n  }\n}\nComment.modelName = 'Comment'\n\n// \uc2a4\ud0a4\ub9c8 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131, \ud3ec\uc2a4\ud2b8\uc640 \ub313\uae00 \uc5f0\uacb0\nexport const schema = new Schema()\nschema.register(Post, Comment)\n\n// main.js\nimport { createStore, combineReducers } from 'redux'\nimport { schema } from './models'\n\nconst rootReducer = combineReducers({\n  // \uc790\ub3d9 \uc0dd\uc131\ub41c \ub9ac\ub355\uc2a4-ORM \ub9ac\ub4c0\uc11c\ub97c \uc0bd\uc785\ud569\ub2c8\ub2e4. \uc774\ub294 \"\ud14c\uc774\ube14\" \ubaa8\ub378\uc744\n  // \ucd08\uae30\ud654\ud558\uace0 \uac01 \ubaa8\ub378\uc758 \uc11c\ube0c\ud074\ub798\uc2a4\uc5d0 \uc815\uc758\ub41c \ub9ac\ub4c0\uc11c\ub85c\uc9c1\uacfc \uc5f0\uacb0\ud569\ub2c8\ub2e4.\n  entities: schema.reducer()\n})\n\n// \ud3ec\uc2a4\ud2b8 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \uc561\uc158\uc744 \ub514\uc2a4\ud328\uce58\ud569\ub2c8\ub2e4.\nstore.dispatch({\n  type: 'CREATE_POST',\n  payload: {\n    id: 1,\n    name: 'Test Post Please Ignore'\n  }\n})\n\n// Dispatch an action to create a Comment instance as a child of that Post\n// \ud574\ub2f9 \ud3ec\uc2a4\ud2b8\uc758 \uc790\uc2dd\uc73c\ub85c \ub313\uae00 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \uc561\uc158\uc744 \ub514\uc2a4\ud328\uce58\ud569\ub2c8\ub2e4.\nstore.dispatch({\n  type: 'ADD_COMMENT',\n  payload: {\n    postId: 1,\n    commentId: 123,\n    commentText: 'This is a comment'\n  }\n})\n")),(0,a.kt)("p",null,"\ub9ac\ub355\uc2a4-ORM \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc801\uc6a9\ud560 \uc5c5\ub370\uc774\ud2b8\uc758 \ub0b4\ubd80 \ud050\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4. \uc774\ud6c4 \uc5c5\ub370\uc774\ud2b8\ub294 \ubd88\ubcc0\ud558\uac8c \uc801\uc6a9\ub418\ubbc0\ub85c \uc5c5\ub370\uc774\ud2b8 \ud504\ub85c\uc138\uc2a4\uac00 \ub2e8\uc21c\ud574\uc9d1\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9ac\ub355\uc2a4-ORM\uc744 \uc0ac\uc6a9\ud558\ub294 \ub610 \ub2e4\ub978 \ubc29\ubc95\uc740 \ud55c \ucf00\uc774\uc2a4\uc758 \ub9ac\ub4c0\uc11c\ub0b4\uc5d0\uc11c \ucd94\uc0c1 \ub808\uc774\uc5b4\ub85c \uc0ac\uc6a9\ud558\ub294 \uac81\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { schema } from './models'\n\n// \uc5ec\uae30\uc11c \ub9ac\ub4c0\uc11c\uac00 \"entities\" \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc2a4 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\ub418\uace0 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uace0\n// \ub9ac\ub355\uc2a4-ORM \ubaa8\ub378\uc758 \uc11c\ube0c\ud074\ub798\uc2a4\uc5d0 \ub9ac\ub4c0\uc11c\uac00 \uc815\uc758\ub418\uc5b4\uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nfunction addComment(entitiesState, action) {\n  const session = schema.from(entitiesState)\n  const { Post, Comment } = session\n  const { payload } = action\n  const { postId, commentId, commentText } = payload\n\n  const post = Post.withId(postId)\n  post.comments.add(commentId)\n\n  Comment.create({ id: commentId, text: commentText })\n\n  return session.reduce()\n}\n")),(0,a.kt)("p",null,'\uc804\ubc18\uc801\uc73c\ub85c, \ub9ac\ub355\uc2a4-ORM\uc740 \ub370\uc774\ud130 \ud0c0\uc785 \uac04\uc758 \uad00\uacc4\ub97c \uc815\uc758\ud558\uace0, \uc0c1\ud0dc\uc5d0\uc11c "\ud14c\uc774\ube14"\uc744 \uc0dd\uc131\ud558\uace0, \uad00\uacc4\ud615 \ub370\uc774\ud130\ub97c \uac80\uc0c9 \ubc0f \ube44\uc815\uaddc\ud654\ud558\uace0, \uad00\uacc4\ud615 \ub370\uc774\ud130\uc5d0 \ubd88\ubcc0\uc131\uc744 \uc801\uc6a9\ud558\ub294 \uc5c5\ub370\uc774\ud2b8\ub97c \ud558\ub294 \ub9e4\uc6b0 \uc720\uc6a9\ud55c \ucd94\uc0c1\ud654 \uc138\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.'))}p.isMDXComponent=!0}}]);