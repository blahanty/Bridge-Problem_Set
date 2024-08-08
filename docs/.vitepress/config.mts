import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bridge Problem Set",
  description: "Audrey Grant's daily bridge column",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '中文', link: '/zh' },
      { text: 'English', link: '/en' }
    ],

    sidebar: {
      '/en': [
        {
          text: 'Sort by Category',
          items: [
            {
              text: 'Bid',
              collapsed: true,
              items: [
                { text: '2024', link: '/en/category/bid/2024' }
              ]
            },
            {
              text: 'Play',
              collapsed: true,
              items: [
                { text: '2024', link: '/en/category/play/2024' }
              ]
            },
            {
              text: 'Defense',
              collapsed: true,
              items: [
                { text: '2024', link: 'en/category/defense/2024' }
              ]
            }
          ]
        },
        {
          text: 'Sort by Date',
          items: [
            { text: '2024', link: '/en/date/2024' }
          ]
        }
      ],

      'zh': [
        {
          text: '按类别排序',
          items: [
            {
              text: '叫牌',
              collapsed: true,
              items: [
                { text: '2024', link: '/zh/category/bid/2024' }
              ]
            },
            {
              text: '坐庄',
              collapsed: true,
              items: [
                { text: '2024', link: '/zh/category/play/2024' }
              ]
            },
            {
              text: '防守',
              collapsed: true,
              items: [
                { text: '2024', link: '/zh/category/defense/2024' }
              ]
            }
          ]
        },
        {
          text: '按日期排序',
          items: [
            { text: '2024', link: '/zh/date/2024' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.yanty.top' }
    ],

    search: {
      provider: 'local'
    }
  }
})
