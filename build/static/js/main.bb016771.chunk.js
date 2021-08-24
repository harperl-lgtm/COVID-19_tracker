(this["webpackJsonpcovid-tracker2"]=this["webpackJsonpcovid-tracker2"]||[]).push([[0],{119:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},238:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(8),r=c.n(s),o=(c(119),c(27)),i=c.n(o),l=c(45),u=c(10),d=(c(121),c(274)),j=c(275),f=c(276),h=c(265),b=c(269),p=c(17),v=(c(122),c(270)),x=c(3),O=["title","cases","active","isInfected","isRecovered","isDeaths","total"];var m=function(e){var t=e.title,c=e.cases,a=e.active,n=e.isInfected,s=e.isRecovered,r=e.isDeaths,o=e.total,i=Object(p.a)(e,O);return Object(x.jsx)(h.a,{onClick:i.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(n&&"infoBox--red"," ").concat(s&&"infoBox--green"," ").concat(r&&"infoBox--grey"),children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(v.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(x.jsx)("h2",{className:"infoBox__cases ".concat(n&&"infoBox__cases--red"," ").concat(s&&"infoBox__cases--green"," ").concat(r&&"infoBox__cases--grey"),children:c}),Object(x.jsxs)(v.a,{className:"infoBox__total",color:"textSecondary",children:[o," Total"]})]})})},g=(c(128),c(272)),y=c(273),_=c(278),C=c(13),N=c(277),w=c(271),k=c(18),S=c.n(k),B={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:300},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:300},deaths:{hex:"#8e80a8",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:700}},I=function(e){var t=Object(C.a)(e);return t.sort((function(e,t){return t.cases-e.cases})),t},T=function(e){return e?"+".concat(S()(e).format("0.0a")):"+0"},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(x.jsx)(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:B[t].hex,fillColor:B[t].hex},radius:Math.sqrt(e[t])*B[t].multiplier,children:Object(x.jsx)(w.a,{children:Object(x.jsxs)("div",{className:"info-container",children:[Object(x.jsx)("div",{children:t}),Object(x.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(x.jsx)("div",{className:"info-name",children:e.country}),Object(x.jsxs)("div",{className:"info-confirmed",children:["Cases: ",S()(e.cases).format("0.0")]}),Object(x.jsxs)("div",{className:"info-recovered",children:["Recovered: ",S()(e.recovered).format("0.0")]}),Object(x.jsxs)("div",{className:"info-deaths",children:["Deaths: ",S()(e.deaths).format("0.0")]})]})})})}))};function R(e){var t=e.coords;e.zoom;return Object(g.a)().setView(t),null}var z=function(e){var t=e.countries,c=e.casesType,a=e.center,n=e.zoom;return Object(x.jsx)("div",{className:"map",children:Object(x.jsxs)(y.a,{center:a,zoom:n,children:[Object(x.jsx)(_.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),D(t,c),Object(x.jsx)(R,{coords:a,zoom:n})]})})};c(129);var E=function(e){var t=e.countries;return Object(x.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t}),Object(x.jsx)("td",{children:Object(x.jsx)("strong",{children:S()(c).format("0,0")})})]})}))})},F=c(108),M=["casesType"],A={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:300},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:300},deaths:{hex:"#8e80a8",rgb:"rgb(251, 68, 67)",half_op:"rgba(142, 128, 168, 0.494)",multiplier:700}},L={plugins:{legend:{display:!1}},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return S()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return S()(e).format("0a")}}}]}},J=function(e,t){var c,a=[];for(var n in e.cases){if(c){var s={x:n,y:e[t][n]-c};a.push(s)}c=e[t][n]}return a};var P=function(e){var t=e.casesType,c=void 0===t?"cases":t,n=Object(p.a)(e,M),s=Object(a.useState)({}),r=Object(u.a)(s,2),o=r[0],d=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=J(e,c);d(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(x.jsx)("div",{className:n.className,children:(null===o||void 0===o?void 0:o.length)>0&&Object(x.jsx)(F.a,{options:L,data:{datasets:[{backgroundColor:A[c].half_op,borderColor:A[c].hex,data:o,fill:!0}]}})})};c(236);var V=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("worldwide"),r=Object(u.a)(s,2),o=r[0],p=r[1],v=Object(a.useState)({}),O=Object(u.a)(v,2),g=O[0],y=O[1],_=Object(a.useState)([]),C=Object(u.a)(_,2),N=C[0],w=C[1],k=Object(a.useState)({lat:34.80746,lng:-40.4796}),S=Object(u.a)(k,2),B=S[0],D=S[1],R=Object(a.useState)(3),F=Object(u.a)(R,2),M=F[0],A=F[1],L=Object(a.useState)([]),J=Object(u.a)(L,2),V=J[0],W=J[1],Y=Object(a.useState)("cases"),q=Object(u.a)(Y,2),K=q[0],G=q[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=I(e);w(c),W(e),n(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,a="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(a).then((function(e){return e.json()})).then((function(e){p(c),y(e),D([e.countryInfo.lat,e.countryInfo.long]),A(4),console.log(M)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsxs)("div",{className:"app__left",children:[Object(x.jsxs)("div",{className:"app__header",children:[Object(x.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(x.jsx)(d.a,{className:"app__dropdown",children:Object(x.jsxs)(j.a,{variant:"outlined",onChange:H,value:o,children:[Object(x.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(x.jsx)(f.a,{value:e.value,children:e.name})}))]})})]}),Object(x.jsxs)("div",{className:"app__stats",children:[Object(x.jsx)(m,{isInfected:!0,active:"cases"===K,onClick:function(e){return G("cases")},title:"Coronavirus Cases",cases:T(g.todayCases),total:g.cases}),Object(x.jsx)(m,{isRecovered:!0,active:"recovered"===K,onClick:function(e){return G("recovered")},title:"Recovered",cases:T(g.todayRecovered),total:g.recovered}),Object(x.jsx)(m,{isDeaths:!0,active:"deaths"===K,onClick:function(e){return G("deaths")},title:"Deaths",cases:T(g.todayDeaths),total:g.deaths})]}),Object(x.jsx)(z,{casesType:K,countries:V,center:B,zoom:M})]}),Object(x.jsx)(h.a,{className:"app__right",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)("h3",{children:"Total Cases by Country"}),Object(x.jsx)(E,{countries:N}),Object(x.jsxs)("h3",{className:"app__graphTitle",children:["Worldwide New ",K]}),Object(x.jsx)(P,{className:"app__graph",casesType:K})]})})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,280)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root")),W()}},[[238,1,2]]]);
//# sourceMappingURL=main.bb016771.chunk.js.map