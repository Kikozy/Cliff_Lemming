// 路由配置

import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '../views/Head.vue'
import Home from '../views/headViews/Home.vue'
import Loginon from '../views/headViews/Loginon.vue'
import About from '../views/headViews/About.vue'
import Login from "@/components/Loginon/Login";
import Logon from "@/components/Loginon/Logon";


// router报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
// 路由
const routes = [
    // {
    //   path: '/about',
    //   component: About
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }

    //重定向，当访问/路径时，自动跳转到/home
    {path: '/', redirect: '/home'},
    {
        path: '/',
        component: Head,
        // 子路由
        children: [
            {path: '/about',component: About},
            {path:'/home',component: Home},
        ]
    },
    //默认重定向路径
    {path:'/loginon', redirect: '/login'},
    {
        path: '/loginon',
        component: Loginon,
        children: [
            {path:'/login',component: Login},
            {path:'/logon',component: Logon}
            ]
    }
]

const router = new VueRouter({
    routes
})

export default router
