import axios from "axios";
import { 
    RESET_ADD_ATTENDEES, 
    SUCCESS_ADD_ATTENDEES,
    GET_GROUP_ATTENDEES,
    GET_ATTENDEES_SIMPLE,
    GET_ATTENDEES_WITH_LOUNGE,
    GET_ATTENDEES
} from "../../const/types";
import { errorAlert } from "../../utils/alerts/error";
import { successAlert } from "../../utils/alerts/success";
import { finishLoading, startLoading } from "./loading";

export const successAddAttendees = () => ({
    type: SUCCESS_ADD_ATTENDEES
});

export const resetAddAttendees = () => ({
    type: RESET_ADD_ATTENDEES
});

export const attendeeRegister = ({ name, file }) => {
    return async (dispatch) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const data = new FormData();
        data.append('name', name)
        data.append('file', file)

        dispatch( startLoading('loadAddAttendees') );

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/attendees_group/`, 
                data,
                config
            );

            dispatch( successAddAttendees() );
            dispatch( finishLoading('loadAddAttendees') );
            successAlert('Asistentes agregados con exito');
        } catch (error) {
            dispatch( finishLoading('loadAddAttendees') );
            errorAlert(error.response.data.detail);
        }
    }
}

export const getGroupsAttendees = () => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/attendees_group/`, 
                config
            );

            dispatch({
                type: GET_GROUP_ATTENDEES,
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

export const getAttendeesSimple = (idGroup) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/attendees/${idGroup}/get_attendees_for_group/`, 
                config
            );

            dispatch({
                type: GET_ATTENDEES_SIMPLE,
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

export const getAttendeesWithLounge = (idGroup) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/attendees_group/${idGroup}/get_attends_with_lounge/`, 
                config
            );

            console.log(res);

            dispatch({
                type: GET_ATTENDEES_WITH_LOUNGE,
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

export const attendeeAddLounge = (data) => {
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

        const _data = JSON.stringify(data);

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/attendees/add_lounge/`, 
                _data,
                config
            );

            console.log(res);

            // dispatch( successAddAttendees() );
            // dispatch( finishLoading('loadAddAttendees') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            // dispatch( finishLoading('loadAddAttendees') );
            // errorAlert(error.response.data.detail);
        }
    }
}

export const getAllAttendees = (idEvent) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/events/${idEvent}/get_attendees/`, 
                config
            );

            dispatch({
                type: GET_ATTENDEES,
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