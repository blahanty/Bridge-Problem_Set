import { defineConfig } from 'vitepress'
import { en } from './en.mts'
import { zh } from './zh.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bridge Problem Set",
  description: "Audrey Grant's Daily Bridge Column",

  locales: {
    en: { label: 'English', ...en },
    zh: { label: '中文', link: '/zh/', ...zh }
  },
  
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                displayDetails: '显示详细信息',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '返回',
                noResultsText: '无法找到相关结果',                
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '选择',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上一个',
                  navigateDownKeyAriaLabel: '下一个',
                  closeText: '关闭',
                  closeKeyAriaLabel: '关闭'
                }
              }
            }
          }
        }
      }
    },
  }
})
