(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3f55bc8"],{"0fe6":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a={class:"wrap"},i={class:"terms-area"},s=Object(n["f"])("h1",{class:"title"},[Object(n["h"])("개인정보"),Object(n["f"])("br"),Object(n["h"])("수집 동의서")],-1),u=Object(n["f"])("article",null,[Object(n["f"])("ol",null,[Object(n["f"])("li",null," 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident. "),Object(n["f"])("li",null," 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident. "),Object(n["f"])("li",null," 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident. ")])],-1),o={class:"form-check"},b=Object(n["f"])("label",{class:"form-check-label",for:"flexCheckDefault"}," 개인정보 수집에 동의하십니까? ",-1);function l(t,e,c,l,r,f){var O=Object(n["D"])("Navigation"),j=Object(n["D"])("FixedBtn");return Object(n["v"])(),Object(n["e"])("div",a,[Object(n["i"])(O),Object(n["f"])("main",i,[Object(n["f"])("section",null,[s,u,Object(n["f"])("div",o,[Object(n["P"])(Object(n["f"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.checked=t})},null,512),[[n["J"],l.checked]]),b])])]),Object(n["i"])(j,{type:"submit",onClick:l.onMove,msg:"확인",ref:"btn",disabled:!l.checked},null,8,["onClick","disabled"])])}var r=c("6c02"),f=c("a4c4"),O=c("6ec3"),j={name:"Terms2",components:{Navigation:f["a"],FixedBtn:O["a"]},setup:function(){var t=Object(r["c"])(),e=Object(n["B"])(!1);function c(){t.push("/qna")}return{checked:e,onMove:c}}},m=(c("5193"),c("6b0d")),d=c.n(m);const p=d()(j,[["render",l]]);e["default"]=p},"4fdb":function(t,e,c){},5193:function(t,e,c){"use strict";c("5b95")},"5b95":function(t,e,c){},"660e":function(t,e,c){t.exports=c.p+"img/i-delete.a5fb8fdf.svg"},"6ec3":function(t,e,c){"use strict";var n=c("7a23"),a={class:"fixed-btn"};function i(t,e,c,i,s,u){return Object(n["v"])(),Object(n["e"])("button",a,Object(n["G"])(c.msg),1)}var s={name:"FixedBtn",props:{msg:String}},u=(c("ef02"),c("6b0d")),o=c.n(u);const b=o()(s,[["render",i]]);e["a"]=b},"84a3":function(t,e,c){"use strict";c("b1d7")},"9f47":function(t,e,c){t.exports=c.p+"img/i-modify.e5a2fc97.svg"},a4c4:function(t,e,c){"use strict";c("b0c0");var n=c("7a23"),a={key:0,class:"navigation intro"},i=Object(n["f"])("button",{type:"button"},[Object(n["f"])("i",{class:"xi-help"}),Object(n["f"])("span",{class:"a11y"},"앱정보")],-1),s=Object(n["f"])("button",{type:"button"},[Object(n["f"])("i",{class:"xi-list-square"}),Object(n["f"])("span",{class:"a11y"},"저장 리스트")],-1),u={key:1,class:"navigation icon-alone"},o={key:0,type:"button"},b=Object(n["f"])("i",{class:"xi-home"},null,-1),l=Object(n["f"])("span",{class:"a11y"},"홈으로",-1),r=[b,l],f={key:2,class:"navigation"},O=Object(n["f"])("i",{class:"xi-angle-left"},null,-1),j=Object(n["f"])("span",{class:"a11y"},"뒤로",-1),m=[O,j],d={type:"button"},p=["src"],v=Object(n["f"])("span",{class:"a11y"},"수정하기",-1),y={type:"button"},k=["src"],g=Object(n["f"])("span",{class:"a11y"},"삭제",-1),h={key:3,class:"navigation"},x=Object(n["f"])("i",{class:"xi-angle-left"},null,-1),q=Object(n["f"])("span",{class:"a11y"},"뒤로",-1),w=[x,q],D={key:0,type:"button"},B=Object(n["f"])("i",{class:"xi-close"},null,-1),C=Object(n["f"])("span",{class:"a11y"},"닫기",-1),S=[B,C];function L(t,e,b,l,O,j){var x=Object(n["D"])("router-link");return Object(n["v"])(),Object(n["e"])("div",null,["intro"===t.$route.name?(Object(n["v"])(),Object(n["e"])("nav",a,[Object(n["i"])(x,{to:"/Terms"},{default:Object(n["O"])((function(){return[i]})),_:1}),Object(n["i"])(x,{to:"/SaveDataList"},{default:Object(n["O"])((function(){return[s]})),_:1})])):"SaveDataList"===t.$route.name?(Object(n["v"])(),Object(n["e"])("nav",u,[Object(n["i"])(x,{to:"/intro"},{default:Object(n["O"])((function(){return["SaveDataView"!==t.$route.name?(Object(n["v"])(),Object(n["e"])("button",o,r)):Object(n["d"])("",!0)]})),_:1})])):"SaveDataView"===t.$route.name?(Object(n["v"])(),Object(n["e"])("nav",f,[Object(n["f"])("button",{type:"button",onClick:e[0]||(e[0]=function(){return j.historyBack&&j.historyBack.apply(j,arguments)})},m),Object(n["f"])("div",null,[Object(n["f"])("button",d,[Object(n["f"])("img",{src:c("9f47")},null,8,p),v]),Object(n["f"])("button",y,[Object(n["f"])("img",{src:c("660e")},null,8,k),g])])])):(Object(n["v"])(),Object(n["e"])("nav",h,[Object(n["f"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return j.historyBack&&j.historyBack.apply(j,arguments)})},w),Object(n["i"])(x,{to:"/intro"},{default:Object(n["O"])((function(){return["SaveDataView"!==t.$route.name?(Object(n["v"])(),Object(n["e"])("button",D,S)):Object(n["d"])("",!0)]})),_:1})]))])}var $={name:"Navigation",methods:{historyBack:function(){return history.back()}}},V=(c("84a3"),c("6b0d")),_=c.n(V);const F=_()($,[["render",L]]);e["a"]=F},b1d7:function(t,e,c){},ef02:function(t,e,c){"use strict";c("4fdb")}}]);
//# sourceMappingURL=chunk-f3f55bc8.331d6961.js.map