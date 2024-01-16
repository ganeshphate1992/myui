import axios from "axios";
import { Cookies } from "./cookies";
//const BASE_URL = 'http://localhost:2020/'; //process.env.BASE_URL  
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
//Getting undefine while get URL from .env file
export class Api {
    static fnSendGetReq(url) {
        return axios.get(BASE_URL + url, {
            headers: {
                Authorization: Cookies.getItem("token")
            }
        })
    }
    static fnSendPostReq(url, data) {
        debugger;
        return axios.post(BASE_URL + url, data)
    }
    static fnSendPutReq(url, data) {
        return axios.put(BASE_URL + url, data, {
            headers: {
                Authorization: Cookies.getItem("token")
            }
        })
    }
    static fnSendDeleteReq(url) {
        return axios.delete(BASE_URL + url, {
            headers: {
                Authorization: Cookies.getItem("token")
            }
        })
    }
}
