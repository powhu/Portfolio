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
        name: "スゴイ便利帳",
        subTitle: "役に立つ知識、ツールいっぱい収録するアプリ",
        icon: require("@/image/icon/note.jpg"),
        description: `
        たくさんの情報と便利ツールを一つのアプリにまとめたアプリです。用紙サイズ、入学卒業年、郵便番号などなど。<br>
        App Store Top Paid App 一位獲得し数多くのメディアに紹介されました。
        `,
        copyright: "2018 Copyright ShenWen Yang",
        appStoreURL: "https://itunes.apple.com/jp/app/id518553541?mt=8",
        previous: "cocoil.html",
        next: "qchan.html",
        previews: [
          {
            video: require("@/video/note1.mov"),
            title: "シンプルなUI",
            description: "見やすく、使いやすい設計"
          },
          {
            video: require("@/video/note2.mov"),
            title: "ジェスチャー操作",
            description:
              "左右スワイプで機能を切り替え、下にパンで一覧メニューを出す"
          }
        ],
        screenshots: [
          {
            thumbnail: require("@/image/screenshot/note5_s.jpeg"),
            raw: require("@/image/screenshot/note5.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/note6_s.jpeg"),
            raw: require("@/image/screenshot/note6.jpeg")
          },

          {
            thumbnail: require("@/image/screenshot/note2_s.jpeg"),
            raw: require("@/image/screenshot/note2.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/note3_s.jpeg"),
            raw: require("@/image/screenshot/note3.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/note4_s.jpeg"),
            raw: require("@/image/screenshot/note4.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/note1_s.jpeg"),
            raw: require("@/image/screenshot/note1.jpeg")
          }
        ],
        details: [
          {
            title: "種類",
            tags: ["個人開発"]
          },
          {
            title: "担当",
            tags: ["企画", "要件定義", "設計デザイン", "開発"]
          },
          {
            title: "Language",
            tags: ["Swift"]
          },
          {
            title: "Device",
            tags: ["iPhone", "iPad"]
          },
          {
            title: "Technology",
            tags: ["Fabric", "SQLite"]
          },
          {
            title: "Localization",
            tags: ["日本語"]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
</style>
