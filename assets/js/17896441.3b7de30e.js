(self.webpackChunk=self.webpackChunk||[]).push([[7918],{4673:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var n=a(7294),l=a(6742),r=a(4973);var i=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(2263),o=a(907),c=a(9732);function d(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u(e){var t=e.versionLabel,a=e.to,i=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:i},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){var e=(0,s.Z)().siteConfig.title,t=(0,o.gA)({failfast:!0}).pluginId,a=(0,c.J)(t).savePreferredVersionName,l=(0,o.zu)(t),r=(0,o.Jo)(t),i=r.latestDocSuggestion,v=r.latestVersionSuggestion;if(!v)return n.createElement(n.Fragment,null);var h,E=null!=i?i:(h=v).docs.find((function(e){return e.id===h.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,"current"===l.name?n.createElement(d,{siteTitle:e,versionLabel:l.label}):n.createElement(m,{siteTitle:e,versionLabel:l.label})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:v.label,to:E.path,onClick:function(){return a(v.name)}})))},h=a(1217);function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function p(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(p,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var f=a(6010);var b=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],i=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var c=o[l],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(r&&r.classList.remove(t),c.classList.add(t),i(c),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},_="tableOfContents_35-E",L="table-of-contents__link";function N(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:L,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(N,{isChild:!0,toc:e.children}))}))):null}var U=function(e){var t=e.toc;return b(L,"table-of-contents__link--active",100),n.createElement("div",{className:(0,f.Z)(_,"thin-scrollbar")},n.createElement(N,{toc:t}))},k=a(2122),T=a(9756),Z="iconEdit_2_ui",y=["className"],w=function(e){var t=e.className,a=(0,T.Z)(e,y);return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,f.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function A(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(w,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C=a(6159),B="docItemContainer_33ec",I="lastUpdated_3DPF",x="docItemCol_3FnS";var D=function(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=r.image,c=r.keywords,d=r.hide_title,m=r.hide_table_of_contents,u=l.description,E=l.title,p=l.editUrl,b=l.lastUpdatedAt,_=l.formattedLastUpdatedAt,L=l.lastUpdatedBy,N=(0,o.gA)({failfast:!0}).pluginId,k=(0,o.gB)(N),T=(0,o.zu)(N),Z=k.length>1,y=!d&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(h.Z,{title:E,description:u,keywords:c,image:s}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,f.Z)("col",(t={},t[x]=!m,t))},n.createElement(v,null),n.createElement("div",{className:B},n.createElement("article",null,Z&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",T.label),n.createElement("div",{className:"markdown"},y&&n.createElement(C.N,null,E),n.createElement(a,null)),(p||b||L)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},p&&n.createElement(A,{editUrl:p})),n.createElement("div",{className:(0,f.Z)("col",I)},(b||L)&&n.createElement(g,{lastUpdatedAt:b,formattedLastUpdatedAt:_,lastUpdatedBy:L})))),n.createElement(i,{metadata:l}))),!m&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(U,{toc:a.toc}))))}},6159:function(e,t,a){"use strict";a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(9756),l=a(2122),r=a(7294),i=a(6010),s=a(4973),o=a(9732),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",m=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,l=e.id,d=(0,n.Z)(e,m),u=(0,o.LU)().navbar.hideOnScroll;return l?r.createElement(t,d,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[c]=!u,a)),id:l}),d.children,r.createElement("a",{className:"hash-link",href:"#"+l,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,d)});var t}}}]);