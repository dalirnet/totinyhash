!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("tinyhash",[],n):"object"==typeof exports?exports.tinyhash=n():t.tinyhash=n()}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={},n=["x","t","z","r","y","w","v","s","q","u"],e=function(t){return String(t.join("").split("").map((function(t){return t.charCodeAt()})).reduce((function(t,n,e){return t+n*e}),0))};return t.default=function(t,o){void 0===t&&(t=null),void 0===o&&(o=[]);var r=function(t,o){void 0===o&&(o=[]);var r=10!=o.length?n:o;return{one:t.map((function(t){return t.charAt()})).join(""),two:e(t).split("").map((function(t){return r[t]})).join("").toUpperCase()}}((function(t){return String(t||"").match(/([a-z0-9]).*?([^a-z0-9]|$)/gi)||[]}(t)||[]).map((function(t){return t.replace(/[^a-z0-9]/gi,"").toLowerCase()})),o),i=r.one,u=r.two;return!(!i||!i)&&i+u},t=t.default}()}));
//# sourceMappingURL=index.js.map