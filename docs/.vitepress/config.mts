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
          text: 'Calendar',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: 'August', link: '/en/calendar/202408' }
              ]
            }
          ]
        }
      ],

      'zh': [
        {
          text: '日期',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: '8月', link: '/zh/calendar/202408' }
              ]
            }
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
