import axios from "axios";
import { 
    GET_CURRENT_OPERATOR,
    GET_OPERATORS_FOR_EVENT
} from "../../const/types";
import { errorAlert } from "../../utils/alerts/error";
import { successAlert } from "../../utils/alerts/success";
import { finishLoading, startLoading } from "./loading";

export const operatorAdd = (data) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/operators/`, 
                _data,
                config
            );
            // dispatch( successAddAttendees() );
            // dispatch( finishLoading('loadAddAttendees') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            // dispatch( finishLoading('loadAddAttendees') );
            // errorAlert(error.response.data.detail);
        }
    }
}

export const getOperators = (idEvent) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/events/${idEvent}/get_operator_for_event/`, 
                config
            );

            dispatch({
                type: GET_OPERATORS_FOR_EVENT,
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

export const getOperator = (idUser) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/operators/${idUser}/get_data/`, 
                config
            );

            dispatch({
                type: GET_CURRENT_OPERATOR,
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