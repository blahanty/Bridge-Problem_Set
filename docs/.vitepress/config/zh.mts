import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  lang: "zh-Hans",
  description: "Audrey Grant的每日桥牌栏目",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "桥牌练习题库",

    nav: [
      {
        text: '模式',
        items: [
          { text: '学习', link: '/zh/learning' },
          { text: '练习', link: '/zh/practice' }
        ]
      }
    ],

    sidebar: {
      '/zh/learning': [
        {
          text: '日期',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: '8月', link: '/zh/learning/calendar/202408' }
              ]
            }
          ]
        }
      ],

      '/zh/practice': [
        {
          text: '日期',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: '8月', link: '/zh/practice/calendar/202408' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.yanty.top' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
