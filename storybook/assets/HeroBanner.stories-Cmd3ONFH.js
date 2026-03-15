import{j as a}from"./jsx-runtime-u17CrQMm.js";const D="_hero_14b9c_2",j="_container_14b9c_15",P="_content_14b9c_45",q="_badge_14b9c_56",A="_title_14b9c_69",B="_description_14b9c_90",U="_actions_14b9c_97",k="_cta_14b9c_109",F="_visual_14b9c_140",I="_imageWrapper_14b9c_149",E="_blob_14b9c_156",V="_image_14b9c_149",O="_floatingCard_14b9c_209",H="_cardIcon_14b9c_253",R="_cardValue_14b9c_265",L="_cardLabel_14b9c_273",W="_trend_14b9c_279",$="_up_14b9c_286",G="_down_14b9c_294",e={hero:D,container:j,content:P,badge:q,title:A,description:B,actions:U,cta:k,visual:F,imageWrapper:I,blob:E,"blob-bounce":"_blob-bounce_14b9c_1","blob-wobble":"_blob-wobble_14b9c_1",image:V,floatingCard:O,"float-up-down":"_float-up-down_14b9c_1",cardIcon:H,cardValue:R,cardLabel:L,trend:W,up:$,down:G,"card-1":"_card-1_14b9c_303","card-2":"_card-2_14b9c_309","card-3":"_card-3_14b9c_315","card-4":"_card-4_14b9c_321","image-left":"_image-left_14b9c_328","content-only":"_content-only_14b9c_338"},M={organic:"40% 60% 70% 30% / 40% 50% 60% 50%",circle:"50%",square:"12%",pill:"9999px",leaf:"0% 100% 0% 100% / 0% 100% 0% 100%"},f=({title:h,badge:m,description:p,ctaText:g,ctaHref:v="#",imageSrc:u,imageAlt:_="",imagePosition:x="right",floatingCards:y=[],className:w="",theme:S,blobShape:i="organic",blobAnimationDuration:T})=>{const C=[e.hero,u?e[`image-${x}`]:e["content-only"],w].filter(Boolean).join(" "),N={"--blob-shape":M[i]||i,"--blob-animation-duration":T};return a.jsx("section",{className:C,"data-theme":S,style:N,children:a.jsxs("div",{className:e.container,children:[a.jsxs("div",{className:e.content,children:[m&&a.jsx("span",{className:e.badge,children:m}),a.jsx("h1",{className:e.title,children:h}),p&&a.jsx("p",{className:e.description,children:p}),g&&a.jsx("div",{className:e.actions,children:a.jsxs("a",{href:v,className:e.cta,children:[g,a.jsx("span",{className:e.arrow,"aria-hidden":"true",children:"→"})]})})]}),u&&a.jsx("div",{className:e.visual,children:a.jsxs("div",{className:e.imageWrapper,children:[a.jsx("div",{className:e.blob,"data-organic":i==="organic"||!i,"aria-hidden":"true"}),a.jsx("img",{src:u,alt:_,className:e.image}),y.map((t,b)=>a.jsxs("div",{className:`${e.floatingCard} ${e[`card-${b%4+1}`]}`,children:[t.icon&&a.jsx("div",{className:e.cardIcon,"aria-hidden":"true",children:t.icon}),a.jsxs("div",{className:e.cardContent,children:[a.jsx("div",{className:e.cardValue,children:t.value}),a.jsx("div",{className:e.cardLabel,children:t.label})]}),t.trend&&a.jsx("div",{className:`${e.trend} ${t.trend.isUp?e.up:e.down}`,children:t.trend.value})]},b))]})})]})})};f.__docgenInfo={description:`A premium, highly configurable Hero Section component.
Supports image positioning, floating info cards, and full theming.`,methods:[],displayName:"HeroBanner",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Main heading of the hero section"},badge:{required:!1,tsType:{name:"string"},description:"Smaller text displayed above the title"},description:{required:!1,tsType:{name:"string"},description:"Descriptive text under the title"},ctaText:{required:!1,tsType:{name:"string"},description:"Primary call to action button text"},ctaHref:{required:!1,tsType:{name:"string"},description:"Link for the primary call to action",defaultValue:{value:"'#'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:"Source for the main image"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the main image",defaultValue:{value:"''",computed:!1}},imagePosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Position of the image relative to the content
@default 'right'`,defaultValue:{value:"'right'",computed:!1}},floatingCards:{required:!1,tsType:{name:"Array",elements:[{name:"FloatingCardData"}],raw:"FloatingCardData[]"},description:"Optional floating stats/info cards to display over or near the image",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for the root element",defaultValue:{value:"''",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Component level theme override"},blobShape:{required:!1,tsType:{name:"union",raw:"PredefinedBlobShape | string",elements:[{name:"union",raw:"'organic' | 'circle' | 'square' | 'pill' | 'leaf'",elements:[{name:"literal",value:"'organic'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"},{name:"literal",value:"'pill'"},{name:"literal",value:"'leaf'"}]},{name:"string"}]},description:`Custom CSS border-radius for the background blob or a predefined shape key
@default 'organic'`,defaultValue:{value:"'organic'",computed:!1}},blobAnimationDuration:{required:!1,tsType:{name:"string"},description:`Animation duration for the blob movement (e.g. '15s', '0s' to disable)
@default '20s'`}}};const Y={title:"Components/HeroBanner",component:f,tags:["autodocs"],argTypes:{title:{control:"text"},badge:{control:"text"},description:{control:"text"},ctaText:{control:"text"},imagePosition:{control:"radio",options:["left","right"]},blobShape:{control:"select",options:["organic","circle","square","pill","leaf"],description:"Predefined shape for the background blob"},blobAnimationDuration:{control:"text",description:"CSS duration string for blob animation"}},parameters:{layout:"fullscreen"}},n={args:{badge:"Welcome To Techsauq",title:a.jsxs(a.Fragment,{children:["Transforming a ",a.jsx("br",{}),"Ideas into a ",a.jsx("br",{}),a.jsx("span",{children:"Digital world"})]}),description:"Crafting intuitive designs that captivate and inspire. Building robust websites that elevate brands online. Empowering businesses with innovative digital solutions.",ctaText:"Book a Consultation",imageSrc:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",imageAlt:"Team working together",imagePosition:"right",floatingCards:[{label:"Pricing",value:"12%",trend:{value:"96% Quality",isUp:!0}},{label:"Overall Activity",value:"98%",trend:{value:"Growth",isUp:!0}}]}},r={args:{...n.args,floatingCards:[{label:"Design & Development",value:"Top Rated",trend:{value:"100%",isUp:!0}},{label:"Best Services",value:"Premium"},{label:"Our Clients",value:"500+",trend:{value:"Happy",isUp:!0}},{label:"Overall Activity",value:"96%",trend:{value:"+12%",isUp:!0}}]}},o={args:{...n.args,imagePosition:"left"}},s={args:{badge:"New Feature",title:"The Future of MFE is Here",description:"Build faster, scale easier, and maintain control with our modular component library.",ctaText:"Get Started Now",imagePosition:"right"}},l={args:{badge:"Limited Offer",title:"Elevate Your Brand Identity",description:"Specialized solutions for modern businesses looking to disrupt the market.",ctaText:"View Portfolio",imageSrc:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",imageAlt:"Analytics Dashboard",floatingCards:[{label:"Performance",value:"99.9%",trend:{value:"+5%",isUp:!0}},{label:"Uptime",value:"24/7"}]}},c={args:{...r.args,blobShape:"leaf",blobAnimationDuration:"10s"}},d={args:{...r.args,blobShape:"pill",blobAnimationDuration:"15s"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    badge: 'Welcome To Techsauq',
    title: <>
        Transforming a <br />
        Ideas into a <br />
        <span>Digital world</span>
      </>,
    description: 'Crafting intuitive designs that captivate and inspire. Building robust websites that elevate brands online. Empowering businesses with innovative digital solutions.',
    ctaText: 'Book a Consultation',
    imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Team working together',
    imagePosition: 'right',
    floatingCards: [{
      label: 'Pricing',
      value: '12%',
      trend: {
        value: '96% Quality',
        isUp: true
      }
    }, {
      label: 'Overall Activity',
      value: '98%',
      trend: {
        value: 'Growth',
        isUp: true
      }
    }]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    floatingCards: [{
      label: 'Design & Development',
      value: 'Top Rated',
      trend: {
        value: '100%',
        isUp: true
      }
    }, {
      label: 'Best Services',
      value: 'Premium'
    }, {
      label: 'Our Clients',
      value: '500+',
      trend: {
        value: 'Happy',
        isUp: true
      }
    }, {
      label: 'Overall Activity',
      value: '96%',
      trend: {
        value: '+12%',
        isUp: true
      }
    }]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imagePosition: 'left'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    badge: 'New Feature',
    title: 'The Future of MFE is Here',
    description: 'Build faster, scale easier, and maintain control with our modular component library.',
    ctaText: 'Get Started Now',
    imagePosition: 'right'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    badge: 'Limited Offer',
    title: 'Elevate Your Brand Identity',
    description: 'Specialized solutions for modern businesses looking to disrupt the market.',
    ctaText: 'View Portfolio',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Analytics Dashboard',
    floatingCards: [{
      label: 'Performance',
      value: '99.9%',
      trend: {
        value: '+5%',
        isUp: true
      }
    }, {
      label: 'Uptime',
      value: '24/7'
    }]
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...FullDesign.args,
    blobShape: 'leaf',
    blobAnimationDuration: '10s'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...FullDesign.args,
    blobShape: 'pill',
    blobAnimationDuration: '15s'
  }
}`,...d.parameters?.docs?.source}}};const J=["Default","FullDesign","ImageLeft","NoImage","CustomContent","CustomBlob","PillShape"];export{c as CustomBlob,l as CustomContent,n as Default,r as FullDesign,o as ImageLeft,s as NoImage,d as PillShape,J as __namedExportsOrder,Y as default};
