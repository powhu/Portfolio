(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"12bf":function(t,s,a){t.exports=a.p+"img/note.a76b324e.jpg"},1313:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid",class:{lightGradientBackground:!t.isBackgroundTransparent,paddingTopBottom:!t.isBackgroundTransparent}},[a("div",{staticClass:"container"},[t.title?a("h1",[t._v("\n      "+t._s(t.title)+"\n      "),a("span",{staticClass:"animate-flicker"},[t._v("|")])]):t._e(),t._t("default")],2)])},i=[],n={name:"WideBox",components:{},props:{title:String,isBackgroundTransparent:{type:Boolean,default:!1}}},o=n,l=(a("a53c"),a("2877")),r=Object(l["a"])(o,e,i,!1,null,null,null);r.options.__file="WideBox.vue";s["a"]=r.exports},1726:function(t,s,a){"use strict";var e=a("8351"),i=a.n(e);i.a},"22b6":function(t,s,a){},2731:function(t,s,a){"use strict";var e=a("22b6"),i=a.n(e);i.a},"28f6":function(t,s,a){t.exports=a.p+"img/yome.7019762c.jpg"},"48bf":function(t,s,a){},"497a":function(t,s,a){"use strict";var e=a("b93e"),i=a.n(e);i.a},"7a86":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"workDetail"},[a("jumbo-header",[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-6"},[a("img",{staticClass:"icon rellax",attrs:{src:t.icon,"data-rellax-speed":"-7"}})]),a("div",{staticClass:"col-sm-6 appInfo"},[a("h1",{staticClass:"appName rellax",attrs:{"data-rellax-speed":"-7"}},[t._v(t._s(t.name))]),a("div",{staticClass:"subTitle rellax",attrs:{"data-rellax-speed":"-7"}},[t._v(t._s(t.subTitle))])])])])]),a("terminal-box",{attrs:{title:"Introduction"}},[a("p",{domProps:{innerHTML:t._s(t.description)}})]),a("wide-box",[a("preview",{attrs:{items:t.previews}})],1),a("wide-box",{attrs:{"is-background-transparent":"",title:"Screenshot"}},[a("div",{staticClass:"screenshotSection row"},t._l(t.screenshots,function(t,s){return a("div",{key:s,staticClass:"col-4 col-sm-4 col-md-2",attrs:{"data-aos":"fade-up","data-aos-delay":50*s}},[a("a",{attrs:{"data-fancybox":"gallery",href:t.raw}},[a("img",{attrs:{src:t.thumbnail}})])])}),0)]),a("wide-box",{attrs:{"is-background-transparent":"",title:"Download"}},[a("div",{staticClass:"downloadSection"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 my-auto"},[a("a",{staticClass:"appStore",attrs:{id:"appstore",href:t.appStoreURL,target:"_blank"}})]),a("div",{staticClass:"col-sm-6 my-auto"},[a("div",{staticClass:"qrCode",attrs:{id:"qrcode"}})])])])]),a("terminal-box",{attrs:{title:"Detail"}},[a("div",{staticClass:"skill"},t._l(t.details,function(t,s){return a("div",{key:"g"+s},[a("skill-box",{attrs:{title:t.title,skills:t.tags}})],1)}),0)]),a("div",{staticClass:"container"},[a("ul",{staticClass:"nav justify-content-center"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:t.previous}},[t._v("Previous")])]),t._m(0),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:t.next}},[t._v("Next")])])])]),a("footer",[a("div",{staticClass:"copyright text-center"},[t._v(t._s(t.copyright))])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[t._v("Home")])])}],n=(a("cadf"),a("551c"),a("097d"),a("f36d")),o=a("935c"),l=a("b75a"),r=a("1313"),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container preview"},t._l(t.items,function(s,e){return a("div",{key:e,staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"videoPreview"},[a("video",{attrs:{autoplay:"",loop:"",controls:""}},[a("source",{attrs:{src:s.video,type:"video/mp4"}})])])]),a("div",{staticClass:"col-sm-6 my-auto",class:{"order-sm-first":e%2!=0}},[a("terminal-box",{staticClass:"mb",attrs:{"is-show-control":!1,"data-aos":"fade-up"}},[a("h4",[t._v(t._s(s.title))]),a("p",{staticClass:"des"},[t._v(t._s(s.description))])])],1)])}),0)},u=[],d=(a("e829"),a("f5af")),p=a.n(d),v={name:"Preview",props:["items"],components:{TerminalBox:o["a"]},mounted:function(){p.a.init({once:!0})}},f=v,m=(a("497a"),a("2877")),_=Object(m["a"])(f,c,u,!1,null,null,null);_.options.__file="Preview.vue";var C=_.exports,b=a("d044"),h=a.n(b),x=a("1db3"),g=a.n(x),k=(a("1157"),a("3964"),a("b11a"),{name:"WorkLayout",components:{TerminalBox:o["a"],JumboHeader:l["a"],WideBox:r["a"],SkillBox:n["a"],Preview:C},props:["icon","name","subTitle","description","previews","screenshots","appStoreURL","details","copyright","previous","next"],mounted:function(){new h.a("qrcode",{text:this.appStoreURL,width:200,height:200,colorDark:"#000000",colorLight:"#F5F3EC"}),new g.a(".rellax")}}),w=k,y=(a("db50"),Object(m["a"])(w,e,i,!1,null,null,null));y.options.__file="WorkLayout.vue";s["a"]=y.exports},8351:function(t,s,a){},"935c":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"terminalBox",class:{bottomMargin:t.isShowControl}},[t.isShowControl?a("div",{staticClass:"controlContainer"},[a("div",{staticClass:"redButton"}),a("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.show=!t.show}}},[a("div",{staticClass:"yellowButton"},[t._v("ー")])]),a("div",{staticClass:"greenButton"})]):t._e(),t.title?a("h1",[t._v("\n      "+t._s(t.title)+"\n      "),a("span",{staticClass:"animate-flicker"},[t._v("|")])]):t._e(),a("transition",{attrs:{name:"fade"}},[t.show?a("div",[t._t("default")],2):t._e()])],1)])},i=[],n={name:"TerminalBox",data:function(){return{show:!0}},props:{title:{type:String},isShowControl:{type:Boolean,default:!0}},components:{}},o=n,l=(a("1726"),a("2877")),r=Object(l["a"])(o,e,i,!1,null,null,null);r.options.__file="TerminalBox.vue";s["a"]=r.exports},a074:function(t,s,a){t.exports=a.p+"img/cafe.e2f0db95.jpg"},a53c:function(t,s,a){"use strict";var e=a("d48d"),i=a.n(e);i.a},b316:function(t,s,a){t.exports=a.p+"img/qchan.3606c1b1.jpg"},b75a:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container-fluid jumboHeader"},[a("div",{staticClass:"bg"}),t._t("default"),a("div",{staticClass:"bottomLine"})],2)])},i=[],n={name:"JumboHeader",components:{}},o=n,l=(a("f642"),a("2877")),r=Object(l["a"])(o,e,i,!1,null,null,null);r.options.__file="JumboHeader.vue";s["a"]=r.exports},b93e:function(t,s,a){},cbac:function(t,s,a){t.exports=a.p+"img/cocoil.f6adea19.jpg"},d48d:function(t,s,a){},d7df:function(t,s,a){},db50:function(t,s,a){"use strict";var e=a("48bf"),i=a.n(e);i.a},e7eb:function(t,s,a){},f36d:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"skill"},[a("h5",[t._v(t._s(t.title))]),a("ul",[t.groupedSkills?[t._l(t.groupedSkills,function(s,e){return[a("li",{key:"g"+e,staticClass:"group"},[t._v(t._s(s.title))]),t._l(s.skills,function(s){return a("li",{key:s},[t._v(t._s(s))])})]})]:t._l(t.skills,function(s,e){return a("li",{key:e},[t._v(t._s(s))])})],2)])},i=[],n={name:"SkillBox",props:["title","skills","groupedSkills"]},o=n,l=(a("2731"),a("2877")),r=Object(l["a"])(o,e,i,!1,null,null,null);r.options.__file="SkillBox.vue";s["a"]=r.exports},f642:function(t,s,a){"use strict";var e=a("d7df"),i=a.n(e);i.a}}]);