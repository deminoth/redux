(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,b=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(157)),o={id:"server-rendering",title:"Server Rendering",hide_title:!0},s={unversionedId:"recipes/server-rendering",id:"recipes/server-rendering",isDocsHomePage:!1,title:"Server Rendering",description:"The most common use case for server-side rendering is to handle the initial render when a user (or search engine crawler) first requests our app. When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/recipes/ServerRendering.md",sourceDirName:"recipes",slug:"/recipes/server-rendering",permalink:"/recipes/server-rendering",version:"current",frontMatter:{id:"server-rendering",title:"Server Rendering",hide_title:!0},sidebar:"docs",previous:{title:"\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \uc904\uc774\uae30",permalink:"/recipes/reducing-boilerplate"},next:{title:"Writing Tests",permalink:"/recipes/writing-tests"}},c=[{value:"Redux on the Server",id:"redux-on-the-server",children:[]},{value:"Setting Up",id:"setting-up",children:[{value:"Install Packages",id:"install-packages",children:[]}]},{value:"The Server Side",id:"the-server-side",children:[{value:"Handling the Request",id:"handling-the-request",children:[]},{value:"Inject Initial Component HTML and State",id:"inject-initial-component-html-and-state",children:[]}]},{value:"The Client Side",id:"the-client-side",children:[]},{value:"Preparing the Initial State",id:"preparing-the-initial-state",children:[{value:"Processing Request Parameters",id:"processing-request-parameters",children:[]},{value:"Async State Fetching",id:"async-state-fetching",children:[]},{value:"Security Considerations",id:"security-considerations",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The most common use case for server-side rendering is to handle the ",Object(i.b)("em",{parentName:"p"},"initial render")," when a user (or search engine crawler) first requests our app. When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties."),Object(i.b)("p",null,"We will use React in the examples below, but the same techniques can be used with other view frameworks that can render on the server."),Object(i.b)("h3",{id:"redux-on-the-server"},"Redux on the Server"),Object(i.b)("p",null,"When using Redux with server rendering, we must also send the state of our app along in our response, so the client can use it as the initial state. This is important because, if we preload any data before generating the HTML, we want the client to also have access to this data. Otherwise, the markup generated on the client won't match the server markup, and the client would have to load the data again."),Object(i.b)("p",null,"To send the data down to the client, we need to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"create a fresh, new Redux store instance on every request;"),Object(i.b)("li",{parentName:"ul"},"optionally dispatch some actions;"),Object(i.b)("li",{parentName:"ul"},"pull the state out of store;"),Object(i.b)("li",{parentName:"ul"},"and then pass the state along to the client.")),Object(i.b)("p",null,"On the client side, a new Redux store will be created and initialized with the state provided from the server.\nRedux's ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"only"))," job on the server side is to provide the ",Object(i.b)("strong",{parentName:"p"},"initial state")," of our app."),Object(i.b)("h2",{id:"setting-up"},"Setting Up"),Object(i.b)("p",null,"In the following recipe, we are going to look at how to set up server-side rendering. We'll use the simplistic ",Object(i.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/counter"},"Counter app")," as a guide and show how the server can render state ahead of time based on the request."),Object(i.b)("h3",{id:"install-packages"},"Install Packages"),Object(i.b)("p",null,"For this example, we'll be using ",Object(i.b)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," as a simple web server. We also need to install the React bindings for Redux, since they are not included in Redux by default."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm install express react-redux\n")),Object(i.b)("h2",{id:"the-server-side"},"The Server Side"),Object(i.b)("p",null,"The following is the outline for what our server side is going to look like. We are going to set up an ",Object(i.b)("a",{parentName:"p",href:"https://expressjs.com/guide/using-middleware.html"},"Express middleware")," using ",Object(i.b)("a",{parentName:"p",href:"http://expressjs.com/api.html#app.use"},"app.use")," to handle all requests that come in to our server. If you're unfamiliar with Express or middleware, just know that our handleRender function will be called every time the server receives a request."),Object(i.b)("p",null,"Additionally, as we are using ES6 and JSX syntax, we will need to compile with ",Object(i.b)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," (see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/babel/example-node-server"},"this example of a Node Server with Babel"),") and the ",Object(i.b)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/preset-react/"},"React preset"),"."),Object(i.b)("h5",{id:"serverjs"},Object(i.b)("inlineCode",{parentName:"h5"},"server.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import path from 'path'\nimport Express from 'express'\nimport React from 'react'\nimport { createStore } from 'redux'\nimport { Provider } from 'react-redux'\nimport counterApp from './reducers'\nimport App from './containers/App'\n\nconst app = Express()\nconst port = 3000\n\n//Serve static files\napp.use('/static', Express.static('static'))\n\n// This is fired every time the server side receives a request\napp.use(handleRender)\n\n// We are going to fill these out in the sections to follow\nfunction handleRender(req, res) {\n  /* ... */\n}\nfunction renderFullPage(html, preloadedState) {\n  /* ... */\n}\n\napp.listen(port)\n")),Object(i.b)("h3",{id:"handling-the-request"},"Handling the Request"),Object(i.b)("p",null,"The first thing that we need to do on every request is to create a new Redux store instance. The only purpose of this store instance is to provide the initial state of our application."),Object(i.b)("p",null,"When rendering, we will wrap ",Object(i.b)("inlineCode",{parentName:"p"},"<App />"),", our root component, inside a ",Object(i.b)("inlineCode",{parentName:"p"},"<Provider>")," to make the store available to all components in the component tree, as we saw in ",Object(i.b)("a",{parentName:"p",href:"/tutorials/fundamentals/part-5-ui-react"},'"Redux \uae30\ubc18" Part 5: UI and React'),"."),Object(i.b)("p",null,"The key step in server side rendering is to render the initial HTML of our component ",Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"before"))," we send it to the client side. To do this, we use ",Object(i.b)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/react-dom-server.html#rendertostring"},"ReactDOMServer.renderToString()"),"."),Object(i.b)("p",null,"We then get the initial state from our Redux store using ",Object(i.b)("a",{parentName:"p",href:"/api/store#getState"},Object(i.b)("inlineCode",{parentName:"a"},"store.getState()")),". We will see how this is passed along in our ",Object(i.b)("inlineCode",{parentName:"p"},"renderFullPage")," function."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { renderToString } from 'react-dom/server'\n\nfunction handleRender(req, res) {\n  // Create a new Redux store instance\n  const store = createStore(counterApp)\n\n  // Render the component to a string\n  const html = renderToString(\n    <Provider store={store}>\n      <App />\n    </Provider>\n  )\n\n  // Grab the initial state from our Redux store\n  const preloadedState = store.getState()\n\n  // Send the rendered page back to the client\n  res.send(renderFullPage(html, preloadedState))\n}\n")),Object(i.b)("h3",{id:"inject-initial-component-html-and-state"},"Inject Initial Component HTML and State"),Object(i.b)("p",null,"The final step on the server side is to inject our initial component HTML and initial state into a template to be rendered on the client side. To pass along the state, we add a ",Object(i.b)("inlineCode",{parentName:"p"},"<script>")," tag that will attach ",Object(i.b)("inlineCode",{parentName:"p"},"preloadedState")," to ",Object(i.b)("inlineCode",{parentName:"p"},"window.__PRELOADED_STATE__"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"preloadedState")," will then be available on the client side by accessing ",Object(i.b)("inlineCode",{parentName:"p"},"window.__PRELOADED_STATE__"),"."),Object(i.b)("p",null,"We also include our bundle file for the client-side application via a script tag. This is whatever output your bundling tool provides for your client entry point. It may be a static file or a URL to a hot reloading development server."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'function renderFullPage(html, preloadedState) {\n  return `\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">${html}</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // https://redux.js.org/recipes/server-rendering/#security-considerations\n          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(\n            /</g,\n            \'\\\\u003c\'\n          )}\n        <\/script>\n        <script src="/static/bundle.js"><\/script>\n      </body>\n    </html>\n    `\n}\n')),Object(i.b)("h2",{id:"the-client-side"},"The Client Side"),Object(i.b)("p",null,"The client side is very straightforward. All we need to do is grab the initial state from ",Object(i.b)("inlineCode",{parentName:"p"},"window.__PRELOADED_STATE__"),", and pass it to our ",Object(i.b)("a",{parentName:"p",href:"/api/createstore"},Object(i.b)("inlineCode",{parentName:"a"},"createStore()"))," function as the initial state."),Object(i.b)("p",null,"Let's take a look at our new client file:"),Object(i.b)("h4",{id:"clientjs"},Object(i.b)("inlineCode",{parentName:"h4"},"client.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { hydrate } from 'react-dom'\nimport { createStore } from 'redux'\nimport { Provider } from 'react-redux'\nimport App from './containers/App'\nimport counterApp from './reducers'\n\n// Grab the state from a global variable injected into the server-generated HTML\nconst preloadedState = window.__PRELOADED_STATE__\n\n// Allow the passed state to be garbage-collected\ndelete window.__PRELOADED_STATE__\n\n// Create Redux store with initial state\nconst store = createStore(counterApp, preloadedState)\n\nhydrate(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),Object(i.b)("p",null,"You can set up your build tool of choice (Webpack, Browserify, etc.) to compile a bundle file into ",Object(i.b)("inlineCode",{parentName:"p"},"static/bundle.js"),"."),Object(i.b)("p",null,"When the page loads, the bundle file will be started up and ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#hydrate"},Object(i.b)("inlineCode",{parentName:"a"},"ReactDOM.hydrate()"))," will reuse the server-rendered HTML. This will connect our newly-started React instance to the virtual DOM used on the server. Since we have the same initial state for our Redux store and used the same code for all our view components, the result will be the same real DOM."),Object(i.b)("p",null,"And that's it! That is all we need to do to implement server side rendering."),Object(i.b)("p",null,"But the result is pretty vanilla. It essentially renders a static view from dynamic code. What we need to do next is build an initial state dynamically to allow that rendered view to be dynamic."),Object(i.b)("h2",{id:"preparing-the-initial-state"},"Preparing the Initial State"),Object(i.b)("p",null,"Because the client side executes ongoing code, it can start with an empty initial state and obtain any necessary state on demand and over time. On the server side, rendering is synchronous and we only get one shot to render our view. We need to be able to compile our initial state during the request, which will have to react to input and obtain external state (such as that from an API or database)."),Object(i.b)("h3",{id:"processing-request-parameters"},"Processing Request Parameters"),Object(i.b)("p",null,"The only input for server side code is the request made when loading up a page in your app in your browser. You may choose to configure the server during its boot (such as when you are running in a development vs. production environment), but that configuration is static."),Object(i.b)("p",null,"The request contains information about the URL requested, including any query parameters, which will be useful when using something like ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router"},"React Router"),". It can also contain headers with inputs like cookies or authorization, or POST body data. Let's see how we can set the initial counter state based on a query parameter."),Object(i.b)("h4",{id:"serverjs-1"},Object(i.b)("inlineCode",{parentName:"h4"},"server.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import qs from 'qs' // Add this at the top of the file\nimport { renderToString } from 'react-dom/server'\n\nfunction handleRender(req, res) {\n  // Read the counter from the request, if provided\n  const params = qs.parse(req.query)\n  const counter = parseInt(params.counter, 10) || 0\n\n  // Compile an initial state\n  let preloadedState = { counter }\n\n  // Create a new Redux store instance\n  const store = createStore(counterApp, preloadedState)\n\n  // Render the component to a string\n  const html = renderToString(\n    <Provider store={store}>\n      <App />\n    </Provider>\n  )\n\n  // Grab the initial state from our Redux store\n  const finalState = store.getState()\n\n  // Send the rendered page back to the client\n  res.send(renderFullPage(html, finalState))\n}\n")),Object(i.b)("p",null,"The code reads from the Express ",Object(i.b)("inlineCode",{parentName:"p"},"Request")," object passed into our server middleware. The parameter is parsed into a number and then set in the initial state. If you visit ",Object(i.b)("a",{parentName:"p",href:"http://localhost:3000/?counter=100"},"http://localhost:3000/?counter=100")," in your browser, you'll see the counter starts at 100. In the rendered HTML, you'll see the counter output as 100 and the ",Object(i.b)("inlineCode",{parentName:"p"},"__PRELOADED_STATE__")," variable has the counter set in it."),Object(i.b)("h3",{id:"async-state-fetching"},"Async State Fetching"),Object(i.b)("p",null,"The most common issue with server side rendering is dealing with state that comes in asynchronously. Rendering on the server is synchronous by nature, so it's necessary to map any asynchronous fetches into a synchronous operation."),Object(i.b)("p",null,"The easiest way to do this is to pass through some callback back to your synchronous code. In this case, that will be a function that will reference the response object and send back our rendered HTML to the client. Don't worry, it's not as hard as it may sound."),Object(i.b)("p",null,"For our example, we'll imagine there is an external datastore that contains the counter's initial value (Counter As A Service, or CaaS). We'll make a mock call over to them and build our initial state from the result. We'll start by building out our API call:"),Object(i.b)("h4",{id:"apicounterjs"},Object(i.b)("inlineCode",{parentName:"h4"},"api/counter.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"function getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min\n}\n\nexport function fetchCounter(callback) {\n  setTimeout(() => {\n    callback(getRandomInt(1, 100))\n  }, 500)\n}\n")),Object(i.b)("p",null,"Again, this is just a mock API, so we use ",Object(i.b)("inlineCode",{parentName:"p"},"setTimeout")," to simulate a network request that takes 500 milliseconds to respond (this should be much faster with a real world API). We pass in a callback that returns a random number asynchronously. If you're using a Promise-based API client, then you would issue this callback in your ",Object(i.b)("inlineCode",{parentName:"p"},"then")," handler."),Object(i.b)("p",null,"On the server side, we simply wrap our existing code in the ",Object(i.b)("inlineCode",{parentName:"p"},"fetchCounter")," and receive the result in the callback:"),Object(i.b)("h4",{id:"serverjs-2"},Object(i.b)("inlineCode",{parentName:"h4"},"server.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// Add this to our imports\nimport { fetchCounter } from './api/counter'\nimport { renderToString } from 'react-dom/server'\n\nfunction handleRender(req, res) {\n  // Query our mock API asynchronously\n  fetchCounter(apiResult => {\n    // Read the counter from the request, if provided\n    const params = qs.parse(req.query)\n    const counter = parseInt(params.counter, 10) || apiResult || 0\n\n    // Compile an initial state\n    let preloadedState = { counter }\n\n    // Create a new Redux store instance\n    const store = createStore(counterApp, preloadedState)\n\n    // Render the component to a string\n    const html = renderToString(\n      <Provider store={store}>\n        <App />\n      </Provider>\n    )\n\n    // Grab the initial state from our Redux store\n    const finalState = store.getState()\n\n    // Send the rendered page back to the client\n    res.send(renderFullPage(html, finalState))\n  })\n}\n")),Object(i.b)("p",null,"Because we call ",Object(i.b)("inlineCode",{parentName:"p"},"res.send()")," inside of the callback, the server will hold open the connection and won't send any data until that callback executes. You'll notice a 500ms delay is now added to each server request as a result of our new API call. A more advanced usage would handle errors in the API gracefully, such as a bad response or timeout."),Object(i.b)("h3",{id:"security-considerations"},"Security Considerations"),Object(i.b)("p",null,"Because we have introduced more code that relies on user generated content (UGC) and input, we have increased our attack surface area for our application. It is important for any application that you ensure your input is properly sanitized to prevent things like cross-site scripting (XSS) attacks or code injections."),Object(i.b)("p",null,"In our example, we take a rudimentary approach to security. When we obtain the parameters from the request, we use ",Object(i.b)("inlineCode",{parentName:"p"},"parseInt")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"counter")," parameter to ensure this value is a number. If we did not do this, you could easily get dangerous data into the rendered HTML by providing a script tag in the request. That might look like this: ",Object(i.b)("inlineCode",{parentName:"p"},"?counter=<\/script><script>doSomethingBad();<\/script>")),Object(i.b)("p",null,"For our simplistic example, coercing our input into a number is sufficiently secure. If you're handling more complex input, such as freeform text, then you should run that input through an appropriate sanitization function, such as ",Object(i.b)("a",{parentName:"p",href:"https://github.com/yahoo/xss-filters"},"xss-filters"),"."),Object(i.b)("p",null,"Furthermore, you can add additional layers of security by sanitizing your state output. ",Object(i.b)("inlineCode",{parentName:"p"},"JSON.stringify")," can be subject to script injections. To counter this, you can scrub the JSON string of HTML tags and other dangerous characters. This can be done with either a simple text replacement on the string, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"JSON.stringify(state).replace(/</g, '\\\\u003c')"),", or via more sophisticated libraries such as ",Object(i.b)("a",{parentName:"p",href:"https://github.com/yahoo/serialize-javascript"},"serialize-javascript"),"."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"You may want to read ",Object(i.b)("a",{parentName:"p",href:"/tutorials/fundamentals/part-6-async-logic"},"Redux \uae30\ubc18 Part 6: Async Logic and Data Fetching")," to learn more about expressing asynchronous flow in Redux with async primitives such as Promises and thunks. Keep in mind that anything you learn there can also be applied to universal rendering."),Object(i.b)("p",null,"If you use something like ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router"},"React Router"),", you might also want to express your data fetching dependencies as static ",Object(i.b)("inlineCode",{parentName:"p"},"fetchData()")," methods on your route handler components. They may return ",Object(i.b)("a",{parentName:"p",href:"/tutorials/fundamentals/part-6-async-logic"},"thunks"),", so that your ",Object(i.b)("inlineCode",{parentName:"p"},"handleRender")," function can match the route to the route handler component classes, dispatch ",Object(i.b)("inlineCode",{parentName:"p"},"fetchData()")," result for each of them, and render only after the Promises have resolved. This way the specific API calls required for different routes are colocated with the route handler component definitions. You can also use the same technique on the client side to prevent the router from switching the page until its data has been loaded."))}d.isMDXComponent=!0}}]);