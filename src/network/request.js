import axios from 'axios'

export function request(config) {
    let instance = axios.create({
        baseURL: "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5",
        timeout: 5000
    })


    return instance(config)
}