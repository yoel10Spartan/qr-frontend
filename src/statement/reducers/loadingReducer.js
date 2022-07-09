import { LOADING_START, LOADING_FINISH } from '../../const/types';

const initState = {
    load: {
        loadAddAttendees: false,
        loadCreateEvent: false,
        loadScannerQR: false,
    }
}

const changeLoad = (objectLoad, matchValue, boolValue) => {
    let copyObjectLoad = objectLoad;
    for(let [key, value] of Object.entries(copyObjectLoad)){
        if(key === matchValue){copyObjectLoad[key] = boolValue}
    }
    return copyObjectLoad;
}

export const loadingReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case LOADING_START:
            return {
                ...state,
                load: changeLoad(state.load, action.payload, true)
            }

        case LOADING_FINISH:
            return {
                ...state,
                load: changeLoad(state.load, action.payload, false)
            }

        default:
            return state;
    }
}