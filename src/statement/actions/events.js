import axios from "axios";
import { 
    SUCCESS_CREATE_EVENT,
    RESET_CREATE_EVENT,
    GET_ALL_EVENT,
    GET_EVENT_ASSIGNED_OPERATOR,
    GET_EVENT_STATISTICS
} from "../../const/types";
import { errorAlert } from "../../utils/alerts/error";
import { successAlert } from "../../utils/alerts/success";
import { finishLoading, startLoading } from "./loading";

export const successCreateEvent = () => ({
    type: SUCCESS_CREATE_EVENT
});

export const resetCreateEvent = () => ({
    type: RESET_CREATE_EVENT
});

export const eventCreate = (data) => {
    return async (dispatch) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const _data = JSON.stringify(data); 

        dispatch( startLoading('loadCreateEvent') );

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/events/`, 
                _data,
                config
            );
            
            dispatch( successCreateEvent() );

            // dispatch( successAddAttendees() );
            dispatch( finishLoading('loadCreateEvent') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            dispatch( finishLoading('loadCreateEvent') );
            // errorAlert(error.response.data.detail);
        }
    }
}

export const getAllEvents = () => {
    return async (dispatch) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        // dispatch( startLoading('loadAddAttendees') );

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1.0/events/`, 
                config
            );

            dispatch({
                type: GET_ALL_EVENT,
                payload: res.data
            });

            // dispatch( successAddAttendees() );
            // dispatch( finishLoading('loadAddAttendees') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            // dispatch( finishLoading('loadAddAttendees') );
            // errorAlert(error.response.data.detail);
        }
    }
}

export const getAssignedEventOperator = (idOperator) => {
    return async (dispatch) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        // dispatch( startLoading('loadAddAttendees') );

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1.0/operators/${idOperator}/get_event/`, 
                config
            );

            dispatch({
                type: GET_EVENT_ASSIGNED_OPERATOR,
                payload: res.data
            });

            // dispatch( successAddAttendees() );
            // dispatch( finishLoading('loadAddAttendees') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            // dispatch( finishLoading('loadAddAttendees') );
            // errorAlert(error.response.data.detail);
        }
    }
}

export const getStatistics = (idEvent) => {
    return async (dispatch) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        // dispatch( startLoading('loadAddAttendees') );

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1.0/events/${idEvent}/get_statistics/`, 
                config
            );

            dispatch({
                type: GET_EVENT_STATISTICS,
                payload: res.data
            });

            // dispatch( successAddAttendees() );
            // dispatch( finishLoading('loadAddAttendees') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            // dispatch( finishLoading('loadAddAttendees') );
            // errorAlert(error.response.data.detail);
        }
    }
}