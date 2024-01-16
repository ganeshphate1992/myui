import { Cookies } from "@/Common/cookies";

export const init = {
    isLoggedIn: Cookies.hasActiveSession(),
    isShowLoader: false
}