import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "舒一笑不秃头",
  description: "笑谈技术栈",
  head: [["link", { rel: "icon", href: "/微笑.svg" }]], // 浏览器标签页logo
  themeConfig: {
    logo: "/微笑.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '字节码炼金术',
        link: '/ai-notes'
      },
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
      },
      {
        text: '字节码炼金术',
        collapsible: true, // 可折叠分组
        items: [
          {
            text: 'GPT初探',
            link: '/ai-notes/GPT初探',
            // 若需要多级目录可嵌套配置[6](@ref)
            items: [
              { text: 'OpenAI GPT系列模型发展解析', link: '/ai-notes/OpenAI GPT系列模型发展解析/OpenAI GPT系列模型发展解析' },
              { text: '大模型技术发展与应用总结', link: '/ai-notes/大模型技术发展与应用总结/大模型技术发展与应用总结' }
            ]
          },
          { text: '深度学习实践', link: '/ai-notes/deep-learning' },
          { text: '大模型微调指南', link: '/ai-notes/fine-tuning' },
          {
            text: 'AI写作工具测评',
            link: '/ai-notes/writing-tools',
            // 引用搜索结果中的工具列表[3](@ref)
            items: [
              { text: '笔尖AI写作', link: '/ai-notes/tools/bijian' },
              { text: '文心一言应用', link: '/ai-notes/tools/wenxin' },
              { text: '通义千问实践', link: '/ai-notes/tools/tongyi' }
            ]
          }
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
