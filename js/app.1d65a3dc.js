(function(t){function e(e){for(var n,o,b=e[0],r=e[1],i=e[2],s=0,j=[];s<b.length;s++)o=b[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&j.push(a[o][0]),a[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(j.length)j.shift()();return l.push.apply(l,i||[]),c()}function c(){for(var t,e=0;e<l.length;e++){for(var c=l[e],n=!0,b=1;b<c.length;b++){var r=c[b];0!==a[r]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},a={app:0},l=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var b=window["webpackJsonp"]=window["webpackJsonp"]||[],r=b.push.bind(b);b.push=e,b=b.slice();for(var i=0;i<b.length;i++)e(b[i]);var u=r;l.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"0639":function(t,e,c){"use strict";c("b422")},"08f4":function(t,e,c){"use strict";c("a835")},1403:function(t,e,c){t.exports=c.p+"img/img-intro.fa24f1d8.png"},"155f":function(t,e,c){t.exports=c.p+"img/logo.506ae8f7.svg"},"15fe":function(t,e,c){"use strict";c("7d8d")},"16ca":function(t,e,c){},"24c0":function(t,e,c){"use strict";c("3fed")},"27b9":function(t,e,c){"use strict";c("3860")},3756:function(t,e,c){},3860:function(t,e,c){},"3a34":function(t,e,c){"use strict";c("16ca")},"3fed":function(t,e,c){},"42a4":function(t,e,c){"use strict";c("a388")},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function a(t,e,c,a,l,o){var b=Object(n["E"])("router-view");return Object(n["w"])(),Object(n["d"])(b)}var l={name:"App"},o=(c("8e25"),c("6b0d")),b=c.n(o);const r=b()(l,[["render",a]]);var i=r,u=c("6c02");Object(n["z"])("data-v-2f42742e");var s=Object(n["g"])("h1",null,[Object(n["i"])("나의 자가진단"),Object(n["g"])("br"),Object(n["i"])("설문 조사")],-1),j=["src"];function O(t,e,a,l,o,b){var r=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["d"])(r,{to:"/intro"},{default:Object(n["P"])((function(){return[Object(n["g"])("main",null,[s,Object(n["g"])("img",{src:c("155f")},null,8,j)])]})),_:1})}Object(n["x"])();var d={name:"Splash Screen",components:{}};c("7d26");const g=b()(d,[["render",O],["__scopeId","data-v-2f42742e"]]);var f=g;Object(n["z"])("data-v-504c3f20");var m=Object(n["g"])("strong",null,[Object(n["i"])("100만원 소비해서"),Object(n["g"])("br"),Object(n["i"])("5천원 적립하기 보단"),Object(n["g"])("br"),Object(n["i"])("애터미로 6만원 벌자!")],-1),p=Object(n["g"])("p",null,[Object(n["i"])("노후 준비가 되어있나요?"),Object(n["g"])("br"),Object(n["i"])("이루고 싶었던 꿈이 있나요?"),Object(n["g"])("br"),Object(n["i"])("돈 걱정 없이 살고 싶으신가요?"),Object(n["g"])("br"),Object(n["i"])("나의 소비 생활을 파악하고"),Object(n["g"])("br"),Object(n["i"])("애터미를 알아가보세요")],-1),v={class:"img-wrap"},h=["src"];function y(t,e,a,l,o,b){var r=Object(n["E"])("Navigation"),i=Object(n["E"])("FixedBtn"),u=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["f"])("div",null,[Object(n["j"])(r),Object(n["g"])("main",null,[Object(n["g"])("section",null,[Object(n["g"])("article",null,[m,p,Object(n["g"])("div",v,[Object(n["g"])("img",{src:c("1403")},null,8,h)])])])]),Object(n["j"])(u,{to:"/Terms2"},{default:Object(n["P"])((function(){return[Object(n["j"])(i,{msg:"설문 시작"})]})),_:1})])}function w(t,e,c,a,l,o){return Object(n["w"])(),Object(n["f"])("button",null,Object(n["H"])(c.msg),1)}Object(n["x"])();var k={name:"FixedBtn",props:{msg:String}};c("5f19");const x=b()(k,[["render",w],["__scopeId","data-v-2f2b7da0"]]);var D=x;c("b0c0");Object(n["z"])("data-v-c58577d4");var S={key:0,class:"intro"},_=Object(n["g"])("button",{type:"button"},[Object(n["g"])("i",{class:"xi-help"}),Object(n["g"])("span",{class:"a11y"},"앱정보")],-1),N=Object(n["g"])("button",{type:"button"},[Object(n["g"])("i",{class:"xi-list-square"}),Object(n["g"])("span",{class:"a11y"},"저장 리스트")],-1),P={key:1,class:"icon-alone"},E={key:0,type:"button"},I=Object(n["g"])("i",{class:"xi-home"},null,-1),B=Object(n["g"])("span",{class:"a11y"},"홈으로",-1),C=[I,B],$={key:2},q=Object(n["g"])("i",{class:"xi-angle-left"},null,-1),V=Object(n["g"])("span",{class:"a11y"},"뒤로",-1),H=[q,V],F=Object(n["g"])("button",{type:"button"},[Object(n["g"])("i",{class:"xi-trash-o"}),Object(n["g"])("span",{class:"a11y"},"닫기")],-1),L={key:3},T=Object(n["g"])("i",{class:"xi-angle-left"},null,-1),z=Object(n["g"])("span",{class:"a11y"},"뒤로",-1),R=[T,z],M={key:0,type:"button"},Q=Object(n["g"])("i",{class:"xi-close"},null,-1),A=Object(n["g"])("span",{class:"a11y"},"닫기",-1),U=[Q,A];function K(t,e,c,a,l,o){var b=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["f"])("div",null,["intro"===t.$route.name?(Object(n["w"])(),Object(n["f"])("nav",S,[Object(n["j"])(b,{to:"/Terms"},{default:Object(n["P"])((function(){return[_]})),_:1}),Object(n["j"])(b,{to:"/SaveDataList"},{default:Object(n["P"])((function(){return[N]})),_:1})])):"SaveDataList"===t.$route.name?(Object(n["w"])(),Object(n["f"])("nav",P,[Object(n["j"])(b,{to:"/intro"},{default:Object(n["P"])((function(){return["SaveDataView"!==t.$route.name?(Object(n["w"])(),Object(n["f"])("button",E,C)):Object(n["e"])("",!0)]})),_:1})])):"SaveDataView"===t.$route.name?(Object(n["w"])(),Object(n["f"])("nav",$,[Object(n["g"])("button",{type:"button",onClick:e[0]||(e[0]=function(){return o.historyBack&&o.historyBack.apply(o,arguments)})},H),F])):(Object(n["w"])(),Object(n["f"])("nav",L,[Object(n["g"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return o.historyBack&&o.historyBack.apply(o,arguments)})},R),Object(n["j"])(b,{to:"/intro"},{default:Object(n["P"])((function(){return["SaveDataView"!==t.$route.name?(Object(n["w"])(),Object(n["f"])("button",M,U)):Object(n["e"])("",!0)]})),_:1})]))])}Object(n["x"])();var G={name:"Navigation",methods:{historyBack:function(){return history.back()}}};c("0639");const J=b()(G,[["render",K],["__scopeId","data-v-c58577d4"]]);var Y=J,W={name:"IntroPage",components:{FixedBtn:D,Navigation:Y}};c("27b9");const X=b()(W,[["render",y],["__scopeId","data-v-504c3f20"]]);var Z=X;Object(n["z"])("data-v-502031f2");var tt={class:"wrap"},et=Object(n["g"])("main",null,[Object(n["g"])("section",null,[Object(n["g"])("article",null,[Object(n["g"])("strong",null,"나의 소비생활 알아보기"),Object(n["g"])("p",null," 본 앱은 소비자가 일상에서 쓰는 상품을 파악하여 전체 소비에 대해서 파악하고, 자료를 바탕으로 애터미에 받을 수 있는 혜택에 대해 알아보고자 합니다. "),Object(n["g"])("p",null," 설문내용은 저장할 수 있고 나중에 불러올 수 있습니다. "),Object(n["g"])("p",null," 본 앱은 가족수와 사용기간 그리고 제품별 소비형태(개인 혹은 가족) 등을 고려하여 제작되었습니다. "),Object(n["g"])("p",null," 다만 소비자의 소비습관, 포인트 적용기준 변동 등에 따라 다소 달라질 수 있습니다. "),Object(n["g"])("p",null," 이 앱은 애터미를 모르는 분들이 애터미 제품과 애터미의 PV에 대해 정보를 제공하는데에 목적이 있습니다. "),Object(n["g"])("p",null," 여러분이 애터미를 보다 쉽게 접근하기를 바랍니다. "),Object(n["g"])("p",null,"감사합니다.")])])],-1);function ct(t,e,c,a,l,o){var b=Object(n["E"])("Navigation");return Object(n["w"])(),Object(n["f"])("div",tt,[Object(n["j"])(b),et])}Object(n["x"])();var nt={name:"Terms",components:{Navigation:Y}};c("7031");const at=b()(nt,[["render",ct],["__scopeId","data-v-502031f2"]]);var lt=at;Object(n["z"])("data-v-b47c401c");var ot={class:"wrap"},bt=Object(n["g"])("h1",{class:"title"},[Object(n["i"])("개인정보"),Object(n["g"])("br"),Object(n["i"])("수집 동의서")],-1),rt=Object(n["g"])("article",null,[Object(n["g"])("ol",null,[Object(n["g"])("li",null," 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident. "),Object(n["g"])("li",null," 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident. "),Object(n["g"])("li",null," 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident. ")])],-1),it={class:"form-check"},ut=Object(n["g"])("label",{class:"form-check-label",for:"flexCheckDefault"}," 개인정보 수집에 동의하십니까? ",-1);function st(t,e,c,a,l,o){var b=Object(n["E"])("Navigation"),r=Object(n["E"])("FixedBtn");return Object(n["w"])(),Object(n["f"])("div",ot,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[bt,rt,Object(n["g"])("div",it,[Object(n["Q"])(Object(n["g"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.checked=t})},null,512),[[n["K"],l.checked]]),ut])])]),Object(n["j"])(r,{type:"submit",onClick:o.onMove,msg:"확인",ref:"btn",disabled:!l.checked},null,8,["onClick","disabled"])])}Object(n["x"])();var jt={name:"Terms2",data:function(){return{checked:!1}},methods:{onMove:function(){this.$router.push("/qna")}},components:{Navigation:Y,FixedBtn:D}};c("42a4");const Ot=b()(jt,[["render",st],["__scopeId","data-v-b47c401c"]]);var dt=Ot;Object(n["z"])("data-v-5b296320");var gt={class:"wrap"},ft={class:"img-wrap"},mt=["src"],pt=Object(n["g"])("p",{class:"notify"},[Object(n["g"])("strong",null,"가족 수는 몇 명인가요?"),Object(n["g"])("span",null,[Object(n["g"])("em",null,"본인을 포함하여 함께 생활하는 가족 수를 선택해주세요.")])],-1),vt={class:"select-list"},ht={class:"form-check"},yt=["value","id"],wt=["for"];function kt(t,e,a,l,o,b){var r=Object(n["E"])("Navigation"),i=Object(n["E"])("FixedBtn"),u=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["f"])("div",gt,[Object(n["j"])(r),Object(n["g"])("main",null,[Object(n["g"])("section",null,[Object(n["g"])("div",ft,[Object(n["g"])("img",{src:c("8f8d")},null,8,mt)]),pt,Object(n["g"])("ul",vt,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.familyNumber,(function(c,a){return Object(n["w"])(),Object(n["f"])("li",{key:a},[Object(n["g"])("div",ht,[Object(n["Q"])(Object(n["g"])("input",{class:"form-check-input",type:"radio",value:c,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.$store.state.selectedItem=e}),name:"question",id:"question".concat(a),checked:""},null,8,yt),[[n["L"],t.$store.state.selectedItem]]),Object(n["g"])("label",{class:"form-check-label",for:"question".concat(a)},Object(n["H"])(c),9,wt)])])})),128))])])]),Object(n["j"])(u,{to:"/qna2"},{default:Object(n["P"])((function(){return[Object(n["j"])(i,{msg:"다음"})]})),_:1})])}Object(n["x"])();var xt=c("5530"),Dt=c("5502"),St={name:"QuestionPage",data:function(){return{}},computed:Object(xt["a"])({},Object(Dt["b"])(["familyNumber"])),methods:{},components:{FixedBtn:D,Navigation:Y},props:{qnaData:Array}};c("24c0");const _t=b()(St,[["render",kt],["__scopeId","data-v-5b296320"]]);var Nt=_t;Object(n["z"])("data-v-a2376300");var Pt={class:"wrap bg-gray"},Et=Object(n["g"])("p",{class:"notify",id:"qestion"},[Object(n["g"])("strong",null,[Object(n["i"])("현재 마트, 온라인 쇼핑몰에서"),Object(n["g"])("br"),Object(n["i"])("자주 사용하는 생활용품을"),Object(n["g"])("br"),Object(n["i"])("선택해주세요.")]),Object(n["g"])("span",null,[Object(n["g"])("em",null,"(매월 기준)")])],-1),It={id:"answer"},Bt={class:"answer-item"},Ct=Object(n["g"])("strong",{class:"answer-title"},"생활용품",-1),$t={class:"rounded-box"},qt=["value","id"],Vt=["for"],Ht={class:"answer-item"},Ft=Object(n["g"])("strong",{class:"answer-title"},"식품",-1),Lt={class:"rounded-box"},Tt=["value","id"],zt=["for"];function Rt(t,e,c,a,l,o){var b=Object(n["E"])("Navigation"),r=Object(n["E"])("FixedBtn"),i=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["f"])("div",Pt,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[Et,Object(n["g"])("div",It,[Object(n["g"])("div",Bt,[Ct,Object(n["g"])("button",{class:"btn-cancel",onClick:e[0]||(e[0]=function(){return o.selectCancel&&o.selectCancel.apply(o,arguments)})},"선택취소"),Object(n["g"])("div",$t,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.$store.state.livingProduct,(function(c,a){return Object(n["w"])(),Object(n["f"])("div",{class:"form-check",key:a},[Object(n["Q"])(Object(n["g"])("input",{class:"form-check-input",type:"checkbox",value:c,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.$store.state.selectedLivingItem=e}),id:"products".concat(a)},null,8,qt),[[n["K"],t.$store.state.selectedLivingItem]]),Object(n["g"])("label",{class:"form-check-label",for:"products".concat(a)},Object(n["H"])(c),9,Vt)])})),128))])]),Object(n["g"])("div",Ht,[Ft,Object(n["g"])("button",{class:"btn-cancel",onClick:e[2]||(e[2]=function(){return o.selectCancel2&&o.selectCancel2.apply(o,arguments)})},"선택취소"),Object(n["g"])("div",Lt,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.$store.state.food,(function(c,a){return Object(n["w"])(),Object(n["f"])("div",{class:"form-check",key:a},[Object(n["Q"])(Object(n["g"])("input",{class:"form-check-input",type:"checkbox",value:c,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.$store.state.selectedfoodItem=e}),id:"food".concat(a)},null,8,Tt),[[n["K"],t.$store.state.selectedfoodItem]]),Object(n["g"])("label",{class:"form-check-label",for:"food".concat(a)},Object(n["H"])(c),9,zt)])})),128))])])])])]),Object(n["j"])(i,{to:"/result"},{default:Object(n["P"])((function(){return[Object(n["j"])(r,{onClick:e[4]||(e[4]=function(e){return t.$store.commit("getSum")}),msg:"작성완료"})]})),_:1})])}Object(n["x"])();var Mt={name:"QuestionPage2",data:function(){return{}},methods:{selectCancel:function(){this.$store.state.selectedLivingItem=[]},selectCancel2:function(){this.$store.state.selectedfoodItem=[]}},components:{FixedBtn:D,Navigation:Y}};c("bc15");const Qt=b()(Mt,[["render",Rt],["__scopeId","data-v-a2376300"]]);var At=Qt;Object(n["z"])("data-v-6d91e26d");var Ut={class:"bg-sky"},Kt=Object(n["g"])("h1",{class:"title"},[Object(n["i"])("적극적으로 참여해주셔서"),Object(n["g"])("br"),Object(n["i"])("진심으로 감사합니다.")],-1),Gt={class:"rounded-box"},Jt=Object(n["g"])("h2",{class:"title"},"결과 확인 및 설명",-1),Yt=Object(n["g"])("hr",null,null,-1),Wt=Object(n["g"])("p",null,"<선택리스트>",-1),Xt=Object(n["g"])("p",null,"정말 많은 제품등을 소비하고 계시네요.",-1),Zt=Object(n["g"])("br",null,null,-1),te=Object(n["i"])(" 위 제품을 소비하는 총 금액은 매월 평균 소비 기준 0,000,000원입니다."),ee=Object(n["g"])("br",null,null,-1),ce=Object(n["i"])(" 1년간 꾸준히 사용하신다면 약 00,000,000원입니다. "),ne=Object(n["g"])("p",null,[Object(n["i"])("애터미에도 가격도 저렴하고"),Object(n["g"])("br"),Object(n["i"])("품질도 좋은 제품 등이 있습니다.")],-1),ae=Object(n["g"])("button",{class:"btn primary"},"선택하신 제품이 애터미에도 있어요!",-1),le=Object(n["g"])("p",null,[Object(n["i"])("현재 애터미 제품으로 이 물품 등을 구매하신다면"),Object(n["g"])("br"),Object(n["i"])("매월 소비 금액이 0,000,000원입니다.")],-1);function oe(t,e,c,a,l,o){var b=Object(n["E"])("Navigation"),r=Object(n["E"])("router-link"),i=Object(n["E"])("FixedBtn");return Object(n["w"])(),Object(n["f"])("div",Ut,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[Kt,Object(n["g"])("div",Gt,[Jt,Yt,Object(n["g"])("p",null,"총 "+Object(n["H"])(t.selectedLivingItem.length+t.selectedfoodItem.length)+"개를 선택하였습니다.",1),Wt,Object(n["g"])("ul",null,[Object(n["g"])("li",null,"- 생활용품 "+Object(n["H"])(t.selectedLivingItem.length)+"개",1),Object(n["g"])("li",null,"- 식품 "+Object(n["H"])(t.selectedfoodItem.length)+"개",1)]),Xt,Object(n["g"])("p",null,[Object(n["i"])(" 가족 "+Object(n["H"])(t.selectedItem)+"인 기준에서",1),Zt,te,ee,ce]),ne,Object(n["j"])(r,{to:"/AtomyProduct"},{default:Object(n["P"])((function(){return[ae]})),_:1}),le])])]),Object(n["j"])(r,{to:"/Result2"},{default:Object(n["P"])((function(){return[Object(n["j"])(i,{msg:"다음"})]})),_:1})])}Object(n["x"])();var be={name:"Result",computed:Object(xt["a"])({},Object(Dt["b"])(["selectedLivingItem","selectedfoodItem","selectedItem"])),components:{Navigation:Y,FixedBtn:D}};c("3a34");const re=b()(be,[["render",oe],["__scopeId","data-v-6d91e26d"]]);var ie=re;Object(n["z"])("data-v-3d65941e");var ue={class:"wrap"},se=Object(n["g"])("h1",{class:"title"},"애터미 PV에 관하여",-1),je=Object(n["g"])("hr",null,null,-1),Oe=Object(n["g"])("p",null,"애터미에는 PV라는 것이 있습니다.",-1),de=Object(n["g"])("p",null," PV는 Point Vaule 약자이며, 제품 구매 시, 포인트가 쌓이는 겁니다. 일반적으로 매장이나 온라인 쇼핑몰에서 쌓여지는 포인트나 적립금을 적립한다고 생각하시면 됩니다. ",-1),ge=Object(n["g"])("p",null," 현재 1년간 꾸준히 사용하신다면, 앞서 소비 금액 약 00,000,000원 소비하시고 PV는 약 000,000가 쌓입니다. ",-1),fe=Object(n["g"])("p",null,"만약 내 하위에 나랑 비슷한 사람들이 있다면,",-1),me={class:"calculation"},pe=Object(n["g"])("p",null,"<나의 하위 사업자 수 계산하기>",-1),ve=Object(n["g"])("i",{class:"xi-minus"},null,-1),he=[ve],ye={class:"count"},we=Object(n["g"])("i",{class:"xi-plus"},null,-1),ke=[we],xe=Object(n["g"])("p",null," 월 000,000원 ~ 000,000원 소득이 발생될 것이라고 예상됩니다. ",-1),De=Object(n["g"])("p",null," 애터미 사업자가 되시면 원하는 물건도 구매하면서 동시에 수익도 낼 수 있는 효과를 보시게 됩니다. ",-1);function Se(t,e,c,a,l,o){var b=Object(n["E"])("Navigation"),r=Object(n["E"])("FixedBtn"),i=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["f"])("div",ue,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[se,je,Oe,de,ge,fe,Object(n["g"])("div",me,[pe,Object(n["g"])("button",{onClick:e[0]||(e[0]=function(e){return t.$store.dispatch("minus")})},he),Object(n["g"])("span",ye,Object(n["H"])(t.SubcontractorCount),1),Object(n["g"])("button",{onClick:e[1]||(e[1]=function(e){return t.$store.dispatch("add")})},ke)]),xe,De,Object(n["j"])(i,{to:"/SaveData"},{default:Object(n["P"])((function(){return[Object(n["j"])(r,{msg:"자료저장"})]})),_:1})])])])}Object(n["x"])();var _e={name:"Result",computed:Object(xt["a"])({},Object(Dt["b"])(["SubcontractorCount"])),methods:{},components:{Navigation:Y,FixedBtn:D}};c("825c");const Ne=b()(_e,[["render",Se],["__scopeId","data-v-3d65941e"]]);var Pe=Ne;Object(n["z"])("data-v-8c0e29e0");var Ee={class:"wrap"},Ie=Object(n["g"])("strong",null,"애터미 제품",-1),Be={class:"table text-center"},Ce=Object(n["g"])("caption",null,"애터미 제품 - 카테고리, 이름, 금액 / PV에 관한 정보",-1),$e=Object(n["g"])("colgroup",null,[Object(n["g"])("col",{style:{width:"30%"}}),Object(n["g"])("col"),Object(n["g"])("col",{style:{width:"30%"}})],-1),qe=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"col"},"카테고리"),Object(n["g"])("th",{scope:"col"},"이름"),Object(n["g"])("th",{scope:"col"},"금액 / PV")])],-1),Ve={class:"price"},He={class:"point-value"},Fe=Object(n["g"])("button",{class:"btn-more",type:"button"},[Object(n["g"])("i",{class:"xi-angle-down"}),Object(n["i"])(" 더보기")],-1);function Le(t,e,c,a,l,o){var b=Object(n["E"])("Navigation");return Object(n["w"])(),Object(n["f"])("div",Ee,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[Object(n["g"])("article",null,[Ie,Object(n["g"])("table",Be,[Ce,$e,qe,Object(n["g"])("tbody",null,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(l.atomyProducts,(function(t,e){return Object(n["w"])(),Object(n["f"])("tr",{key:e},[Object(n["g"])("td",null,Object(n["H"])(t.category),1),Object(n["g"])("td",null,Object(n["H"])(t.name),1),Object(n["g"])("td",null,[Object(n["g"])("div",Ve,Object(n["H"])(t.price)+"원",1),Object(n["g"])("div",He,Object(n["H"])(t.pointValue)+" PV",1)])])})),128))])]),Fe])])])])}Object(n["x"])();var Te={name:"Terms",data:function(){return{atomyProducts:[{category:"생활용품",name:"애터미 칫솔*1set(8ea)",price:7920,pointValue:3900},{category:"생활용품",name:"애터미 치약 플러스 200g*1set(5ea)",price:15e3,pointValue:2500},{category:"생활용품",name:"애터미 동구밭 클렌징바",price:12800,pointValue:5e3}]}},components:{Navigation:Y}};c("15fe");const ze=b()(Te,[["render",Le],["__scopeId","data-v-8c0e29e0"]]);var Re=ze;Object(n["z"])("data-v-66b90863");var Me={class:"wrap"},Qe=Object(n["g"])("h1",{class:"title"},"자료저장",-1),Ae=Object(n["g"])("hr",null,null,-1),Ue={class:"common-table"},Ke=Object(n["g"])("caption",null,"자료저장",-1),Ge=Object(n["g"])("colgroup",null,[Object(n["g"])("col",{style:{width:"25%"}}),Object(n["g"])("col")],-1),Je=Object(n["g"])("th",{scope:"row"},"작성일",-1),Ye=Object(n["g"])("th",{scope:"row"},"이름",-1),We={class:"error-message"},Xe=Object(n["g"])("th",{scope:"row"},"생년월일",-1),Ze={class:"error-message"},tc=Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"row"},"성별"),Object(n["g"])("td",null,[Object(n["g"])("div",{class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},[Object(n["g"])("input",{type:"radio",class:"btn-check",name:"testerGender",id:"gender1",autocomplete:"off",value:"남성",checked:""}),Object(n["g"])("label",{class:"btn btn-outline-primary",for:"gender1"},"남성"),Object(n["g"])("input",{type:"radio",class:"btn-check",name:"testerGender",id:"gender2",autocomplete:"off",value:"여성"}),Object(n["g"])("label",{class:"btn btn-outline-primary",for:"gender2"},"여성")])])],-1),ec=Object(n["g"])("th",{scope:"row"},"전화번호",-1),cc={class:"error-message"};function nc(t,e,c,a,l,o){var b=Object(n["E"])("Navigation"),r=Object(n["E"])("Field"),i=Object(n["E"])("FixedBtn"),u=Object(n["E"])("Form");return Object(n["w"])(),Object(n["f"])("div",Me,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[Qe,Ae,Object(n["j"])(u,{onSubmit:o.onSubmit},{default:Object(n["P"])((function(e){var c=e.errors;return[Object(n["g"])("table",Ue,[Ke,Ge,Object(n["g"])("tbody",null,[Object(n["g"])("tr",null,[Je,Object(n["g"])("td",null,Object(n["H"])(t.nowDate),1)]),Object(n["g"])("tr",null,[Ye,Object(n["g"])("td",null,[Object(n["j"])(r,{type:"text",name:"testerName",class:"form-control",placeholder:"김터미",rules:o.isRequiredName},null,8,["rules"]),Object(n["g"])("span",We,Object(n["H"])(c.testerName),1)])]),Object(n["g"])("tr",null,[Xe,Object(n["g"])("td",null,[Object(n["j"])(r,{type:"number",name:"testerBirthDay",class:"form-control",placeholder:"ex) 19880808",rules:o.isRequiredBirthDay},null,8,["rules"]),Object(n["g"])("span",Ze,Object(n["H"])(c.testerBirthDay),1)])]),tc,Object(n["g"])("tr",null,[ec,Object(n["g"])("td",null,[Object(n["j"])(r,{type:"number",name:"testerTellNumber",class:"form-control",placeholder:"ex) 01012345678",rules:o.isRequiredTellNumber},null,8,["rules"]),Object(n["g"])("span",cc,Object(n["H"])(c.testerTellNumber),1)])])])]),Object(n["j"])(i,{type:"submit",msg:"저장하기"})]})),_:1},8,["onSubmit"])])])])}Object(n["x"])();var ac=c("7bb1"),lc={name:"SaveData",computed:Object(xt["a"])({},Object(Dt["b"])(["nowDate"])),methods:{isRequiredName:function(t){return!!t||"이름을 입력해주세요."},isRequiredBirthDay:function(t){return!!t||"생년월일을 입력해주세요."},isRequiredTellNumber:function(t){return!!t||"전화번호 입력해주세요."},onSubmit:function(t){console.log(t),this.$store.dispatch("setDate"),this.$store.dispatch("setName",t.testerName),this.$store.dispatch("setBirthDay",t.testerBirthDay),this.$store.dispatch("setTellNumber",t.testerTellNumber),this.$router.push("/SaveDataList")}},components:{Navigation:Y,FixedBtn:D,Field:ac["a"],Form:ac["b"]}};c("667a");const oc=b()(lc,[["render",nc],["__scopeId","data-v-66b90863"]]);var bc=oc;Object(n["z"])("data-v-027bdbea");var rc={class:"wrap"},ic=Object(n["h"])('<h1 class="title" data-v-027bdbea>자료리스트</h1><div class="input-group" data-v-027bdbea><div class="form-outline" data-v-027bdbea><input type="search" id="form1" class="form-control" data-v-027bdbea><label class="form-label a11y" for="form1" data-v-027bdbea>Search</label></div><button type="button" class="btn btn-search" data-v-027bdbea><i class="xi-search" data-v-027bdbea></i></button></div>',2),uc={class:"edit-group clearfix"},sc={class:"pull-left"},jc={class:"pull-right"},Oc={key:0},dc={class:"board-list"},gc={key:0,class:"form-check"},fc=Object(n["g"])("input",{class:"form-check-input",type:"checkbox",id:"bind1"},null,-1),mc={class:"form-check-label",for:"bind1"},pc={key:1},vc=Object(n["i"])("더보기");function hc(t,e,c,a,l,o){var b=Object(n["E"])("Navigation"),r=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["f"])("div",rc,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[ic,Object(n["g"])("div",uc,[Object(n["g"])("div",sc,[Object(n["g"])("button",{onClick:e[0]||(e[0]=function(){return o.listEdit&&o.listEdit.apply(o,arguments)})},"편집")]),Object(n["g"])("div",jc,[l.isEdit?(Object(n["w"])(),Object(n["f"])("button",Oc,"전체선택")):Object(n["e"])("",!0),l.isEdit?(Object(n["w"])(),Object(n["f"])("button",{key:1,onClick:e[1]||(e[1]=function(){return o.deleteList&&o.deleteList.apply(o,arguments)})},"선택삭제")):Object(n["e"])("",!0)])]),Object(n["g"])("ul",dc,[Object(n["g"])("li",null,[l.isEdit?(Object(n["w"])(),Object(n["f"])("div",gc,[fc,Object(n["g"])("label",mc,[Object(n["g"])("strong",null,Object(n["H"])(t.$store.state.testerSaveData.name),1)])])):(Object(n["w"])(),Object(n["f"])("strong",pc,Object(n["H"])(t.$store.state.testerSaveData.name),1)),Object(n["j"])(r,{to:"/SaveDataView"},{default:Object(n["P"])((function(){return[vc]})),_:1})])])])])])}Object(n["x"])();var yc={name:"SaveDataList",data:function(){return{isEdit:!1}},methods:{listEdit:function(){this.isEdit=!this.isEdit},deleteList:function(){confirm("해당 정보(들)을 삭제하시겠습니까?\n삭제하시면 저장된 리스트가 삭제되며\n복구가 불가능합니다.")}},components:{Navigation:Y}};c("08f4");const wc=b()(yc,[["render",hc],["__scopeId","data-v-027bdbea"]]);var kc=wc;Object(n["z"])("data-v-494d48d7");var xc={class:"wrap"},Dc={class:"title"},Sc={class:"table"},_c=Object(n["g"])("caption",null,"최종 자료",-1),Nc=Object(n["g"])("colgroup",null,[Object(n["g"])("col",{style:{width:"50%"}})],-1),Pc=Object(n["g"])("th",null,"작성일",-1),Ec=Object(n["g"])("th",null,"생년월일",-1),Ic=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"성별"),Object(n["g"])("td",null,"남성")],-1),Bc=Object(n["g"])("th",null,"가족 수",-1),Cc=Object(n["g"])("th",null,"전화번호",-1),$c=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"월 평균 생활소비 금액"),Object(n["g"])("td",null,"10,000,000원")],-1),qc=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"연 평균 애터미 제품 소비 금액"),Object(n["g"])("td",null,"117,000,000원")],-1),Vc=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"PV 횟수"),Object(n["g"])("td",null,"4~7회")],-1),Hc=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"PV 금액"),Object(n["g"])("td",null,"120,000,000원")],-1),Fc=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"선택상품"),Object(n["g"])("td",null,"생활용품, 식품, 식...")],-1);function Lc(t,e,c,a,l,o){var b=Object(n["E"])("Navigation"),r=Object(n["E"])("FixedBtn");return Object(n["w"])(),Object(n["f"])("div",xc,[Object(n["j"])(b),Object(n["g"])("main",null,[Object(n["g"])("section",null,[Object(n["g"])("h1",Dc,Object(n["H"])(t.testerSaveData.name)+"의 자료",1),Object(n["g"])("table",Sc,[_c,Nc,Object(n["g"])("tbody",null,[Object(n["g"])("tr",null,[Pc,Object(n["g"])("td",null,Object(n["H"])(t.nowDate),1)]),Object(n["g"])("tr",null,[Ec,Object(n["g"])("td",null,Object(n["H"])(t.testerSaveData.birtDay),1)]),Ic,Object(n["g"])("tr",null,[Bc,Object(n["g"])("td",null,Object(n["H"])(t.selectedItem),1)]),Object(n["g"])("tr",null,[Cc,Object(n["g"])("td",null,Object(n["H"])(t.testerSaveData.tellNumber),1)]),$c,qc,Vc,Hc,Fc])]),Object(n["j"])(r,{onClick:e[0]||(e[0]=function(t){return o.snsShare("title","url")}),type:"button",msg:"공유하기"})])])])}Object(n["x"])();var Tc={name:"SaveDataList",computed:Object(xt["a"])({},Object(Dt["b"])(["nowDate","testerSaveData","selectedItem"])),methods:{snsShare:function(t,e){navigator.share?navigator.share({title:t,url:e}):alert("지원하지 않는 브라우저입니다.")}},components:{Navigation:Y,FixedBtn:D}};c("9e77");const zc=b()(Tc,[["render",Lc],["__scopeId","data-v-494d48d7"]]);var Rc=zc,Mc=[{path:"/",component:f},{path:"/intro",name:"intro",component:Z},{path:"/terms",name:"terms",component:lt},{path:"/terms2",name:"terms2",component:dt},{path:"/qna",component:Nt},{path:"/qna2",component:At},{path:"/result",component:ie},{path:"/result2",component:Pe},{path:"/AtomyProduct",component:Re},{path:"/SaveData",component:bc},{path:"/SaveDataList",name:"SaveDataList",component:kc},{path:"/SaveDataView",name:"SaveDataView",component:Rc}],Qc=Object(u["a"])({history:Object(u["b"])(),routes:Mc}),Ac=Qc,Uc=(c("99af"),Object(Dt["a"])({state:function(){return{familyNumber:["1인 가구","2명","3명","4명","5명 이상"],selectedItem:"1인 가구",livingProduct:["칫솔","치약","세탁용","비누","샴푸류","바디 워시류"],food:["생수","쌀, 즉석밥","김치","음료","라면, 컵라면"],selectedLivingItem:[],selectedfoodItem:[],SubcontractorCount:0,nowDate:"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()+1,"-").concat((new Date).getDate()),testerSaveData:{}}},mutations:{getSum:function(){console.log("합산")},increase:function(t,e){t.SubcontractorCount+=e},decrease:function(t,e){0!==t.SubcontractorCount&&(t.SubcontractorCount-=e)},getDate:function(t){t.testerSaveData.date=t.nowDate},getName:function(t,e){t.testerSaveData.name=e},getBirthDay:function(t,e){t.testerSaveData.birtDay=e},getTellNumber:function(t,e){t.testerSaveData.tellNumber=e}},actions:{add:function(t){t.commit("increase",1)},minus:function(t){t.commit("decrease",1)},setDate:function(t){t.commit("getDate")},setName:function(t,e){t.commit("getName",e)},setBirthDay:function(t,e){t.commit("getBirthDay",e)},setTellNumber:function(t,e){t.commit("getTellNumber",e)}}})),Kc=Uc,Gc=(c("7b17"),c("ab8b"),Object(n["c"])(i));Gc.use(Ac).use(Kc).mount("#app")},"5f19":function(t,e,c){"use strict";c("e2af")},"667a":function(t,e,c){"use strict";c("a38a")},"6aba":function(t,e,c){},"6cf5":function(t,e,c){},7031:function(t,e,c){"use strict";c("3756")},"7d26":function(t,e,c){"use strict";c("6aba")},"7d8d":function(t,e,c){},"825c":function(t,e,c){"use strict";c("f417")},"8e25":function(t,e,c){"use strict";c("a4e8")},"8f8d":function(t,e,c){t.exports=c.p+"img/img-form-02.4538ce0b.png"},"90de":function(t,e,c){},"9e77":function(t,e,c){"use strict";c("6cf5")},a388:function(t,e,c){},a38a:function(t,e,c){},a4e8:function(t,e,c){},a835:function(t,e,c){},b422:function(t,e,c){},bc15:function(t,e,c){"use strict";c("90de")},e2af:function(t,e,c){},f417:function(t,e,c){}});
//# sourceMappingURL=app.1d65a3dc.js.map