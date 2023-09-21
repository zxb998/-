import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './pinia'; // 导入 Pinia 实例
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css';

const app = createApp(App)

// 使用路由
app.use(router)

// 使用 Pinia 实例
app.use(pinia);

// 使用ElementPlus实例
app.use(ElementPlus)

app.mount('#app')