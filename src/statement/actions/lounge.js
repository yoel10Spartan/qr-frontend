import axios from "axios";
import { 
    ADD_NEW_LOUNGE,
    GET_LOUNGES
} from "../../const/types";
import { errorAlert } from "../../utils/alerts/error";
import { successAlert } from "../../utils/alerts/success";
import { finishLoading, startLoading } from "./loading";

// export const successAddAttendees = () => ({
//     type: SUCCESS_ADD_ATTENDEES
// });

// export const resetAddAttendees = () => ({
//     type: RESET_ADD_ATTENDEES
// });

export const loungeAdd = (data) => {
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

        // dispatch( startLoading('loadAddAttendees') );

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/lounge/`, 
                _data,
                config
            );

            dispatch({
                type: ADD_NEW_LOUNGE,
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

export const getLounges = (idGroup) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/lounge/${idGroup}/get_for_group/`, 
                config
            );

            dispatch({
                type: GET_LOUNGES,
                payload: res.data,
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