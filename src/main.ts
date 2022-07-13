import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:windi.css'

const app = createApp(App)
app
  .use(ElementPlus, {size: 'small', locale: zhCN})
  .use(router)
  .mount('#app')
