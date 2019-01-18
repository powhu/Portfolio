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
        name: "DNS POWER CAFE",
        subTitle: "オーダーアプリ",
        icon: require("@/image/icon/cafe.jpg"),
        description: `
        スポーツ用品販売会社が経営しているカフェのオーダーアプリです。このカフェの特徴は注文がとても細かい、養素バランスを重視して、グラム単位で注文が可能です。本来はお客さんが紙で注文内容を書いて、店員がPOSに入力するという方法ですが、とても手間がかかります。注文をアプリ化してよりいいサービスを提供しようと始めた案件です。<br>
        要件定義から開発まで一人でアプリを完成しました。
        `,
        copyright: "2018 Copyright ShenWen Yang",
        appStoreURL:
          "https://itunes.apple.com/jp/app/dns-power-cafe-%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%82%A2%E3%83%97%E3%83%AA/id950979276?mt=8",
        previous: "qchan.html",
        next: "yome.html",
        previews: [
          {
            video: require("@/video/cafe1.mov"),
            title: "ゴリゴリ動く",
            description:
              "派手なUIでインパクトを与えて、「世界一パワーが入るカフェ」の理念を伝える。注文は自由に組み合わせる、栄養バランスもすぐ確認できる。"
          }
        ],
        screenshots: [
          {
            thumbnail: require("@/image/screenshot/cafe1_s.jpeg"),
            raw: require("@/image/screenshot/cafe1.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cafe2_s.jpeg"),
            raw: require("@/image/screenshot/cafe2.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cafe3_s.jpeg"),
            raw: require("@/image/screenshot/cafe3.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cafe4_s.jpeg"),
            raw: require("@/image/screenshot/cafe4.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cafe5_s.jpeg"),
            raw: require("@/image/screenshot/cafe5.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/cafe6_s.jpeg"),
            raw: require("@/image/screenshot/cafe6.jpeg")
          }
        ],
        details: [
          {
            title: "種類",
            tags: ["前会社受託開発"]
          },
          {
            title: "担当",
            tags: [
              "企画",
              "要件定義",
              "設計デザイン",
              "開発",
              "バックエンド",
              "POS連携",
              "保守"
            ]
          },
          {
            title: "Language",
            tags: ["Objective-C"]
          },
          {
            title: "Device",
            tags: ["iPhone"]
          },
          {
            title: "Technology",
            tags: ["Push Notification", "Parse", "SQLite"]
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
