(function(t){function e(e){for(var a,o,s=e[0],r=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&p.push(l[o][0]),l[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,s=1;s<i.length;s++){var r=i[s];0!==l[r]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},l={index:0},n=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=r;n.push([1,"chunk-vendors","chunk-common"]),i()})({"0072":function(t,e,i){t.exports=i.p+"img/portrait.772937f8.png"},"0765":function(t,e,i){},1:function(t,e,i){t.exports=i("5779")},"194e":function(t,e,i){"use strict";var a=i("be0f"),l=i.n(a);l.a},"19a3":function(t,e,i){"use strict";var a=i("f0d1"),l=i.n(a);l.a},"1c95":function(t,e,i){},"474d":function(t,e,i){t.exports=i.p+"img/lsbutton.6981e59d.jpg"},"52b2":function(t,e,i){t.exports=i.p+"img/yome2x.4856d226.jpg"},5779:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("index-layout",[a("template",{slot:"header"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-6 portfolio"},[a("h1",{staticClass:"rellax",attrs:{"data-rellax-speed":"2"}},[a("ruby",[t._v("楊\n              "),a("rt",[t._v("ヤン")])]),t._v(" \n            "),a("ruby",[t._v("勝文\n              "),a("rt",[t._v("センウェン")])])]),a("div",{staticClass:"rellax mt-4",attrs:{"data-rellax-speed":"2"}},[a("div",{staticClass:"d-flex flex-column align-items-end"},[a("p",[t._v("iOS Enginner\n                "),a("br"),a("span",{staticStyle:{"font-size":"2em","font-weight":"100"}},[t._v("×")]),a("br"),t._v("UI/UX Designer\n              ")])])])]),a("div",{staticClass:"col-sm-6"},[a("img",{staticClass:"portrait rellax",attrs:{src:i("0072"),"data-rellax-speed":"-5"}})])])]),a("p",{attrs:{slot:"about"},slot:"about"},[t._v("アップル好きすぎてエンジニアになった楊勝文と申します。台湾人人です。今日本働いてます。\n      "),a("br"),t._v("iOS開発経験"+t._s(t.yearsForIos)+"年。個人開発アプリは累計330万ダウンロード突破、月アクティブユーザは20万人に超えです。今まで携わったアプリは40個超えてます。Android開発経験2年。Kotlin Multiplatform開発経験1年半。\n      "),a("br"),t._v("大学はデザイン出身で、UI/UX分野には特に自信があります。\n      "),a("br"),t._v("長年の経験から、開発スピードに特に自信があります。0→1の開発は得意です。\n      "),a("br"),t._v("お客さんとの初回ミーティングで要望を収集後、一人で要件を定義し、UI/UXを設計し、Nativeでモックアップを開発して、次のミーティングでお客さんに実機で操作できるアプリを展示し、その場で契約を取った経験があります。\n    ")]),a("template",{slot:"timeline"},[a("timeline",{attrs:{items:t.timeline}})],1),a("template",{slot:"works"},[a("div",{staticClass:"row"},t._l(t.works,(function(e,i){return a("div",{key:i,staticClass:"col-sm-6 p-0"},[a("work-box",t._b({},"work-box",e,!1))],1)})),0)]),a("template",{slot:"skills"},[a("skill-box",{attrs:{title:"Language","grouped-skills":t.skills.language}}),a("skill-box",{attrs:{title:"Framework","grouped-skills":t.skills.framework}}),a("skill-box",{attrs:{title:"Database",skills:t.skills.database}}),a("skill-box",{attrs:{title:"Design",skills:["Photoshop","Adobe XD"]}}),a("skill-box",{attrs:{title:"Other",skills:["git"]}})],1),a("template",{slot:"contact"},[a("h5",[t._v("\n        powhux@gmail.com\n        "),a("a",{staticStyle:{"font-size":"1.5em"},attrs:{href:"mailto:youremailaddress"}},[t._v("✉︎")])])]),a("template",{slot:"copyright"},[t._v("2018 Copyright ShenWen Yang. Design By Yang. Made with Vue.js")])],2)],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("jumbo-header",{staticStyle:{"margin-bottom":"-130px"}},[i("div",{staticClass:"container"},[t._t("header")],2)]),i("terminal-box",{attrs:{title:"About Me"}},[t._t("about")],2),i("terminal-box",{attrs:{title:"Timeline"}},[t._t("timeline")],2),i("wide-box",{attrs:{title:"Works"}},[t._t("works")],2),i("terminal-box",{attrs:{title:"Skills"}},[t._t("skills")],2),i("terminal-box",{attrs:{title:"Contact"}},[t._t("contact")],2),i("footer",[i("div",{staticClass:"copyright text-center"},[t._t("copyright")],2)])],1)},s=[],r=i("935c"),c=i("b75a"),d=i("1313"),u={name:"IndexLayout",components:{TerminalBox:r["a"],JumboHeader:c["a"],WideBox:d["a"]}},p=u,f=(i("b07f"),i("2877")),m=Object(f["a"])(p,o,s,!1,null,null,null),b=m.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline"},t._l(t.items,(function(e,a){return i("div",{key:a,staticClass:"timelineCell"},[i("div",{staticClass:"timelineDot"}),i("div",{staticClass:"timelineContent"},[i("div",{staticClass:"timelineDate",attrs:{"data-aos-once":"true","data-aos":"fade-right","data-aos-offset":"50"}},[t._v(t._s(e.date))]),i("div",{attrs:{"data-aos":"fade-up"}},[i("h5",[t._v(t._s(e.title))]),e.detail?i("div",[t._v(t._s(e.detail))]):t._e()])])])})),0)},h=[],k=(i("e829"),i("f5af")),g=i.n(k),x={name:"Timeline",components:{},props:{items:Array},mounted:function(){g.a.init({once:!0})}},_=x,y=(i("194e"),Object(f["a"])(_,v,h,!1,null,null,null)),w=y.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"work",attrs:{"data-aos":"fade-up"}},[i("a",{attrs:{href:t.link,target:-1!==t.link.indexOf("http")?"_blank":"_self"}},[i("div",{staticClass:"workCard"},[i("img",{staticClass:"icon",attrs:{src:t.icon}}),i("h4",[t._v(t._s(t.title))]),i("div",[t._v(t._s(t.detail))])])])])},S=[],O={name:"WorkBox",props:["icon","title","detail","link"],mounted:function(){g.a.init({once:!0})}},j=O,M=(i("91a9"),Object(f["a"])(j,C,S,!1,null,null,null)),P=M.exports,L=i("f36d"),B=i("1db3"),D=i.n(B),W={name:"app",components:{IndexLayout:b,Timeline:w,WorkBox:P,SkillBox:L["a"]},mounted:function(){new D.a(".rellax")},data:function(){return{yearsForIos:(new Date).getFullYear()-2011,works:[{title:"Yome2x",detail:"Waifu2xをcoreMLに移植。評価件数2萬超え、平均評価★4.6。",icon:i("52b2"),link:"https://apps.apple.com/us/app/yome2x-photo-enhance/id1511677178"},{title:"Yidget",detail:"世界中で大人気なWidgetアプリ。ダウンロード数60萬突破。",icon:i("5d83"),link:"https://apps.apple.com/us/app/yidget/id1532848312"},{title:"やは嫁",detail:"Live Wallpaperを作成するアプリ",icon:i("28f6"),link:"yome.html"},{title:"Qちゃん",detail:"猫の気を引くために開発したアプリ",icon:i("b316"),link:"qchan.html"},{title:"DNS POWER CAFE",detail:"オーダーアプリ",icon:i("a074"),link:"cafe.html"},{title:"ココイル",detail:"今いる場所をみんなで共有するアプリ",icon:i("cbac"),link:"cocoil.html"},{title:"スゴイ便利帳",detail:"役に立つ知識、ツールいっぱい収録するアプリ",icon:i("12bf"),link:"note.html"},{title:"TKCalendar",detail:"「君の名は」滝と三つ葉が使った日記アプリのアニメーションをUIKitで再現する",icon:i("ca6f"),link:"https://github.com/powhu/TKCalendarView"},{title:"LSButton",detail:"ロングシャドウをUIKitで再現する",icon:i("474d"),link:"https://github.com/powhu/LSButton"}],skills:{language:[{title:"Mobile",skills:["Swift","Objective-C","Kotlin"]},{title:"Web",skills:["HTML","CSS","JavaScript"]},{title:"Backend",skills:["PHP"]}],framework:[{title:"Mobile",skills:["RxSwift","iBeacon","Core Location","Core ML","MapKit","Google Map SDK","Autolayout","Alamofire","Realm","OpenCV","Parse","Firebase","Fabric","CocoaPods","Kotlin Multiplatform","Jetpack compose"]},{title:"Web",skills:["jQuery","Bootstrap","Vue.js"]},{title:"Backend",skills:["Parse server","Laravel"]}],database:["MySQL","SQLite","Realm","CoreData"]},timeline:[{title:"台湾宜蘭に生まれた",detail:"",date:"1986"},{title:"台湾科技大学 工業デザイン科",detail:"在学中アップル大ファンになり、卒業後アプリ開発を勉強するために留日",date:"2005~2009"},{title:"アジア文化会館 日本語学校",detail:"日本語試験N1取得",date:"2010~2011"},{title:"日本電子専門学校ケータイアプリ科",detail:"在学中複数のアプリをリリースした",date:"2011~2013"},{title:"Clinks株式会社",detail:"iOSエンジニアとして入社、半年間ずっとPHPやらせて退職",date:"2013/4~2013/10"},{title:"Electrodream株式会社",detail:"iOSエンジニア",date:"2013/10~2016/4"},{title:"帰国",detail:"離婚を機に",date:"2016/4"},{title:"フリーランス",detail:"受託開発と個人アプリ開発",date:"2016/4"},{title:"Lohas株式会社",detail:"マカオの会社フルリモート",date:"2017/10~2018/10"},{title:"フリーランス",detail:"またフリーになった",date:"2018/11~"},{title:"株式会社チームラボ",detail:"スマホチーム",date:"2019/4~2020/4"},{title:"株式会社カクシン",detail:"スマホチーム",date:"2020/8~"}]}}},T=W,I=(i("19a3"),Object(f["a"])(T,l,n,!1,null,null,null)),K=I.exports,E=i("5f5b"),U=i("a78e"),A=i.n(U);i("f9e3"),i("2dd8"),i("e7eb");a["default"].use(E["a"]),a["default"].config.productionTip=!1,"true"===A.a.get("auth")?new a["default"]({render:function(t){return t(K)}}).$mount("#app"):location.href="login.html"},"5d83":function(t,e,i){t.exports=i.p+"img/yidget.af8cd3a5.jpg"},"91a9":function(t,e,i){"use strict";var a=i("1c95"),l=i.n(a);l.a},b07f:function(t,e,i){"use strict";var a=i("0765"),l=i.n(a);l.a},be0f:function(t,e,i){},ca6f:function(t,e,i){t.exports=i.p+"img/tkcalendar.603bb03e.jpg"},f0d1:function(t,e,i){}});