(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(191)),i={id:"configuring-your-store",title:"Configuring Your Store",hide_title:!0},c={id:"recipes/configuring-your-store",title:"Configuring Your Store",description:"# Configuring Your Store",source:"@site/../docs_kr/recipes/ConfiguringYourStore.md",permalink:"/recipes/configuring-your-store",sidebar:"docs",previous:{title:"\ub808\uc2dc\ud53c \uc0c9\uc778",permalink:"/recipes/recipe-index"},next:{title:"Usage With TypeScript",permalink:"/recipes/usage-with-typescript"}},l=[{value:"Creating the store",id:"creating-the-store",children:[]},{value:"Extending Redux functionality",id:"extending-redux-functionality",children:[]},{value:"Problems with this approach",id:"problems-with-this-approach",children:[]},{value:"The solution: <code>configureStore</code>",id:"the-solution-configurestore",children:[]},{value:"Integrating the devtools extension",id:"integrating-the-devtools-extension",children:[]},{value:"Hot reloading",id:"hot-reloading",children:[]},{value:"Simplifying Setup with Redux Toolkit",id:"simplifying-setup-with-redux-toolkit",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"configuring-your-store"},"Configuring Your Store"),Object(a.b)("p",null,"In the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/basics/basic-tutorial"}),"basics section"),", we introduced the fundamental Redux concepts by building an example Todo list app."),Object(a.b)("p",null,"We will now explore how to customise the store to add extra functionality. We'll start with the source code from the basics section, which you can view in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/basics/example"}),"the documentation"),", in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux/tree/master/examples/todos/src"}),"our repository of examples"),", or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos"}),"in your browser via CodeSandbox"),"."),Object(a.b)("h2",{id:"creating-the-store"},"Creating the store"),Object(a.b)("p",null,"First, let's look at the original ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," file in which we created our store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport { createStore } from 'redux'\nimport rootReducer from './reducers'\nimport App from './components/App'\n\nconst store = createStore(rootReducer)\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),Object(a.b)("p",null,"In this code, we pass our reducers to the Redux ",Object(a.b)("inlineCode",{parentName:"p"},"createStore")," function, which returns a ",Object(a.b)("inlineCode",{parentName:"p"},"store")," object. We then pass this object to the ",Object(a.b)("inlineCode",{parentName:"p"},"react-redux")," ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," component, which is rendered at the top of our component tree."),Object(a.b)("p",null,"This ensures that any time we connect to Redux in our app via ",Object(a.b)("inlineCode",{parentName:"p"},"react-redux")," ",Object(a.b)("inlineCode",{parentName:"p"},"connect"),", the store is available to our components."),Object(a.b)("h2",{id:"extending-redux-functionality"},"Extending Redux functionality"),Object(a.b)("p",null,"Most apps extend the functionality of their Redux store by adding middleware or store enhancers ",Object(a.b)("em",{parentName:"p"},"(note: middleware is common, enhancers are less common)"),". Middleware adds extra functionality to the Redux ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," function; enhancers add extra functionality to the Redux store."),Object(a.b)("p",null,"We will add two middlewares and one enhancer:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/reduxjs/redux-thunk"}),Object(a.b)("inlineCode",{parentName:"a"},"redux-thunk")," middleware"),", which allows simple asynchronous use of dispatch."),Object(a.b)("li",{parentName:"ul"},"A middleware which logs dispatched actions and the resulting new state."),Object(a.b)("li",{parentName:"ul"},"An enhancer which logs the time taken for the reducers to process each action.")),Object(a.b)("h4",{id:"install-redux-thunk"},"Install ",Object(a.b)("inlineCode",{parentName:"h4"},"redux-thunk")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install redux-thunk\n")),Object(a.b)("h4",{id:"middlewareloggerjs"},"middleware/logger.js"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const logger = store => next => action => {\n  console.group(action.type)\n  console.info('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  console.groupEnd()\n  return result\n}\n\nexport default logger\n")),Object(a.b)("h4",{id:"enhancersmonitorreducerjs"},"enhancers/monitorReducer.js"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const round = number => Math.round(number * 100) / 100\n\nconst monitorReducerEnhancer = createStore => (\n  reducer,\n  initialState,\n  enhancer\n) => {\n  const monitoredReducer = (state, action) => {\n    const start = performance.now()\n    const newState = reducer(state, action)\n    const end = performance.now()\n    const diff = round(end - start)\n\n    console.log('reducer process time:', diff)\n\n    return newState\n  }\n\n  return createStore(monitoredReducer, initialState, enhancer)\n}\n\nexport default monitorReducerEnhancer\n")),Object(a.b)("p",null,"Let's add these to our existing ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"First, we need to import ",Object(a.b)("inlineCode",{parentName:"p"},"redux-thunk")," plus our ",Object(a.b)("inlineCode",{parentName:"p"},"loggerMiddleware")," and ",Object(a.b)("inlineCode",{parentName:"p"},"monitorReducerEnhancer"),", plus two extra functions provided by Redux: ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware")," and ",Object(a.b)("inlineCode",{parentName:"p"},"compose"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We then use ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware")," to create a store enhancer which will apply our ",Object(a.b)("inlineCode",{parentName:"p"},"loggerMiddleware")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"thunkMiddleware")," to the store's dispatch function.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Next, we use ",Object(a.b)("inlineCode",{parentName:"p"},"compose")," to compose our new ",Object(a.b)("inlineCode",{parentName:"p"},"middlewareEnhancer")," and our ",Object(a.b)("inlineCode",{parentName:"p"},"monitorReducerEnhancer")," into one function."),Object(a.b)("p",{parentName:"li"},"This is needed because you can only pass one enhancer into ",Object(a.b)("inlineCode",{parentName:"p"},"createStore"),". To use multiple enhancers, you must first compose them into a single larger enhancer, as shown in this example.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Finally, we pass this new ",Object(a.b)("inlineCode",{parentName:"p"},"composedEnhancers")," function into ",Object(a.b)("inlineCode",{parentName:"p"},"createStore")," as its third argument. ",Object(a.b)("em",{parentName:"p"},"Note: the second argument, which we will ignore, lets you preloaded state into the store.")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport { applyMiddleware, createStore, compose } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport rootReducer from './reducers'\nimport loggerMiddleware from './middleware/logger'\nimport monitorReducerEnhancer from './enhancers/monitorReducer'\nimport App from './components/App'\n\nconst middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)\nconst composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)\n\nconst store = createStore(rootReducer, undefined, composedEnhancers)\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),Object(a.b)("h2",{id:"problems-with-this-approach"},"Problems with this approach"),Object(a.b)("p",null,"While this code works, for a typical app it is not ideal."),Object(a.b)("p",null,"Most apps use more than one middleware, and each middleware often requires some initial setup. The extra noise added to the ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," can quickly make it hard to maintain, because the logic is not cleanly organised."),Object(a.b)("h2",{id:"the-solution-configurestore"},"The solution: ",Object(a.b)("inlineCode",{parentName:"h2"},"configureStore")),Object(a.b)("p",null,"The solution to this problem is to create a new ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore")," function which encapsulates our store creation logic, which can then be located in its own file to ease extensibility."),Object(a.b)("p",null,"The end goal is for our ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," to look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport App from './components/App'\nimport configureStore from './configureStore'\n\nconst store = configureStore()\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),Object(a.b)("p",null,"All the logic related to configuring the store - including importing reducers, middleware, and enhancers - is handled in a dedicated file."),Object(a.b)("p",null,"To achieve this, ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore")," function looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { applyMiddleware, compose, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = compose(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  return store\n}\n")),Object(a.b)("p",null,"This function follows the same steps outlined above, with some of the logic split out to prepare for extension, which will make it easier to add more in future:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Both ",Object(a.b)("inlineCode",{parentName:"p"},"middlewares")," and ",Object(a.b)("inlineCode",{parentName:"p"},"enhancers")," are defined as arrays, separate from the functions which consume them."),Object(a.b)("p",{parentName:"li"},"This allows us to easily add more middleware or enhancers based on different conditions."),Object(a.b)("p",{parentName:"li"},"For example, it is common to add some middleware only when in development mode, which is easily achieved by pushing to the middlewares array inside an if statement:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"if (process.env.NODE_ENV === 'development') {\n  middlewares.push(secretMiddleware)\n}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A ",Object(a.b)("inlineCode",{parentName:"p"},"preloadedState")," variable is passed through to ",Object(a.b)("inlineCode",{parentName:"p"},"createStore")," in case we want to add this later."))),Object(a.b)("p",null,"This also makes our ",Object(a.b)("inlineCode",{parentName:"p"},"createStore")," function easier to reason about - each step is clearly separated, which makes it more obvious what exactly is happening."),Object(a.b)("h2",{id:"integrating-the-devtools-extension"},"Integrating the devtools extension"),Object(a.b)("p",null,"Another common feature which you may wish to add to your app is the ",Object(a.b)("inlineCode",{parentName:"p"},"redux-devtools-extension")," integration."),Object(a.b)("p",null,"The extension is a suite of tools which give you absolute control over your Redux store - it allows you to inspect and replay actions, explore your state at different times, dispatch actions directly to the store, and much more. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Click here to read more about the available features.")),Object(a.b)("p",null,"There are several ways to integrate the extension, but we will use the most convenient option."),Object(a.b)("p",null,"First, we install the package via npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev redux-devtools-extension\n")),Object(a.b)("p",null,"Next, we remove the ",Object(a.b)("inlineCode",{parentName:"p"},"compose")," function which we imported from ",Object(a.b)("inlineCode",{parentName:"p"},"redux"),", and replace it with a new ",Object(a.b)("inlineCode",{parentName:"p"},"composeWithDevTools")," function imported from ",Object(a.b)("inlineCode",{parentName:"p"},"redux-devtools-extension"),"."),Object(a.b)("p",null,"The final code looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { applyMiddleware, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport { composeWithDevTools } from 'redux-devtools-extension'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = composeWithDevTools(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  return store\n}\n")),Object(a.b)("p",null,"And that's it!"),Object(a.b)("p",null,"If we now visit our app via a browser with the devtools extension installed, we can explore and debug using a powerful new tool."),Object(a.b)("h2",{id:"hot-reloading"},"Hot reloading"),Object(a.b)("p",null,"Another powerful tool which can make the development process a lot more intuitive is hot reloading, which means replacing pieces of code without restarting your whole app."),Object(a.b)("p",null,"For example, consider what happens when you run your app, interact with it for a while, and then decide to make changes to one of your reducers. Normally, when you make those changes your app will restart, reverting your Redux state to its initial value."),Object(a.b)("p",null,"With hot module reloading enabled, only the reducer you changed would be reloaded, allowing you to change your code ",Object(a.b)("em",{parentName:"p"},"without")," resetting the state every time. This makes for a much faster development process."),Object(a.b)("p",null,"We'll add hot reloading both to our Redux reducers and to our React components."),Object(a.b)("p",null,"First, let's add it to our ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore")," function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { applyMiddleware, compose, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = compose(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  if (process.env.NODE_ENV !== 'production' && module.hot) {\n    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))\n  }\n\n  return store\n}\n")),Object(a.b)("p",null,"The new code is wrapped in an ",Object(a.b)("inlineCode",{parentName:"p"},"if")," statement, so it only runs when our app is not in production mode, and only if the ",Object(a.b)("inlineCode",{parentName:"p"},"module.hot")," feature is available."),Object(a.b)("p",null,"Bundlers like Webpack and Parcel support a ",Object(a.b)("inlineCode",{parentName:"p"},"module.hot.accept")," method to specify which module should be hot reloaded, and what should happen when the module changes. In this case, we're watching the ",Object(a.b)("inlineCode",{parentName:"p"},"./reducers")," module, and passing the updated ",Object(a.b)("inlineCode",{parentName:"p"},"rootReducer")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"store.replaceReducer")," method when it changes."),Object(a.b)("p",null,"We'll also use the same pattern in our ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," to hot reload any changes to our React components:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport App from './components/App'\nimport configureStore from './configureStore'\n\nconst store = configureStore()\n\nconst renderApp = () =>\n  render(\n    <Provider store={store}>\n      <App />\n    </Provider>,\n    document.getElementById('root')\n  )\n\nif (process.env.NODE_ENV !== 'production' && module.hot) {\n  module.hot.accept('./components/App', renderApp)\n}\n\nrenderApp()\n")),Object(a.b)("p",null,"The only extra change here is that we have encapsulated our app's rendering into a new ",Object(a.b)("inlineCode",{parentName:"p"},"renderApp")," function, which we now call to re-render the app."),Object(a.b)("h2",{id:"simplifying-setup-with-redux-toolkit"},"Simplifying Setup with Redux Toolkit"),Object(a.b)("p",null,"The Redux core library is deliberately unopinionated. It lets you decide how you want to handle everything, like store\nsetup, what your state contains, and how you want to build your reducers."),Object(a.b)("p",null,"This is good in some cases, because it gives you flexibility, but that flexibility isn't always needed. Sometimes we\njust want the simplest possible way to get started, with some good default behavior out of the box."),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/"}),"Redux Toolkit")," package is designed to help simplify several common Redux use cases, including store setup.\nLet's see how it can help improve the store setup process."),Object(a.b)("p",null,"Redux Toolkit includes a prebuilt ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux-toolkit.js.org/api/configureStore"}),Object(a.b)("inlineCode",{parentName:"a"},"configureStore")," function")," like\nthe one shown in the earlier examples."),Object(a.b)("p",null,"The fastest way to use is it is to just pass the root reducer function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { configureStore } from '@reduxjs/toolkit'\nimport rootReducer from './reducers'\n\nconst store = configureStore({\n  reducer: rootReducer\n})\n\nexport default store\n")),Object(a.b)("p",null,"Note that it accepts an object with named parameters, to make it clearer what you're passing in."),Object(a.b)("p",null,"By default, ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore")," from Redux Toolkit will:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Call ",Object(a.b)("inlineCode",{parentName:"li"},"applyMiddleware")," with ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://redux-toolkit.js.org/api/getDefaultMiddleware"}),"a default list of middleware, including ",Object(a.b)("inlineCode",{parentName:"a"},"redux-thunk")),", and some development-only middleware that catch common mistakes like mutating state"),Object(a.b)("li",{parentName:"ul"},"Call ",Object(a.b)("inlineCode",{parentName:"li"},"composeWithDevTools")," to set up the Redux DevTools Extension")),Object(a.b)("p",null,"Here's what the hot reloading example might look like using Redux Toolkit:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureAppStore(preloadedState) {\n  const store = configureStore({\n    reducer: rootReducer,\n    middleware: [loggerMiddleware, ...getDefaultMiddleware()],\n    preloadedState,\n    enhancers: [monitorReducersEnhancer]\n  })\n\n  if (process.env.NODE_ENV !== 'production' && module.hot) {\n    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))\n  }\n\n  return store\n}\n")),Object(a.b)("p",null,"That definitely simplifies some of the setup process."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"Now that you know how to encapsulate your store configuration to make it easier to maintain, you can ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/advanced/advanced-tutorial"}),"learn more about the advanced features Redux provides"),", or take a closer look at some of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/introduction/ecosystem#debuggers-and-viewers"}),"extensions available in the Redux ecosystem"),"."))}s.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(b,c({ref:t},d,{components:n})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);