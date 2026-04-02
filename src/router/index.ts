import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {isMobileDevice} from "../utils/deviceDetector.ts";

// 2. 配置路由
const mobileRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/components/mobile/Home.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/components/mobile/Login.vue")
    },
    {
        path: '/emotion',
        name: 'emotion',
        component: () => import("@/components/mobile/Emotion.vue")
    },
    {
        path: '/family',
        name: 'family',
        component: () => import("@/components/mobile/Family.vue")
    },
    {
        path: '/insert',
        name: 'insert',
        component: () => import("@/components/mobile/InsertMember.vue")
    },

];
const pcRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import("@/components/pc/Login.vue")
    },
    {
        path: '/',
        name: 'Home',
        component: () => import("@/components/pc/Home.vue")
    }, {
        path: '/register',
        name: 'Register',
        component: () => import("@/components/pc/Register.vue")
    },
]

const isMobile = isMobileDevice();

// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
    history: createWebHistory(),
    routes: isMobile ? mobileRoutes : pcRoutes
});

//路由拦截
router.beforeEach((to, from, next) => {
//    判断token是否存在
    const token = sessionStorage.getItem('token');
    if (to.path === '/register') {
        next();
        return;
    }
    if (to.path === '/login' && token) {
        next('/');
        return;
    } else if (to.path !== '/login' && !token) {
        next('/login');
        return;
    } else {
        next();
        return;
    }
})


// 3导出路由   然后去 main.ts 注册 router.ts
export default router