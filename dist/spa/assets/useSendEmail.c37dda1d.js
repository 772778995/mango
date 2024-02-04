import{m,n as O,p as Q,q as B,s as W,d as h,v as V,l as z,x as X,e as Y}from"./index.4a8c98c0.js";const Z=[m("g",[m("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),m("clipPath",{id:"uil-hourglass-clip1"},[m("rect",{x:"15",y:"20",width:"70",height:"25"},[m("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),m("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),m("clipPath",{id:"uil-hourglass-clip2"},[m("rect",{x:"15",y:"55",width:"70",height:"25"},[m("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),m("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),m("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),m("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),m("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];var j=O({name:"QSpinnerHourglass",props:Q,setup(r){const{cSize:t,classes:s}=B(r);return()=>m("svg",{class:s.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Z)}}),x={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;function s(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(a){return typeof a}:s=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},s(n)}function f(n){var l=typeof n=="string"||n instanceof String;if(!l){var a=s(n);throw n===null?a="null":a==="object"&&(a=n.constructor.name),new TypeError("Expected a string but received a ".concat(a))}}r.exports=t.default,r.exports.default=t.default})(x,x.exports);var w={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;function s(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;for(var l in n)typeof f[l]=="undefined"&&(f[l]=n[l]);return f}r.exports=t.default,r.exports.default=t.default})(w,w.exports);var E={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var s=f(x.exports);function f(a){return a&&a.__esModule?a:{default:a}}function n(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(i){return typeof i}:n=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},n(a)}function l(a,e){(0,s.default)(a);var i,c;n(e)==="object"?(i=e.min||0,c=e.max):(i=arguments[1],c=arguments[2]);var o=encodeURI(a).split(/%..|./).length-1;return o>=i&&(typeof c=="undefined"||o<=c)}r.exports=t.default,r.exports.default=t.default})(E,E.exports);var C={exports:{}},D={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var s=n(x.exports),f=n(w.exports);function n(e){return e&&e.__esModule?e:{default:e}}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function a(e,i){(0,s.default)(e),i=(0,f.default)(i,l),i.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),i.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var c=e.split("."),o=c[c.length-1];return i.require_tld&&(c.length<2||!i.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o)||/\s/.test(o))||!i.allow_numeric_tld&&/^\d+$/.test(o)?!1:c.every(function(_){return!(_.length>63&&!i.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(_)||/[\uff01-\uff5e]/.test(_)||/^-|-$/.test(_)||!i.allow_underscores&&/_/.test(_))})}r.exports=t.default,r.exports.default=t.default})(D,D.exports);var q={exports:{}};(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var s=f(x.exports);function f(o){return o&&o.__esModule?o:{default:o}}var n="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",l="(".concat(n,"[.]){3}").concat(n),a=new RegExp("^".concat(l,"$")),e="(?:[0-9a-fA-F]{1,4})",i=new RegExp("^("+"(?:".concat(e,":){7}(?:").concat(e,"|:)|")+"(?:".concat(e,":){6}(?:").concat(l,"|:").concat(e,"|:)|")+"(?:".concat(e,":){5}(?::").concat(l,"|(:").concat(e,"){1,2}|:)|")+"(?:".concat(e,":){4}(?:(:").concat(e,"){0,1}:").concat(l,"|(:").concat(e,"){1,3}|:)|")+"(?:".concat(e,":){3}(?:(:").concat(e,"){0,2}:").concat(l,"|(:").concat(e,"){1,4}|:)|")+"(?:".concat(e,":){2}(?:(:").concat(e,"){0,3}:").concat(l,"|(:").concat(e,"){1,5}|:)|")+"(?:".concat(e,":){1}(?:(:").concat(e,"){0,4}:").concat(l,"|(:").concat(e,"){1,6}|:)|")+"(?::((?::".concat(e,"){0,5}:").concat(l,"|(?::").concat(e,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function c(o){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,s.default)(o),_=String(_),_?_==="4"?a.test(o):_==="6"?i.test(o):!1:c(o,4)||c(o,6)}r.exports=t.default,r.exports.default=t.default})(q,q.exports);(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=U;var s=e(x.exports),f=e(E.exports),n=e(D.exports),l=e(q.exports),a=e(w.exports);function e(d){return d&&d.__esModule?d:{default:d}}var i={allow_display_name:!1,allow_underscores:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},c=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,_=/^[a-z\d]+$/,I=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,k=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,N=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,T=254;function L(d){var u=d.replace(/^"(.+)"$/,"$1");if(!u.trim())return!1;var y=/[\.";<>]/.test(u);if(y){if(u===d)return!1;var v=u.split('"').length===u.split('\\"').length;if(!v)return!1}return!0}function U(d,u){if((0,s.default)(d),u=(0,a.default)(u,i),u.require_display_name||u.allow_display_name){var y=d.match(c);if(y){var v=y[1];if(d=d.replace(v,"").replace(/(^<|>$)/g,""),v.endsWith(" ")&&(v=v.slice(0,-1)),!L(v))return!1}else if(u.require_display_name)return!1}if(!u.ignore_max_length&&d.length>T)return!1;var P=d.split("@"),p=P.pop(),F=p.toLowerCase();if(u.host_blacklist.includes(F)||u.host_whitelist.length>0&&!u.host_whitelist.includes(F))return!1;var g=P.join("@");if(u.domain_specific_validation&&(F==="gmail.com"||F==="googlemail.com")){g=g.toLowerCase();var M=g.split("+")[0];if(!(0,f.default)(M.replace(/\./g,""),{min:6,max:30}))return!1;for(var $=M.split("."),S=0;S<$.length;S++)if(!_.test($[S]))return!1}if(u.ignore_max_length===!1&&(!(0,f.default)(g,{max:64})||!(0,f.default)(p,{max:254})))return!1;if(!(0,n.default)(p,{require_tld:u.require_tld,ignore_max_length:u.ignore_max_length,allow_underscores:u.allow_underscores})){if(!u.allow_ip_domain)return!1;if(!(0,l.default)(p)){if(!p.startsWith("[")||!p.endsWith("]"))return!1;var A=p.slice(1,-1);if(A.length===0||!(0,l.default)(A))return!1}}if(g[0]==='"')return g=g.slice(1,g.length-1),u.allow_utf8_local_part?N.test(g):I.test(g);for(var H=u.allow_utf8_local_part?k:o,R=g.split("."),b=0;b<R.length;b++)if(!H.test(R[b]))return!1;return!(u.blacklisted_chars&&g.search(new RegExp("[".concat(u.blacklisted_chars,"]+"),"g"))!==-1)}r.exports=t.default,r.exports.default=t.default})(C,C.exports);var G=W(C.exports);function ee(r,t){return typeof r=="string"&&G(r,t)}const J=r=>{const t=h(!1),s=h(!1),f=h("");return[(...l)=>(t.value=!0,s.value=!1,f.value="",r(...l).catch(a=>{s.value=!0,f.value=a.message}).finally(()=>t.value=!1)),t,s]},te=()=>{const r=h(0);V(async()=>{const l=await z.getItem("lastSendEmailCodeTime");if(!l)return;r.value=l;const a=r.value+6e4-Date.now();a<=0||(t.value=Math.ceil(a/1e3))});const t=h(0),s=()=>setTimeout(()=>{t.value<=0||(t.value-=1,s())},1e3);X(r,s);const[f,n]=J(async l=>{await Y.post("/api/captcha/email",l),r.value=Date.now(),z.setItem("lastSendEmailCodeTime",r.value),t.value=60});return{leftSeconds:t,sendEmailCode:f,isSendEmailCodeLoading:n}};export{j as Q,J as a,ee as i,te as u};
