(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(4),i=n.n(s),o=(n(10),n(3)),d=(n(11),"cdf11bc9de7b73f7198a08e62198695f"),u="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),i=Object(o.a)(s,2),h=i[0],l=i[1];return Object(a.jsx)("div",{className:"undefined"!=typeof h.main&&h.main.temp>16?"App":"App cold",children:Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:"search-box",children:Object(a.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(n,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){l(e),r(""),console.log(e)}))}})}),"undefined"!=typeof h.main?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"location-box",children:[Object(a.jsxs)("div",{className:"location",children:[h.name,", ",h.sys.country]}),Object(a.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date)})]}),Object(a.jsxs)("div",{className:"weather-box",children:[Object(a.jsxs)("div",{className:"temp",children:[Math.round(h.main.temp),"\xb0c"]}),Object(a.jsx)("div",{className:"weather",children:h.weather[0].main})]})]}):""]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),l()}},[[12,1,2]]]);
//# sourceMappingURL=main.f21d5512.chunk.js.map