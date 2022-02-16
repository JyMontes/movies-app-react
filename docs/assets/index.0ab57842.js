import{s as a,j as m,r as p,u as v,F as x,a as u,B as y,R as w,b as g,c as k,d as N}from"./vendor.46f1ae18.js";const C=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function d(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=d(o);fetch(o.href,r)}};C();const j=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`,R=a.div`
    margin-top:50px;
    height: calc(${t=>t.height}vh - 50px);
    width: 90%;
    border-radius: 10px 10px 0 0;
    background: url(${t=>t.src}) no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.5;
`,$=a.div`
    height: calc(${t=>t.height})vh;
    width: 100%;
    color: white;
    background: black;
`,B=a.div`
    width:100%;
    height: ${t=>t.height}vh;
    position: absolute;
    top: 0;
    margin: auto;
`,D=a.div`
    width:auto;
    height: ${t=>t.height}vh;
    background: url(${t=>t.src}) no-repeat;
    background-position: top;
    background-size: cover;
`,F=a.div`
    width:100%;
    height: ${t=>t.height}vh;
    position: absolute;
    top: 0;
    z-index: 2;
    background: linear-gradient(transparent 0, black 90%);
`,S=a.div`
    width:50px;
    height: 50px;
    background: url(${t=>t.src}) no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 50%;
    border: 2px solid white;
`,q=a.button`
    width: 80%;
    margin: auto;
    background: red;
    border: none;
    color: white;
    padding:5px;
    margin-top: 20px;
    border-radius: 7px;
    cursor: pointer;
`;var b="/assets/black-widow.a3e0864f.png";const e=m.exports.jsx,s=m.exports.jsxs,l=m.exports.Fragment,A=()=>{const[t,n]=p.exports.useState([]),d=async()=>{const c=(await(await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=7b871c42fe90dc8e8ab2ee201ce57555")).json()).data.results.map(h=>({name:h.name,description:h.description,thumbnail:`${h.thumbnail.path}.${h.thumbnail.extension}`}));console.log(c),n(c)};return p.exports.useEffect(()=>{d()},[]),e(l,{children:t.length>0?s(l,{children:[e(R,{height:50,src:t[7].thumbnail}),e(B,{height:50,children:e(D,{height:50,src:b})}),e(F,{height:50})]}):e("section",{className:"loading",children:"Cargando...."})})},f=p.exports.createContext({}),L=()=>{const t=v(),{state:n}=p.exports.useContext(f);console.log(n);const d=()=>{t("/details/2")};return e(l,{children:s($,{children:[e("section",{className:"icon-info",children:e(x,{size:25,color:"red"})}),e("section",{className:"title-info",children:n.name}),e("section",{className:"details-info",children:s("section",{className:"list",children:[e("div",{children:"2020"}),e("div",{children:"Fantastic"}),e("div",{children:"2h 35min"})]})}),s("section",{className:"star",children:[e(u,{color:"orange"}),e(u,{color:"orange"}),e(u,{color:"orange"}),e(u,{color:"orange"}),e(u,{color:"orange"})]}),s("section",{className:"description",children:[e("div",{className:"description-title",children:"Plot Summary"}),e("div",{className:"desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eaque quo. Quam nulla incidunt atque voluptatibus deserunt assumenda sint nemo, fuga ex. Velit illo reprehenderit ipsa eum aliquid exercitationem odio."})]}),s("section",{className:"description",children:[e("div",{className:"description-title",children:"Cast"}),e("div",{className:"images",children:[1,2,3,4].map(i=>e(S,{src:b},i))}),e("div",{className:"actors",children:["Steve Rogers","Tom Holland","Robert Downey","Bruce Banner"].map(i=>e("span",{children:i},i))})]}),e("section",{className:"button-buy",children:e(q,{onClick:d,children:"Comprar"})})]})})},P=()=>e(l,{children:s(j,{children:[e(A,{}),e(L,{})]})}),z=()=>e(l,{children:"Hola Detalle"}),I={name:"Black Widow",url:"http://marvel.io/bw",time:"2 horas"},M=({children:t})=>e(f.Provider,{value:{state:I},children:t}),O=()=>e(l,{children:e(M,{children:e(y,{children:s(w,{children:[e(g,{path:"/",element:e(P,{})}),e(g,{path:"/details/:id",element:e(z,{})})]})})})});k.render(e(N.StrictMode,{children:e(O,{})}),document.getElementById("root"));
