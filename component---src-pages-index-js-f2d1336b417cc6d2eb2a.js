(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.pageQuery=t.default=void 0;var l=n(a(0)),r=n(a(141)),u=n(a(222)),i=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return{node:e.node,key:e.node.fields.slug}});return l.default.createElement(r.default,null,l.default.createElement(u.default,{pages:t}))};t.default=i;t.pageQuery="2427980347"},140:function(e,t,a){"use strict";var n=a(26),l=a(1);a(17),t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var r=l(a(0)),u=l(a(8)),i=n(a(149));t.Link=i.default,t.withPrefix=i.withPrefix,t.navigate=i.navigate,t.push=i.push,t.replace=i.replace,t.navigateTo=i.navigateTo;var d=l(a(143));t.PageRenderer=d.default;var o=l(a(66));t.parsePath=o.default;var s=r.default.createContext({});t.StaticQueryContext=s;var c=function(e){return r.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:u.default.object,query:u.default.string.isRequired,render:u.default.func,children:u.default.func}},141:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(142)),r=n(a(0)),u=n(a(147)),i=a(140);a(150),a(145);var d=function(e){var t=e.children;return r.default.createElement(i.StaticQuery,{query:"3092934963",render:function(e){var a=e.site.siteMetadata,n=a.fullTitle,l=a.shortDescription;return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,{title:n,meta:[{name:"description",content:l},{name:"robots",content:"noindex"}]},r.default.createElement("html",{lang:"en"})),r.default.createElement("div",null,t))},data:l.default})};t.default=d},142:function(e){e.exports={data:{site:{siteMetadata:{title:"TIL",fullTitle:"Today I Learned — web development musings semi-daily",shortDescription:"TIL - a collection of things I learned on my day-to-day web development work."}}}}},143:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},144:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0,a(27);var l=n(a(0)),r=n(a(8)),u=n(a(67)),i=n(a(11)),d=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return l.default.createElement(u.default,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:r.default.shape({pathname:r.default.string.isRequired}).isRequired};var o=d;t.default=o},145:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.PostTitleSnip=void 0;var l=n(a(172)),r=n(a(0));a(152);t.PostTitleSnip=function(e){var t=e.slug,a=e.title,n=e.variant||"";return r.default.createElement("span",{className:"post-title-snip-c "+n},r.default.createElement(l.default,{id:"post-"+t},r.default.createElement("strong",{className:"post-title-snip "+n},a)))}},152:function(e,t,a){},222:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=n(a(223)),r=n(a(0));a(225);var u=function(e){var t=e.pages;return r.default.createElement("div",{className:"page-list"},t.map(function(e){var t=e.node,a=e.key;return r.default.createElement(l.default,{node:t,key:a})}))};t.default=u},223:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var l=a(140),r=n(a(0)),u=a(151);a(224);var i=function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter,i=n.title,d=n.date,o=n.tags;return r.default.createElement("article",{className:"post-link"},r.default.createElement(l.Link,{to:a,className:"link"},r.default.createElement(u.PostTitleSnip,{slug:a,title:i}),r.default.createElement("small",{className:"tags"},o.join(" ")),r.default.createElement("small",{className:"date"},d)))};t.default=i},224:function(e,t,a){},225:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-f2d1336b417cc6d2eb2a.js.map