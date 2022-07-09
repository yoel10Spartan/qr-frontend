import { 
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "../../const/types";

const initState = {
    user: {},
}

export const authReducer = ( state = initState, action ) => {
    const { type, payload } = action;

    switch ( type ) {

        case AUTH_LOGIN: 
            return {
                user: { ...payload },
            }

        case AUTH_LOGOUT:
            return {
                user: {}
            }

        default:
            return state;
    }
}