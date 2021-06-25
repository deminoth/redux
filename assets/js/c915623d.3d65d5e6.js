(self.webpackChunk=self.webpackChunk||[]).push([[5210],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(c,".").concat(h)]||u[h]||l[h]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8499:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],p={id:"applymiddleware",title:"applyMiddleware",hide_title:!0},c=void 0,s={unversionedId:"api/applymiddleware",id:"api/applymiddleware",isDocsHomePage:!1,title:"applyMiddleware",description:"&nbsp;",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/applyMiddleware.md",sourceDirName:"api",slug:"/api/applymiddleware",permalink:"/api/applymiddleware",version:"current",frontMatter:{id:"applymiddleware",title:"applyMiddleware",hide_title:!0},sidebar:"docs",previous:{title:"combineReducers",permalink:"/api/combinereducers"},next:{title:"bindActionCreators",permalink:"/api/bindactioncreators"}},d=[],l={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"applymiddlewaremiddleware"},(0,i.kt)("inlineCode",{parentName:"h1"},"applyMiddleware(...middleware)")),(0,i.kt)("p",null,"Redux\uc5d0 \uc784\uc758\uc758 \uae30\ub2a5\uc744 \ub123\uc5b4 \ud655\uc7a5\ud558\ub294 \ubc29\ubc95\uc73c\ub85c\ub294 \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \ucd94\ucc9c\ud569\ub2c8\ub2e4. \ubbf8\ub4e4\uc6e8\uc5b4\ub294 \uc800\uc7a5\uc18c\uc758 ",(0,i.kt)("a",{parentName:"p",href:"/api/store#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch"))," \uba54\uc11c\ub4dc\ub97c \uc7ac\ubbf8\uc0bc\uc544\uc11c\ub098 \uc2e4\uc6a9\uc801\uc73c\ub85c \uac10\uc300 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4. \ubbf8\ub4e4\uc6e8\uc5b4\uc758 \uc911\uc694\ud55c \uae30\ub2a5 \uc911 \ud558\ub098\ub294 \uc870\ud569 \uac00\ub2a5\ud558\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \uc5ec\ub7ec \uac1c\uc758 \ubbf8\ub4e4\uc6e8\uc5b4\uac00 \uc870\ud569\ub420 \uc218 \uc788\uace0, \uac01\uac01\uc758 \ubbf8\ub4e4\uc6e8\uc5b4\ub294 \uccb4\uc778 \ub0b4\uc5d0\uc11c \uc790\uae30 \uc55e\uc774\ub098 \ub4a4\uc758 \ubbf8\ub4e4\uc6e8\uc5b4\uc5d0 \ub300\ud574 \uc544\ubb34\uac83\ub3c4 \ubab0\ub77c\ub3c4 \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ubbf8\ub4e4\uc6e8\uc5b4\uc758 \uc0ac\uc6a9\ubc95\uc740 \ub9ce\uc740 \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\ub098 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Reactive-Extensions/RxJS"},"Rx"),"\uc640 \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \ub300\ud55c \uc758\uc874\uc131 \uc5c6\uc774\ub3c4 \ube44\ub3d9\uae30 \uc561\uc158\uc744 \uc9c0\uc6d0\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%95%A1%EC%85%98"},"\ube44\ub3d9\uae30 \uc561\uc158"),"\uc744 \ubcf4\ud1b5\uc758 \uc561\uc158\ucc98\ub7fc \ubcf4\ub0b4\uac8c \ud574\uc90c\uc73c\ub85c\uc368 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk"},"redux-thunk"),"\ub294 \uc561\uc158 \uc0dd\uc0b0\uc790\uac00 \ub514\uc2a4\ud328\uce58 \ud568\uc218\ub97c \ud1b5\ud574 \uc81c\uc5b4\ub97c \uc5ed\uc804\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4. \uc561\uc158 \uc0dd\uc0b0\uc790\ub294 ",(0,i.kt)("a",{parentName:"p",href:"/api/store#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch")),"\ub97c \uc778\uc218\ub85c \ubc1b\uc544 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \ud568\uc218\ub4e4\uc740 ",(0,i.kt)("em",{parentName:"p"},"thunk")," \ub77c\uace0 \ubd88\ub9bd\ub2c8\ub2e4. \ub2e4\ub978 \uc608\ub85c\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acdlite/redux-promise"},"redux-promise"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubbf8\ub4e4\uc6e8\uc5b4\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")," \ube44\ub3d9\uae30 \uc561\uc158\uc744 \ubcf4\ub0b4\uace0, \uc774 Promise\uac00 \uacb0\uc815\ub418\uc5c8\uc744 \ub54c \ubcf4\ud1b5\uc758 \uc561\uc158\uc744 \ubcf4\ub0b4\uac8c \ud574 \uc90d\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 ",(0,i.kt)("a",{parentName:"p",href:"/api/createstore"},(0,i.kt)("inlineCode",{parentName:"a"},"createStore")),"\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\uba70 Redux \uc544\ud0a4\ud14d\uccd0\uc758 \uae30\ubc18\uc774 \ub418\ub294 \ubd80\ubd84\uc740 \uc544\ub2c8\uc9c0\ub9cc, \ucf54\uc5b4 \ub0b4\uc5d0\uc11c \uc9c0\uc6d0\ud574\uc57c \ud560 \uc815\ub3c4\ub85c \uc720\uc6a9\ud558\ub2e4\uace0 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 ",(0,i.kt)("a",{parentName:"p",href:"/api/store#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch")),"\ub97c \uc0dd\ud0dc\uacc4 \ub0b4\uc5d0\uc11c \ud655\uc7a5\ud558\ub294 \ud558\ub098\uc758 \ud45c\uc900\ud654\ub41c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uace0, \uc11c\ub85c \ub2e4\ub978 \ubbf8\ub4e4\uc6e8\uc5b4\ub4e4\uc774 \ud45c\ud604\ub825\uacfc \uc720\uc6a9\uc131\uc744 \ud1b5\ud574 \uacbd\uc7c1\ud560 \uc218 \uc788\uac8c \ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc778\uc218"},"\uc778\uc218"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"...middleware")," (",(0,i.kt)("em",{parentName:"li"},"arguments"),"): ",(0,i.kt)("em",{parentName:"li"},"\ubbf8\ub4e4\uc6e8\uc5b4 API"),"\ub97c \ub530\ub974\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \uac01\uac01\uc758 \ubbf8\ub4e4\uc6e8\uc5b4\ub294 ",(0,i.kt)("a",{parentName:"li",href:"/api/store"},(0,i.kt)("inlineCode",{parentName:"a"},"Store")),"\uc758 ",(0,i.kt)("a",{parentName:"li",href:"/api/store#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch")),"\uc640 ",(0,i.kt)("a",{parentName:"li",href:"/api/store#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState"))," \ud568\uc218\ub97c \uba85\uba85\ub41c \uc778\uc218\ub85c \ubc1b\uc544\uc11c, \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \ubbf8\ub4e4\uc6e8\uc5b4\uc758 \ub514\uc2a4\ud328\uce58 \ud568\uc218\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"li"},"next"),"\ub85c \uc8fc\uc5b4\uc838\uc11c, \ub2e4\ub978 \uc778\uc218\uc640 \ud568\uaed8, \uc544\ub2c8\uba74 \ub2e4\ub978 \uc2dc\uc810\uc5d0, \uc544\ub2c8\uba74 \uc804\ud600 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\ub294, ",(0,i.kt)("inlineCode",{parentName:"li"},"next(action)"),"\uc744 \ud638\ucd9c\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"action"),"\uc758 \ud568\uc218\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uccb4\uc778\uc758 \ub9c8\uc9c0\ub9c9 \ubbf8\ub4e4\uc6e8\uc5b4\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"next")," \uc778\uc790\ub85c \uc6d0\ub798 \uc800\uc7a5\uc18c\uc758 ",(0,i.kt)("a",{parentName:"li",href:"/api/store#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch")),"\ub97c \ubc1b\uc544 \uccb4\uc778\uc744 \ub9c8\ubb34\ub9ac\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \ubbf8\ub4e4\uc6e8\uc5b4\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"({ getState, dispatch }) => next => action"),"\uc785\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\ubc18\ud658"},"\ubc18\ud658"),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"Function"),") \uc8fc\uc5b4\uc9c4 \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \uc801\uc6a9\ud558\ub294 \uc800\uc7a5\uc18c \uc778\ud578\uc11c\uc785\ub2c8\ub2e4. \uc2dc\uadf8\ub2c8\ucc98\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"createStore => createStore'"),"\uc774\uc9c0\ub9cc, \uc778\ud578\uc11c\ub97c \uc801\uc6a9\ud558\ub294 \uac00\uc7a5 \uac04\ub2e8\ud55c \ubc29\ubc95\uc740 ",(0,i.kt)("a",{parentName:"p",href:"/api/createstore"},(0,i.kt)("inlineCode",{parentName:"a"},"createStore()")),"\uc758 \ub9c8\uc9c0\ub9c9 \uc778\uc218\uc778 ",(0,i.kt)("inlineCode",{parentName:"p"},"enhancer"),"\ub85c \ub118\uae30\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc608\uc81c-custom-logger-middleware"},"\uc608\uc81c: Custom Logger Middleware"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore, applyMiddleware } from 'redux'\nimport todos from './reducers'\n\nfunction logger({ getState }) {\n  return next => action => {\n    console.log('will dispatch', action)\n\n    // Call the next dispatch method in the middleware chain.\n    let returnValue = next(action)\n\n    console.log('state after dispatch', getState())\n\n    // This will likely be the action itself, unless\n    // a middleware further in chain changed it.\n    return returnValue\n  }\n}\n\nlet store = createStore(todos, ['Use Redux'], applyMiddleware(logger))\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Understand the middleware'\n})\n// (These lines will be logged by the middleware:)\n// will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }\n// state after dispatch: [ 'Use Redux', 'Understand the middleware' ]\n")),(0,i.kt)("h4",{id:"\uc608\uc81c-using-thunk-middleware-for-async-actions"},"\uc608\uc81c: Using Thunk Middleware for Async Actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore, combineReducers, applyMiddleware } from 'redux'\nimport thunk from 'redux-thunk'\nimport * as reducers from './reducers'\n\nlet reducer = combineReducers(reducers)\n// applyMiddleware supercharges createStore with middleware:\nlet store = createStore(reducer, applyMiddleware(thunk))\n\nfunction fetchSecretSauce() {\n  return fetch('https://www.google.com/search?q=secret+sauce')\n}\n\n// These are the normal action creators you have seen so far.\n// The actions they return can be dispatched without any middleware.\n// However, they only express \u201cfacts\u201d and not the \u201casync flow\u201d.\n\nfunction makeASandwich(forPerson, secretSauce) {\n  return {\n    type: 'MAKE_SANDWICH',\n    forPerson,\n    secretSauce\n  }\n}\n\nfunction apologize(fromPerson, toPerson, error) {\n  return {\n    type: 'APOLOGIZE',\n    fromPerson,\n    toPerson,\n    error\n  }\n}\n\nfunction withdrawMoney(amount) {\n  return {\n    type: 'WITHDRAW',\n    amount\n  }\n}\n\n// Even without middleware, you can dispatch an action:\nstore.dispatch(withdrawMoney(100))\n\n// But what do you do when you need to start an asynchronous action,\n// such as an API call, or a router transition?\n\n// Meet thunks.\n// A thunk is a function that returns a function.\n// This is a thunk.\n\nfunction makeASandwichWithSecretSauce(forPerson) {\n  // Invert control!\n  // Return a function that accepts `dispatch` so we can dispatch later.\n  // Thunk middleware knows how to turn thunk async actions into actions.\n\n  return function (dispatch) {\n    return fetchSecretSauce().then(\n      sauce => dispatch(makeASandwich(forPerson, sauce)),\n      error => dispatch(apologize('The Sandwich Shop', forPerson, error))\n    )\n  }\n}\n\n// Thunk middleware lets me dispatch thunk async actions\n// as if they were actions!\n\nstore.dispatch(makeASandwichWithSecretSauce('Me'))\n\n// It even takes care to return the thunk's return value\n// from the dispatch, so I can chain Promises as long as I return them.\n\nstore.dispatch(makeASandwichWithSecretSauce('My wife')).then(() => {\n  console.log('Done!')\n})\n\n// In fact I can write action creators that dispatch\n// actions and async actions from other action creators,\n// and I can build my control flow with Promises.\n\nfunction makeSandwichesForEverybody() {\n  return function (dispatch, getState) {\n    if (!getState().sandwiches.isShopOpen) {\n      // You don't have to return Promises, but it's a handy convention\n      // so the caller can always call .then() on async dispatch result.\n\n      return Promise.resolve()\n    }\n\n    // We can dispatch both plain object actions and other thunks,\n    // which lets us compose the asynchronous actions in a single flow.\n\n    return dispatch(makeASandwichWithSecretSauce('My Grandma'))\n      .then(() =>\n        Promise.all([\n          dispatch(makeASandwichWithSecretSauce('Me')),\n          dispatch(makeASandwichWithSecretSauce('My wife'))\n        ])\n      )\n      .then(() => dispatch(makeASandwichWithSecretSauce('Our kids')))\n      .then(() =>\n        dispatch(\n          getState().myMoney > 42\n            ? withdrawMoney(42)\n            : apologize('Me', 'The Sandwich Shop')\n        )\n      )\n  }\n}\n\n// This is very useful for server side rendering, because I can wait\n// until data is available, then synchronously render the app.\n\nimport { renderToString } from 'react-dom/server'\n\nstore\n  .dispatch(makeSandwichesForEverybody())\n  .then(() => response.send(renderToString(<MyApp store={store} />)))\n\n// I can also dispatch a thunk async action from a component\n// any time its props change to load the missing data.\n\nimport { connect } from 'react-redux'\nimport { Component } from 'react'\n\nclass SandwichShop extends Component {\n  componentDidMount() {\n    this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson))\n  }\n\n  componentWillReceiveProps(nextProps) {\n    if (nextProps.forPerson !== this.props.forPerson) {\n      this.props.dispatch(makeASandwichWithSecretSauce(nextProps.forPerson))\n    }\n  }\n\n  render() {\n    return <p>{this.props.sandwiches.join('mustard')}</p>\n  }\n}\n\nexport default connect(state => ({\n  sandwiches: state.sandwiches\n}))(SandwichShop)\n")),(0,i.kt)("h4",{id:"\ud301"},"\ud301"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 \uc800\uc7a5\uc18c\uc758 ",(0,i.kt)("a",{parentName:"p",href:"/api/store#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch"))," \ud568\uc218\ub9cc\uc744 \uac10\uc309\ub2c8\ub2e4. \uae30\uc220\uc801\uc73c\ub85c\ub294, \ubbf8\ub4e4\uc6e8\uc5b4\uac00 \ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \uac83\uc744 \ubaa8\ub4e0 ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," \ud638\ucd9c\uc744 \uc9c1\uc811 \uac10\uc2f8\uc11c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub4e4\uc744 \ud55c \uacf3\uc5d0\uc11c \uad00\ub9ac\ud558\uace0 \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc561\uc158\uc758 \ubcc0\ud658\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub294 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 \ubbf8\ub4e4\uc6e8\uc5b4\uc785\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ub9cc\uc57d ",(0,i.kt)("inlineCode",{parentName:"p"},"applyMiddleware"),"\uc774\uc678\uc758 \uc800\uc7a5\uc18c \uc778\ud578\uc11c\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74, \ubbf8\ub4e4\uc6e8\uc5b4\ub294 \ube44\ub3d9\uae30\uc801\uc77c \uc218 \uc788\uc73c\ubbc0\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"applyMiddleware"),"\ub97c \uccb4\uc778\uc5d0\uc11c \uc55e\ucabd\uc5d0 \ub450\ub3c4\ub85d \ud558\uc138\uc694. \uc608\ub97c \ub4e4\uc5b4 ",(0,i.kt)("inlineCode",{parentName:"p"},"applyMiddleware"),"\ub97c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-devtools"},"redux-devtools")," \uc55e\uc5d0 \ub450\uc9c0 \uc54a\uc73c\uba74 DevTools\uc740 Promise \ub4f1\uc758 \ubbf8\ub4e4\uc6e8\uc5b4\uc5d0 \uc804\ub2ec\ub418\ub294 \uc561\uc158\ub4e4\uc744 \ubcfc \uc218 \uc5c6\uc744\uac81\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ub9cc\uc57d \uc870\uac74\ubd80\ub85c \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \uc801\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 \ud544\uc694\ud560 \ub54c\uc5d0\ub9cc \uc784\ud3ec\ud2b8\ud558\ub3c4\ub85d \ud558\uc138\uc694:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let middleware = [a, b]\nif (process.env.NODE_ENV !== 'production') {\n  let c = require('some-debug-middleware')\n  let d = require('another-debug-middleware')\n  middleware = [...middleware, c, d]\n}\n\nconst store = createStore(\n  reducer,\n  preloadedState,\n  applyMiddleware(...middleware)\n)\n")))),(0,i.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \ubc88\ub4e4\ub9c1 \ub3c4\uad6c\ub4e4\uc774 \ud544\uc694\uc5c6\ub294 \ubaa8\ub4c8\uacfc \ub9ac\ub4c0\uc11c\ub97c \uc81c\uac70\ud574\uc11c \ube4c\ub4dc \uc0ac\uc774\uc988\ub97c \uc904\uc774\uae30 \uc27d\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"applyMiddleware")," \uc790\uc2e0\uc774 \ubb54\uc9c0 \uad81\uae08\ud55c\uac00\uc694? \ub2f9\uc5f0\ud788 \ubbf8\ub4e4\uc6e8\uc5b4 \uc790\uccb4\ubcf4\ub2e4 \ub354 \uac15\ub825\ud55c \ud655\uc7a5 \ub9e4\ucee4\ub2c8\uc998\uc785\ub2c8\ub2e4. \uc0ac\uc2e4 ",(0,i.kt)("inlineCode",{parentName:"p"},"applyMiddleware"),"\ub294 Redux\uc758 \uac00\uc7a5 \uac15\ub825\ud55c \ud655\uc7a5 \ub9e4\ucee4\ub2c8\uc998\uc778 ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#%EC%A0%80%EC%9E%A5%EC%86%8C-%EC%9D%B8%ED%95%B8%EC%84%9C"},"\uc800\uc7a5\uc18c \uc778\ud578\uc11c"),"\uc758 \ud55c \uc608\uc785\ub2c8\ub2e4. \uc800\uc7a5\uc18c \uc778\ud578\uc11c\uc758 \ub2e4\ub978 \uc608\ub85c\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-devtools"},"redux-devtools"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ubbf8\ub4e4\uc6e8\uc5b4\ub294 \uc800\uc7a5\uc18c \uc778\ud578\uc11c\ubcf4\ub2e4\ub294 \ub35c \uac15\ub825\ud558\uc9c0\ub9cc, \uc791\uc131\ud558\uae30\ub294 \ub354 \uc27d\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 \uc2e4\uc81c\ubcf4\ub2e4 \ub354 \ubcf5\uc7a1\ud558\uac8c \ub4e4\ub9bd\ub2c8\ub2e4. \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \uc815\ub9d0\ub85c \uc774\ud574\ud558\ub824\uba74 \uae30\uc874\uc758 \ubbf8\ub4e4\uc6e8\uc5b4\uac00 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \ubcf4\uace0, \uc5ec\ub7ec\ubd84\uc774 \uc9c1\uc811 \uc791\uc131\ud574\ubcf4\ub294 \ubc29\ubc95 \ubfd0\uc785\ub2c8\ub2e4. \ud568\uc218\ub97c \uc911\ucca9\ud558\ub294 \uc77c\uc5d0 \uac81\uc744 \uba39\uc744 \uc218\ub3c4 \uc788\uc9c0\ub9cc, \ub300\ubd80\ubd84\uc758 \ubbf8\ub4e4\uc6e8\uc5b4\ub4e4\uc774 \uc0ac\uc2e4 10\uc904 \ub0b4\uc678\uc774\uace0, \uc911\ucca9\uacfc \uc870\ud569\uac00\ub2a5\uc131\uc774\uc57c\ub9d0\ub85c \ubbf8\ub4e4\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc744 \uac15\ub825\ud558\uac8c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\uc800\uc7a5\uc18c \uc778\ud578\uc11c\ub97c \uc5ec\ub7ff \uc801\uc6a9\ud558\ub824\uba74, ",(0,i.kt)("a",{parentName:"p",href:"/api/compose"},(0,i.kt)("inlineCode",{parentName:"a"},"compose()")),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694."))))}u.isMDXComponent=!0}}]);