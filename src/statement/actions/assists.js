import axios from "axios";
// import { 
    
// } from "../../const/types";
import { errorAlert } from "../../utils/alerts/error";
import { successAlert } from "../../utils/alerts/success";
import { finishLoading, startLoading } from "./loading";

export const QRInputsOutputs = (action, idAttendee, data) => {
    return async (dispatch) => {

        

        if(action === 'entry'){
            dispatch( markEntries(idAttendee, data) );
        }

        if(action === 'output'){
            dispatch( markExits(idAttendee, data) );
        }

        
    }
}

export const markEntries = (idAttendee, data) => {
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

        dispatch( startLoading('loadScannerQR') );

        try {
            const res = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/v1.0/attendees/${idAttendee}/entry_mark/`, 
                _data,
                config
            );

            if(res.data.ok){
                successAlert(res.data.detail);
            }
            
            // dispatch( successAddAttendees() );
            dispatch( finishLoading('loadScannerQR') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            dispatch( finishLoading('loadScannerQR') );
            errorAlert(error.response.data.detail);
        }
    }
}

export const markExits = (idAttendee, data) => {
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

        dispatch( startLoading('loadScannerQR') );

        try {
            const res = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/v1.0/attendees/${idAttendee}/exit_mark/`, 
                _data,
                config
            );

            if(res.data.ok){
                successAlert(res.data.detail);
            }
            
            // dispatch( successAddAttendees() );
            dispatch( finishLoading('loadScannerQR') );
            // successAlert('Asistentes agregados con exito');
        } catch (error) {
            dispatch( finishLoading('loadScannerQR') );
            errorAlert(error.response.data.detail);
        }
    }
}