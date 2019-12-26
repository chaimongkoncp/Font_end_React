
const initialState = {
    user_id: '',
    username: '',
    isLoggin: false
    
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case "USER_LOGIN":
            return {
                user_id: action.user_id,
                username: action.username,
                isLoggin: true
            }
        case "USER_LOGOUT":
            return {
                user_id: '',
                username: '',
                isLoggin: false
            }
        default:
            return state
    }
}
export default rootReducer;