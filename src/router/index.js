// 路由配置
// 导入store
import store from "@/store";
import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '../views/index.vue'
import Loginon from '../views/Loginon/Loginon.vue'
import LCCenter from '@/views/LemControlCenter/LCCenter.vue'
import {request} from "@/network/requests";
import cookie from "cookie_js";

// router报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
// 路由
const routes = [
    {path: '/TEST1', component: () => import('@/components/TEST/TEST')},
    // 主页
    {
        path: '/',
        component: Head, //非按需求导入（加载慢）
        //重定向，当访问/路径时，自动跳转到/home
        redirect: '/home',
        // 子路由
        children: [
            {
                path: '/article',
                name: 'Article',
                meta: {title: '文章', keepAlive: true},
                component: () => import('@/components/Article/showArticle')
            },
            {
                path: '/about',
                name: 'About',
                meta: {title: '关于', keepAlive: true},
                component: () => import('@/views/indexViews/About.vue')
            }, //按需求导入（加载快）
            {
                path: '/home',
                name: 'Home',
                meta: {title: '主页', keepAlive: true},
                component: () => import('@/views/indexViews/Home.vue')
            },
            {
                path: '/timeline',
                name: 'Timeline',
                meta: {title: '时间线', keepAlive: true},
                component: () => import('@/views/indexViews/Timeline')
            },
            {
                path: '/test',
                name: 'Test',
                meta: {title: '测试', keepAlive: true},
                component: () => import('@/views/indexViews/Test')
            },
            {
                path: '/lemming',
                name: 'Lemming',
                meta: {title: 'Lemming', keepAlive: true},
                component: () => import('@/views/indexViews/Lemming')
            },
            {
                path: '/usermsgs',
                name: 'msgs',
                meta: {title: '留言', keepAlive: true},
                component: () => import('@/components/Msgs/Msgs')
            },
        ]
    },
    //默认重定向路径
    // 登录
    {
        path: '/loginon',
        component: Loginon,
        redirect: '/login',
        children: [ //子路径
            {
                path: '/login',
                name: 'Login',
                meta: {title: '登录'},
                component: () => import('@/components/Loginon/Login')
            },
            {
                path: '/logon',
                name: 'Logon',
                meta: {title: '注册'},
                component: () => import('@/components/Loginon/Logon')
            }
        ]
    },
    // 控制
    // {path: '/lemming_admin', redirect: '/lemming_admin/data_info'},
    {
        path: '/lemming_admin',
        name: 'Center',
        component: LCCenter,
        redirect: '/lemming_admin/data_info',
        // 进入前执行
        beforeEnter: (to, from, next) => {
            request({
                url: '/admini_match',
                method: 'post',
            }).then(res => {
                if (res.data.code === 200) {
                    if (cookie.get('_Lemming') === res.data.uuid) {
                        next()
                    } else {
                        next('/login')
                    }
                } else {
                    next('/login')
                }
            }).catch(err => {
                console.log(err)
            })
        },
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
                meta: {title: '用户管理'}, // 由于控制标签名称
                component: () => import('@/components/adminControls/users_admin.vue')
            },
            {
                path: '/lemming_admin/postInfo_admin',
                meta: {title: 'ip信息'},
                component: () => import('@/components/adminControls/ip_admin.vue')
            }
        ]
    },
    // 404 页面
    {path: '/*', meta: {title: '404'}, component: () => import('@/components/404/404')},
]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
})

// 全局导航守卫 前置钩子 跳转前执行的
router.beforeEach((to, from, next) => {
    // to 是跳转后的route对象
    document.title = '☁' + to.meta.title // 控制全局标签名称
    next() // 必带！！！跳转的
    // 判断是否登录再跳转
    console.log('测试')
    if (localStorage.getItem('keepLogin')) {
        console.log('登录里有值')
        // 如果有local就全局更新local
        store.commit('keepLoginUpdata')
    } else {
        console.log('登陆里没有值')
    }
    // next('/login')

})

// 将router对象传入到vue实例
export default router
