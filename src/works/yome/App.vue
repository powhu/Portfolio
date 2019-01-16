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
        name: "やは嫁",
        subTitle: "アニメ壁紙作成",
        icon: require("@/image/icon/yome.jpg"),
        description: `
        アニメキャラクターを壁紙にしたいけど見られたらなんか恥ずかしいです。そのためこのアプリを開発しました。<br>
        Live Photoの仕様を利用して、カバーの静止画と動くの動画を自由に組み合わせる事で、特殊なLive Photoが作成できます。<br>
        普段は見せる壁紙、3D Touchすると大好きなキャラクター壁紙に変化します。<br>
        `,
        copyright: "2018 Copyright ShenWen Yang",
        appStoreURL: "https://itunes.apple.com/jp/app/id1205848268?mt=8",
        previous: "cafe.html",
        next: "cocoil.html",
        previews: [
          {
            video: require("@/video/yome1.mov"),
            title: "シンプルなUI、直感的なUX",
            description:
              "二枚のキャンパスで、使用者に上(見せる)と下(見せたくない)の二枚壁紙を選択してと直感的に伝える"
          },
          {
            video: require("@/video/yome3.mov"),
            title: "動画をトリミング",
            description: "動画をトリミングOpen Sourceがなかったため、自作した"
          },
          {
            video: require("@/video/yome2.mov"),
            title: "動く壁紙",
            description: "3D Touchすると動く"
          }
        ],
        screenshots: [
          {
            thumbnail: require("@/image/screenshot/yome5_s.jpeg"),
            raw: require("@/image/screenshot/yome5.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/yome6_s.jpeg"),
            raw: require("@/image/screenshot/yome6.jpeg")
          },

          {
            thumbnail: require("@/image/screenshot/yome2_s.jpeg"),
            raw: require("@/image/screenshot/yome2.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/yome3_s.jpeg"),
            raw: require("@/image/screenshot/yome3.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/yome4_s.jpeg"),
            raw: require("@/image/screenshot/yome4.jpeg")
          },
          {
            thumbnail: require("@/image/screenshot/yome1_s.jpeg"),
            raw: require("@/image/screenshot/yome1.jpeg")
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
            tags: ["iPhone"]
          },
          {
            title: "Technology",
            tags: ["AVFoundation", "Fabric", "PhotoKit", "In-App Purchase"]
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
