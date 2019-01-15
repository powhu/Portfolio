<template>
  <div id="app">
    <index-layout>
      <template slot="header">
        <div class="row align-items-center">
          <div class="col-sm-6 portfolio">
            <h1 class="rellax" data-rellax-speed="2">
              <ruby>楊
                <rt>ヤン</rt>
              </ruby>&nbsp;
              <ruby>勝文
                <rt>センウェン</rt>
              </ruby>
            </h1>
            <div class="rellax mt-4" data-rellax-speed="2">
              <div class="d-flex flex-column align-items-end">
                <p>iOS Enginner
                  <br>
                  <span style="font-size: 2em;font-weight:100;">×</span>
                  <br>UI/UX Designer
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <img src="@/image/portrait.png" class="portrait rellax" data-rellax-speed="-5">
          </div>
        </div>
      </template>

      <p slot="about">アップル好きすぎてエンジニアになった楊勝文と申します。台湾人です。
        <br>iOS開発経験8年、個人開発アプリは累計70万ダウンロードです。携わったアプリは30個超えてます。
        <br>以前日本に三年間働きました。前回ちょっと個人理由で帰国してしまいましたが、今度はもう一度日本で挑戦していきたいと思っています！
        <br>デザイン出身で、UI/UXにとってもこだわります。強みにもあって、企画から要件定義、設計デザイン、開発まで一人で完結できます。
        <br>日本文化大好きです。アニメ漫画はもちろん、バラエティにも大好きです。「月曜日から夜更かし」、「世界の果てまでイッテQ!」大好きです！
      </p>

      <template slot="timeline">
        <timeline :items="timeline"></timeline>
      </template>

      <template slot="works">
        <div class="row">
          <div class="col-sm-6 p-0" v-for="(work,index) in works" :key="index">
            <work-box v-bind="work"></work-box>
          </div>
        </div>
      </template>

      <template slot="skills">
        <skill-box title="Language" :grouped-skills="skills.language"></skill-box>
        <skill-box title="Framework" :grouped-skills="skills.framework"></skill-box>
        <skill-box title="Database" :skills="skills.database"></skill-box>
        <skill-box title="Design" :skills="['Photoshop','Adobe XD']"></skill-box>
        <skill-box title="Other" :skills="['git']"></skill-box>
      </template>

      <template slot="contact">
        <h5>
          powhux@gmail.com
          <a style="font-size:1.5em" href="mailto:youremailaddress">✉︎</a>
        </h5>
      </template>

      <template slot="copyright">2018 Copyright ShenWen Yang. Design By Yang. Made with Vue.js</template>
    </index-layout>
  </div>
</template>

<script>
import IndexLayout from "@/components/IndexLayout.vue";
import Timeline from "@/components/Timeline.vue";
import WorkBox from "@/components/WorkBox.vue";
import SkillBox from "@/components/SkillBox.vue";
import Rellax from "rellax";

export default {
  name: "app",
  components: {
    IndexLayout,
    Timeline,
    WorkBox,
    SkillBox
  },
  mounted: function() {
    new Rellax(".rellax");
  },
  data: () => {
    return {
      works: [
        {
          title: "Qちゃん",
          detail: "猫の気を引くために開発したアプリ",
          icon: require("@/image/icon/qchan.jpg"),
          link: "qchan.html"
        },
        {
          title: "DNS POWER CAFE オーダーアプリ",
          detail: "世界一パワーが入るカフェ",
          icon: require("@/image/icon/cafe.jpg"),
          link: "cafe.html"
        },
        {
          title: "やは嫁",
          detail: "Live Wallpaper作成アプリ",
          icon: require("@/image/icon/yome.jpg"),
          link: "yome.html"
        }
      ],
      skills: {
        language: [
          { title: "Mobile", skills: ["Swift", "Objective-C"] },
          { title: "Web", skills: ["HTML", "CSS", "JavaScript"] },
          { title: "Backend", skills: ["PHP"] }
        ],
        framework: [
          {
            title: "Mobile",
            skills: [
              "iBeacon",
              "Core Location",
              "MapKit",
              "Google Map SDK",
              "Autolayout",
              "Alamofire",
              "Realm",
              "OpenCV",
              "Parse",
              "SDWebImage",
              "Fabric",
              "CocoaPods"
            ]
          },
          {
            title: "Web",
            skills: ["jQuery", "Bootstrap", "Vue.js"]
          },
          {
            title: "Backend",
            skills: ["Parse server", "Laravel"]
          }
        ],
        database: ["MySQL", "SQLite", "Realm", "CoreData"]
      },
      timeline: [
        {
          title: "台湾宜蘭に生まれた",
          detail: "",
          date: "1986"
        },
        {
          title: "台湾科技大学 工業デザイン科",
          detail:
            "在学中アップル大ファンになり、卒業後アプリ開発を勉強するために留日",
          date: "2005~2009"
        },
        {
          title: "アジア文化会館 日本語学校",
          detail: "日本語試験N1取得",
          date: "2010~2011"
        },
        {
          title: "日本電子専門学校ケータイアプリ科",
          detail: "在学中複数のアプリをリリースした",
          date: "2011~2013"
        },
        {
          title: "Clinks株式会社",
          detail: "iOSエンジニアとして入社、半年間ずっとPHPやらせて退職",
          date: "2013/4~2013/10"
        },
        {
          title: "Electrodream株式会社",
          detail: "iOSエンジニア",
          date: "2013/10~2016/4"
        },
        {
          title: "帰国",
          detail: "離婚を機に",
          date: "2016/4"
        },
        {
          title: "フリーランス",
          detail: "受託開発と個人アプリ開発",
          date: "2016/4"
        },
        {
          title: "Lohas株式会社",
          detail: "マカオの会社フルリモート",
          date: "2017/10~2018/10"
        },
        {
          title: "フリーランス",
          detail: "またフリーになった",
          date: "2018/11~"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/css/const.scss";

.portfolio {
  text-align: right;
  h1 {
    font-family: "Helvetica Neue";
    font-size: 4.5em;
    font-weight: 300;
  }
  p {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.6em;
    font-weight: 300;
    line-height: 140%;
  }
}

.portrait {
  display: block;
  margin: 30px auto 0;
  margin-bottom: -80px;
  max-width: 100%;
}
</style>