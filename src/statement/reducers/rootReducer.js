import { combineReducers } from "redux";
import { attendeeReducer } from "./attendeeReducer";
import { authReducer } from "./authReducer";
import { eventsReducer } from "./eventsReducer";
import { loadingReducer } from "./loadingReducer";
import { loungesReducer } from "./loungeReducer";
import { operatorsReducer } from "./operatorsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    attendee: attendeeReducer,
    lounge: loungesReducer,
    events: eventsReducer,
    operators: operatorsReducer,
});