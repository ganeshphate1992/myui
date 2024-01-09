import axios from "axios";
const BASE_URL = 'http://localhost:2020/'; //process.env.BASE_URL  
//Getting undefine while get URL from .env file
export class Api {
    static fnSendGetReq(url) {
        return axios.get(BASE_URL + url)
    }
    static fnSendPostReq(url, data) {
        debugger;
        return axios.post(BASE_URL + url, data)
    }
    static fnSendPutReq(url, data) {
        return axios.put(BASE_URL + url, data)
    }
    static fnSendDeleteReq(url) {
        return axios.delete(BASE_URL + url)
    }
}
