import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./index-CUT_71ux.js";import"./_commonjsHelpers-CqkleIqs.js";const I="_ratings_1twlx_1",A="_sm_1twlx_8",N="_starBtn_1twlx_8",E="_md_1twlx_13",H="_lg_1twlx_18",O="_label_1twlx_23",W="_stars_1twlx_35",F="_filled_1twlx_68",K="_readonly_1twlx_71",s={ratings:I,sm:A,starBtn:N,md:E,lg:H,label:O,stars:W,filled:F,readonly:K},L={star:{filled:a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),empty:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})},heart:{filled:a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),empty:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})},circle:{filled:a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("circle",{cx:"12",cy:"12",r:"10"})}),empty:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("circle",{cx:"12",cy:"12",r:"10"})})}};function S({max:n=5,value:w,defaultValue:z=0,onChange:_,readonly:t=!1,size:C="md",icon:b="star",showLabel:k=!1,className:j="",theme:$}){const[B,M]=o.useState(z),[T,V]=o.useState(0),i=o.useId(),l=w!==void 0?w:B,c=o.useCallback(r=>{t||(M(r),_?.(r))},[t,_]),q=o.useCallback((r,u)=>{if(!t){if(r.key==="ArrowRight"||r.key==="ArrowUp"){r.preventDefault();const e=Math.min(u+1,n);c(e),document.getElementById(`${i}-star-${e}`)?.focus()}else if(r.key==="ArrowLeft"||r.key==="ArrowDown"){r.preventDefault();const e=Math.max(u-1,1);c(e),document.getElementById(`${i}-star-${e}`)?.focus()}}},[t,n,c,i]),R=T||l;return a.jsxs("div",{className:`${s.ratings} ${s[C]} ${t?s.readonly:""} ${j}`,role:"group","aria-label":`Rating: ${l} out of ${n}`,"data-component-theme":$,children:[a.jsx("div",{className:s.stars,role:"radiogroup",children:Array.from({length:n},(r,u)=>{const e=u+1,d=e<=R;return a.jsx("button",{id:`${i}-star-${e}`,type:"button",className:`${s.starBtn} ${d?s.filled:""}`,onClick:()=>c(e),onMouseEnter:()=>!t&&V(e),onMouseLeave:()=>!t&&V(0),onKeyDown:D=>q(D,e),role:"radio","aria-checked":e===l,"aria-label":`${e} ${b}${e!==1?"s":""}`,tabIndex:e===l||l===0&&e===1?0:-1,disabled:t,children:d?L[b].filled:L[b].empty},e)})}),k&&a.jsxs("span",{className:s.label,children:[l," / ",n]})]})}S.__docgenInfo={description:"",methods:[],displayName:"Ratings",props:{max:{required:!1,tsType:{name:"number"},description:"Maximum number of stars/icons",defaultValue:{value:"5",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"Current value (controlled)"},defaultValue:{required:!1,tsType:{name:"number"},description:"Default value (uncontrolled)",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when rating changes"},readonly:{required:!1,tsType:{name:"boolean"},description:"Read-only display mode",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"'star' | 'heart' | 'circle'",elements:[{name:"literal",value:"'star'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'circle'"}]},description:"Icon type",defaultValue:{value:"'star'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show numeric label",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Force a specific theme for this component"}}};const P={title:"Components/Ratings",component:S,tags:["autodocs"],argTypes:{max:{description:"Maximum number of stars/icons",control:{type:"number",min:1,max:10}},value:{description:"Current value (controlled mode)",control:{type:"number",min:0,max:10}},defaultValue:{description:"Default value (uncontrolled mode)",control:{type:"number",min:0,max:10}},readonly:{description:"Read-only display mode",control:{type:"boolean"}},size:{description:"Size variant",control:{type:"select"},options:["sm","md","lg"]},icon:{description:"Icon type",control:{type:"select"},options:["star","heart","circle"]},showLabel:{description:"Show numeric label",control:{type:"boolean"}},theme:{description:"Component-level theme override",control:{type:"select"},options:["light","dark"]},className:{description:"Additional CSS class",control:{type:"text"}}},args:{max:5,defaultValue:3,readonly:!1,size:"md",icon:"star",showLabel:!0}},m={},p={args:{icon:"star",defaultValue:4,size:"lg"}},f={args:{icon:"heart",defaultValue:3,size:"lg"}},g={args:{icon:"circle",defaultValue:2,size:"lg"}},v={args:{value:4,readonly:!0,showLabel:!0}},h={args:{size:"sm",defaultValue:5,max:10}},x={args:{size:"lg",icon:"heart",defaultValue:3}},y={args:{max:10,defaultValue:7,icon:"star",size:"md",showLabel:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'star',
    defaultValue: 4,
    size: 'lg'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'heart',
    defaultValue: 3,
    size: 'lg'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'circle',
    defaultValue: 2,
    size: 'lg'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    readonly: true,
    showLabel: true
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: 5,
    max: 10
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    icon: 'heart',
    defaultValue: 3
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    max: 10,
    defaultValue: 7,
    icon: 'star',
    size: 'md',
    showLabel: true
  }
}`,...y.parameters?.docs?.source}}};const Q=["Default","Stars","Hearts","Circles","ReadOnly","Small","Large","CustomMax"];export{g as Circles,y as CustomMax,m as Default,f as Hearts,x as Large,v as ReadOnly,h as Small,p as Stars,Q as __namedExportsOrder,P as default};
