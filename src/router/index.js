// 路由配置
// 导入store
import store from "@/store";
import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '../views/index.vue'
// import Home from '../views/indexViews/Home.vue'
import Loginon from '../views/Loginon/Loginon.vue'
// import About from '../views/indexViews/About.vue'
// import Login from "@/components/Loginon/Login";
// import Logon from "@/components/Loginon/Logon";
import LCCenter from '@/views/LemControlCenter/LCCenter.vue'


// router报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
// 路由
const routes = [
    {path: '/TEST1', component: () => import('@/components/TEST/TEST')},
    //重定向，当访问/路径时，自动跳转到/home
    // 主页
    {path: '/', redirect: '/home'},
    {
        path: '/',
        component: Head, //非按需求导入（加载慢）
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
        ]
    },
    //默认重定向路径
    // 登录
    {path: '/loginon', redirect: '/login'}, //默认跳转路径
    {
        path: '/loginon',
        component: Loginon,
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
    {path: '/lemming_admin', redirect: '/lemming_admin/data_info'},
    {
        path: '/lemming_admin',
        name: 'Center',
        component: LCCenter,
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
                path: '/lemming_admin/game_admin',
                meta: {title: '娱乐管理'}, // 由于控制标签名称
                component: () => import('@/components/adminControls/game_admin.vue')
            },
            {
                path: '/lemming_admin/movie_admin',
                meta: {title: '影视管理'},
                component: () => import('@/components/adminControls/movie_admin.vue')
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
