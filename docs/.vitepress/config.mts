import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "舒一笑博客",
  description: "江湖码路人俱乐部",
  head: [["link", { rel: "icon", href: "/微笑.svg" }]], // 浏览器标签页logo
  themeConfig: {
    logo: "/微笑.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '我的博客系列', 
        items: [
          { text: "掘金", link: "https://juejin.cn/user/4257747754552599" },
          { text: "CSDN", link: "https://blog.csdn.net/weixin_50503886?spm=1000.2115.3001.5343" },
          { text: "思否", link: "https://segmentfault.com/u/shuyixiaobututou" },
          { text: "51CTO博客", link: "https://blog.51cto.com/u_16656615" },
          { text: "腾讯云社区", link: "https://cloud.tencent.com/developer/user/10690481" },
          { text: "博客园", link: "https://www.cnblogs.com/shuyixiao" },
          { text: "知乎", link: "https://www.zhihu.com/people/ya-ba-3-32" },
          { text: "知乎", link: "https://www.zhihu.com/people/ya-ba-3-32" },
          { text: "开源中国", link: "https://my.oschina.net/u/8066011" },
          { text: "Gitee", link: "https://gitee.com/shuyixiao-only" }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 项目首页的footer
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2023-2025 舒一笑不秃头",
    },
  }
})
