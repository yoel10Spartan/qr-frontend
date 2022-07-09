import { 
    SUCCESS_ADD_ATTENDEES,
    RESET_ADD_ATTENDEES,
    GET_GROUP_ATTENDEES,
    GET_ATTENDEES_SIMPLE,
    GET_ATTENDEES_WITH_LOUNGE,
    GET_ATTENDEES
} from "../../const/types";

const initState = {
    success_add: false,
    group_attendees: [],
    attendees: [],
    attendeesWithLounge: [],
    attendeesAll: [],
}

export const attendeeReducer = ( state = initState, action ) => {
    const { type, payload } = action;

    switch ( type ) {

        case SUCCESS_ADD_ATTENDEES: 
            return {
                ...state,
                success_add: true,
            }

        case RESET_ADD_ATTENDEES:
            return {
                ...state,
                success_add: false
            }

        case GET_GROUP_ATTENDEES:
            return {
                ...state,
                group_attendees: payload
            }

        case GET_ATTENDEES_SIMPLE:
            return {
                ...state,
                attendees: payload
            }

        case GET_ATTENDEES:
            return {
                ...state,
                attendeesAll: payload
            }

        case GET_ATTENDEES_WITH_LOUNGE:
            return {
                ...state,
                attendeesWithLounge: payload
            }

        default:
            return state;
    }
}