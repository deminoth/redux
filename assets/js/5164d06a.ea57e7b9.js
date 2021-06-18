(self.webpackChunk=self.webpackChunk||[]).push([[1528],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6169:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"usage-with-typescript",title:"Usage With TypeScript",hide_title:!0},c={unversionedId:"recipes/usage-with-typescript",id:"recipes/usage-with-typescript",isDocsHomePage:!1,title:"Usage With TypeScript",description:"&nbsp;",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/recipes/UsageWithTypescript.md",sourceDirName:"recipes",slug:"/recipes/usage-with-typescript",permalink:"/recipes/usage-with-typescript",version:"current",frontMatter:{id:"usage-with-typescript",title:"Usage With TypeScript",hide_title:!0},sidebar:"docs",previous:{title:"Configuring Your Store",permalink:"/recipes/configuring-your-store"},next:{title:"Redux\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158",permalink:"/recipes/migrating-to-redux"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Notes &amp; Considerations",id:"notes--considerations",children:[]},{value:"A Practical Example",id:"a-practical-example",children:[{value:"Type Checking State",id:"type-checking-state",children:[]},{value:"Type Checking Actions &amp; Action Creators",id:"type-checking-actions--action-creators",children:[]},{value:"Type Checking Reducers",id:"type-checking-reducers",children:[]}]},{value:"Usage with React Redux",id:"usage-with-react-redux",children:[{value:"Typing the useSelector hook",id:"typing-the-useselector-hook",children:[]},{value:"Typing the <code>useDispatch</code> hook",id:"typing-the-usedispatch-hook",children:[]},{value:"Typing the <code>connect</code> higher order component",id:"typing-the-connect-higher-order-component",children:[]}]},{value:"Usage with Redux Thunk",id:"usage-with-redux-thunk",children:[]},{value:"Usage with Redux Toolkit",id:"usage-with-redux-toolkit",children:[{value:"Typing <code>configureStore</code>",id:"typing-configurestore",children:[]},{value:"Typing <code>createAction</code>",id:"typing-createaction",children:[]},{value:"Typing <code>createReducer</code>",id:"typing-createreducer",children:[]},{value:"Typing <code>createSlice</code>",id:"typing-createslice",children:[]}]},{value:"Resources",id:"resources",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage-with-typescript"},"Usage with TypeScript"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TypeScript")," is a typed superset of JavaScript. It has become popular recently in applications due to the benefits it can bring. If you are new to TypeScript it is highly recommended to become familiar with it first before proceeding. You can check out its documentation ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"},"here.")),(0,i.kt)("p",null,"TypeScript has the potential to bring the following benefits to a Redux application:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Type safety for reducers, state and action creators, and UI components"),(0,i.kt)("li",{parentName:"ol"},"Easy refactoring of typed code"),(0,i.kt)("li",{parentName:"ol"},"A superior developer experience in a team environment")),(0,i.kt)("h2",{id:"notes--considerations"},"Notes & Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While we do ",(0,i.kt)("a",{parentName:"li",href:"/style-guide/style-guide#use-static-typing"},"officially recommend use of static typing with Redux"),", use of TypeScript does have tradeoffs in terms of setup, amount of code written, and readability. TypeScript will likely provide a net benefit in larger apps or codebases need to be maintained over time by many people, but may feel like too much overhead in smaller projects. Take time to evaluate the tradeoffs and decide whether it's worth using TS in your own application."),(0,i.kt)("li",{parentName:"ul"},"This page primarily covers adding type checking for the Redux core, and only gives shorter examples of using TS with other Redux libraries. See their respective documentation for further details."),(0,i.kt)("li",{parentName:"ul"},"There are multiple possible approaches to type checking Redux code. This page demonstrates some of the common and recommended approaches to keep things simple, and is not an exhaustive guide")),(0,i.kt)("h2",{id:"a-practical-example"},"A Practical Example"),(0,i.kt)("p",null,"We will be going through a simplistic chat application to demonstrate a possible approach to include static typing. This chat application will have two reducers. The ",(0,i.kt)("em",{parentName:"p"},"chat reducer")," will focus on storing the chat history and the ",(0,i.kt)("em",{parentName:"p"},"system reducer")," will focus on storing session information."),(0,i.kt)("p",null,"The full source code is available on ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/w02m7jm3q7"},"codesandbox here"),". Note that by going through this example yourself you will experience some of the benefits of using TypeScript."),(0,i.kt)("h3",{id:"type-checking-state"},"Type Checking State"),(0,i.kt)("p",null,"Adding types to each slice of state is a good place to start since it does not rely on other types. In this example we start by describing the chat reducer's slice of state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/chat/types.ts\n\nexport interface Message {\n  user: string\n  message: string\n  timestamp: number\n}\n\nexport interface ChatState {\n  messages: Message[]\n}\n")),(0,i.kt)("p",null,"And then do the same for the system reducer's slice of state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/system/types.ts\n\nexport interface SystemState {\n  loggedIn: boolean\n  session: string\n  userName: string\n}\n")),(0,i.kt)("p",null,"Note that we are exporting these interfaces to reuse them later in reducers and action creators."),(0,i.kt)("h3",{id:"type-checking-actions--action-creators"},"Type Checking Actions & Action Creators"),(0,i.kt)("p",null,"We will be using string literals and using ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," to declare our action constants and infer types. Note that we are making a tradeoff here when we declare our types in a separate file. In exchange for separating our types into a separate file, we get to keep our other files more focused on their purpose. While this tradeoff can improve the maintainability of the codebase, it is perfectly fine to organize your project however you see fit."),(0,i.kt)("p",null,"Chat Action Constants & Shape:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/chat/types.ts\nexport const SEND_MESSAGE = 'SEND_MESSAGE'\nexport const DELETE_MESSAGE = 'DELETE_MESSAGE'\n\ninterface SendMessageAction {\n  type: typeof SEND_MESSAGE\n  payload: Message\n}\n\ninterface DeleteMessageAction {\n  type: typeof DELETE_MESSAGE\n  meta: {\n    timestamp: number\n  }\n}\n\nexport type ChatActionTypes = SendMessageAction | DeleteMessageAction\n")),(0,i.kt)("p",null,"Note that we are using TypeScript's Union Type here to express all possible actions."),(0,i.kt)("p",null,"With these types declared we can now also type check chat's action creators. In this case we are taking advantage of TypeScript's inference:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/chat/actions.ts\n\nimport { Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from './types'\n\n// TypeScript infers that this function is returning SendMessageAction\nexport function sendMessage(newMessage: Message): ChatActionTypes {\n  return {\n    type: SEND_MESSAGE,\n    payload: newMessage\n  }\n}\n\n// TypeScript infers that this function is returning DeleteMessageAction\nexport function deleteMessage(timestamp: number): ChatActionTypes {\n  return {\n    type: DELETE_MESSAGE,\n    meta: {\n      timestamp\n    }\n  }\n}\n")),(0,i.kt)("p",null,"System Action Constants & Shape:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/system/types.ts\nexport const UPDATE_SESSION = 'UPDATE_SESSION'\n\ninterface UpdateSessionAction {\n  type: typeof UPDATE_SESSION\n  payload: SystemState\n}\n\nexport type SystemActionTypes = UpdateSessionAction\n")),(0,i.kt)("p",null,"With these types we can now also type check system's action creators:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/system/actions.ts\n\nimport { SystemState, UPDATE_SESSION, SystemActionTypes } from './types'\n\nexport function updateSession(newSession: SystemState): SystemActionTypes {\n  return {\n    type: UPDATE_SESSION,\n    payload: newSession\n  }\n}\n")),(0,i.kt)("h3",{id:"type-checking-reducers"},"Type Checking Reducers"),(0,i.kt)("p",null,"Reducers are just pure functions that take the previous state, an action and then return the next state. In this example, we explicitly declare the type of actions this reducer will receive along with what it should return (the appropriate slice of state). With these additions TypeScript will give rich intellisense on the properties of our actions and state. In addition, we will also get errors when a certain case does not return the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChatState"),"."),(0,i.kt)("p",null,"Type checked chat reducer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/chat/reducers.ts\n\nimport {\n  ChatState,\n  ChatActionTypes,\n  SEND_MESSAGE,\n  DELETE_MESSAGE\n} from './types'\n\nconst initialState: ChatState = {\n  messages: []\n}\n\nexport function chatReducer(\n  state = initialState,\n  action: ChatActionTypes\n): ChatState {\n  switch (action.type) {\n    case SEND_MESSAGE:\n      return {\n        messages: [...state.messages, action.payload]\n      }\n    case DELETE_MESSAGE:\n      return {\n        messages: state.messages.filter(\n          message => message.timestamp !== action.meta.timestamp\n        )\n      }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"Type checked system reducer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/system/reducers.ts\n\nimport { SystemState, SystemActionTypes, UPDATE_SESSION } from './types'\n\nconst initialState: SystemState = {\n  loggedIn: false,\n  session: '',\n  userName: ''\n}\n\nexport function systemReducer(\n  state = initialState,\n  action: SystemActionTypes\n): SystemState {\n  switch (action.type) {\n    case UPDATE_SESSION: {\n      return {\n        ...state,\n        ...action.payload\n      }\n    }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"We now need to generate the root reducer function, which is normally done using ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers"),". Note that we do not have to explicitly declare a new interface for RootState. We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnType")," to infer state shape from the ",(0,i.kt)("inlineCode",{parentName:"p"},"rootReducer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/index.ts\n\nimport { systemReducer } from './system/reducers'\nimport { chatReducer } from './chat/reducers'\n\nconst rootReducer = combineReducers({\n  system: systemReducer,\n  chat: chatReducer\n})\n\nexport type RootState = ReturnType<typeof rootReducer>\n")),(0,i.kt)("h2",{id:"usage-with-react-redux"},"Usage with React Redux"),(0,i.kt)("p",null,"While React Redux is a separate library from Redux itself, it is commonly used with React."),(0,i.kt)("p",null,"For a complete guide on how to correctly use React-Redux with TypeScript, see ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://react-redux.js.org/using-react-redux/static-typing"},'the "Static Typing" page in the React-Redux docs')),". This section will highlight the standard patterns."),(0,i.kt)("p",null,"React-Redux doesn't ship with its own type definitions. If you are using Typescript you should install the ",(0,i.kt)("a",{parentName:"p",href:"https://npm.im/@types/react-redux"},(0,i.kt)("inlineCode",{parentName:"a"},"@types/react-redux")," type definitions")," from npm. In addition to typing the library functions, the types also export some helpers to make it easier to write typesafe interfaces between your Redux store and your React components."),(0,i.kt)("h3",{id:"typing-the-useselector-hook"},"Typing the useSelector hook"),(0,i.kt)("p",null,"Declare the type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," parameter in the selector function, and the return type of ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector")," will be inferred to match the return type of the selector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface RootState {\n  isOn: boolean\n}\n\n// TS infers type: (state: RootState) => boolean\nconst selectIsOn = (state: RootState) => state.isOn\n\n// TS infers `isOn` is boolean\nconst isOn = useSelector(selectIsOn)\n")),(0,i.kt)("h3",{id:"typing-the-usedispatch-hook"},"Typing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"useDispatch")," hook"),(0,i.kt)("p",null,"By default, the return value of ",(0,i.kt)("inlineCode",{parentName:"p"},"useDispatch")," is the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatch")," type defined by the Redux core types, so no declarations are needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const dispatch = useDispatch()\n")),(0,i.kt)("h3",{id:"typing-the-connect-higher-order-component"},"Typing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"connect")," higher order component"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectedProps<T>")," type exported by ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/react-redux^7.1.2")," to infer the types of the props from ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," automatically. This requires splitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect(mapState, mapDispatch)(MyComponent)")," call into two parts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { connect, ConnectedProps } from 'react-redux'\n\ninterface RootState {\n  isOn: boolean\n}\n\nconst mapState = (state: RootState) => ({\n  isOn: state.isOn\n})\n\nconst mapDispatch = {\n  toggleOn: () => ({ type: 'TOGGLE_IS_ON' })\n}\n\nconst connector = connect(mapState, mapDispatch)\n\n// The inferred type will look like:\n// {isOn: boolean, toggleOn: () => void}\ntype PropsFromRedux = ConnectedProps<typeof connector>\n\ntype Props = PropsFromRedux & {\n  backgroundColor: string\n}\n\nconst MyComponent = (props: Props) => (\n  <div style={{ backgroundColor: props.backgroundColor }}>\n    <button onClick={props.toggleOn}>\n      Toggle is {props.isOn ? 'ON' : 'OFF'}\n    </button>\n  </div>\n)\n\nexport default connector(MyComponent)\n")),(0,i.kt)("h2",{id:"usage-with-redux-thunk"},"Usage with Redux Thunk"),(0,i.kt)("p",null,"Redux Thunk is a commonly used middleware for writing sync and async logic that interacts with the Redux store. Feel free to check out its documentation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},"here"),". A thunk is a function that returns another function that takes parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getState"),". Redux Thunk has a built in type ",(0,i.kt)("inlineCode",{parentName:"p"},"ThunkAction")," which we can use to define types for those arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/thunks.ts\n\nimport { Action } from 'redux'\nimport { sendMessage } from './store/chat/actions'\nimport { RootState } from './store'\nimport { ThunkAction } from 'redux-thunk'\n\nexport const thunkSendMessage = (\n  message: string\n): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {\n  const asyncResp = await exampleAPI()\n  dispatch(\n    sendMessage({\n      message,\n      user: asyncResp,\n      timestamp: new Date().getTime()\n    })\n  )\n}\n\nfunction exampleAPI() {\n  return Promise.resolve('Async Chat Bot')\n}\n")),(0,i.kt)("p",null,"To reduce repetition, you might want to define a reusable ",(0,i.kt)("inlineCode",{parentName:"p"},"AppThunk")," type once, in your store file, and then use that type whenever you write a thunk:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type AppThunk<ReturnType = void> = ThunkAction<\n  ReturnType,\n  RootState,\n  unknown,\n  Action<string>\n>\n")),(0,i.kt)("p",null,"It is highly recommended to use action creators in your dispatch since we can reuse the work that has already been done to type check these functions."),(0,i.kt)("h2",{id:"usage-with-redux-toolkit"},"Usage with Redux Toolkit"),(0,i.kt)("p",null,"The official ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},"Redux Toolkit")," package is written in TypeScript, and provides APIs that are designed to work well in TypeScript applications."),(0,i.kt)("h3",{id:"typing-configurestore"},"Typing ",(0,i.kt)("inlineCode",{parentName:"h3"},"configureStore")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configureStore")," infers the type of the state value from the provided root reducer function, so no specific type declarations should be needed. However, you may want to export the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"store.dispatch"),", which should already have the Thunk middleware types included:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const store = configureStore({\n  reducer: rootReducer\n})\n\nexport type AppDispatch = typeof store.dispatch\n")),(0,i.kt)("h3",{id:"typing-createaction"},"Typing ",(0,i.kt)("inlineCode",{parentName:"h3"},"createAction")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createAction")," requires that the type of the payload be explicitly defined, unless there is no payload required:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const add = createAction<number>(1)\n")),(0,i.kt)("h3",{id:"typing-createreducer"},"Typing ",(0,i.kt)("inlineCode",{parentName:"h3"},"createReducer")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createReducer")," will infer the type of its state value from the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialState")," argument. Action types should be declared explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const initialState: number = 0\nconst counterReducer = createReducer(initialState, {\n  increment: (state, action: PayloadAction<number>) => state + action.payload\n})\n")),(0,i.kt)("h3",{id:"typing-createslice"},"Typing ",(0,i.kt)("inlineCode",{parentName:"h3"},"createSlice")),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice")," will infer the type of its state value from the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialState")," argument. Action types should be declared explicitly, and will be reused for the generated action creators:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0 as number,\n  reducers: {\n    increment(state, action: PayloadAction<number>) {\n      return state + action.payload\n    }\n  }\n})\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"For further information, see these additional resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redux library documentation:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-redux.js.org/using-react-redux/static-typing"},"React-Redux docs: Static Typing"),": Examples of how to use the React-Redux APIs with TypeScript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/tutorials/advanced-tutorial"},"Redux Toolkit docs: Advanced Tutorial"),": shows how to use RTK and the React-Redux hooks API with TypeScript"))),(0,i.kt)("li",{parentName:"ul"},"React + Redux + TypeScript guides:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet"},"React+TypeScript Cheatsheet"),": a comprehensive guide to using React with TypeScript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/piotrwitek/react-redux-typescript-guide"},"React + Redux in TypeScript Guide"),": extensive information on patterns for using React and Redux with TypeScript"))),(0,i.kt)("li",{parentName:"ul"},"Other articles:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.matthewgerstman.com/tech/redux-code-split-typecheck/"},"Redux with Code-Splitting and Type Checking"))))))}u.isMDXComponent=!0}}]);