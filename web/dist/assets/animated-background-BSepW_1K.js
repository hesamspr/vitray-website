import{c as v,r as h,j as a,A as f,f as y,d as k}from"./index-DXr89d6g.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=v("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);function A({children:c,className:o,enableHover:i=!1,defaultValue:r,transition:d={type:"spring",bounce:.2,duration:.3}}){const[l,s]=h.useState(r??null),u=e=>{i&&s(e)},m=()=>{i&&s(null)},p=e=>{i||s(n=>n===e?null:e)};return a.jsx("div",{className:k("relative",o),children:c.map((e,n)=>{const t=e.props["data-id"]??String(n),x=l===t;return a.jsxs("div",{"data-id":t,className:"relative cursor-pointer",onMouseEnter:()=>u(t),onMouseLeave:m,onClick:()=>p(t),children:[a.jsx(f,{initial:!1,children:x&&a.jsx(y.div,{layoutId:"background",className:"absolute inset-0 rounded-2xl bg-white/5",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:d})}),a.jsx("div",{className:"relative z-10",children:e})]},t)})})}export{A,g as L};
