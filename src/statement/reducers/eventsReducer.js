import { 
    SUCCESS_CREATE_EVENT,
    RESET_CREATE_EVENT,
    GET_ALL_EVENT,
    GET_EVENT_ASSIGNED_OPERATOR,
    GET_EVENT_STATISTICS,
} from "../../const/types";

const initState = {
    success_create_event: false,
    events: [],
    event: {},
    statistics: {},
}

export const eventsReducer = ( state = initState, action ) => {
    const { type, payload } = action;

    switch ( type ) {

        case SUCCESS_CREATE_EVENT: 
            return {
                ...state,
                success_create_event: true,
            }

        case RESET_CREATE_EVENT: 
            return {
                ...state,
                success_create_event: false,
            }

        case GET_ALL_EVENT:
            return {
                ...state,
                events: payload
            }

        case GET_EVENT_ASSIGNED_OPERATOR:
            return {
                ...state,
                event: payload
            }

        case GET_EVENT_STATISTICS:
            return {
                ...state,
                statistics: payload
            }

        default:
            return state;
    }
}