import { TOGGLE_AUTH_STATE } from "../actionTypes";

export const toggleAuthState = (value) => {
    return {
        type : TOGGLE_AUTH_STATE,
        value : value
    }
}