!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class n{constructor(t,e,i){this.image=t,this.width=e,this.height=i,this.tiles=new Map}define(t,e,i){const n=document.createElement("canvas");n.width=this.width,n.height=this.height,n.getContext("2d").drawImage(this.image,e,i,this.width,this.height,0,0,this.width,this.height),this.tiles.set(t,n)}draw(t,e,i,n){const o=this.tiles.get(t);e.drawImage(o,i,n)}drawTile(t,e,i,n){this.draw(t,e,i,n)}}let o,r,s,h,d={x:window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth,y:window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight};class a{constructor(t,e,i,o){this.sprite=new n(t,o,i),this.context=e,this.sprite.define("mario",48,0),this.x=Math.random()*r.height,this.y=Math.random()*r.width,this.vx=5*Math.random(),this.vy=5*Math.random()}draw(t,e){this.sprite.drawTile("mario",this.context,t,e)}update(){this.x+=this.vx,this.y+=this.vy,(this.y+this.vy>r.height||this.y+this.vy<0)&&(this.vy*=-1),(this.x+this.vx>r.width||this.x+this.vx<0)&&(this.vx*=-1),this.draw(this.x,this.y)}}let c=[];window.onload=function(){console.log("window"),(r=document.getElementById("tutorial")).height=d.y,r.width=d.x,r.getContext&&(o=r.getContext("2d"),function(t,e){const i=new Image;i.addEventListener("load",function(){e(i)}),i.src=t}("./assets/supermarioworldspritesheet.png",function(t){h=new a(t,o,30,20);for(let e=0;e<50;e++)c.push(new a(t,o,30,20));u()}))};function u(){o.clearRect(0,0,r.width,r.height);for(let t=0;t<c.length;t++)c[t].update();s=window.requestAnimationFrame(u)}}]);