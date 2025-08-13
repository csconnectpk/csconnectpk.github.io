import{r as O,g as b,a as j}from"./vendor-DomL0yj5.js";function E(t,s){for(var a=0;a<s.length;a++){const o=s[a];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in t)){const i=Object.getOwnPropertyDescriptor(o,n);i&&Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function h(){if(y)return u;y=1;var t=O(),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function _(c,e,m){var r,f={},l=null,d=null;m!==void 0&&(l=""+m),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(d=e.ref);for(r in e)o.call(e,r)&&!i.hasOwnProperty(r)&&(f[r]=e[r]);if(c&&c.defaultProps)for(r in e=c.defaultProps,e)f[r]===void 0&&(f[r]=e[r]);return{$$typeof:s,type:c,key:l,ref:d,props:f,_owner:n.current}}return u.Fragment=a,u.jsx=_,u.jsxs=_,u}var v;function q(){return v||(v=1,R.exports=h()),R.exports}var w=q(),g=O();const P=b(g),C=E({__proto__:null,default:P},[g]);var p={},x;function S(){if(x)return p;x=1;var t=j();return p.createRoot=t.createRoot,p.hydrateRoot=t.hydrateRoot,p}var k=S();const J=b(k);export{P as R,C as a,J as b,w as j,g as r};
