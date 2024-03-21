import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("../components/Home.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../components/Login.vue")
    },
    {
        path: '/emotion',
        name: 'emotion',
        component: () => import("../components/Emotion.vue")
    },
    {
        path: '/family',
        name: 'family',
        component: () => import("../components/Family.vue")
    },

];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//路由拦截
router.beforeEach((to, from, next) => {
//    判断token是否存在
    const token = localStorage.getItem('token');
    if (to.path === '/login' && token) {
        next('/');
    } else if (to.path !== '/login' && !token) {
        next('/login');
    } else {
        next();
    }
})

// 3导出路由   然后去 main.ts 注册 router.ts
export default router