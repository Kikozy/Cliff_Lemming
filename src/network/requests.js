import axios from 'axios'

export function request(config){
    const axios_request = axios.create({
        //baseURL:'http://127.0.0.1:5000/api/cliff'
        baseURL:'/api/api/cliff',
        timeout:5000
    })
    return axios_request(config)
}