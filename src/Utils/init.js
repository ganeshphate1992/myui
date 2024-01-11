import { Cookies } from "@/Common/cookies";

export const init = {
    userInfo: {},
    isLoggedIn: Cookies.hasActiveSession(),
    isShowLoader: false
}