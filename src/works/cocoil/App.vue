<template>
  <div id="app">
    <work-layout v-bind="info"></work-layout>
  </div>
</template>

<script>
import WorkLayout from "@/components/WorkLayout.vue";

export default {
  name: "app",
  components: { WorkLayout },
  data: () => {
    return {
      info: {
        name: "ココイル",
        subTitle: "今いる場所をみんなで共有",
        icon: require("@/image/icon/cocoil.jpg"),
        description: `
        以前勤めていた会社の内部開発です。社内「農業部」が出来ていて、週末にみんな田舎にある畑に行って野菜を作ります。<br>
        みんなは各自の家から畑に移動するが、途中にみんなの居場所を共有したいという目的にこのアプリを開発しました。<br>
        コンセプトは一時的に位置情報を共有します。なのでアカウトを作成するなど初期設定は一切無くして、部屋番号＋パスワードだけですぐ位置情報が共有出来ます。<br>
        Best of 2015 Apple Watch部門に選ばれました。
        `,
        copyright: "2018 Copyright ShenWen Yang",
        appStoreURL: "https://itunes.apple.com/jp/app/id905220047",
        previous: "yome.html",
        next: "note.html",
        previews: [
          {
            video: require("@/video/cocoil1.mov"),
            title: "色＋番号",
            description:
              "複雑な設定一切ない、色を選択して、パスワードを入力するだけで部屋が作れる。仲間に「緑に745、パスワードはいつのもの」と伝えば、すぐ共有できる。"
          },
          {
            video: require("@/video/cocoil2.mov"),
            title: "チャット機能",
            description: "今の状態を仲間に伝える"
          },
          {
            video: require("@/video/cocoil3.mov"),
            title: "目的地設定",
            description: "目的地を設定することで、到着したら全員に通知する"
          }
        ],
        screenshots: [
          {
            thumbnail: require("@/image/screenshot/cocoil2_s.jpeg"),
            raw: require("@/image/screenshot/cocoil2.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cocoil3_s.jpeg"),
            raw: require("@/image/screenshot/cocoil3.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cocoil4_s.jpeg"),
            raw: require("@/image/screenshot/cocoil4.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cocoil5_s.jpeg"),
            raw: require("@/image/screenshot/cocoil5.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cocoil1_s.jpeg"),
            raw: require("@/image/screenshot/cocoil1.jpeg")
          }
        ],
        details: [
          {
            title: "種類",
            tags: ["前会社社内開発"]
          },
          {
            title: "担当",
            tags: ["要件定義", "設計デザイン", "開発", "バックエンド", "保守"]
          },
          {
            title: "Language",
            tags: ["Objective-C"]
          },
          {
            title: "Device",
            tags: ["iPhone", "iPad"]
          },
          {
            title: "Technology",
            tags: [
              "Push Notification",
              "Parse",
              "Core Location",
              "MapKit",
              "WatchOS",
              "Today Extension"
            ]
          },
          {
            title: "Localization",
            tags: ["日本語", "英語", "中国語"]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
</style>
