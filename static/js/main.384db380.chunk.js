(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],{17:function(n,e,t){},18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var i,o,r,a,c,s,d,u,l,p,b,f,m=t(0),x=t.n(m),O=t(9),j=t.n(O),g=(t(17),t(4)),h=(t(18),t(2)),k=t(3),w=k.a.div(i||(i=Object(h.a)(["\nwidth: 650px;\nheight: 400px;\nbackground-color: #82968C;\nborder:5px solid #E87461;\nborder-radius: 20px;\nmargin: auto;\ndisplay: grid;\ngrid-template-columns: 1fr 320px 1.5fr;\ngrid-template-rows: 1fr 1fr 3fr;\nopacity: ","\n"])),(function(n){return n.loading||!n.isOn?".7":"1"})),v=t(1),y=function(n){var e=n.children,t=n.loading,i=n.isOn;return Object(v.jsx)(w,{id:"drum-machine",loading:t,isOn:i,children:e})},S=Object(k.b)(o||(o=Object(h.a)(["\n  from {\n    transform: scale(.1, .1);\n    background: black;\n  }\n  35% {\n    transform: scale(1, .1);\n    background: transparent;\n  }\n  \n  50% {\n    transform: scale(1, 1);\n  }\n  90% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]))),C=k.a.div(r||(r=Object(h.a)(["\n  width: 300px;\n  height: 50px;\n  background-color: #6A706E;\n  border: 2px solid #60495a;\n  border-radius: 10px;\n  margin: 30px auto 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),F=k.a.h1(a||(a=Object(h.a)(["\n  text-align: center;\n  font-weight: 300;\n  \n  &.turningOn {\n    animation: "," 4s;\n  }\n  &.turningOff {\n    animation: "," 4s reverse;\n  }\n"])),S,S),E=function(n){var e=n.text,t=n.isOn,i=Object(m.useRef)(null);return Object(m.useEffect)((function(){t?(i.current.classList.add("turningOn"),setTimeout((function(){return i.current.classList.remove("turningOn")}),4e3)):(i.current.classList.add("turningOff"),setTimeout((function(){return i.current.classList.remove("turningOff")}),4e3))}),[t]),Object(v.jsx)(C,{id:"display",children:Object(v.jsx)(F,{ref:i,children:e})})},T=k.a.button(c||(c=Object(h.a)(["\n  appearance: none;\n  height: 80px;\n  width: 100px;\n  background-color: ",";\n  border: 2px solid #60495a;\n  border-radius: 10px;\n  box-shadow: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: ",";\n  cursor: pointer;\n  font-weight: 300;\n  font-size: 30px;\n  text-shadow: ",";\n  outline: none;\n  opacity: ",";\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n\n  &:disabled {\n    text-shadow: none;\n    box-shadow: none;\n  }\n"])),(function(n){return n.isActive?"#ffe66d":"#82968c"}),(function(n){return n.isActive?"none":"3px 3px 5px 1px rgba(0,0,0,0.5), inset 0 0 10px 10px ".concat(n.color.default)}),(function(n){return n.isOn?"auto":"none"}),(function(n){return n.isActive?"none":"3px 3px 5px rgba(0,0,0,0.5)"}),(function(n){return n.isActive?".8":"1"})),L=function(n){var e=n.sound,t=n.letter,i=n.id,o=n.clickFunction,r=n.isOn,a=n.volume,c=n.color,s=n.loading,d=Object(m.useRef)(null),u=Object(m.useRef)(null),l=Object(m.useRef)(a),p=Object(m.useState)(!1),b=Object(g.a)(p,2),f=b[0],x=b[1];Object(m.useEffect)((function(){l.current=a}),[a]);var O=function(){x(!0),setTimeout((function(){x(!1)}),100),u.current.volume=l.current,u.current.currentTime=0,u.current.play()};return Object(m.useEffect)((function(){d.current.addEventListener("click",O)}),[]),Object(v.jsxs)(T,{isActive:f,id:i,isOn:r,className:"drum-pad ".concat(t),onClick:o,ref:d,disabled:!r&&!s,color:c,children:[t,Object(v.jsx)("audio",{className:"clip",ref:u,id:t,src:e})]})},A=k.a.div(s||(s=Object(h.a)(["\nwidth: 50px;\nheight: 50px;\nmargin: 30px auto 10px;\nborder-radius: 50%;\nbackground-color: ",";\nborder: 2px solid ",";\ncursor: pointer;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nfont-size: 30px;\ncolor: ",";\nbox-shadow: ",";\n\n&.loading {\n  border: 5px solid #eee;\n  border-top: 5px solid #353535;\n  animation: spin .8s linear infinite;\n  background: #6a706e;\n  box-shadow: none;\n  cursor: default;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  & i {\n    display: none;\n  }\n}\n"])),(function(n){return n.isOn?"#0ae7ff":"#6a706e"}),(function(n){return n.isOn?"#0ae7ff":"#454a48"}),(function(n){return n.isOn?"#00a5b8":"#454a48"}),(function(n){return n.isOn?"0 0 20px 7px #47edff":"none"})),N=function(n){var e=n.isOn,t=n.onClick,i=n.loading,o=Object(m.useRef)(null);return Object(m.useEffect)((function(){i?o.current.classList.add("loading"):o.current.classList.remove("loading")}),[i]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(A,{isOn:e,onClick:t,loading:i,ref:o,children:Object(v.jsx)("i",{className:"fas fa-power-off"})})})},H=k.a.div(d||(d=Object(h.a)(["\n  \n  grid-column: 1/2;\n  grid-row: 2/4;\n  width: 50px;\n  margin-left: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),R=k.a.input(u||(u=Object(h.a)(["\n  transform: rotate(-90deg);\n  -webkit-appearance: none;\n  background: transparent;\n  width: 250px;\n\n  &:disabled {\n    &::-webkit-slider-thumb,\n    ::-webkit-slider-runnable-track {\n      cursor: default;\n    }\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: 1px solid #000000;\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: #ffffff;\n    cursor: pointer;\n    margin-top: -14px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n\n  &::-moz-range-thumb {\n\n  }\n\n  &::-ms-thumb {\n\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    background: #3071a9;\n    border-radius: 1.3px;\n    border: 0.2px solid #010101;\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    background: #367edb;\n  }\n\n  &::-moz-range-track {\n\n  }\n\n  &::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-fill-lower {\n    background: #2a6495;\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n\n  &:focus::-ms-fill-lower {\n    background: #3071a9;\n  }\n\n  &::-ms-fill-upper {\n    background: #3071a9;\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n\n  &:focus::-ms-fill-upper {\n    background: #367edb;\n  }\n"]))),D=function(n){var e=n.onChange,t=n.isOn;return Object(v.jsx)(H,{children:Object(v.jsx)(R,{type:"range",min:"0",max:"1",step:"0.01",defaultValue:".5",onChange:e,disabled:!t})})},M=k.a.label(l||(l=Object(h.a)(["\n  width: 102px;\n  height: 25px;\n  margin: 2px;\n  position: relative;\n"]))),z=k.a.input(p||(p=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 0;\n  appearance: none;\n  background: ",';\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2px;\n  border: 2px solid #454a48;\n  color: #454a48;\n  cursor: pointer;\n\n  &::after {\n    content: "','";\n    font-size: 16px;\n    font-weight: 700;\n  }\n\n  &:checked {\n    text-shadow: 2px 2px 15px ',";\n    border: 2px solid ",";\n    box-shadow: 0 0 20px ",";\n    background: ",";\n  }\n\n  &:disabled {\n    background: #6a706e;\n    border: 2px solid #454a48;\n    box-shadow: none;\n    color: #454a48;\n    text-shadow: none;\n    cursor: auto;\n  }\n"])),(function(n){return n.color.secondary}),(function(n){return n.value}),(function(n){return n.color.default}),(function(n){return n.color.default}),(function(n){return n.color.default}),(function(n){return n.color.default})),P=function(n){var e=n.kitName,t=n.name,i=n.isOn,o=n.color;return Object(v.jsx)(M,{color:o,children:Object(v.jsx)(z,{type:"radio",name:t,value:e,disabled:!i,color:o})})},K=k.a.div(b||(b=Object(h.a)(["\n  width: 120px;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: ",";\n  margin: 15px auto;\n  grid-column: 3 / 4;\n  grid-row: 1/3;\n"])),(function(n){return n.isOn?"inset 0 0 20px 10px ".concat(n.color.default,", 0 0 20px 10px").concat(n.color.default):"inset 0 0 10px #454a48, 0 0 10px #454a48"})),W=k.a.img(f||(f=Object(h.a)(["\n  width: 80px;\n  height: 80px;\n  filter: blur(",");\n\n"])),(function(n){return n.isOn?"":"2px"})),B=function(n){var e=n.src,t=n.alt,i=n.color,o=n.isOn;return Object(v.jsx)(K,{color:i,isOn:o,children:Object(v.jsx)(W,{src:e,alt:t,isOn:o})})},I=t.p+"static/media/Kick.046bedd1.mp3",U=t.p+"static/media/Snare.097075d3.mp3",J=t.p+"static/media/Snare-Rim.0b32dda9.mp3",Q=t.p+"static/media/Hi-Tom.e48f1221.mp3",V=t.p+"static/media/Mid-Tom.f7b7166e.mp3",X=t.p+"static/media/Low-Tom.8a376a70.mp3",Z=t.p+"static/media/Closed-Hats.ae30d2e5.mp3",q=t.p+"static/media/Open-Hats.3cb8aa59.mp3",G=t.p+"static/media/Crash.2a162a1e.mp3",Y=t.p+"static/media/crash-noise.7e150e18.mp3",$=t.p+"static/media/hihat-plain.ab6b1e0f.mp3",_=t.p+"static/media/kick-808.7f263da1.mp3",nn=t.p+"static/media/openhat-slick.145e93ba.mp3",en=t.p+"static/media/shaker-shuffle.8dbeddd3.mp3",tn=t.p+"static/media/snare-noise.ddac1171.mp3",on=t.p+"static/media/snare-808.eefd4f6f.mp3",rn=t.p+"static/media/tom-short.e5442475.mp3",an=t.p+"static/media/clap-808.b3b30969.mp3",cn=t.p+"static/media/perc-808.260cafa2.mp3",sn=t.p+"static/media/perc-chirpy.021251bc.mp3",dn=t.p+"static/media/perc-hollow.95b42507.mp3",un=t.p+"static/media/perc-metal.a3583f71.mp3",ln=t.p+"static/media/perc-nasty.26b85237.mp3",pn=t.p+"static/media/perc-short.1ee01bb8.mp3",bn=t.p+"static/media/perc-tambo.137a0e13.mp3",fn=t.p+"static/media/perc-tribal.cf2b3cf6.mp3",mn=t.p+"static/media/perc-weirdo.a99610f7.mp3",xn=t.p+"static/media/Drum-Set-Silhouette.42371f3a.svg",On=["Q","W","E","A","S","D","Z","X","C"],jn={sounds:[I,U,J,Q,V,X,Z,q,G],names:["Kick","Snare","Snare-Rim","Hi-Tom","Mid-Tom","Low-Tom","Closed-Hats","Open-Hats","Crash"],color:{default:"#00cae0",secondary:"#00818f"}},gn={sounds:[_,tn,on,rn,en,an,$,nn,Y],names:["Kick","Snare","Snare-Rim","Tom","Shaker","Clap","Closed-Hats","Open-Hats","Crash"],color:{default:"#19ff19",secondary:"#00cc00"}},hn={sounds:[cn,sn,dn,un,ln,pn,bn,fn,mn],names:["Click","Chirp","Hollow","Metal","Nasty","Short","Tambo","Tribal","Weird"],color:{default:"#c2aebc",secondary:"#9f7f95"}};var kn=function(){var n=Object(m.useState)(""),e=Object(g.a)(n,2),t=e[0],i=e[1],o=Object(m.useState)(!0),r=Object(g.a)(o,2),a=r[0],c=r[1],s=Object(m.useState)(.5),d=Object(g.a)(s,2),u=d[0],l=d[1],p=Object(m.useState)(jn.sounds),b=Object(g.a)(p,2),f=b[0],x=b[1],O=Object(m.useState)(jn.names),j=Object(g.a)(O,2),h=j[0],k=j[1],w=Object(m.useState)(jn.color),S=Object(g.a)(w,2),C=S[0],F=S[1],T=Object(m.useState)(!1),A=Object(g.a)(T,2),H=A[0],R=A[1],M=function(n){i(n.target.id)},z=function(n){var e=n.key.toUpperCase();On.includes(e)&&document.querySelector(".".concat(e)).click()};Object(m.useEffect)((function(){i(a?"Welcome!":"Goodbye!"),setTimeout((function(){i("")}),4e3),R(!0),setTimeout((function(){return R(!1)}),4e3)}),[a]),Object(m.useEffect)((function(){window.addEventListener("keydown",z)}),[]);var K=Object(m.useRef)(!0);return Object(m.useLayoutEffect)((function(){K.current?K.current=!1:i("Volume: ".concat(Math.floor(100*u)))}),[u]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(y,{loading:H,isOn:a,children:[Object(v.jsx)(N,{isOn:a,onClick:function(){H||c((function(n){return!n}))},loading:H}),Object(v.jsx)(E,{text:t,isOn:a}),Object(v.jsx)(B,{src:xn,alt:"Drum-set silhouette",color:C,isOn:a}),Object(v.jsx)(D,{onChange:function(n){l(n.target.value)},isOn:a}),Object(v.jsxs)("div",{className:"drum-pads",children:[Object(v.jsx)(L,{id:h[0],letter:"Q",sound:f[0],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[1],letter:"W",sound:f[1],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[2],letter:"E",sound:f[2],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[3],letter:"A",sound:f[3],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[4],letter:"S",sound:f[4],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[5],letter:"D",sound:f[5],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[6],letter:"Z",sound:f[6],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[7],letter:"X",sound:f[7],volume:u,isOn:a,clickFunction:M,color:C,loading:H}),Object(v.jsx)(L,{id:h[8],letter:"C",sound:f[8],volume:u,isOn:a,clickFunction:M,color:C,loading:H})]}),Object(v.jsxs)("fieldset",{className:"kit-selectors",name:"kit",onChange:function(n){var e=n.target.value;"Acoustic"===e?(x(jn.sounds),k(jn.names),i("Acoustic"),F(jn.color)):"Electro"===e?(x(gn.sounds),k(gn.names),i("Electro"),F(gn.color)):"Percussion"===e&&(x(hn.sounds),k(hn.names),i("Percussion"),F(hn.color))},children:[Object(v.jsx)("legend",{children:"Kit"}),Object(v.jsx)(P,{name:"kit",kitName:"Acoustic",isOn:a,color:jn.color}),Object(v.jsx)(P,{name:"kit",kitName:"Electro",isOn:a,color:gn.color}),Object(v.jsx)(P,{name:"kit",kitName:"Percussion",isOn:a,color:hn.color})]})]})})},wn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),o(n),r(n),a(n)}))};j.a.render(Object(v.jsx)(x.a.StrictMode,{children:Object(v.jsx)(kn,{})}),document.getElementById("root")),wn()}},[[22,1,2]]]);
//# sourceMappingURL=main.384db380.chunk.js.map