import { title } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt"],
  plugins: ["~/plugins/google-analytics.ts"],
  ssr: true,
  app: {
    head: {
      script: [
        {
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9593230041049490",
          crossorigin: "anonymous",
        },
      ],
      title: "Hơi Thở Mặt Trời - Chia sẻ kinh nghiệm chơi game",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "title",
          content: "Hơi Thở Mặt Trời - Chia sẻ kinh nghiệm chơi game",
        },
        {
          name: "og:title",
          content: "Hơi Thở Mặt Trời - Chia sẻ kinh nghiệm chơi game",
        },
        {
          name: "description",
          content:
            "Khám phá những kinh nghiệm quý báu trong game Hơi Thở Mặt Trời với trang chia sẻ này. Tìm hiểu các mẹo, thủ thuật và chiến lược để trải nghiệm trọn vẹn thế giới rộng lớn. Đối đầu với thử thách, khám phá bí mật và chiến thắng những trận chiến cam go nhất.",
        },
        {
          name: "og:description",
          content:
            "Khám phá những kinh nghiệm quý báu trong game Hơi Thở Mặt Trời với trang chia sẻ này. Tìm hiểu các mẹo, thủ thuật và chiến lược để trải nghiệm trọn vẹn thế giới rộng lớn. Đối đầu với thử thách, khám phá bí mật và chiến thắng những trận chiến cam go nhất.",
        },
        {
          name: "og:image",
          content: "/banner.jpeg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    },
  },
});
