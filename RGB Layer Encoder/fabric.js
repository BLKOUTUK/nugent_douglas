/*!
 * fabric.js http://fabricjs.com/
 * Version 6.0.0
 * @license MIT
 */
!function(e,n){"object"==typeof exports?module.exports=n():"function"==typeof define&&define.amd?define([],n):"undefined"!=typeof window?(e.fabric=void 0!==window.document?{}:{},fabric=n()):"undefined"!=typeof global&&(e.fabric=global.fabric||{},fabric=n())}(this,function(){var e={version:"6.0.0",isLikelyNode:"undefined"!=typeof Buffer&&"undefined"!=typeof window?window.Buffer!==Buffer:!1,addLoadEvent:function(e){return n&&"function"==typeof n.addLoadEvent?n.addLoadEvent(e):(e(),this)},emptyFunction:function(){},env:{unknown:"0.0.0"},warn:function(e){console.warn("fabric: "+e)}};if("undefined"!=typeof document&&document&&document.getElementsByTagName){var t=document.getElementById("scriptLocation");t||(t=document.createElement("div"),t.id="scriptLocation",document.body.appendChild(t)),e.isLikelyNode=!1}return e;