(self.webpackChunk=self.webpackChunk||[]).push([[1347],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(k,p(p({ref:t},c),{},{components:r})):n.createElement(k,p({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3220:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),p=["components"],i={id:"installation",title:"\uc124\uce58",description:"\uc18c\uac1c > \uc124\uce58: Redux\uc640 \uad00\ub828 \ud328\ud0a4\uc9c0 \uc124\uce58 \ubc29\ubc95",hide_title:!0},u={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"\uc124\uce58",description:"\uc18c\uac1c > \uc124\uce58: Redux\uc640 \uad00\ub828 \ud328\ud0a4\uc9c0 \uc124\uce58 \ubc29\ubc95",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/Installation.md",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/introduction/installation",version:"current",frontMatter:{id:"installation",title:"\uc124\uce58",description:"\uc18c\uac1c > \uc124\uce58: Redux\uc640 \uad00\ub828 \ud328\ud0a4\uc9c0 \uc124\uce58 \ubc29\ubc95",hide_title:!0},sidebar:"docs",previous:{title:"Redux \uc2dc\uc791\ud558\uae30",permalink:"/introduction/getting-started"},next:{title:"Core Concepts",permalink:"/introduction/core-concepts"}},l=[{value:"Redux Toolkit",id:"redux-toolkit",children:[]},{value:"Redux Core",id:"redux-core",children:[]},{value:"\ubcf4\uc870 \ud328\ud0a4\uc9c0",id:"\ubcf4\uc870-\ud328\ud0a4\uc9c0",children:[]},{value:"React Redux \uc571 \ub9cc\ub4e4\uae30",id:"react-redux-\uc571-\ub9cc\ub4e4\uae30",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\uc124\uce58"},"\uc124\uce58"),(0,o.kt)("h2",{id:"redux-toolkit"},"Redux Toolkit"),(0,o.kt)("p",null,"Redux Toolkit\uc740 Redux \ucf54\uc5b4 \ubfd0 \uc544\ub2c8\ub77c \uc800\ud76c\uac00 Redux \uc571\uc744 \ub9cc\ub4e4 \ub54c \ud544\uc218\uc801\uc774\ub77c\uace0 \ub290\ub080 \ud328\ud0a4\uc9c0\ub4e4\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4(Redux Thunk\ub098 Reselect \ub4f1)."),(0,o.kt)("p",null,"\ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\ub098 Node \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 NPM \ud328\ud0a4\uc9c0\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install @reduxjs/toolkit\n\n# Yarn\nyarn add @reduxjs/toolkit\n")),(0,o.kt)("p",null,"UMD \ube4c\ub4dc \ub610\ud55c ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@reduxjs/toolkit/dist/"},"unpkg\uc758 ",(0,o.kt)("inlineCode",{parentName:"a"},"dist")," \ud3f4\ub354"),"\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. UMD \ube4c\ub4dc\ub97c \ud1b5\ud574 Redux Toolkit\uc744 \uc804\uc5ed\ubcc0\uc218 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.RTK"),"\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"redux-core"},"Redux Core"),(0,o.kt)("p",null,"\uc548\uc815 \ubc84\uc804\uc744 \uc124\uce58\ud558\ub824\uba74:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install redux\n\n# Yarn\nyarn add redux\n")),(0,o.kt)("p",null,"\uc774\ub294 \uc5ec\ub7ec\ubd84\uc774 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"\uc744 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub9cc\uc57d \uc544\ub2c8\ub77c\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/redux/"},"\uc774\ub4e4 \ud30c\uc77c\uc744 unpkg\uc5d0\uc11c \uc811\uadfc"),"\ud574\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uac70\ub098 \uc5ec\ub7ec\ubd84\uc758 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\uc5d0 \uc9c0\uc815\ud574\uc8fc\uc138\uc694."),(0,o.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc0ac\ub78c\ub4e4\uc740 Redux\ub97c ",(0,o.kt)("a",{parentName:"p",href:"http://webpack.github.io/docs/commonjs.html"},"CommonJS")," \ubaa8\ub4c8\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \ubaa8\ub4c8\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),"\uc774\ub098 ",(0,o.kt)("a",{parentName:"p",href:"http://browserify.org/"},"Browserify")," \ub610\ub294 Node \ud658\uacbd\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"redux"),"\ub97c \uc784\ud3ec\ud2b8\ud560\ub54c \ubd88\ub7ec\uc640\uc9d1\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc774 \ucd5c\ucca8\ub2e8\uc744 \uac77\uace0 \uc788\uc73c\uba70 ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org"},"Rollup"),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc774 \uc5ed\uc2dc \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub9cc\uc57d \uc5ec\ub7ec\ubd84\uc774 \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0 \uc54a\ub354\ub77c\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"redux")," npm \ud328\ud0a4\uc9c0\ub294 \ubbf8\ub9ac \ucef4\ud30c\uc77c\ub41c \ud504\ub85c\ub355\uc158\uacfc \uac1c\ubc1c\uc6a9 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/umdjs/umd"},"UMD")," \ube4c\ub4dc\ub97c ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/redux/dist/"},(0,o.kt)("inlineCode",{parentName:"a"},"dist")," \ud3f4\ub354"),"\uc5d0 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4\uc740 \ubc88\ub4e4\ub7ec \uc5c6\uc774 \ubc14\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud558\uace0 \ub300\ubd80\ubd84\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubaa8\ub4c8 \ub85c\ub354\ub098 \ud658\uacbd\uacfc \ud638\ud658\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 UMD \ube4c\ub4dc\ub97c \ud398\uc774\uc9c0 \uc0c1\uc758 ",(0,o.kt)("a",{parentName:"p",href:"https://npmcdn.com/redux/dist/redux.js"},(0,o.kt)("inlineCode",{parentName:"a"},"<script>")," \ud0dc\uadf8"),"\uc5d0\uc11c \uc0ac\uc6a9\ud558\uac70\ub098 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reactjs/redux/pull/1181#issuecomment-167361975"},"Bower\uac00 \uc124\uce58\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),". UMD \ube4c\ub4dc\ub294 Redux\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"window.Redux")," \uc804\uc5ed\ubcc0\uc218\ub85c \uc0ac\uc6a9\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,o.kt)("p",null,"Redux \uc18c\uc2a4\ucf54\ub4dc\ub294 ES2015\ub85c \uc791\uc131\ub418\uc5c8\uc9c0\ub9cc CommonJS\uc640 UMD \ube4c\ub4dc \ubaa8\ub450\ub97c ES5\ub85c \ubbf8\ub9ac \ucef4\ud30c\uc77c\ud574\ub450\uc5c8\uae30 \ub54c\ubb38\uc5d0 ",(0,o.kt)("a",{parentName:"p",href:"http://caniuse.com/#feat=es5"},"\ubaa8\ub4e0 \ubaa8\ub358 \ube0c\ub77c\uc6b0\uc800"),"\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reactjs/redux/blob/master/examples/counter-vanilla/index.html"},"Redux\ub97c \uc2dc\uc791\ud558\uae30"),"\uc704\ud574 Babel\uc774\ub098 \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\ub97c \uc0ac\uc6a9\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ubcf4\uc870-\ud328\ud0a4\uc9c0"},"\ubcf4\uc870 \ud328\ud0a4\uc9c0"),(0,o.kt)("p",null,"\uc544\ub9c8 \uc5ec\ub7ec\ubd84\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React \ubc14\uc778\ub529"),"\uacfc ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"\uac1c\ubc1c\uc790 \ub3c4\uad6c"),"\ub3c4 \ud544\uc694\ud558\uc2e4\uac81\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-redux\nnpm install --save-dev redux-devtools\n")),(0,o.kt)("p",null,"Redux \uc790\uccb4\uc640\ub294 \ub2ec\ub9ac Redux \uc0dd\ud0dc\uacc4\uc758 \ub9ce\uc740 \ud328\ud0a4\uc9c0\ub4e4\uc740 UMD \ube4c\ub4dc\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c, \ud3b8\uc548\ud55c \uac1c\ubc1c \uacbd\ud5d8\uc744 \uc704\ud574 ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),"\uc774\ub098 ",(0,o.kt)("a",{parentName:"p",href:"http://browserify.org/"},"Browserify")," \uac19\uc740 CommonJS \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\ub97c \uc0ac\uc6a9\ud558\uae30\ub97c \uad8c\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"react-redux-\uc571-\ub9cc\ub4e4\uae30"},"React Redux \uc571 \ub9cc\ub4e4\uae30"),(0,o.kt)("p",null,"React\uc640 Redux\ub97c \uc0ac\uc6a9\ud558\ub294 \uc0c8 \uc571\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc73c\ub85c\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App"),"\uc758 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux"},"\uacf5\uc2dd Redux+JS \ud15c\ud50c\ub9bf"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 ",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/"},"Redux Toolkit"),"\uacfc React Redux\uc758 React \ucef4\ud3ec\ub10c\ud2b8 \ud1b5\ud569\uc774 \uc8fc\ub294 \uc774\uc810\uc744 \ub204\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template redux\n")))}d.isMDXComponent=!0}}]);