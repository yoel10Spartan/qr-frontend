import { 
    GET_CURRENT_OPERATOR,
    GET_OPERATORS_FOR_EVENT
} from "../../const/types";

const initState = {
    operators: [],
    currentOperator: {}
}

export const operatorsReducer = ( state = initState, action ) => {
    const { type, payload } = action;

    switch ( type ) {

        case GET_OPERATORS_FOR_EVENT: 
            return {
                ...state,
                operators: payload,
            }

        case GET_CURRENT_OPERATOR:
            return {
                ...state,
                currentOperator: payload,
            }

        default:
            return state;
    }
}