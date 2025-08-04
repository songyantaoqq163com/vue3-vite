import { createI18n } from 'vue-i18n'
import zh from './lang/zh-CN.js'
import en from './lang/en-US.js'

const messages = { 'zh-CN': zh, 'en-US': en }

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'zh-CN', // 先从缓存读
  fallbackLocale: 'zh-CN',
  legacy: false,              // 使用 Composition API
  globalInjection: true,      // 全局注入 $t
  messages
})

export default i18n