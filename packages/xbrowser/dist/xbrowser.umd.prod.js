!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).xbrowser={})}(this,(function(t){"use strict";t.formatDate=function(t,e){var r,n={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(var o in n)(r=new RegExp("("+o+")").exec(t))&&(t=t.replace(r[1],1==r[1].length?n[o]:n[o].padStart(r[1].length,"0")));return t},t.getQueryByKey=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(e);return null!==r?decodeURIComponent(r[2]):null},t.matchMobile=function(t){return t.match(/[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}/gi)},t.testMobile=function(t){return/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/gi.test(t)},t.toFixed=function(t,e){if(e>20||e<0)throw new RangeError("toFixed() digits argument must be between 0 and 20");var r=t;if(isNaN(r)||r>=Math.pow(10,21))return r.toString();if(void 0===e||0==e)return Math.round(r).toString();var n=r.toString(),o=n.split(".");if(o.length<2){n+=".";for(var i=0;i<e;i+=1)n+="0";return n}var u=o[0],a=o[1];if(a.length==e)return n;if(a.length<e){for(i=0;i<e-a.length;i+=1)n+="0";return n}n=u+"."+a.substr(0,e);var g=a.substr(e,1);if(parseInt(g,10)>=5){var f=Math.pow(10,e);n=(n=(Math.round(parseFloat(n)*f)+1)/f).toFixed(e)}return n},Object.defineProperty(t,"__esModule",{value:!0})}));