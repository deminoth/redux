(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(157)),p={id:"isolating-redux-sub-apps",title:"Isolating Redux Sub-Apps",hide_title:!0},i={unversionedId:"recipes/isolating-redux-sub-apps",id:"recipes/isolating-redux-sub-apps",isDocsHomePage:!1,title:"Isolating Redux Sub-Apps",description:"Consider the case of a \u201cbig\u201d app (contained in a `` component)",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/recipes/IsolatingSubapps.md",sourceDirName:"recipes",slug:"/recipes/isolating-redux-sub-apps",permalink:"/recipes/isolating-redux-sub-apps",version:"current",frontMatter:{id:"isolating-redux-sub-apps",title:"Isolating Redux Sub-Apps",hide_title:!0},sidebar:"docs",previous:{title:"Implementing Undo History",permalink:"/recipes/implementing-undo-history"},next:{title:"Code Splitting",permalink:"/recipes/code-splitting"}},c=[],s={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Consider the case of a \u201cbig\u201d app (contained in a ",Object(o.b)("inlineCode",{parentName:"p"},"<BigApp>")," component)\nthat embeds smaller \u201csub-apps\u201d (contained in ",Object(o.b)("inlineCode",{parentName:"p"},"<SubApp>")," components):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport SubApp from './subapp'\n\nclass BigApp extends Component {\n  render() {\n    return (\n      <div>\n        <SubApp />\n        <SubApp />\n        <SubApp />\n      </div>\n    )\n  }\n}\n")),Object(o.b)("p",null,"These ",Object(o.b)("inlineCode",{parentName:"p"},"<SubApp>"),"s will be completely independent. They won't share data or\nactions, and won't see or communicate with each other."),Object(o.b)("p",null,"It's best not to mix this approach with standard Redux reducer composition.\nFor typical web apps, stick with reducer composition. For\n\u201cproduct hubs\u201d, \u201cdashboards\u201d, or enterprise software that groups disparate\ntools into a unified package, give the sub-app approach a try."),Object(o.b)("p",null,"The sub-app approach is also useful for large teams that are divided by product\nor feature verticals. These teams can ship sub-apps independently or in combination\nwith an enclosing \u201capp shell\u201d."),Object(o.b)("p",null,"Below is a sub-app's root connected component.\nAs usual, it can render more components, connected or not, as children.\nUsually we'd render it in ",Object(o.b)("inlineCode",{parentName:"p"},"<Provider>")," and be done with it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"class App extends Component { ... }\nexport default connect(mapStateToProps)(App)\n")),Object(o.b)("p",null,"However, we don't have to call ",Object(o.b)("inlineCode",{parentName:"p"},"ReactDOM.render(<Provider><App /></Provider>)"),"\nif we're interested in hiding the fact that the sub-app component is a Redux app."),Object(o.b)("p",null,"Maybe we want to be able to run multiple instances of it in the same \u201cbigger\u201d app\nand keep it as a complete black box, with Redux being an implementation detail."),Object(o.b)("p",null,"To hide Redux behind a React API, we can wrap it in a special component that\ninitializes the store in the constructor:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport { Provider } from 'react-redux'\nimport { createStore } from 'redux'\nimport reducer from './reducers'\nimport App from './App'\n\nclass SubApp extends Component {\n  constructor(props) {\n    super(props)\n    this.store = createStore(reducer)\n  }\n\n  render() {\n    return (\n      <Provider store={this.store}>\n        <App />\n      </Provider>\n    )\n  }\n}\n")),Object(o.b)("p",null,"This way every instance will be independent."),Object(o.b)("p",null,"This pattern is ",Object(o.b)("em",{parentName:"p"},"not")," recommended for parts of the same app that share data.\nHowever, it can be useful when the bigger app has zero access to the smaller apps' internals,\nand we'd like to keep the fact that they are implemented with Redux as an implementation detail.\nEach component instance will have its own store, so they won't \u201cknow\u201d about each other."))}l.isMDXComponent=!0},157:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,m=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);