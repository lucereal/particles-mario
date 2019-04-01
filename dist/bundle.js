!function(t){var i={};function e(h){if(i[h])return i[h].exports;var s=i[h]={i:h,l:!1,exports:{}};return t[h].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,h){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:h})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var h=Object.create(null);if(e.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(h,s,function(i){return t[i]}.bind(null,s));return h},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="/dist/",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);class h{constructor(t,i,e){this.image=t,this.width=i,this.height=e,this.tiles=new Map}define(t,i,e){const h=document.createElement("canvas");h.width=1.5*this.width,h.height=1.5*this.height,h.getContext("2d").drawImage(this.image,i,e,this.width,this.height,0,0,1.5*this.width,1.5*this.height),this.tiles.set(t,h)}draw(t,i,e,h){const s=this.tiles.get(t);i.drawImage(s,e,h)}drawTile(t,i,e,h){this.draw(t,i,e,h)}}function s(t,i){const e=new Image;e.addEventListener("load",function(){i(e)}),e.src=t}class n{constructor(t){this.leftup,this.rightup,this.rightdown,this.leftdown,this.image,this.context=t,this.width=50,this.height=50,this.vx=0,this.vy=0,this.x=0,this.y=0,this.setPostition(),this.currentSprite}createSprites(){let t=this;return new Promise((i,e)=>{s("./assets/mario-left.gif",function(e){t.setLeftUp(e,28,27,352,548),t.setLeftDown(e,32,26,162,451),s("./assets/mario-right.gif",function(e){t.setRightUp(e,28,27,210,548),t.setRightDown(e,32,26,366,451),i()})})})}setLeftUp(t,i,e,s,n){this.leftup=new h(t,e,i),this.leftup.define("marioleftup",s,n)}setRightUp(t,i,e,s,n){this.rightup=new h(t,e,i),this.rightup.define("mariorightup",s,n)}setLeftDown(t,i,e,s,n){this.leftdown=new h(t,e,i),this.leftdown.define("marioleftdown",s,n)}setRightDown(t,i,e,s,n){this.rightdown=new h(t,e,i),this.rightdown.define("mariorightdown",s,n)}setPostition(){this.x=Math.random()*(r.width-this.width-this.width)+this.width,this.y=Math.random()*(r.height-this.height-this.height)+this.height}draw(t,i){let e;this.vx>=0&&this.vy<0?(this.currentSprite=this.rightup,e="mariorightup"):this.vx>=0&&this.vy>0?(this.currentSprite=this.rightdown,e="mariorightdown"):this.vx<0&&this.vy<0?(this.currentSprite=this.leftup,e="marioleftup"):(this.currentSprite=this.leftdown,e="marioleftdown"),this.currentSprite.drawTile(e,this.context,t,i)}update(){this.x+=this.vx,this.y+=this.vy,this.checkBoundry(),this.draw(this.x,this.y)}setVelocity(t,i){let e=-t,h=-i;this.vx=Math.random()*(t-e)+e,this.vy=Math.random()*(i-h)+h}getRandomInt(t){return Math.floor(Math.random()*Math.floor(t))}checkBoundry(){(this.y>r.height-this.height||this.y+this.vy<0)&&(this.vy*=-1),(this.x>r.width-this.width||this.x+this.vx<0)&&(this.vx*=-1),(this.y>r.height+this.height||this.y+this.vy-this.height<0-this.height)&&this.setPostition(),(this.x>r.width+this.width||this.x+this.vx<0-this.width)&&this.setPostition()}}e.d(i,"canvas",function(){return r});let o,r,d,u={x:document.body.clientWidth,y:document.body.clientHeight},a=[];function c(){o.fillStyle="#4F8EC6",o.fillRect(0,0,r.width,r.height);for(let t=0;t<a.length;t++)a[t].update();d=window.requestAnimationFrame(c)}window.onresize=function(){r.width=document.body.clientWidth,r.height=document.body.clientHeight},window.onload=function(){if(console.log("window"),(r=document.getElementById("canvas")).height=u.y,r.width=u.x,r.getContext){o=r.getContext("2d");let t=[];for(let i=0;i<25;i++){let i=new n(o);i.setVelocity(3,3),a.push(i),t.push(i.createSprites())}Promise.all(t).then(function(t){c()})}}}]);