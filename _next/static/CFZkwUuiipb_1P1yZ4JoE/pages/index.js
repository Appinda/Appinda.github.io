(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"CW/Z":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("nOHt"),s=o.a.createElement,u=function(e){var t=e.href,n=e.children,r=Object(c.useRouter)(),a=n.props.className||"";return r.pathname===t&&(a=a?"".concat(a," active"):"active"),s(i.a,{href:t},o.a.cloneElement(n,{className:a}))},f=o.a.createElement,l=function(){return f("nav",{className:"header"},f("span",{className:"logo"},"Appinda"),f(u,{href:"/"},f("a",null,"Home")),f(u,{href:"/about"},f("a",null,"About")))},p=(n("6Fm8"),o.a.createElement);t.a=function(e){return p("div",null,p(l,null),p("section",{className:"body"},e.children))}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("CW/Z"),i=o.a.createElement;function c(){return i(a.a,null,i("p",null,"Welcome to Appinda"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var u=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=u(n("nOHt")),m=n("elyg");function y(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var w=new Map,g=window.IntersectionObserver,E={};function _(){return l||(g?l=new g((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){a(f,e);var t,u=(t=f,function(){var e,n=c(t);if(s()){var r=c(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function f(e){var t;return r(this,f),(t=u.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,c=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),c=c?(0,h.resolve)(s,c):i,e.preventDefault();var u=t.props.scroll;null==u&&(u=c.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](i,c,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(f,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),E[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),E[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,a=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),c={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(c.href=a||o);var s=n("P5f7").rewriteUrlForNextExport;return c.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=s(c.href)),p.default.cloneElement(i,c)}}]),f}(p.Component);t.default=b},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);