import Vue from 'vue'
import Vuex from 'vuex'

// 安装
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: '',
        mail: '',
        iconHead: '',
    },
    // 计算函数
    getters: {},
    // 修改方法
    mutations: {
        // 接收登录参数并修改
        saveLogin(state,login_infos){
            state.username = login_infos.username
            state.iconHead = login_infos.qqHead
            state.mail = login_infos.mail
            let localStorage_info = {
                'username':login_infos.username,
                'qqHead':login_infos.qqHead,
                'mail':login_infos.mail
            }
            // 存进本地存储
            localStorage.setItem('keepLogin',JSON.stringify(localStorage_info));
        },
        keepLoginUpdata(state){
            let new_loginfo = JSON.parse(localStorage.getItem('keepLogin'))
            state.username = new_loginfo.username
            state.iconHead = new_loginfo.qqHead
            state.mail = new_loginfo.mail
        },
        logOut(state){
            state.username = ''
            state.mail = ''
            state.iconHead = ''
        }
    },
    actions: {},
    modules: {}
})

//导出store
export default store