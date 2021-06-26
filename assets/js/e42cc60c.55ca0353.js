(self.webpackChunk=self.webpackChunk||[]).push([[3095],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=o.createContext({}),s=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return o.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||i;return n?o.createElement(f,a(a({ref:e},u),{},{components:n})):o.createElement(f,a({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var d in e)hasOwnProperty.call(e,d)&&(c[d]=e[d]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5603:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],c={id:"refactoring-reducer-example",title:"\ub9ac\ub4c0\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30 \uc608\uc81c",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \ub9ac\ub4c0\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30: Examples of ways to refactor reducer logic",hide_title:!0},d=void 0,s={unversionedId:"recipes/structuring-reducers/refactoring-reducer-example",id:"recipes/structuring-reducers/refactoring-reducer-example",isDocsHomePage:!1,title:"\ub9ac\ub4c0\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30 \uc608\uc81c",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \ub9ac\ub4c0\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30: Examples of ways to refactor reducer logic",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/recipes/structuring-reducers/RefactoringReducersExample.md",sourceDirName:"recipes/structuring-reducers",slug:"/recipes/structuring-reducers/refactoring-reducer-example",permalink:"/recipes/structuring-reducers/refactoring-reducer-example",version:"current",frontMatter:{id:"refactoring-reducer-example",title:"\ub9ac\ub4c0\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30 \uc608\uc81c",description:"\ub9ac\ub4c0\uc11c \uad6c\uc870 \uc7a1\uae30 > \ub9ac\ub4c0\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30: Examples of ways to refactor reducer logic",hide_title:!0},sidebar:"docs",previous:{title:"\ub9ac\ub4c0\uc11c \ub85c\uc9c1 \ubd84\ub9ac\ud558\uae30",permalink:"/recipes/structuring-reducers/splitting-reducer-logic"},next:{title:"combineReducers \uc0ac\uc6a9\ud558\uae30",permalink:"/recipes/structuring-reducers/using-combinereducers"}},u=[{value:"\ucd08\uae30 \ub9ac\ub4c0\uc11c",id:"\ucd08\uae30-\ub9ac\ub4c0\uc11c",children:[]}],l={toc:u};function p(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\uae30\ub2a5\uc801-\ubd84\ud574\uc640-\ub9ac\ub4c0\uc11c-\uad6c\uc131\uc744-\ud1b5\ud574-\ub9ac\ub4c0\uc11c-\ub9ac\ud329\ud1a0\ub9c1\ud558\uae30"},"\uae30\ub2a5\uc801 \ubd84\ud574\uc640 \ub9ac\ub4c0\uc11c \uad6c\uc131\uc744 \ud1b5\ud574 \ub9ac\ub4c0\uc11c \ub9ac\ud329\ud1a0\ub9c1\ud558\uae30"),(0,i.kt)("p",null,"\uc11c\ube0c\ub9ac\ub4c0\uc11c \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \uc0dd\uacbc\ub294\uc9c0, \uc5b4\ub5bb\uac8c \uc11c\ub85c \uac19\uc774 \ub3d9\uc791\uc2dc\ud0a4\ub294\uc9c0\uc5d0 \ub300\ud55c \uc5ec\ub7ec\uc720\ud615\uc758 \uc608\uc81c\ub97c \ubcf4\ub294 \uac83\uc774 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac70\ub300\ud55c \ud558\ub098\uc758 \ub9ac\ub4c0\uc11c \ud568\uc218\uac00 \uc5ec\ub7ec \uac1c\uc758 \uc791\uc740 \ud568\uc218\ub85c \ub098\ub260 \uc218 \uc788\uc74c\uc744 \ubcf4\ub3c4\ub85d \ud569\uc2dc\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\uc8fc\uc758"),": \uc774 \uc608\uc81c\ub294 \ub9ac\ud329\ud1a0\ub9c1\uc5d0 \ub300\ud574 \uc124\uba85\ud558\uae30 \uc704\ud574 \uc77c\ubd80\ub7ec \uc644\ubcbd\ud788 \uac04\uacb0\ud55c \ucf54\ub4dc\uac00 \uc544\ub2cc, \uc7a5\ud669\ud55c \ucf54\ub4dc\ub85c \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ucd08\uae30-\ub9ac\ub4c0\uc11c"},"\ucd08\uae30 \ub9ac\ub4c0\uc11c"),(0,i.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \ucd08\uae30 \ub9ac\ub4c0\uc11c\uc5d0 \ub300\ud574 \ubd05\uc2dc\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = {\n  visibilityFilter: 'SHOW_ALL',\n  todos: []\n}\n\nfunction appReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER': {\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    }\n    case 'ADD_TODO': {\n      return Object.assign({}, state, {\n        todos: state.todos.concat({\n          id: action.id,\n          text: action.text,\n          completed: false\n        })\n      })\n    }\n    case 'TOGGLE_TODO': {\n      return Object.assign({}, state, {\n        todos: state.todos.map(todo => {\n          if (todo.id !== action.id) {\n            return todo\n          }\n\n          return Object.assign({}, todo, {\n            completed: !todo.completed\n          })\n        })\n      })\n    }\n    case 'EDIT_TODO': {\n      return Object.assign({}, state, {\n        todos: state.todos.map(todo => {\n          if (todo.id !== action.id) {\n            return todo\n          }\n\n          return Object.assign({}, todo, {\n            text: action.text\n          })\n        })\n      })\n    }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"\uc774 \ud568\uc218\ub294 \uc9e7\uc544 \ubcf4\uc5ec\ub3c4 \uc774\ubbf8 \ucda9\ubd84\ud788 \ubcf5\uc7a1\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc0dd\uae38 \uc218 \uc788\ub294 \ub450 \uac00\uc9c0 \uc885\ub958\uc758 \ubb38\uc81c(\ud544\ud130\ub9c1 vs todos\uc758 \ubaa9\ub85d\uc744 \uad00\ub9ac)\ub97c \ub2e4\ub8f9\ub2c8\ub2e4. \uc911\ucca9\uc740 \ub85c\uc9c1\uc744 \uc77d\uae30 \uc5b4\ub835\uac8c \ub9cc\ub4e4\uace0, \ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0 \uba85\ud655\ud788 \uc54c \uc218 \uc5c6\uac8c \ud569\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc720\ud2f8\ub9ac\ud2f0-\ud568\uc218-\ucd94\ucd9c\ud558\uae30"},"\uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218 \ucd94\ucd9c\ud558\uae30"),(0,i.kt)("p",null,"\uc5c5\ub370\uc774\ud2b8\ub41c \ud544\ub4dc\ub97c \ud3ec\ud568\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \uc88b\uc740 \uccab\uac78\uc74c\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc30\uc5f4\uc758 \ud2b9\uc815 \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub2e4\ubcf4\uba74 \ucd94\ucd9c \uac00\ub2a5\ud55c \ubc18\ubcf5\ub41c \ud328\ud134\uc774 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateObject(oldObject, newValues) {\n  // \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \uccab\ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud55c\ub2e4\ub294 \uc544\uc774\ub514\uc5b4\ub97c \ucea1\uc290\ud654\n  // \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud558\ub294 \ub300\uc2e0\uc5d0 \ub370\uc774\ud130\ub97c \ud655\uc2e4\ud788 \ubcf5\uc0ac\ud558\uae30 \uc704\ud574 Object.assign\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  return Object.assign({}, oldObject, newValues)\n}\n\nfunction updateItemInArray(array, itemId, updateItemCallback) {\n  const updatedItems = array.map(item => {\n    if (item.id !== itemId) {\n      // \ud55c\uac00\uc9c0 \ud56d\ubaa9\ub9cc \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \ud56d\ubaa9\uc740 \uc720\uc9c0\ud569\ub2c8\ub2e4.\n      return item\n    }\n\n    // \uc5c5\ub370\uc774\ud2b8 \ub41c \ud56d\ubaa9\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \uc8fc\uc5b4\uc9c4 \ucf5c\ubc31\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n    const updatedItem = updateItemCallback(item)\n    return updatedItem\n  })\n\n  return updatedItems\n}\n\nfunction appReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER': {\n      return updateObject(state, { visibilityFilter: action.filter })\n    }\n    case 'ADD_TODO': {\n      const newTodos = state.todos.concat({\n        id: action.id,\n        text: action.text,\n        completed: false\n      })\n\n      return updateObject(state, { todos: newTodos })\n    }\n    case 'TOGGLE_TODO': {\n      const newTodos = updateItemInArray(state.todos, action.id, todo => {\n        return updateObject(todo, { completed: !todo.completed })\n      })\n\n      return updateObject(state, { todos: newTodos })\n    }\n    case 'EDIT_TODO': {\n      const newTodos = updateItemInArray(state.todos, action.id, todo => {\n        return updateObject(todo, { text: action.text })\n      })\n\n      return updateObject(state, { todos: newTodos })\n    }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"\uc911\ubcf5\uc744 \uc904\uc774\uace0 \uc77d\uae30\uac00 \ub354 \uc26c\uc6cc\uc84c\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\ucf00\uc774\uc2a4-\ub9ac\ub4c0\uc11c-\ucd94\ucd9c"},"\ucf00\uc774\uc2a4 \ub9ac\ub4c0\uc11c \ucd94\ucd9c"),(0,i.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c, \uac01 \ucf00\uc774\uc2a4\ub97c \uc790\uccb4\ud568\uc218\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \uc0dd\ub7b5\nfunction updateObject(oldObject, newValues) {}\nfunction updateItemInArray(array, itemId, updateItemCallback) {}\n\nfunction setVisibilityFilter(state, action) {\n  return updateObject(state, { visibilityFilter: action.filter })\n}\n\nfunction addTodo(state, action) {\n  const newTodos = state.todos.concat({\n    id: action.id,\n    text: action.text,\n    completed: false\n  })\n\n  return updateObject(state, { todos: newTodos })\n}\n\nfunction toggleTodo(state, action) {\n  const newTodos = updateItemInArray(state.todos, action.id, todo => {\n    return updateObject(todo, { completed: !todo.completed })\n  })\n\n  return updateObject(state, { todos: newTodos })\n}\n\nfunction editTodo(state, action) {\n  const newTodos = updateItemInArray(state.todos, action.id, todo => {\n    return updateObject(todo, { text: action.text })\n  })\n\n  return updateObject(state, { todos: newTodos })\n}\n\nfunction appReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return setVisibilityFilter(state, action)\n    case 'ADD_TODO':\n      return addTodo(state, action)\n    case 'TOGGLE_TODO':\n      return toggleTodo(state, action)\n    case 'EDIT_TODO':\n      return editTodo(state, action)\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"\uc774\uc81c \ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0 ",(0,i.kt)("em",{parentName:"p"},"\ub9e4\uc6b0")," \uba85\ud655\ud569\ub2c8\ub2e4. \ub610\ud55c, \uc6b0\ub9ac\ub294 \uc5b4\ub5a4 \ud328\ud134\uc774 \ub098\ud0c0\ub098\uae30 \uc2dc\uc791\ud568\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\ub370\uc774\ud130\uad00\ub9ac\ub97c-\ub3c4\uba54\uc778\uc73c\ub85c-\ubd84\ub9ac\ud558\uae30"},"\ub370\uc774\ud130\uad00\ub9ac\ub97c \ub3c4\uba54\uc778\uc73c\ub85c \ubd84\ub9ac\ud558\uae30"),(0,i.kt)("p",null,"\uc6b0\ub9ac\uc758 \ub9ac\ub4c0\uc11c\ub294 \uc5ec\uc804\ud788 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc18d\uc758 \ubaa8\ub4e0 \ub2e4\ub978 \ucf00\uc774\uc2a4\ub97c \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud544\ud130 \ub85c\uc9c1\uacfc todo\ub85c\uc9c1\uc774 \ubd84\ub9ac\ub418\ub3c4\ub85d \ud56d\ubaa9\uc744 \ubd84\ub9ac\ud574 \ubd05\uc2dc\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \uc0dd\ub7b5\nfunction updateObject(oldObject, newValues) {}\nfunction updateItemInArray(array, itemId, updateItemCallback) {}\n\nfunction setVisibilityFilter(visibilityState, action) {\n  // \uae30\uc220\uc801\uc73c\ub85c, \uc6b0\ub9ac\ub294 \uc774\uc804\uc758 \uc0c1\ud0dc\uc5d0 \ub300\ud574\uc11c\ub3c4 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n  return action.filter\n}\n\nfunction visibilityReducer(visibilityState = 'SHOW_ALL', action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return setVisibilityFilter(visibilityState, action)\n    default:\n      return visibilityState\n  }\n}\n\nfunction addTodo(todosState, action) {\n  const newTodos = todosState.concat({\n    id: action.id,\n    text: action.text,\n    completed: false\n  })\n\n  return newTodos\n}\n\nfunction toggleTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { completed: !todo.completed })\n  })\n\n  return newTodos\n}\n\nfunction editTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { text: action.text })\n  })\n\n  return newTodos\n}\n\nfunction todosReducer(todosState = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return addTodo(todosState, action)\n    case 'TOGGLE_TODO':\n      return toggleTodo(todosState, action)\n    case 'EDIT_TODO':\n      return editTodo(todosState, action)\n    default:\n      return todosState\n  }\n}\n\nfunction appReducer(state = initialState, action) {\n  return {\n    todos: todosReducer(state.todos, action),\n    visibilityFilter: visibilityReducer(state.visibilityFilter, action)\n  }\n}\n")),(0,i.kt)("p",null,'\ub450\uac00\uc9c0 "\uc0c1\ud0dc\uc870\uac01" \ub9ac\ub4c0\uc11c\uac00 \uc804\uccb4 \uc0c1\ud0dc\uc5d0 \ub300\ud574 \uc790\uc2e0\uacfc \uad00\ub828\ub41c \ubd80\ubd84\ub9cc\uc744 \ub9e4\uac1c\ubcc0\uc218\ub85c \ucde8\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub354\uc774\uc0c1 \ubcf5\uc7a1\uac8c \uc911\ucca9\ub41c \uc0c1\ud0dc\uac1d\uccb4\ub97c \ubc18\ud658\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\uace0, \uacb0\uacfc\uc801\uc73c\ub85c \ub354 \uac04\ub2e8\ud574\uc84c\uc2b5\ub2c8\ub2e4.'),(0,i.kt)("h4",{id:"\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8-\uc904\uc774\uae30"},"\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \uc904\uc774\uae30"),(0,i.kt)("p",null,"\uac70\uc758 \ub2e4 \uc654\uc2b5\ub2c8\ub2e4. \ub9ce\uc740\uc0ac\ub78c\ub4e4\uc774 switch\ubb38\uc744 \uc88b\uc544\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ucf00\uc774\uc2a4 \ud568\uc218\ub97c \uc704\ud55c \uc561\uc158\ud0c0\uc785\uc758 \ub8e9\uc5c5\ud14c\uc774\ube14\uc744 \ub9cc\ub4dc\ub294 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 ",(0,i.kt)("a",{parentName:"p",href:"/recipes/reducing-boilerplate#generating-reducers"},"\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \uc904\uc774\uae30")," \uc5d0\uc11c \uc124\uba85\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),"\ub97c \uc0ac\uc6a9\ud560 \uac81\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \uc0dd\ub7b5\nfunction updateObject(oldObject, newValues) {}\nfunction updateItemInArray(array, itemId, updateItemCallback) {}\n\nfunction createReducer(initialState, handlers) {\n  return function reducer(state = initialState, action) {\n    if (handlers.hasOwnProperty(action.type)) {\n      return handlers[action.type](state, action)\n    } else {\n      return state\n    }\n  }\n}\n\n// \uc0dd\ub7b5\nfunction setVisibilityFilter(visibilityState, action) {}\n\nconst visibilityReducer = createReducer('SHOW_ALL', {\n  SET_VISIBILITY_FILTER: setVisibilityFilter\n})\n\n// \uc0dd\ub7b5\nfunction addTodo(todosState, action) {}\nfunction toggleTodo(todosState, action) {}\nfunction editTodo(todosState, action) {}\n\nconst todosReducer = createReducer([], {\n  ADD_TODO: addTodo,\n  TOGGLE_TODO: toggleTodo,\n  EDIT_TODO: editTodo\n})\n\nfunction appReducer(state = initialState, action) {\n  return {\n    todos: todosReducer(state.todos, action),\n    visibilityFilter: visibilityReducer(state.visibilityFilter, action)\n  }\n}\n")),(0,i.kt)("h4",{id:"\uc2ac\ub77c\uc774\uc2a4\ub85c-\ub9ac\ub4c0\uc11c-\uacb0\ud569\ud558\uae30"},"\uc2ac\ub77c\uc774\uc2a4\ub85c \ub9ac\ub4c0\uc11c \uacb0\ud569\ud558\uae30"),(0,i.kt)("p",null,'\ub9c8\uc9c0\ub9c9\uc5d0 \ud55c \uac83\ucc98\ub7fc, \uc6b0\ub9ac\ub294 \uc774\uc81c \ucd5c\uc0c1\uc704 \uc571 \ub9ac\ub4c0\uc11c\uc5d0 \ub300\ud55c "\uc0c1\ud0dc\uc758 \uc870\uac01"\uc758 \ub85c\uc9c1\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \ub9ac\ub355\uc2a4\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ',(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 \ucd5c\uc885\uacb0\uacfc\ubb3c\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218\n\nfunction updateObject(oldObject, newValues) {\n  // \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \uccab\ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud55c\ub2e4\ub294 \uc544\uc774\ub514\uc5b4\ub97c \ucea1\uc290\ud654\n  // \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud558\ub294 \ub300\uc2e0\uc5d0 \ub370\uc774\ud130\ub97c \ud655\uc2e4\ud788 \ubcf5\uc0ac\ud558\uae30 \uc704\ud574 Object.assign\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  return Object.assign({}, oldObject, newValues)\n}\n\nfunction updateItemInArray(array, itemId, updateItemCallback) {\n  const updatedItems = array.map(item => {\n    if (item.id !== itemId) {\n      // \ud55c\uac00\uc9c0 \ud56d\ubaa9\ub9cc \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \ud56d\ubaa9\uc740 \uc720\uc9c0\ud569\ub2c8\ub2e4.\n      return item\n    }\n\n    // \uc5c5\ub370\uc774\ud2b8 \ub41c \ud56d\ubaa9\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \uc8fc\uc5b4\uc9c4 \ucf5c\ubc31\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n    const updatedItem = updateItemCallback(item)\n    return updatedItem\n  })\n\n  return updatedItems\n}\n\nfunction createReducer(initialState, handlers) {\n  return function reducer(state = initialState, action) {\n    if (handlers.hasOwnProperty(action.type)) {\n      return handlers[action.type](state, action)\n    } else {\n      return state\n    }\n  }\n}\n\n// \ud2b9\uc815 \ucf00\uc774\uc2a4\uc758 \ud578\ub4e4\ub7ec ("\ucf00\uc774\uc2a4 \ub9ac\ub4c0\uc11c")\nfunction setVisibilityFilter(visibilityState, action) {\n  // \uae30\uc220\uc801\uc73c\ub85c, \uc6b0\ub9ac\ub294 \uc774\uc804\uc758 \uc0c1\ud0dc\uc5d0 \ub300\ud574\uc11c\ub3c4 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n  return action.filter\n}\n\n// \uc804\uccb4 \uc0c1\ud0dc\uc758 \uc870\uac01\uc5d0 \ub300\ud55c \ud578\ub4e4\ub7ec("\uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c")\nconst visibilityReducer = createReducer(\'SHOW_ALL\', {\n  SET_VISIBILITY_FILTER: setVisibilityFilter\n})\n\n// \ucf00\uc774\uc2a4 \ub9ac\ub4c0\uc11c\nfunction addTodo(todosState, action) {\n  const newTodos = todosState.concat({\n    id: action.id,\n    text: action.text,\n    completed: false\n  })\n\n  return newTodos\n}\n\n// \ucf00\uc774\uc2a4 \ub9ac\ub4c0\uc11c\nfunction toggleTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { completed: !todo.completed })\n  })\n\n  return newTodos\n}\n\n// \ucf00\uc774\uc2a4 \ub9ac\ub4c0\uc11c\nfunction editTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { text: action.text })\n  })\n\n  return newTodos\n}\n\n// \uc2ac\ub77c\uc774\uc2a4 \ub9ac\ub4c0\uc11c\nconst todosReducer = createReducer([], {\n  ADD_TODO: addTodo,\n  TOGGLE_TODO: toggleTodo,\n  EDIT_TODO: editTodo\n})\n\n// "\ub8e8\ud2b8 \ub9ac\ub4c0\uc11c"\nconst appReducer = combineReducers({\n  visibilityFilter: visibilityReducer,\n  todos: todosReducer\n})\n')),(0,i.kt)("p",null,"\uc6b0\ub9ac\ub294 \ub9ac\ub4c0\uc11c\ub97c \ub098\ub204\ub294 \uba87 \uac00\uc9c0 \ud568\uc218\ub97c \uc0b4\ud3b4\ubd24\uc2b5\ub2c8\ub2e4: ",(0,i.kt)("inlineCode",{parentName:"p"},"updateObject"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),"\uac19\uc740 \ud5ec\ud37c \uc720\ud2f8\ub9ac\ud2f0, ",(0,i.kt)("inlineCode",{parentName:"p"},"setVisibilityFilter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addTodo"),"\uac19\uc740 \ucf00\uc774\uc2a4\uc5d0 \ub300\ud55c \ud578\ub4e4\ub7ec, ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityReducer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"todosReducer"),"\uac19\uc740 \ubd80\ubd84\uc0c1\ud0dc \ud578\ub4e4\ub7ec. \ub610\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"appReducer"),'\ub294 "\ub8e8\ud2b8 \ub9ac\ub4c0\uc11c"\uc758 \uc608\uc785\ub2c8\ub2e4.'),(0,i.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\uc758 \uacb0\uacfc\ubb3c\uc740 \ucc98\uc74c\ubcf4\ub2e4 \ud604\uc800\ud788 \uae41\ub2c8\ub2e4. \uc774\ub294 \uc720\ud2f8\ub9ac\ud2f0 \ud568\uc218\ub97c \ucd94\ucd9c\ud588\uace0, \uba85\ud655\uc131\uc744 \uc704\ud574 \ubd84\ub9ac\ub41c \uba85\ub839\ubb38\uc744 \ubc18\ud658\ud558\ub294 \uac83\uacfc \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \uc77c\ubd80\ub7ec \uc7a5\ud669\ud558\uac8c \uc791\uc131\ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ud568\uc218\ub97c \uac1c\ubcc4\uc801\uc73c\ub85c \ubcf4\uba74 \uac01\uac01\uc758 \ucc45\uc784\uc774 \uc904\uc5b4\ub4e4\uc5c8\uace0 \uc758\ub3c4\uac00 \uba85\ud655\ud574\uc84c\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uc544\ub9c8 ",(0,i.kt)("inlineCode",{parentName:"p"},"reducerUtilities.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityReducer.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"todosReducer.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rootReducer.js"),"\uacfc \uac19\uc774 \ud30c\uc77c\ub85c \ubd84\ub9ac\ub420 \uac81\ub2c8\ub2e4."))}p.isMDXComponent=!0}}]);