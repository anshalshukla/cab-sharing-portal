import { TOGGLE_AUTH_STATE } from "../actions/actionTypes"

const initialState = {
    isLoggedIn : !!localStorage.getItem("token")
}

const reducer = (state = initialState, action) =>  {
    switch(action.type) {
        case TOGGLE_AUTH_STATE : 
            return {
                ...state,
                isLoggedIn : action.value
            }
        default : return {...state}
    }
}

export default reducer