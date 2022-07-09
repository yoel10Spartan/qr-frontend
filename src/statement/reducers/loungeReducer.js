import { 
    GET_LOUNGES,
    ADD_NEW_LOUNGE
} from "../../const/types";

const initState = {
    lounges: []
}

export const loungesReducer = ( state = initState, action ) => {
    const { type, payload } = action;

    switch ( type ) {

        case GET_LOUNGES: 
            return {
                ...state,
                lounges: payload,
            }

        case ADD_NEW_LOUNGE:
            return {
                ...state,
                lounges: [ ...state.lounges, payload ]
            }

        default:
            return state;
    }
}