var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var f=new Error("Cannot find module '"+e+"'");throw f.code="MODULE_NOT_FOUND",f}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r),r("9OeKo");var n=r("5uEKZ");const f={form:document.querySelector(".feedback-form")};console.log(f.form);let a={};f.form.addEventListener("input",(function({target:e}){const{name:o,value:t}=e;a[o]=t,n.default.save("feedback-form-state",a)})),f.form.addEventListener("submit",(function(e){if(e.preventDefault(),!a.email||!a.message)return void alert("Заповніть усі поля, будь ласка!");f.form.reset(),console.log(a),a={},n.default.remove("feedback-form-state")})),function(){const e=n.default.load("feedback-form-state");if(e)for(let o in e)f.form[o].value=e[o],a[o]=e[o]}();
//# sourceMappingURL=03-feedback.7902b61b.js.map
