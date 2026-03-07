import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./index-CUT_71ux.js";import"./_commonjsHelpers-CqkleIqs.js";const D="_profileCard_1r7rt_12",U="_isLoading_1r7rt_35",E="_avatar_1r7rt_38",A="_background_1r7rt_39",H="_name_1r7rt_40",W="_username_1r7rt_41",R="_bio_1r7rt_42",X="_statValue_1r7rt_43",$="_statLabel_1r7rt_44",G="_pulse_1r7rt_1",z="_split_1r7rt_54",O="_header_1r7rt_54",J="_content_1r7rt_69",K="_full_1r7rt_73",Q="_fullBg_1r7rt_78",Y="_overlay_1r7rt_88",Z="_titleSection_1r7rt_111",ee="_nameRow_1r7rt_114",ae="_verifiedIcon_1r7rt_118",se="_statsBar_1r7rt_134",te="_statItem_1r7rt_139",re="_followBtn_1r7rt_152",oe="_instagram_1r7rt_161",ne="_statIcon_1r7rt_235",ie="_actions_1r7rt_250",le="_platformBadge_1r7rt_285",a={profileCard:D,isLoading:U,avatar:E,background:A,name:H,username:W,bio:R,statValue:X,statLabel:$,pulse:G,split:z,header:O,content:J,full:K,fullBg:Q,overlay:Y,titleSection:Z,nameRow:ee,verifiedIcon:ae,statsBar:se,statItem:te,followBtn:re,instagram:oe,statIcon:ne,actions:ie,platformBadge:le};function ce(s){const[B,y]=I.useState(null),[C,c]=I.useState(!1),[N,f]=I.useState(null);return I.useEffect(()=>{if(!s){y(null),c(!1),f(null);return}(async()=>{c(!0),f(null);try{const n=new URL(s),g=n.hostname.toLowerCase();let m={};if(g.includes("github.com")){const h=n.pathname.split("/").filter(Boolean)[0],i=await fetch(`https://api.github.com/users/${h}`);if(i.ok){const t=await i.json();m={name:t.name||t.login,username:t.login,bio:t.bio,image:t.avatar_url,stats:{followers:t.followers,following:t.following,posts:t.public_repos},platform:"github"}}}else{const h=`https://api.microlink.io?url=${encodeURIComponent(s)}&prerender=true`,i=await fetch(h);if(i.ok){const o=(await i.json()).data;if(o.title?.toLowerCase().includes("login")||o.title?.toLowerCase().includes("sign up")||o.title?.toLowerCase().includes("redirecting")){const r=n.pathname.split("/").filter(Boolean).pop()||"";m={name:r.charAt(0).toUpperCase()+r.slice(1),username:r,platform:T(g),bio:"Profile data restricted by platform. Visit link for more info."}}else{let r=o.title||o.author||"";r=r.replace(" | LinkedIn","").replace(" - Instagram photos and videos","").replace(" (@"," (").split(" (")[0].split(" • ")[0],m={name:r,username:o.author||n.pathname.split("/").filter(Boolean).pop(),bio:o.description,image:o.image?.url||o.logo?.url,platform:T(g)}}}}y(m)}catch(n){console.error("Error fetching profile data:",n),f("Failed to fetch profile data")}finally{c(!1)}})()},[s]),{data:B,loading:C,error:N}}function T(s){return s.includes("instagram.com")?"instagram":s.includes("linkedin.com")?"linkedin":s.includes("twitter.com")||s.includes("x.com")?"x":s.includes("github.com")?"github":"website"}const v={Verified:({className:s})=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,children:e.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-3.7-3.7 1.4-1.4 2.3 2.3 5.3-5.3 1.4 1.4-6.7 6.7z"})}),Followers:({className:s})=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:s,children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"})]}),Following:({className:s})=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:s,children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),e.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),e.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),Posts:({className:s})=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:s,children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("path",{d:"M9 12l2 2 4-4"})]}),Instagram:()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),e.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),e.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),X:()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),GitHub:()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),LinkedIn:()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),e.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),e.jsx("circle",{cx:"4",cy:"4",r:"2"})]})};function M({name:s,username:B,bio:y,image:C,variant:c="split",platform:N,stats:f,isVerified:P=!1,followLabel:n="Follow +",onFollow:g,className:m="",theme:h,profileUrl:i}){const{data:t,loading:o}=ce(i),F=s||t?.name||"Loading...",r=B||t?.username,q=y||t?.bio,L=C||t?.image||"",l=f||t?.stats,d=N||t?.platform,V=d?v[d==="x"?"X":d.charAt(0).toUpperCase()+d.slice(1)]:null;return e.jsxs("div",{className:`${a.profileCard} ${a[c]} ${d?a[d]:""} ${o?a.isLoading:""} ${m}`,"data-component-theme":h,children:[c==="full"&&e.jsxs("div",{className:a.fullBg,children:[L&&e.jsx("img",{src:L,alt:"",className:a.background,"aria-hidden":"true"}),e.jsx("div",{className:a.overlay})]}),e.jsx("div",{className:a.header,children:L&&e.jsx("img",{src:L,alt:F,className:a.avatar})}),e.jsxs("div",{className:a.content,children:[e.jsxs("div",{className:a.titleSection,children:[e.jsxs("div",{className:a.nameRow,children:[e.jsx("h3",{className:a.name,children:F}),P&&e.jsx(v.Verified,{className:a.verifiedIcon})]}),r&&e.jsx("span",{className:a.username,children:r.startsWith("@")?r:`@${r}`})]}),q&&e.jsx("p",{className:a.bio,children:q}),l&&e.jsxs("div",{className:a.statsBar,children:[l.followers!==void 0&&e.jsxs("div",{className:a.statItem,children:[e.jsx(v.Followers,{className:a.statIcon}),e.jsx("span",{className:a.statValue,children:l.followers}),e.jsx("span",{className:a.statLabel,children:"followers"})]}),l.posts!==void 0&&e.jsxs("div",{className:a.statItem,children:[e.jsx(v.Posts,{className:a.statIcon}),e.jsx("span",{className:a.statValue,children:l.posts}),e.jsx("span",{className:a.statLabel,children:"posts"})]}),l.following!==void 0&&e.jsxs("div",{className:a.statItem,children:[e.jsx(v.Following,{className:a.statIcon}),e.jsx("span",{className:a.statValue,children:l.following}),e.jsx("span",{className:a.statLabel,children:"following"})]})]}),e.jsxs("div",{className:a.actions,children:[e.jsx("button",{className:a.followBtn,onClick:g,type:"button",children:n}),V&&e.jsx("div",{className:a.platformBadge,children:e.jsx(V,{})})]})]})]})}M.__docgenInfo={description:"",methods:[],displayName:"ProfileCard",props:{name:{required:!1,tsType:{name:"string"},description:"Profile name"},username:{required:!1,tsType:{name:"string"},description:"Professional title / Username"},bio:{required:!1,tsType:{name:"string"},description:"Bio or description"},image:{required:!1,tsType:{name:"string"},description:"Profile image URL"},variant:{required:!1,tsType:{name:"union",raw:"'split' | 'full'",elements:[{name:"literal",value:"'split'"},{name:"literal",value:"'full'"}]},description:"Visual variant",defaultValue:{value:"'split'",computed:!1}},platform:{required:!1,tsType:{name:"union",raw:"'instagram' | 'x' | 'github' | 'linkedin' | 'website'",elements:[{name:"literal",value:"'instagram'"},{name:"literal",value:"'x'"},{name:"literal",value:"'github'"},{name:"literal",value:"'linkedin'"},{name:"literal",value:"'website'"}]},description:"Primary platform branding"},stats:{required:!1,tsType:{name:"ProfileStats"},description:"Profile statistics"},isVerified:{required:!1,tsType:{name:"boolean"},description:"Is the profile verified?",defaultValue:{value:"false",computed:!1}},followLabel:{required:!1,tsType:{name:"string"},description:"Label for the follow button",defaultValue:{value:"'Follow +'",computed:!1}},onFollow:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when follow button is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Force a specific theme for this component"},profileUrl:{required:!1,tsType:{name:"string"},description:"Social media profile URL (auto-resolves platform and username)"}}};const ue={title:"Components/ProfileCard",component:M,parameters:{layout:"centered"},tags:["autodocs"]},p={args:{name:"Sophie Bennett",username:"sophie.design",bio:"Product Designer who focuses on simplicity & usability. Based in London.",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",variant:"split",platform:"instagram",isVerified:!0,stats:{followers:"12.5k",posts:156,following:432}}},u={args:{...p.args,variant:"full",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"}},w={args:{name:"Elon Musk",username:"@elonmusk",bio:"Owner of X, Neuralink, SpaceX and Tesla. Mars enthusiast.",image:"https://images.unsplash.com/photo-1567532939604-b6c5b0adcc80?q=80&w=1000&auto=format&fit=crop",variant:"split",platform:"x",isVerified:!0,stats:{followers:"170M",following:541}}},x={args:{name:"Linus Torvalds",username:"torvalds",bio:"The creator of Linux and Git. Professional curmudgeon.",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",variant:"split",platform:"github",stats:{posts:"24k",followers:"180k"},followLabel:"Follow"}},_={args:{...u.args,theme:"light"}},S={args:{name:"Akash Vatsa",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",profileUrl:"https://www.instagram.com/vatsa_akash/",bio:"Entrepreneur @ ICW Technologies. Building Moddular MFE.",variant:"full",stats:{followers:"1.2k",posts:24,following:432}}},b={args:{profileUrl:"https://github.com/vatsaakash",variant:"full"}},k={args:{profileUrl:"https://www.instagram.com/vatsa_akash/",variant:"full"}},j={args:{profileUrl:"https://www.linkedin.com/in/vatsaakash/",variant:"split"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Sophie Bennett',
    username: 'sophie.design',
    bio: 'Product Designer who focuses on simplicity & usability. Based in London.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    variant: 'split',
    platform: 'instagram',
    isVerified: true,
    stats: {
      followers: '12.5k',
      posts: 156,
      following: 432
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Instagram Style Split Card",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...InstagramSplit.args,
    variant: 'full',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop'
  }
}`,...u.parameters?.docs?.source},description:{story:"Instagram Style Full Card with Glassmorphism",...u.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Elon Musk',
    username: '@elonmusk',
    bio: 'Owner of X, Neuralink, SpaceX and Tesla. Mars enthusiast.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6c5b0adcc80?q=80&w=1000&auto=format&fit=crop',
    variant: 'split',
    platform: 'x',
    isVerified: true,
    stats: {
      followers: '170M',
      following: 541
    }
  }
}`,...w.parameters?.docs?.source},description:{story:"X (formerly Twitter) Style Split Card",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Linus Torvalds',
    username: 'torvalds',
    bio: 'The creator of Linux and Git. Professional curmudgeon.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    variant: 'split',
    platform: 'github',
    stats: {
      posts: '24k',
      followers: '180k'
    },
    followLabel: 'Follow'
  }
}`,...x.parameters?.docs?.source},description:{story:"GitHub Style Split Card",...x.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...InstagramFull.args,
    theme: 'light'
  }
}`,..._.parameters?.docs?.source},description:{story:"Full Variant Light Mode",..._.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Akash Vatsa',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    profileUrl: 'https://www.instagram.com/vatsa_akash/',
    bio: 'Entrepreneur @ ICW Technologies. Building Moddular MFE.',
    variant: 'full',
    stats: {
      followers: '1.2k',
      posts: 24,
      following: 432
    }
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    profileUrl: 'https://github.com/vatsaakash',
    variant: 'full'
  }
}`,...b.parameters?.docs?.source},description:{story:"Live Fetch Demo - Paste any social media URL in the profileUrl control!",...b.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    profileUrl: 'https://www.instagram.com/vatsa_akash/',
    variant: 'full'
  }
}`,...k.parameters?.docs?.source},description:{story:"Instagram Live Fetch Demo",...k.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    profileUrl: 'https://www.linkedin.com/in/vatsaakash/',
    variant: 'split'
  }
}`,...j.parameters?.docs?.source},description:{story:"LinkedIn Live Fetch Demo",...j.parameters?.docs?.description}}};const fe=["InstagramSplit","InstagramFull","XProfile","GitHubProfile","LightFull","AkashInstagram","LiveFetchDemo","InstagramLiveFetch","LinkedInLiveFetch"];export{S as AkashInstagram,x as GitHubProfile,u as InstagramFull,k as InstagramLiveFetch,p as InstagramSplit,_ as LightFull,j as LinkedInLiveFetch,b as LiveFetchDemo,w as XProfile,fe as __namedExportsOrder,ue as default};
