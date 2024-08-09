import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: "en-us",
  description: "Audrey Grant's Daily Bridge Column",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Mode',
        items: [
          { text: 'Learning', link: '/en/learning' },
          { text: 'Practice', link: '/en/practice' }
        ]
      }
    ],

    sidebar: {
      '/en/learning': [
        {
          text: 'Calendar',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: 'August', link: '/en/learning/calendar/202408' }
              ]
            }
          ]
        }
      ],

      '/en/practice': [
        {
          text: 'Calendar',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: 'August', link: '/en/practice/calendar/202408' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.yanty.top' }
    ]
  }
})
