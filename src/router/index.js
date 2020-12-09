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
        component:Head, //非按需求导入（加载慢）
        // 子路由
        children: [
            {path: '/about',component: ()=>import('@/views/headViews/About.vue')}, //按需求导入（加载快）
            {path:'/home',component: ()=>import('@/views/headViews/Home.vue')},
        ]
    },
    //默认重定向路径
    // 登录
    {path:'/loginon', redirect: '/login'},
    {
        path: '/loginon',
        component:Loginon,
        children: [
            {path:'/login',component:Login},
            {path:'/logon',component:Logon}
            ]
    },
    // 控制
    {path:'/lemming_admin/lccenter',redirect: '/lemming_admin/data_info'},
    {path:'/lemming_admin/lccenter',component:LCCenter,
        children: [
            {path: '/lemming_admin/data_info',component: ()=>import('@/components/adminControls/data_info.vue')},
            {path:'/lemming_admin/music_admin',component: ()=>import('@/components/adminControls/music_admin.vue')},
            {path:'/lemming_admin/userMsg_admin',component: ()=>import('@/components/adminControls/userMsg_admin')},
            {path: '/lemming_admin/article_admin',component: ()=>import('@/components/adminControls/article_admin.vue')},
            {path: '/lemming_admin/users_admin',component:()=>import('@/components/adminControls/users_admin.vue')}
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
