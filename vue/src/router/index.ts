import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue') // 懒加载视图组件
    }
    // 更多路由配置...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
