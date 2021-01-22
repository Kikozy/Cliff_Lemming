import axios from 'axios'


export function request(config){
    const axios_request = axios.create({
        //baseURL:'http://127.0.0.1:5000/api/cliff'
        // withCredentials:true, // 是否携带cookies
        baseURL:'/api/api/cliff',
        timeout:5000 // 设置统一超时时间
    })
    return axios_request(config)
}