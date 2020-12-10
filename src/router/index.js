// 路由配置

import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '../views/Head.vue'
// import Home from '../views/headViews/Home.vue'
import Loginon from '../views/Loginon/Loginon.vue'
// import About from '../views/headViews/About.vue'
import Login from "@/components/Loginon/Login";
import Logon from "@/components/Loginon/Logon";
import LCCenter from '@/views/LemControlCenter/LCCenter.vue'
// import Data_info from '@/components/adminControls/data_info.vue'
// import Music_admin from '@/components/adminControls/music_admin.vue'
// import Usermsg_admin from '@/components/adminControls/userMsg_admin.vue'
// import Users_admin from '@/components/adminControls/users_admin.vue'
// import Article_admin from '@/components/adminControls/article_admin.vue'


// router报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
// 路由
const routes = [
    //重定向，当访问/路径时，自动跳转到/home
    // 主页
    {path: '/', redirect: '/home'},
    {
        path: '/',
        component: Head, //非按需求导入（加载慢）
        // 子路由
        children: [
            {path: '/about', meta: {title: '关于'}, component: () => import('@/views/headViews/About.vue')}, //按需求导入（加载快）
            {path: '/home', meta: {title: '主页'}, component: () => import('@/views/headViews/Home.vue')},
            {path: '/timeline', meta: {title: '时间线'}, component: () => import('@/views/headViews/Timeline')},
            {path: '/test', meta: {title: '测试'}, component: () => import('@/views/headViews/Test')},
            {path: '/lemming', meta: {title: 'Lemming'}, component: () => import('@/views/headViews/Lemming')},
        ]
    },
    //默认重定向路径
    // 登录
    {path: '/loginon', redirect: '/login'}, //默认跳转路径
    {
        path: '/loginon',
        component: Loginon,
        children: [ //子路径
            {path: '/login', meta: {title: '登录'}, component: Login},
            {path: '/logon', meta: {title: '注册'}, component: Logon}
        ]
    },
    // 控制
    {path: '/lemming_admin/lccenter', redirect: '/lemming_admin/data_info'},
    {
        path: '/lemming_admin/lccenter', component: LCCenter,
        children: [ // 子路径
            {
                path: '/lemming_admin/data_info',
                meta: {title: '数据管理'}, // meta描述数据
                component: () => import('@/components/adminControls/data_info.vue')
            },
            {
                path: '/lemming_admin/music_admin',
                meta: {title: '音乐管理'},
                component: () => import('@/components/adminControls/music_admin.vue')
            },
            {
                path: '/lemming_admin/userMsg_admin',
                meta: {title: '留言管理'},
                component: () => import('@/components/adminControls/userMsg_admin')
            },
            {
                path: '/lemming_admin/article_admin',
                meta: {title: '文章管理'},
                component: () => import('@/components/adminControls/article_admin.vue')
            },
            {
                path: '/lemming_admin/users_admin',
                meta: {title: '用户管理'},
                component: () => import('@/components/adminControls/users_admin.vue')
            }
        ]
    }
]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
})

// 全局导航守卫 前置钩子 跳转前执行的
router.beforeEach((to, from, next) => {
    document.title = '🐨' + to.meta.title // 控制全局标签名称
    next() // 必带！！！跳转的
    // 判断是否登录再跳转
    // next('/login')

})

// 将router对象传入到vue实例
export default router
