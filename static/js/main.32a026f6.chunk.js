(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),o=(a(9),a(2)),l=a(0);function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"/about",children:e.name})})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"Dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"container mt-5",style:{color:"dark"===e.mode?"white":"black"},children:Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsxs)("h2",{children:[" ",e.title]}),Object(l.jsx)("textarea",{className:"form-control mt-4",style:{backgroundColor:"dark"===e.mode?"#0B0B45":"white",color:"dark"===e.mode?"white":"black"},id:"text-area",value:n,onChange:function(e){r(e.target.value)},rows:"9",placeholder:"Enter your text here"}),Object(l.jsx)("button",{type:"button",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to Uppercase","success")},className:"btn btn-primary my-4",children:"Convert to Uppercase"}),Object(l.jsx)("button",{type:"button",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to lowercase","success")},className:"btn btn-danger my-4 mx-3",children:"Convert to Lowecase"}),Object(l.jsx)("button",{type:"button",onClick:function(){r(""),e.showAlert("Text cleared","success")},className:"btn btn-secondary my-4",children:"Clear Text"}),Object(l.jsx)("button",{type:"button",onClick:function(){var t=document.getElementById("text-area");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","success")},className:"btn btn-info mx-4",children:"Copy Text"}),Object(l.jsx)("button",{type:"button",onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("Removed extra spaces","success")},className:"btn btn-warning",children:"Remove Extra Space"})]})}),Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h2",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[n.split(" ").filter((function(e){return""!==e})).length," words and ",n.length," characters"]}),Object(l.jsx)("h2",{children:"Text preview"}),Object(l.jsx)("p",{children:n})]})]})}var d=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsxs)("strong",{children:[" ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),":  ",e.alert.msg]})};var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),u=s[0],j=s[1],h=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1600)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"Developer",name:"About-us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#0B0B45",h("Dark mode is enabled","success")):(n("light"),document.body.style.backgroundColor="white",h("Light mode is enabled","success"))}}),Object(l.jsx)(d,{alert:u}),Object(l.jsx)(b,{showAlert:h,title:"Enter your text here for easy modifying",mode:a})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(11);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.32a026f6.chunk.js.map