// iprequests axios 封装

import axios from 'axios'

export function iprequests(config){
    const axios_ip = axios.create({
        //baseURL:'http://pv.sohu.com/cityjson?ie=utf-8&'
        baseURL:'/ip',
        timeout:5000 // 设置统一超时时间
    })
    return axios_ip(config)
}